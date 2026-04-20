import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin, CheckCircle, AlertCircle, Upload } from "lucide-react";
import { useState } from "react";
import { submitContactForm, type ContactFormData } from "@/lib/api";
import { SEO } from "@/components/SEO";

const Contact = () => {
  const [formData, setFormData] = useState({
    caseName: "",
    contactPersonName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    message: ""
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string>("");

  const services = [
    { id: "medical-chronology", name: "Medical Chronology" },
    { id: "narrative-summary", name: "Narrative Summary" },
    { id: "demand-letter", name: "Demand Letter" },
    { id: "life-care-plan", name: "Life Care Plan" },
    { id: "medical-opinion", name: "Medical Opinion" },
    { id: "medical-expenses", name: "Medical Expenses Summary" },
    { id: "deposition-transcript", name: "Deposition Transcript" },
    { id: "med-a-word", name: "Med-A-Word" },
    { id: "pressure-ulcer-matrix", name: "Pressure Ulcer Matrix" },
    { id: "pain-suffering-chart", name: "Pain and Suffering and Pain Medication Chart" },
    { id: "medical-illustration", name: "Medical Illustration" },
    { id: "graphical-timeline", name: "Graphical Timeline Summary" },
    { id: "comparison-chart", name: "Comparison Chart" },
    { id: "case-facts-opinion", name: "Case Facts & Opinion" },
    { id: "hyperlinks", name: "Hyperlinks" },
    { id: "bookmarks", name: "Bookmarks" },
    { id: "mass-tort-review", name: "Mass-Tort Case Review" },
  ];

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    if (checked) {
      setSelectedServices([...selectedServices, serviceId]);
    } else {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
    }
    setError("");
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length > 0) {
      setUploadedFiles([...uploadedFiles, ...files]);
      setError("");
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation - company, country, and files are required, message is optional
    if (!formData.caseName || !formData.contactPersonName || !formData.email || !formData.phone || !formData.company || !formData.country) {
      setError("Please fill in all required fields");
      return;
    }

    if (uploadedFiles.length === 0) {
      setError("Please upload at least one document");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const contactData: ContactFormData = {
        ...formData,
        services: selectedServices,
        files: uploadedFiles
      };

      await submitContactForm(contactData);
      setSubmitSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          caseName: "",
          contactPersonName: "",
          email: "",
          phone: "",
          company: "",
          country: "",
          message: ""
        });
        setSelectedServices([]);
        setUploadedFiles([]);
        setSubmitSuccess(false);
      }, 3000);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6">
            <Card className="max-w-2xl mx-auto shadow-xl">
              <CardContent className="pt-12 pb-12 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Message Sent Successfully!</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Thank you for contacting us. Our team will get back to you within 24 hours.
                </p>
                <p className="text-sm text-muted-foreground">
                  You will receive a confirmation email at <strong>{formData.email}</strong>
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SEO
        title="Contact Quantyx Global | Get Expert Medico-Legal Support"
        description="Contact Quantyx Global for professional medico-legal services. Upload your case files, request a quote, or speak with our expert team. Serving law firms worldwide with 24-48 hour turnaround."
        keywords="contact quantyx global, medico-legal consultation, case upload, legal services quote, medical chronology request"
        canonical="https://www.quantyxg.com/case-upload"
        ogTitle="Contact Quantyx Global - Expert Medico-Legal Services"
        ogDescription="Get in touch for professional medico-legal support. Fast turnaround, expert analysis, competitive pricing."
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl animate-pulse" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                  Upload Your Case
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Ready to discuss your medico-legal needs? Get in touch with our expert team today.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="border-primary/20 bg-card/80 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Case Upload</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="caseName">Case Name *</Label>
                      <Input
                        id="caseName"
                        placeholder="e.g. Smith v. General Hospital"
                        value={formData.caseName}
                        onChange={(e) => setFormData({ ...formData, caseName: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contactPersonName">Contact Person Name *</Label>
                      <Input
                        id="contactPersonName"
                        placeholder="Your full name"
                        value={formData.contactPersonName}
                        onChange={(e) => setFormData({ ...formData, contactPersonName: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@lawfirm.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="(555) 123-4567" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Law Firm/Organization *</Label>
                      <Input 
                        id="company" 
                        placeholder="Smith & Associates" 
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <select
                        id="country"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select a country</option>
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Australia">Australia</option>
                        <option value="India">India</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Services Needed (Select all that apply)</Label>
                      <div className="grid grid-cols-1 gap-3 max-h-64 overflow-y-auto border rounded-lg p-4">
                        {services.map((service) => (
                          <div key={service.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={service.id}
                              checked={selectedServices.includes(service.id)}
                              onCheckedChange={(checked) => handleServiceChange(service.id, checked as boolean)}
                            />
                            <Label htmlFor={service.id} className="font-normal cursor-pointer flex-1">
                              {service.name}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Client Specific Instructions</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Please describe your case and specific needs..."
                        className="min-h-[120px]"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    {/* File Upload Section */}
                    <div className="space-y-2">
                      <Label>Upload Documents *</Label>
                      <div
                        className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer"
                        onClick={() => document.getElementById('contact-file-upload')?.click()}
                      >
                        <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground mb-2">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Any file type accepted (No size limit)
                        </p>
                        <input
                          id="contact-file-upload"
                          type="file"
                          multiple
                          className="hidden"
                          onChange={handleFileUpload}
                          required
                        />
                      </div>

                      {uploadedFiles.length > 0 && (
                        <div className="space-y-2 mt-4">
                          <p className="text-sm font-medium">Uploaded Files:</p>
                          {uploadedFiles.map((file, index) => (
                            <div key={index} className="flex items-center justify-between p-2 bg-muted/50 rounded">
                              <span className="text-sm truncate flex-1">{file.name}</span>
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                onClick={() => removeFile(index)}
                                className="ml-2"
                              >
                                Remove
                              </Button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Error Display */}
                    {error && (
                      <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <AlertCircle className="w-5 h-5 text-red-500" />
                        <p className="text-sm text-red-700">{error}</p>
                      </div>
                    )}

                    {/* Confidentiality Notice */}
                    <p className="text-xs text-muted-foreground leading-relaxed border border-border rounded-lg p-3 bg-muted/30">
                      All case information is treated as strictly confidential and protected by our HIPAA-compliant privacy policies and NDA.
                    </p>
                    
                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending Message...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    Our team of medico-legal experts is ready to assist you with your case. 
                    Contact us today to discuss how we can help you achieve better outcomes.
                  </p>
                </div>

                <div className="grid gap-6">
                  <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white">
                          <Phone className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Phone</h3>
                          <p className="text-muted-foreground">Call us for immediate assistance</p>
                          <div className="mt-2 space-y-1">
                            <p className="text-primary font-semibold">+91 70751 84488 <span className="text-xs text-muted-foreground font-normal">(India)</span></p>
                            <p className="text-primary font-semibold">+61 452 257 129 <span className="text-xs text-muted-foreground font-normal">(Australia)</span></p>
                            <p className="text-primary font-semibold">+1 (512) 931-4563 <span className="text-xs text-muted-foreground font-normal">(USA)</span></p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-amber-500 flex items-center justify-center text-white">
                          <Mail className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Email</h3>
                          <p className="text-muted-foreground">Send us your questions anytime</p>
                          <p className="text-primary font-semibold mt-2">support@quantxg.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white">
                          <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Office</h3>
                          <p className="text-muted-foreground">Visit us at our headquarters</p>
                          <p className="text-primary font-semibold mt-2">
                            #204, B Block, Old Grand World Road<br />
                            Smart City Tirupati<br />
                            Andhra Pradesh, India
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;