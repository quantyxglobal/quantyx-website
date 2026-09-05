import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FileText, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DemandLetters() {
  return (
    <>
      <Helmet>
        <title>Demand Letter Services for Law Firms USA, Canada & Australia | Quantyx Global</title>
        <meta 
          name="description" 
          content="Professional demand letter services for law firms and attorneys in USA, Canada, and Australia. Expert demand package preparation for personal injury cases." 
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-muted/50">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <FileText className="h-4 w-4" />
                Core Service
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Demand Letter Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive demand package preparation for law firms in USA, Canada, and Australia
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl shadow-elegant p-8 md:p-12 mb-8">
                <h2 className="text-2xl font-bold mb-6">What are Demand Letter Services?</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    Demand letter services involve the preparation of comprehensive settlement demand packages that present your client's case to insurance companies or opposing parties. Our professional demand letter services help law firms and attorneys in USA, Canada, and Australia create persuasive, well-documented demand packages that maximize settlement opportunities and demonstrate the full value of their clients' claims.
                  </p>
                  <p>
                    A properly prepared demand letter is much more than a simple request for compensation—it is a strategic document that tells your client's story, establishes liability, documents injuries and treatment, demonstrates the impact on your client's life, and justifies the settlement amount requested. Our experienced team works with your firm to compile all relevant medical records, bills, reports, and supporting documentation into a cohesive package that presents a compelling case for settlement.
                  </p>
                  <p>
                    Our demand package services include organizing and indexing all medical records chronologically, preparing medical summaries that highlight key injuries and treatment, calculating and itemizing special damages including medical expenses and lost wages, summarizing pain and suffering and loss of enjoyment of life, and assembling all supporting documentation such as police reports, witness statements, photographs, and expert reports. Each package is professionally formatted and organized for maximum impact.
                  </p>
                  <p>
                    We understand that effective demand letters must be tailored to the specific jurisdiction and case type. Our team has experience preparing demand packages for personal injury cases, motor vehicle accidents, slip and fall incidents, medical malpractice claims, product liability cases, and wrongful death claims across USA, Canada, and Australia. We work closely with attorneys to ensure each demand package aligns with case strategy and presents the strongest possible argument for settlement.
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-card rounded-xl p-6 shadow-card">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Efficient Process</h3>
                  <p className="text-sm text-muted-foreground">
                    Streamlined workflow for timely demand delivery
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-card">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Comprehensive</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete packages with all supporting documentation
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-card">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Persuasive Format</h3>
                  <p className="text-sm text-muted-foreground">
                    Professionally organized for maximum settlement impact
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary to-primary-glow rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
                <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                <p className="text-lg mb-8 opacity-90">
                  Upload your case files today or request a custom quote
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/case-upload">
                    <Button size="lg" variant="secondary" className="gap-2 w-full sm:w-auto">
                      Upload Case Files
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/quote">
                    <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                      Request Quote
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
