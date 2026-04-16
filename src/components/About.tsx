import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen, Users } from "lucide-react";

const About = () => {
  const credentials = [
    "Board Certified Internal Medicine",
    "Fellowship in Forensic Medicine",
    "JD - Healthcare Law",
    "25+ Years Clinical Experience"
  ];

  const stats = [
    { number: "500+", label: "Cases Handled", icon: <Users className="w-5 h-5" /> },
    { number: "25+", label: "Years Experience", icon: <Award className="w-5 h-5" /> },
    { number: "50+", label: "Publications", icon: <BookOpen className="w-5 h-5" /> },
    { number: "100%", label: "Success Rate", icon: <GraduationCap className="w-5 h-5" /> }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Dr. <span className="text-primary">Sarah Mitchell</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over 25 years of combined experience in medicine and law, Dr. Mitchell brings 
              unparalleled expertise to complex medico-legal cases. Board-certified in internal 
              medicine with specialized training in forensic medicine and healthcare law.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Dr. Mitchell has testified as an expert witness in over 500 cases, providing clear, 
              compelling testimony that bridges the gap between medical complexity and legal clarity. 
              Her unique dual expertise in both medicine and law makes her an invaluable asset to 
              any legal team.
            </p>
            
            {/* Credentials */}
            <div className="mb-8">
              <h3 className="font-semibold mb-4 text-lg">Key Credentials</h3>
              <div className="flex flex-wrap gap-2">
                {credentials.map((credential, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {credential}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="professional" size="lg">
                View Full CV
              </Button>
              <Button variant="outline" size="lg">
                Schedule Meeting
              </Button>
            </div>
          </div>
          
          {/* Stats & Visual */}
          <div className="space-y-8">
            {/* Professional Image Placeholder */}
            <div className="bg-gradient-to-br from-primary/10 to-professional/10 rounded-2xl p-8 text-center">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary/20 to-professional/20 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="w-24 h-24 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dr. Sarah Mitchell, MD, JD</h3>
              <p className="text-muted-foreground">Medico-Legal Expert</p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-3 text-primary">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;