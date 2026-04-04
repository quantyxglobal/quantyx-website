import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, Shield, Users, ArrowRight, Download, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

const MedicalOpinions = () => {
  const services = [
    "Expert medical analysis",
    "Professional medical opinions",
    "Case evaluation and review",
    "Medical literature research",
    "Expert witness testimony",
    "Standard of care assessment",
    "Causation analysis",
    "Comprehensive medical reports"
  ];

  const expertise = [
    {
      specialty: "Emergency Medicine",
      description: "Critical care decisions and emergency protocols"
    },
    {
      specialty: "Surgery",
      description: "Surgical procedures and post-operative care"
    },
    {
      specialty: "Internal Medicine",
      description: "Diagnosis and treatment of internal conditions"
    },
    {
      specialty: "Obstetrics & Gynecology",
      description: "Maternal and reproductive health cases"
    },
    {
      specialty: "Radiology",
      description: "Imaging interpretation and diagnostic accuracy"
    },
    {
      specialty: "Anesthesiology",
      description: "Perioperative care and pain management"
    }
  ];

  return (
    <div className="min-h-screen">
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
                <Scale className="w-10 h-10" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                  Medical Opinions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Expert medical opinions and analysis from board-certified physicians for legal proceedings and case evaluation.
              </p>
              
              {/* Image Placeholder */}
              <div className="max-w-4xl mx-auto mb-8">
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
                  <div className="bg-muted/50 rounded-xl h-64 flex items-center justify-center">
                    <div className="text-center">
                      <Stethoscope className="w-16 h-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground font-semibold">Medical Expert Analysis</p>
                      <p className="text-sm text-muted-foreground mt-2">[Placeholder for medical opinion document sample]</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/consultation">
                  <Button size="xl" className="shadow-lg">
                    Get Expert Opinion
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button variant="outline" size="xl">
                  <Download className="w-5 h-5 mr-2" />
                  Sample Opinion
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Expert Medical Opinions</h2>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Our medical opinions service provides expert analysis and professional opinions from 
                    board-certified physicians, helping legal teams understand complex medical issues 
                    and build stronger cases with authoritative medical insights.
                  </p>
                  
                  {/* Sample Image Placeholder */}
                  <div className="mb-8">
                    <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border border-primary/10">
                      <div className="bg-muted/30 rounded-lg h-48 flex items-center justify-center">
                        <div className="text-center">
                          <Shield className="w-12 h-12 text-primary mx-auto mb-3" />
                          <p className="text-sm text-muted-foreground">[Sample medical opinion report preview]</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 mb-8">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center p-4 rounded-lg bg-primary/5 border border-primary/10">
                        <Shield className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                        <span className="font-medium">{service}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/consultation">
                    <Button size="lg">
                      Discuss Your Case
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
                
                <Card className="border-primary/20 bg-card/80 backdrop-blur-sm shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Scale className="w-6 h-6 text-primary mr-3" />
                      Expert Opinion Service
                    </CardTitle>
                    <CardDescription>
                      Professional medical opinion from board-certified experts
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2">Case Review</h4>
                        <p className="text-sm text-muted-foreground">
                          Comprehensive review of medical records and case materials by qualified specialists.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Expert Analysis</h4>
                        <p className="text-sm text-muted-foreground">
                          In-depth medical analysis with professional opinions based on current standards.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Written Opinion</h4>
                        <p className="text-sm text-muted-foreground">
                          Detailed written opinion with supporting medical literature and expert conclusions.
                        </p>
                      </div>
                      
                      <div className="pt-4 border-t border-primary/10">
                        <p className="text-2xl font-bold text-primary mb-2">Custom Pricing</p>
                        <p className="text-sm text-muted-foreground mb-4">
                          Pricing varies based on case complexity and expert specialty required.
                        </p>
                        <Link to="/consultation">
                          <Button className="w-full">Get Custom Quote</Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Medical Specialties */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">Medical Specialties We Cover</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our network of board-certified experts covers all major medical specialties for comprehensive medical opinions.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {expertise.map((area, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 border-primary/20 bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white shadow-lg" style={{ background: index % 2 === 0 ? 'var(--gradient-primary)' : 'var(--gradient-accent)' }}>
                        <Users className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">{area.specialty}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {area.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Expert Medical Opinions?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our board-certified experts are ready to provide professional medical opinions for your case.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/consultation">
                <Button size="xl" className="shadow-lg">
                  Schedule Expert Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="xl">
                  Discuss Your Case
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

export default MedicalOpinions;