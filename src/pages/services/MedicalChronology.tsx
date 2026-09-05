import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FileText, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MedicalChronology() {
  return (
    <>
      <Helmet>
        <title>Medical Chronology Services for Law Firms USA, Canada & Australia | Quantyx Global</title>
        <meta 
          name="description" 
          content="Professional medical chronology services for law firms and attorneys in USA, Canada, and Australia. Expert medical record organization and timeline creation for legal cases." 
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
                Medical Chronology Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive medical record organization for law firms and attorneys in USA, Canada, and Australia
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl shadow-elegant p-8 md:p-12 mb-8">
                <h2 className="text-2xl font-bold mb-6">What is Medical Chronology?</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    A medical chronology is a detailed, chronologically organized summary of a patient's medical history extracted from medical records. Our professional medical chronology services help law firms and attorneys in USA, Canada, and Australia quickly understand the medical aspects of their cases by transforming complex medical records into clear, organized timelines.
                  </p>
                  <p>
                    Medical chronologies are essential tools for personal injury cases, medical malpractice litigation, workers' compensation claims, and disability cases. By organizing medical events in sequential order with page references to source documents, we enable attorneys to identify critical medical facts, treatment patterns, and gaps in care that may be crucial to case strategy.
                  </p>
                  <p>
                    Our experienced medical professionals review all medical records—including hospital records, physician notes, laboratory results, imaging reports, and pharmacy records—and extract relevant information into a comprehensive chronological format. Each entry includes the date of service, treating provider, medical facility, type of treatment or test, and key findings or diagnoses with precise page citations.
                  </p>
                  <p>
                    This systematic approach saves attorneys countless hours of manual review and ensures no critical medical details are overlooked. Our chronologies are formatted for easy reference during depositions, mediations, and trials, making them invaluable tools for case preparation and presentation. We serve law firms across USA, Canada, and Australia with consistent quality and attention to detail.
                  </p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-card rounded-xl p-6 shadow-card">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Fast Turnaround</h3>
                  <p className="text-sm text-muted-foreground">
                    Quick delivery without compromising accuracy or quality
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-card">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Expert Review</h3>
                  <p className="text-sm text-muted-foreground">
                    Reviewed by experienced medical professionals
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-card">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Detailed Citations</h3>
                  <p className="text-sm text-muted-foreground">
                    Precise page references to source documents
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
