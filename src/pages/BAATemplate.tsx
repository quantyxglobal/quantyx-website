import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { FileText, Download, Shield } from "lucide-react";

const BAATemplate = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Business Associate Agreement (BAA) Template | Quantyx Global"
        description="View our HIPAA-compliant Business Associate Agreement template, Non-Disclosure Agreement, and Service Level Agreement for medico-legal services."
        keywords="BAA template, business associate agreement, HIPAA compliance, NDA, SLA, medico-legal agreements"
        canonical="https://www.quantyxg.com/baa-template"
        ogTitle="Business Associate Agreement Template | Quantyx Global"
        ogDescription="View our HIPAA-compliant legal agreements for medico-legal services"
        noindex={false}
      />
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl text-white shadow-lg mb-6" style={{ background: "var(--gradient-primary)" }}>
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent">
                Legal Agreements & Templates
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              View our Business Associate Agreement (BAA), Non-Disclosure Agreement (NDA), and Service Level Agreement (SLA) templates. These documents are available for review only.
            </p>
          </div>
        </section>

        {/* Documents Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* BAA Document */}
              <div className="rounded-2xl border border-primary/20 bg-card/80 backdrop-blur-sm shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ background: "var(--gradient-primary)" }}>
                      <FileText className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2">Business Associate Agreement (BAA)</h2>
                      <p className="text-muted-foreground mb-4">
                        Our HIPAA-compliant Business Associate Agreement template for US law firms. This agreement is required before any protected health information (PHI) is shared with us.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Download className="w-4 h-4 text-primary" />
                        <span className="font-medium text-primary">View Only - Download Not Available</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 rounded-xl p-6 border border-border">
                    <div className="aspect-[8.5/11] bg-white rounded-lg shadow-inner flex items-center justify-center">
                      <div className="text-center p-8">
                        <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground mb-4">
                          BAA document viewer will be embedded here
                        </p>
                        <p className="text-sm text-muted-foreground">
                          To request a signed BAA, please contact us at{" "}
                          <a href="mailto:contact@quantyxg.com" className="text-primary hover:underline">
                            contact@quantyxg.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* NDA Document */}
              <div className="rounded-2xl border border-primary/20 bg-card/80 backdrop-blur-sm shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ background: "var(--gradient-accent)" }}>
                      <FileText className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2">Non-Disclosure Agreement (NDA)</h2>
                      <p className="text-muted-foreground mb-4">
                        Our standard Non-Disclosure Agreement signed by all staff members before accessing any client records. This ensures confidentiality and data protection.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Download className="w-4 h-4 text-primary" />
                        <span className="font-medium text-primary">View Only - Download Not Available</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 rounded-xl p-6 border border-border">
                    <div className="aspect-[8.5/11] bg-white rounded-lg shadow-inner flex items-center justify-center">
                      <div className="text-center p-8">
                        <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground mb-4">
                          NDA document viewer will be embedded here
                        </p>
                        <p className="text-sm text-muted-foreground">
                          For inquiries about our NDA policy, contact{" "}
                          <a href="mailto:contact@quantyxg.com" className="text-primary hover:underline">
                            contact@quantyxg.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SLA Document */}
              <div className="rounded-2xl border border-primary/20 bg-card/80 backdrop-blur-sm shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ background: "var(--gradient-primary)" }}>
                      <FileText className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2">Service Level Agreement (SLA)</h2>
                      <p className="text-muted-foreground mb-4">
                        Our Service Level Agreement outlining turnaround times, quality standards, revision policies, and service commitments for all medico-legal services.
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Download className="w-4 h-4 text-primary" />
                        <span className="font-medium text-primary">View Only - Download Not Available</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 rounded-xl p-6 border border-border">
                    <div className="aspect-[8.5/11] bg-white rounded-lg shadow-inner flex items-center justify-center">
                      <div className="text-center p-8">
                        <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground mb-4">
                          SLA document viewer will be embedded here
                        </p>
                        <p className="text-sm text-muted-foreground">
                          For questions about our service commitments, contact{" "}
                          <a href="mailto:contact@quantyxg.com" className="text-primary hover:underline">
                            contact@quantyxg.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 text-white" style={{ background: "var(--gradient-primary)" }}>
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                Need a Signed Agreement?
              </h2>
              <p className="text-white/80 mb-6">
                Contact us to receive executed copies of our BAA, NDA, or SLA for your records.
              </p>
              <a
                href="mailto:contact@quantyxg.com?subject=Request for Signed Agreements"
                className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors shadow-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 bg-muted/40 border-t border-border">
          <div className="container mx-auto px-6">
            <p className="text-xs text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
              These documents are provided for informational purposes only. Actual agreements may vary based on specific client requirements and jurisdictional needs. For executed agreements or customized terms, please contact Quantyx Global directly.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default BAATemplate;
