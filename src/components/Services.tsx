import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Scale, Stethoscope, Brain, Heart, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Narrative Summary",
      description: "Detailed narrative summaries that translate complex medical information into clear, understandable reports.",
      features: ["Medical translation", "Clear documentation", "Expert interpretation", "Legal formatting"],
      route: "/services/narrative-summary"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Medical Chronology",
      description: "Comprehensive chronological organization of medical records for personal injury cases.",
      features: ["Timeline creation", "Record organization", "Key event identification", "Date sequencing"],
      route: "/services/medical-chronology"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Medical Expenses Summary",
      description: "Comprehensive analysis and summary of medical expenses related to injury or malpractice claims.",
      features: ["Cost analysis", "Expense categorization", "Future care projections", "Economic impact assessment"],
      route: "/services/medical-expenses"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Demand Letter",
      description: "Professionally crafted demand letters that effectively communicate medical findings and damages.",
      features: ["Professional drafting", "Medical support", "Compelling presentation", "Settlement strategy"],
      route: "/services/demand-letter"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Hyperlinks and Bookmarks",
      description: "Enhanced digital organization with hyperlinks and bookmarks for easy navigation through complex medical records.",
      features: ["Digital organization", "Quick navigation", "Reference linking", "Searchable documents"],
      route: "/services/hyperlinks-bookmarks"
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Medical Opinions",
      description: "Expert medical opinions and analysis from board-certified physicians for legal proceedings.",
      features: ["Expert analysis", "Medical opinions", "Professional testimony", "Case evaluation"],
      route: "/services/medical-opinions"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'var(--gradient-subtle)' }}>
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Medical Legal</span> Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive medical-legal expertise across multiple specialties, 
            providing the expert testimony and analysis you need for successful case outcomes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 hover:-translate-y-1 border-primary/20 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg" style={{ background: index % 2 === 0 ? 'var(--gradient-primary)' : 'var(--gradient-accent)', boxShadow: 'var(--shadow-glow)' }}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={service.route}>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="professional" size="xl">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;