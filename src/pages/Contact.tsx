import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle, AlertCircle, Upload } from "lucide-react";
import { useState } from "react";
import { submitContactForm, type ContactFormData } from "@/lib/api";
import { SEO } from "@/components/SEO";

// State/Province options per country
const statesByCountry: Record<string, string[]> = {
  "United States": [
    "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
    "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
    "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
    "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
    "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
    "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
    "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
    "Wisconsin","Wyoming"
  ],
  "Canada": [
    "Alberta","British Columbia","Manitoba","New Brunswick",
    "Newfoundland and Labrador","Northwest Territories","Nova Scotia","Nunavut",
    "Ontario","Prince Edward Island","Quebec","Saskatchewan","Yukon"
  ],
  "Australia": [
    "Australian Capital Territory","New South Wales","Northern Territory",
    "Queensland","South Australia","Tasmania","Victoria","Western Australia"
  ],
  "United Kingdom": [
    "England","Northern Ireland","Scotland","Wales"
  ],
  "India": [
    "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa",
    "Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala",
    "Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland",
    "Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura",
    "Uttar Pradesh","Uttarakhand","West Bengal"
  ],
  "Other": []
};

const selectClass = "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

const Contact = () => {
  const [formData, setFormData] = useState({
    caseName: "",
    contactPersonName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    state: "",
    address: "",
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
    setSelectedServices(prev =>
      checked ? [...prev, serviceId] : prev.filter(id => id !== serviceId)
    );
    setError("");
  };

  const handleCountryChange = (country: string) => {
    setFormData(prev => ({ ...prev, country, state: "" }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length > 0) {
      setUploadedFiles(prev => [...prev, ...files]);
      setError("");
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check required fields
    if (!formData.caseName || !formData.contactPersonName || !formData.email || !formData.company || !formData.country) {
      setError("Please fill in all required fields");
      return;
    }
    
    // Check state if country requires it
    const availableStates = statesByCountry[formData.country] || [];
    if (availableStates.length > 0 && !formData.state) {
      setError("Please select a state/province");
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
        caseName: formData.caseName,
        contactPersonName: formData.contactPersonName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        country: formData.country,
        services: selectedServices,
        message: formData.message,
        files: uploadedFiles
      };

      await submitContactForm(contactData);
      setSubmitSuccess(true);

      setTimeout(() => {
        setFormData({ caseName: "", contactPersonName: "", email: "", phone: "", company: "", country: "", state: "", address: "", message: "" });
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

  const availableStates = statesByCountry[formData.country] || [];

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
                <h2 className="text-3xl font-bold mb-4 text-foreground">Case Submitted Successfully!</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Thank you for submitting your case. Our team will review it and get back to you within 24 hours.
                </p>
                <p className="text-sm text-muted-foreground">
                  A confirmation will be sent to <strong>{formData.email}</strong>
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
        title="Upload Your Case | Quantyx Global"
        description="Submit your medico-legal case to Quantyx Global. Upload documents, select services, and receive a physician-reviewed report within 3–5 days."
        keywords="case upload, medico-legal services, medical chronology request, quantyx global"
        canonical="https://www.quantyxg.com/case-upload"
        ogTitle="Upload Your Case - Quantyx Global"
        ogDescription="Submit your case files and receive expert medico-legal analysis within 3–5 days."
      />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl animate-pulse" />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                Upload Your Case
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fill in your details, select the services you need, and upload your documents. We'll get back to you within 24 hours.
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-7xl">
            <Card className="border-primary/20 bg-card/80 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Case Upload Form</CardTitle>
                <CardDescription>All fields marked * are required.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* ── Column 1: Case & Contact Details ── */}
                    <div className="space-y-5">
                      <h3 className="font-semibold text-base text-primary border-b border-primary/20 pb-2">Case & Contact Details</h3>

                      <div className="space-y-2">
                        <Label htmlFor="caseName">Case Name *</Label>
                        <Input
                          id="caseName"
                          placeholder="e.g. Smith v. General Hospital"
                          value={formData.caseName}
                          onChange={(e) => setFormData(p => ({ ...p, caseName: e.target.value }))}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contactPersonName">Contact Person Name *</Label>
                        <Input
                          id="contactPersonName"
                          placeholder="Your full name"
                          value={formData.contactPersonName}
                          onChange={(e) => setFormData(p => ({ ...p, contactPersonName: e.target.value }))}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@lawfirm.com"
                          value={formData.email}
                          onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Law Firm / Organisation *</Label>
                        <Input
                          id="company"
                          placeholder="Smith & Associates"
                          value={formData.company}
                          onChange={(e) => setFormData(p => ({ ...p, company: e.target.value }))}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="country">Country *</Label>
                        <select
                          id="country"
                          value={formData.country}
                          onChange={(e) => handleCountryChange(e.target.value)}
                          required
                          className={selectClass}
                        >
                          <option value="">Select a country</option>
                          <option value="United States">United States</option>
                          <option value="Canada">Canada</option>
                          <option value="Australia">Australia</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="India">India</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* State dropdown — only shown when country has states */}
                      {availableStates.length > 0 && (
                        <div className="space-y-2">
                          <Label htmlFor="state">State / Province *</Label>
                          <select
                            id="state"
                            value={formData.state}
                            onChange={(e) => setFormData(p => ({ ...p, state: e.target.value }))}
                            required
                            className={selectClass}
                          >
                            <option value="">Select a state</option>
                            {availableStates.map(s => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </div>
                      )}

                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input
                          id="address"
                          placeholder="Street address, suite, city"
                          value={formData.address}
                          onChange={(e) => setFormData(p => ({ ...p, address: e.target.value }))}
                        />
                      </div>
                    </div>

                    {/* ── Column 2: Services, Instructions & Upload ── */}
                    <div className="space-y-5">
                      <h3 className="font-semibold text-base text-primary border-b border-primary/20 pb-2">Services & Documents</h3>

                      <div className="space-y-2">
                        <Label>Services Needed (select all that apply)</Label>
                        <div className="grid grid-cols-1 gap-2.5 max-h-64 overflow-y-auto border border-border rounded-lg p-4 bg-muted/20">
                          {services.map((service) => (
                            <div key={service.id} className="flex items-center space-x-2">
                              <Checkbox
                                id={service.id}
                                checked={selectedServices.includes(service.id)}
                                onCheckedChange={(checked) => handleServiceChange(service.id, checked as boolean)}
                              />
                              <Label htmlFor={service.id} className="font-normal cursor-pointer flex-1 text-sm">
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
                          placeholder="Describe your case requirements, deadlines, or any specific instructions..."
                          className="min-h-[100px]"
                          value={formData.message}
                          onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                        />
                      </div>

                      {/* File Upload */}
                      <div className="space-y-2">
                        <Label>Upload Documents *</Label>
                        <div
                          className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer"
                          onClick={() => document.getElementById('contact-file-upload')?.click()}
                        >
                          <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground mb-1">Click to upload or drag and drop</p>
                          <p className="text-xs text-muted-foreground">Any file type accepted · No size limit</p>
                          <input
                            id="contact-file-upload"
                            type="file"
                            accept="*/*"
                            multiple
                            className="hidden"
                            onChange={handleFileUpload}
                          />
                        </div>

                        {uploadedFiles.length > 0 && (
                          <div className="space-y-2 mt-3">
                            <p className="text-sm font-medium">{uploadedFiles.length} file{uploadedFiles.length > 1 ? 's' : ''} selected</p>
                            {uploadedFiles.map((file, index) => (
                              <div key={index} className="flex items-center justify-between p-2 bg-muted/50 rounded-lg">
                                <span className="text-sm truncate flex-1 mr-2">{file.name}</span>
                                <Button type="button" variant="ghost" size="sm" onClick={() => removeFile(index)}>
                                  Remove
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Error */}
                  {error && (
                    <div className="flex items-center gap-2 p-4 mt-6 bg-red-50 border border-red-200 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  )}

                  {/* Confidentiality notice + Submit */}
                  <div className="mt-6 space-y-4">
                    <p className="text-xs text-muted-foreground leading-relaxed border border-border rounded-lg p-3 bg-muted/30">
                      All case information is treated as strictly confidential and protected by our HIPAA-compliant privacy policies and NDA.
                    </p>
                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Submitting...
                        </>
                      ) : (
                        'Submit Case'
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
