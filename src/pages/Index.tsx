import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InteractiveWhyChoose from "@/components/InteractiveWhyChoose/InteractiveWhyChoose";
import OurProcess from "@/components/OurProcess";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Quantyx Global | Expert Medico-Legal Services for Law Firms"
        description="Professional medico-legal services powered by AI. Expert medical chronologies, narrative summaries, demand letters, and legal document analysis for attorneys and law firms worldwide."
        keywords="medico-legal services, medical chronology, legal document analysis, demand letter, medical opinion, medical record review, attorney services, law firm services, personal injury cases, medical malpractice, medico legal summaries, legal case analysis"
        canonical="https://www.quantyxg.com/"
        ogTitle="Quantyx Global - AI-Powered Medico-Legal Services"
        ogDescription="Transform complex medical records into clear, actionable insights. Expert medico-legal support for law firms."
        ogImage="https://www.quantyxg.com/og-image.png"
      />
      <Header />
      <main>
        <Hero />
        <InteractiveWhyChoose />
        <OurProcess />
        
        {/* SEO Content Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Comprehensive Medico-Legal Services for Law Firms</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Quantyx Global provides expert medico-legal services designed to strengthen your personal injury, medical malpractice, and complex litigation cases. Our comprehensive suite of services combines cutting-edge AI technology with board-certified medical expertise to deliver the insights your cases demand.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 mt-8">Our Medico-Legal Services Include:</h3>
              <ul className="space-y-3 mb-6 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Medical Chronology Services:</strong> Transform complex medical records into clear, chronological timelines that help legal professionals understand the sequence of medical events and identify key case strengths.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Medico-Legal Summaries:</strong> Expert narrative summaries that translate complex medical information into clear, understandable reports for legal proceedings and court presentations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Legal Case Analysis:</strong> Comprehensive analysis of medical records with focus on causation, liability, and case value assessment for personal injury and medical malpractice litigation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Demand Letters:</strong> Professionally crafted demand letters backed by expert medical analysis that effectively communicate findings and damages to insurance companies and opposing counsel.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Medical Opinions:</strong> Expert medical opinions from board-certified physicians providing authoritative analysis and professional testimony for legal proceedings.</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 mt-8">Why Choose Quantyx Global for Your Medico-Legal Needs?</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                In complex personal injury and medical malpractice cases, the quality of your medico-legal support directly impacts case outcomes. Our team combines medical expertise with legal acumen to deliver comprehensive analysis that strengthens your litigation strategy. With an average 48-72 hour turnaround time and a 95% client satisfaction rate, we're the trusted partner for law firms nationwide.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Expert Medical Record Review and Analysis</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our AI-powered platform accelerates the analysis of medical records while maintaining the human expertise that ensures accuracy and legal compliance. Whether you need detailed medical chronology services, expert medical opinions, or sophisticated legal case analysis, our team is ready to support your litigation strategy with court-ready documentation and professional analysis.
              </p>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
