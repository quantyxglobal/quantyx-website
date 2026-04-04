import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <FileText className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                  Terms of Service
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Last updated: January 2024
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
                  <h2 className="text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing or using Quantix Global's services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Services Description</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Quantix Global provides professional medico-legal services including medical chronologies, narrative summaries, demand letters, medical opinions, and related documentation services for legal professionals and their clients.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Professional Relationship</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our services are provided to legal professionals and their clients. We do not establish a doctor-patient relationship through our services. All medical opinions and analyses are provided for legal purposes only and should not be considered medical advice for treatment.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Client Responsibilities</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Clients agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Provide accurate and complete information</li>
                    <li>Ensure proper authorization for medical record review</li>
                    <li>Maintain confidentiality of our work product</li>
                    <li>Pay for services according to agreed terms</li>
                    <li>Use our services only for lawful purposes</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All reports, analyses, and work products created by Quantix Global remain our intellectual property until full payment is received. Upon payment, clients receive a license to use the work product for the specific case or matter for which it was commissioned.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Confidentiality</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We maintain strict confidentiality of all client information and case materials. Our team members are bound by professional confidentiality obligations and sign non-disclosure agreements.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Payment Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Payment terms are established in individual service agreements. Generally, payment is due upon completion of services or according to milestone schedules for larger projects. Late payments may incur interest charges as permitted by law.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our liability is limited to the fees paid for the specific service in question. We are not liable for indirect, incidental, or consequential damages arising from the use of our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Dispute Resolution</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Any disputes arising from these terms or our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Changes to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Continued use of our services constitutes acceptance of modified terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    For questions about these Terms of Service, please contact us at:
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Email: legal@quantixglobal.com<br />
                    Phone: +1 (555) 123-4567<br />
                    Address: 123 Medical Plaza, Suite 456
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

export default TermsOfService;
