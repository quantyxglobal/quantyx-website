import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FileText, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MedicalOpinion() {
  return (
    <>
      <Helmet>
        <title>Expert Medical Opinion Services for Attorneys USA, Canada & Australia | Quantyx Global</title>
        <meta 
          name="description" 
          content="Professional expert medical opinion services for attorneys and law firms in USA, Canada, and Australia. Independent medical review and expert opinions for legal cases." 
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
                Expert Medical Opinion Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Independent medical review and expert opinions for attorneys in USA, Canada, and Australia
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl shadow-elegant p-8 md:p-12 mb-8">
                <h2 className="text-2xl font-bold mb-6">What are Expert Medical Opinion Services?</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    Expert medical opinion services provide attorneys with independent, professional medical analysis and opinions on the medical aspects of their legal cases. Our expert medical opinion services connect law firms and attorneys in USA, Canada, and Australia with qualified medical professionals who review case materials and provide objective, evidence-based opinions on causation, standard of care, prognosis, disability, treatment necessity, and other medical-legal issues.
                  </p>
                  <p>
                    Medical expert opinions are critical in many types of litigation including medical malpractice cases, personal injury claims, workers' compensation disputes, disability claims, product liability cases, and wrongful death actions. Unlike treating physicians who focus on patient care, medical experts provide objective analysis specifically for legal purposes, examining whether care met accepted standards, whether injuries were caused by alleged incidents, and whether future medical care will be necessary.
                  </p>
                  <p>
                    Our process begins with carefully matching your case to an appropriate medical expert based on specialty, credentials, and experience. The expert reviews all relevant medical records, imaging studies, laboratory results, and other case materials. They then prepare a detailed written opinion addressing the specific medical-legal questions posed by your case, supported by medical literature and professional standards. Our experts are experienced in providing opinions that withstand scrutiny and can serve as the foundation for strong legal arguments.
                  </p>
                  <p>
                    We work with board-certified physicians and medical professionals across all specialties who understand the legal process and can communicate complex medical concepts clearly to legal professionals, juries, and judges. Our experts are available for depositions and trial testimony when needed. Whether you need an opinion to evaluate case merit, support settlement negotiations, or present at trial, we provide credible, defensible medical opinions that strengthen your case across USA, Canada, and Australia.
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-card rounded-xl p-6 shadow-card">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Timely Review</h3>
                  <p className="text-sm text-muted-foreground">
                    Efficient expert matching and opinion delivery
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-card">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Qualified Experts</h3>
                  <p className="text-sm text-muted-foreground">
                    Board-certified physicians across all specialties
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-card">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Detailed Reports</h3>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive written opinions with supporting evidence
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
