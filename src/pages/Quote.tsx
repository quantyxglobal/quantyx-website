import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { FileText, Upload, AlertCircle, CheckCircle, Mail, Phone, Building } from "lucide-react";
import { submitQuoteForm, type QuoteFormData } from "@/lib/api";

interface ServiceConfig {
  id: string;
  name: string;
}

const Quote = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    firmName: "",
    country: "",
    caseDetails: "",
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string>("");

  const services: ServiceConfig[] = [
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
    
    // Validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.country) {
      setError("Please fill in all required fields");
      return;
    }

    if (selectedServices.length === 0) {
      setError("Please select at least one service");
      return;
    }

    if (uploadedFiles.length === 0) {
      setError("Please upload at least one document");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const quoteData: QuoteFormData = {
        ...formData,
        services: selectedServices,
        files: uploadedFiles
      };

      await submitQuoteForm(quoteData);
      setSubmitSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          firmName: "",
          country: "",
          caseDetails: "",
        });
        setSelectedServices([]);
        setUploadedFiles([]);
        setSubmitSuccess(false);
      }, 3000);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit quote request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-6">
            <Card className="max-w-2xl mx-auto shadow-xl">
              <CardContent className="pt-12 pb-12 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Request Submitted Successfully!</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Thank you for your quote request. Our team will review your documents and send you a detailed quotation via email within 24-48 hours.
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Request a <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Custom Quote</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Share your project details and documents with us. Our team will review and send you a personalized quotation via email.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Client Information */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="w-5 h-5 text-primary" />
                    Client Information
                  </CardTitle>
                  <CardDescription>
                    Tell us about yourself and your firm
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@lawfirm.com"
                        className="pl-10"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="pl-10"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="firmName">Law Firm / Organization</Label>
                    <Input
                      id="firmName"
                      placeholder="ABC Law Firm"
                      value={formData.firmName}
                      onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
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
                    <Label htmlFor="caseDetails">Case Details (Optional)</Label>
                    <Textarea
                      id="caseDetails"
                      placeholder="Brief description of your case and specific requirements..."
                      rows={4}
                      value={formData.caseDetails}
                      onChange={(e) => setFormData({ ...formData, caseDetails: e.target.value })}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Services & Documents */}
              <div className="space-y-8">
                {/* Services Selection */}
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      Services Needed *
                    </CardTitle>
                    <CardDescription>
                      Select the services you require
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto pr-2">
                      {services.map((service) => (
                        <div key={service.id} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50">
                          <Checkbox
                            id={service.id}
                            checked={selectedServices.includes(service.id)}
                            onCheckedChange={(checked) => handleServiceChange(service.id, checked as boolean)}
                          />
                          <Label htmlFor={service.id} className="font-medium cursor-pointer flex-1">
                            {service.name}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Document Upload */}
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Upload className="w-5 h-5 text-primary" />
                      Upload Documents *
                    </CardTitle>
                    <CardDescription>
                      Upload medical records or case documents
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div
                      className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer"
                      onClick={() => document.getElementById('file-upload')?.click()}
                    >
                      <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground mb-2">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Any file type accepted (No size limit)
                      </p>
                      <input
                        id="file-upload"
                        type="file"
                        multiple
                        className="hidden"
                        onChange={handleFileUpload}
                      />
                    </div>

                    {uploadedFiles.length > 0 && (
                      <div className="space-y-2">
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
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Error Display */}
            {error && (
              <div className="mt-6 flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg max-w-4xl mx-auto">
                <AlertCircle className="w-5 h-5 text-red-500" />
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="mt-8 max-w-4xl mx-auto">
              <Button
                type="submit"
                className="w-full h-12 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Submitting Request...
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5 mr-2" />
                    Request Quote via Email
                  </>
                )}
              </Button>
              <p className="text-sm text-muted-foreground text-center mt-4">
                Our team will review your documents and send you a detailed quotation within 24-48 hours
              </p>
            </div>
          </form>

          {/* Additional Information Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-16">
            {/* Project Timeline */}
            <Card className="shadow-xl border-l-4 border-l-accent/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <FileText className="w-6 h-6 text-accent" />
                  Project Timeline
                </CardTitle>
                <CardDescription>
                  Typical project workflow and milestones
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-foreground mb-1">Project Initiation</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">Document review, requirements analysis, and project setup</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-foreground mb-1">Expert Analysis</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">Medical professionals review and analyze your case materials</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-foreground mb-1">Quality Review</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">Comprehensive quality assurance and accuracy verification</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 rounded-full bg-accent"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-foreground mb-1">Delivery</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">Final reports delivered in your preferred format</p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>

            {/* Quick FAQ */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-primary" />
                  Quick FAQ
                </CardTitle>
                <CardDescription>
                  Common questions about our services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  <div className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                    <h4 className="font-semibold text-sm mb-2 text-foreground">How long does it take to receive a quote?</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">Our team typically reviews your documents and sends a detailed quotation within 24-48 hours of submission.</p>
                  </div>
                  <div className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                    <h4 className="font-semibold text-sm mb-2 text-foreground">What file formats do you accept?</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">We accept all file formats and sizes. Upload any documents, images, videos, or other files relevant to your case.</p>
                  </div>
                  <div className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                    <h4 className="font-semibold text-sm mb-2 text-foreground">Is my data secure?</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">Yes, all uploads are HIPAA compliant with enterprise-grade security. We maintain strict confidentiality of all client information.</p>
                  </div>
                  <div className="border-b border-border pb-4 last:border-b-0 last:pb-0">
                    <h4 className="font-semibold text-sm mb-2 text-foreground">Can I request rush services?</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">Yes, we offer expedited services for urgent cases. Please mention your timeline requirements in the case details section.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Quote;
