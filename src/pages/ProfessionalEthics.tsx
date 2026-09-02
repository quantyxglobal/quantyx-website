import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Scale } from "lucide-react";

const ProfessionalEthics = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Scale className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                  Professional Ethics
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Our commitment to ethical practice and professional standards
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
                  <h2 className="text-2xl font-bold text-foreground mb-4">Our Ethical Foundation</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    At Quantyx Global, we are committed to the highest standards of professional ethics in all aspects of our medico-legal services. Our ethical framework guides every decision we make and every service we provide.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Objectivity and Impartiality</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We maintain strict objectivity in all medical reviews and opinions. Our analyses are based solely on medical evidence and established medical standards, without bias toward any party in legal proceedings. We present findings accurately and completely, regardless of which party retained our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Confidentiality</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We treat all client information and case materials with the utmost confidentiality. Our team members are bound by professional confidentiality obligations, HIPAA regulations, and contractual non-disclosure agreements. We implement robust security measures to protect sensitive information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Competence and Expertise</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We only accept cases within our areas of expertise and competence. Our team consists of qualified medical professionals and legal support specialists who maintain current knowledge through continuing education and professional development.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Conflict of Interest</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We maintain strict policies to identify and avoid conflicts of interest:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>We do not accept cases where we have personal or financial interests</li>
                    <li>We disclose any potential conflicts before accepting engagements</li>
                    <li>We do not work for opposing parties in the same matter</li>
                    <li>We maintain independence from external influences</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Accuracy and Integrity</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We are committed to accuracy in all our work products. Our reports and analyses are thoroughly reviewed for completeness and correctness. We acknowledge limitations in available information and clearly distinguish between facts, opinions, and assumptions.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Professional Boundaries</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We maintain appropriate professional boundaries in all client relationships. Our services are provided for legal purposes only and do not constitute medical advice for treatment. We do not establish doctor-patient relationships through our medico-legal services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Transparency</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We are transparent about our methodologies, qualifications, and limitations. We clearly communicate our scope of services, fees, and timelines. We provide honest assessments even when findings may not support the retaining party's position.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Compliance with Laws and Regulations</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We comply with all applicable laws, regulations, and professional standards, including HIPAA, state medical board regulations, and legal professional conduct rules. We stay current with changes in relevant laws and regulations.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Continuous Improvement</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We are committed to continuous improvement of our ethical practices. We regularly review and update our policies, provide ethics training to our team, and welcome feedback on our ethical performance.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Reporting Ethical Concerns</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have concerns about ethical issues related to our services, please contact us at:
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Email: <a href="mailto:contact@quantyxg.com" className="text-primary hover:underline">contact@quantyxg.com</a><br />
                    Phone: <a href="tel:+15129314563" className="text-primary hover:underline">+1 816-266-2122</a> (USA) &nbsp;|&nbsp;
                    <a href="tel:+61452257129" className="text-primary hover:underline">+61 452 257 129</a> (Australia) &nbsp;|&nbsp;
                    <a href="tel:+917075184488" className="text-primary hover:underline">+91 70751 84488</a> (India)<br />
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

export default ProfessionalEthics;
