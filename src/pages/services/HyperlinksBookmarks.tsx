import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, ArrowRight, Download, CheckCircle, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

const HyperlinksBookmarks = () => {
  const features = [
    "Digital bookmarking system",
    "Hyperlink navigation",
    "Searchable document structure",
    "Quick reference linking",
    "Organized file hierarchy",
    "Cross-reference indexing",
    "Digital annotation support",
    "Multi-format compatibility"
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Hyperlinks & Bookmarks | Digital Medical Record Navigation - Quantyx Global"
        description="Professional hyperlink and bookmark services for medical records. Digital navigation, quick reference linking, and organized document structure for efficient legal review and case preparation."
        keywords="medical record hyperlinks, digital bookmarks, medical document navigation, PDF hyperlinks, medical record organization, digital medical records"
        canonical="https://www.quantyxg.com/services"
        ogTitle="Hyperlinks & Bookmarks for Medical Records"
        ogDescription="Efficient digital navigation for medical records. Quick reference linking and organized document structure."
        noindex={true}
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
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 mx-auto text-white shadow-lg" style={{ background: 'var(--gradient-accent)' }}>
                <Eye className="w-10 h-10" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                  Hyperlinks and Bookmarks
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Enhanced digital organization with hyperlinks and bookmarks for easy navigation through complex medical records.
              </p>
              
              {/* Image Placeholder */}
              <div className="max-w-4xl mx-auto mb-8">
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
                  <div className="bg-muted/50 rounded-xl h-64 flex items-center justify-center">
                    <div className="text-center">
                      <Eye className="w-16 h-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground font-semibold">Digital Organization Sample</p>
                      <p className="text-sm text-muted-foreground mt-2">[Placeholder for hyperlinks and bookmarks visualization]</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/consultation">
                  <Button size="xl" className="shadow-lg">
                    Get Organized
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button variant="outline" size="xl">
                  <Download className="w-5 h-5 mr-2" />
                  Sample Organization
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
                  <h2 className="text-4xl font-bold mb-6">Smart Hyperlinks & Bookmarks</h2>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Transform your medical records into an organized, searchable digital system 
                    with intelligent bookmarking and hyperlink navigation for efficient case review.
                  </p>
                  
                  {/* Sample Image Placeholder */}
                  <div className="mb-8">
                    <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border border-primary/10">
                      <div className="bg-muted/30 rounded-lg h-48 flex items-center justify-center">
                        <div className="text-center">
                          <LinkIcon className="w-12 h-12 text-primary mx-auto mb-3" />
                          <p className="text-sm text-muted-foreground">[Sample hyperlinked document preview]</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
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
                    <CardTitle className="text-2xl flex items-center">
                      <LinkIcon className="w-6 h-6 text-primary mr-3" />
                      Service Details
                    </CardTitle>
                    <CardDescription>Professional digital organization service</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-primary mb-4">$1.50<span className="text-lg text-muted-foreground">/page</span></div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mr-3" />
                        24-48 hour turnaround
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mr-3" />
                        Digital bookmark system
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mr-3" />
                        Hyperlink navigation
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mr-3" />
                        Searchable documents
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
            <h2 className="text-3xl font-bold mb-4">Ready for Better Organization?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your medical records into an organized, navigable digital system.
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

export default HyperlinksBookmarks;