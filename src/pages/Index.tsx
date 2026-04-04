import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InteractiveWhyChoose from "@/components/InteractiveWhyChoose/InteractiveWhyChoose";
import OurProcess from "@/components/OurProcess";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
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
