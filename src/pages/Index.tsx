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
        keywords="medico-legal services, medical chronology, legal document analysis, demand letter, medical opinion, medical record review, attorney services, law firm services, personal injury cases"
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
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
