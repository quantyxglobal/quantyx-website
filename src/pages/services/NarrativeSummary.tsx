import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Stethoscope, ArrowRight, Download, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

const NarrativeSummary = () => {
  const features = [
    "Clear medical terminology translation",
    "Chronological narrative structure",
    "Key findings highlighted",
    "Treatment progression analysis",
    "Outcome documentation",
    "Expert medical interpretation",
    "Legal-ready formatting",
    "Comprehensive case overview"
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Medical Narrative Summary Services | Expert Medical Translation - Quantyx Global"
        description="Professional medical narrative summaries that translate complex medical information into clear, understandable reports for legal proceedings. Expert interpretation and legal-ready formatting."
        keywords="medical narrative summary, medical translation, medical report, legal medical documentation, medical case summary, expert medical interpretation"
        canonical="https://www.quantyxg.com/services/narrative-summary"
        ogTitle="Medical Narrative Summary Services for Legal Cases"
        ogDescription="Clear, comprehensive medical narratives for legal proceedings. Expert translation of complex medical information."
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
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 mx-auto text-white shadow-lg" style={{ background: 'var(--gradient-primary)' }}>
                <Stethoscope className="w-10 h-10" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                  Narrative Summary
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Transform complex medical records into clear, comprehensive narrative summaries that tell your client's medical story.
              </p>
              
              {/* Image Placeholder */}
              <div className="max-w-4xl mx-auto mb-8">
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
                  <div className="bg-muted/50 rounded-xl h-64 flex items-center justify-center">
                    <div className="text-center">
                      <Stethoscope className="w-16 h-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground font-semibold">Narrative Summary Sample</p>
                      <p className="text-sm text-muted-foreground mt-2">[Placeholder for narrative summary document preview]</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/consultation">
                  <Button size="xl" className="shadow-lg">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button variant="outline" size="xl">
                  <Download className="w-5 h-5 mr-2" />
                  Sample Summary
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Clear Medical Narratives</h2>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Our narrative summaries translate complex medical information into clear, 
                    understandable reports that help legal professionals and juries understand 
                    the medical aspects of your case.
                  </p>
                  
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Card className="border-primary/20 bg-card/80 backdrop-blur-sm shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">Service Details</CardTitle>
                    <CardDescription>Professional narrative summary service</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-primary mb-4">$3.00<span className="text-lg text-muted-foreground">/page</span></div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mr-3" />
                        48-72 hour turnaround
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mr-3" />
                        Medical expert review
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mr-3" />
                        Legal-ready formatting
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mr-3" />
                        Comprehensive analysis
                      </li>
                    </ul>
                    <Link to="/consultation">
                      <Button className="w-full">Get Quote</Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Clear Medical Narratives?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let our experts create comprehensive narrative summaries that strengthen your case.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/consultation">
                <Button size="xl" className="shadow-lg">
                  Schedule Consultation
                </Button>
              </Link>
              <Link to="/case-upload">
                <Button variant="outline" size="xl">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NarrativeSummary;