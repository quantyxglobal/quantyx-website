import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Shield, Target, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our medical-legal services."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision",
      description: "Our AI-powered analysis ensures accuracy in every report and recommendation."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We continuously evolve our technology to provide cutting-edge solutions."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work closely with legal teams to achieve the best outcomes for cases."
    }
  ];

  const team = [
    {
      name: "S. Subba Raju",
      role: "Co-Founder",
      image: "/pics/Co-founder.jpeg"
    },
    {
      name: "K. Varahala Raju",
      role: "Chief Executive Officer",
      image: "/pics/CEO.png"
    },
    {
      name: "S. Megha Shyam Raju",
      role: "Chief Technical Officer",
      image: "/pics/CTO.png"
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                  About Quantyx Global
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Leading the future of medical-legal services through innovative AI technology and unparalleled expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                To revolutionize medico-legal services by combining cutting-edge AI technology with expert medical and legal knowledge, 
                delivering faster, more accurate, and comprehensive solutions that empower legal professionals to achieve better outcomes for their clients.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Our AI-powered platform processes medical records with unprecedented speed and accuracy, 
                  while our team of medical and legal experts ensures every report meets the highest standards 
                  for court admissibility and professional excellence.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-2xl bg-primary/10">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-accent/10">
                  <div className="text-3xl font-bold text-accent mb-2">48-72</div>
                  <div className="text-sm text-muted-foreground">hrs average TAT</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-primary/10">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">client satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These principles guide everything we do and ensure we deliver exceptional value to our clients.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-primary/20 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto text-white shadow-lg" style={{ background: 'var(--gradient-primary)' }}>
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/8 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-professional/5 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                  Meet Our Leadership Team
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Visionary leaders driving innovation in medical-legal services with decades of combined expertise.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-500 border-primary/20 bg-card/90 backdrop-blur-sm hover:bg-card/95 shadow-elegant relative overflow-hidden group w-full">
                  {/* Card Background Design */}
                  <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-2xl" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/15 to-transparent rounded-full blur-xl" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-professional/10 rounded-full blur-3xl" />
                  </div>
                  
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 via-transparent to-accent/20 p-[1px] group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-500">
                    <div className="w-full h-full bg-card/95 rounded-lg" />
                  </div>
                  
                  <CardHeader className="p-8 relative z-10">
                    <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-primary/30 shadow-glow relative group-hover:border-primary/50 transition-all duration-500">
                      {/* Photo Border Glow Effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-sm group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-500" />
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <CardTitle className="text-2xl mb-2 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent group-hover:from-primary group-hover:via-primary-glow group-hover:to-primary transition-all duration-500">
                      {member.name}
                    </CardTitle>
                    
                    <div className="text-primary font-semibold text-lg relative">
                      <CardDescription className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary transition-all duration-500">
                        {member.role}
                      </CardDescription>
                      
                      {/* Decorative underline */}
                      <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mt-3 rounded-full group-hover:w-24 group-hover:from-accent group-hover:to-primary-glow transition-all duration-500" />
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the difference that expert medical-legal services can make for your cases.
            </p>
            <div className="flex justify-center">
              <Link to="/case-upload">
                <Button variant="outline" size="xl">
                  Contact Our Team
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

export default About;