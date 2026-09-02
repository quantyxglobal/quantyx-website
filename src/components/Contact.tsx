import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { submitContactForm } from "@/lib/api";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    services: ['Consultation'],
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Map the form data to match the API expectations
      const contactData = {
        caseName: `${formData.firstName} ${formData.lastName} - Consultation`,
        contactPersonName: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || 'Not provided',
        country: 'Not provided',
        services: formData.services,
        message: formData.message,
        files: []
      };
      
      await submitContactForm(contactData);
      toast.success('Consultation request submitted successfully! We will contact you within 24 hours.');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        services: ['Consultation'],
        message: ''
      });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to submit consultation request');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      content: (
        <div className="space-y-1">
          <div>+1 816-266-2122 <span className="text-xs text-muted-foreground">(USA)</span></div>
          <div>+61 452 257 129 <span className="text-xs text-muted-foreground">(Australia)</span></div>
          <div>+91 70751 84488 <span className="text-xs text-muted-foreground">(India)</span></div>
        </div>
      ),
      subtitle: "Available for consultations"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: "contact@quantyxg.com",
      subtitle: "Response at the earliest"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Office",
      content: "#204, B Block, Old Grand World Road, Smart City Tirupati, Andhra Pradesh",
      subtitle: "India"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get Expert <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Medico-Legal</span> Support
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to strengthen your case with professional medical expertise? 
            Contact us today for a consultation and let us help you achieve the best possible outcome.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-2xl border-primary/20 bg-card/80 backdrop-blur-sm" style={{ boxShadow: 'var(--shadow-elegant)' }}>
            <CardHeader>
              <CardTitle className="text-2xl">Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name *</label>
                    <Input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John" 
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name *</label>
                    <Input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe" 
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Email *</label>
                  <Input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john.doe@law-firm.com" 
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone *</label>
                  <Input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567" 
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Law Firm / Company</label>
                  <Input 
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Smith & Associates Law Firm" 
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Case Details *</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please provide a brief description of your case and how we can assist you..."
                    className="min-h-[120px]"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  variant="professional" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Consultation Request'}
                </Button>
              </form>
              
              <p className="text-sm text-muted-foreground text-center">
                All case information is treated as strictly confidential under our HIPAA-compliant privacy policy and mutual NDA.
              </p>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1 border-primary/20 bg-card/80 backdrop-blur-sm" style={{ boxShadow: 'var(--shadow-card)' }}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white" style={{ background: index % 2 === 0 ? 'var(--gradient-primary)' : 'var(--gradient-accent)' }}>
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      <p className="text-foreground mb-1">{info.content}</p>
                      <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;