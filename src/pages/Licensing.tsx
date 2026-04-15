import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award } from "lucide-react";

const Licensing = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Award className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                  Licensing & Credentials
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Professional qualifications and certifications
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Professional Credentials</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Quantyx Global maintains the highest standards of professional credentialing. Our team consists of licensed medical professionals, certified legal nurse consultants, and experienced medico-legal specialists who bring extensive expertise to every case.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Medical Licensing</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our medical professionals hold active licenses in their respective specialties:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Board-certified physicians in multiple specialties</li>
                    <li>Licensed registered nurses with advanced certifications</li>
                    <li>Certified Legal Nurse Consultants (CLNC)</li>
                    <li>Active state medical board licenses</li>
                    <li>Current DEA registrations where applicable</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Professional Certifications</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our team members hold various professional certifications including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>American Association of Legal Nurse Consultants (AALNC) certification</li>
                    <li>American Board of Medical Specialties (ABMS) board certifications</li>
                    <li>Certified Medical Review Officer (MRO)</li>
                    <li>Life Care Planning certifications</li>
                    <li>Expert witness training and certification</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Continuing Education</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We are committed to maintaining current knowledge and skills through ongoing professional development. Our team members complete required continuing medical education (CME) and continuing legal education (CLE) credits annually, staying current with medical advances and legal standards.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Quality Assurance</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We maintain rigorous quality assurance processes to ensure the accuracy and reliability of our services. All work products undergo peer review by qualified professionals before delivery to clients.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Professional Memberships</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Our team members maintain active memberships in professional organizations:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>American Association of Legal Nurse Consultants</li>
                    <li>American College of Physicians</li>
                    <li>American Medical Association</li>
                    <li>National Association of Medical Examiners</li>
                    <li>Various medical specialty societies</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Insurance and Bonding</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Quantyx Global maintains comprehensive professional liability insurance and appropriate business insurance coverage to protect our clients and our practice.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Regulatory Compliance</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We comply with all applicable federal and state regulations governing medico-legal services, including HIPAA privacy and security rules, state medical practice acts, and professional conduct standards.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Verification of Credentials</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We welcome verification of our credentials and qualifications. For credential verification requests or questions about our licensing, please contact us at:
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Email: <a href="mailto:credentials@quantyxg.com" className="text-primary hover:underline">credentials@quantyxg.com</a><br />
                    Phone: <a href="tel:+917075184488" className="text-primary hover:underline">+91 70751 84488</a> (India) &nbsp;|&nbsp;
                    <a href="tel:+61452257129" className="text-primary hover:underline">+61 452 257 129</a> (Australia) &nbsp;|&nbsp;
                    <a href="tel:+15129314563" className="text-primary hover:underline">+1 (512) 931-4563</a> (USA)<br />
                    Address: #204, B Block, Old Grand World Road, Smart City Tirupati, Andhra Pradesh – 517501, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Licensing;
