import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Shield, Lock, CheckCircle, AlertCircle, FileText, Users, Database, Eye } from "lucide-react";

const HipaaPipedaCompliance = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="HIPAA & PIPEDA Compliance | Quantyx Global"
        description="Learn how Quantyx Global maintains full HIPAA and PIPEDA compliance to protect your sensitive medical and legal data with the highest privacy standards."
        keywords="HIPAA compliance, PIPEDA compliance, medical data privacy, health information protection, Canadian privacy law"
        canonical="https://www.quantyxg.com/hipaa-pipeda-compliance"
        ogTitle="HIPAA & PIPEDA Compliance - Quantyx Global"
        ogDescription="Our commitment to protecting your health information under HIPAA and PIPEDA regulations."
      />
      <Header />
      <main className="pt-20">

        {/* Hero */}
        <section className="py-16 relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl animate-pulse" />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="flex justify-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg" style={{ background: 'var(--gradient-primary)' }}>
                <Shield className="w-8 h-8" />
              </div>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-lg" style={{ background: 'var(--gradient-primary)' }}>
                <Lock className="w-8 h-8" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                HIPAA & PIPEDA Compliance
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Quantyx Global is fully committed to protecting the privacy and security of all health information
              entrusted to us. We operate in strict compliance with both HIPAA (USA) and PIPEDA (Canada).
            </p>
            <p className="text-sm text-muted-foreground mt-4">Last updated: April 14, 2026</p>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16 max-w-5xl">

          {/* Compliance Badges */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-2xl border-2 border-primary/20 bg-primary/5">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">HIPAA Compliant</h2>
                  <p className="text-sm text-muted-foreground">Health Insurance Portability and Accountability Act</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We adhere to all HIPAA Privacy Rule, Security Rule, and Breach Notification Rule requirements
                for the handling of Protected Health Information (PHI) on behalf of our US-based clients.
              </p>
            </div>
            <div className="p-8 rounded-2xl border-2 border-primary/20 bg-primary/5">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">PIPEDA Compliant</h2>
                  <p className="text-sm text-muted-foreground">Personal Information Protection and Electronic Documents Act</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                We comply with Canada's federal private-sector privacy law, ensuring that personal information
                collected in the course of commercial activities is handled responsibly and transparently.
              </p>
            </div>
          </div>

          {/* HIPAA Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-7 h-7 text-primary" />
              <h2 className="text-3xl font-bold">HIPAA Compliance</h2>
            </div>

            <h3 className="text-xl font-semibold mb-3">What is HIPAA?</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The Health Insurance Portability and Accountability Act (HIPAA) is a US federal law that establishes
              national standards for the protection of sensitive patient health information. As a Business Associate
              to covered entities such as law firms and healthcare providers, Quantyx Global is legally obligated
              to safeguard all Protected Health Information (PHI) we access, process, or store.
            </p>

            <h3 className="text-xl font-semibold mb-4">Our HIPAA Commitments</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                { icon: <FileText className="w-5 h-5" />, title: "Business Associate Agreements", desc: "We execute BAAs with all covered entity clients before handling any PHI." },
                { icon: <Database className="w-5 h-5" />, title: "Minimum Necessary Standard", desc: "We access only the minimum PHI necessary to perform contracted services." },
                { icon: <Lock className="w-5 h-5" />, title: "Encryption at Rest & in Transit", desc: "All PHI is encrypted using AES-256 at rest and TLS 1.3 in transit." },
                { icon: <Users className="w-5 h-5" />, title: "Access Controls", desc: "Role-based access ensures only authorised personnel can access PHI." },
                { icon: <Eye className="w-5 h-5" />, title: "Audit Logging", desc: "All access to PHI is logged and monitored for anomalous activity." },
                { icon: <AlertCircle className="w-5 h-5" />, title: "Breach Notification", desc: "We notify affected parties within 60 days of discovering a breach, per HIPAA requirements." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-xl bg-muted/40 border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-3">HIPAA Security Rule Safeguards</h3>
            <div className="space-y-3 mb-6">
              {[
                { label: "Administrative Safeguards", items: ["Designated Privacy Officer", "Workforce training and supervision", "Contingency planning and disaster recovery", "Regular risk assessments"] },
                { label: "Physical Safeguards", items: ["Facility access controls", "Workstation use policies", "Device and media controls"] },
                { label: "Technical Safeguards", items: ["Unique user identification", "Automatic logoff", "Encryption and decryption", "Audit controls and integrity verification"] },
              ].map((group, i) => (
                <div key={i} className="p-5 rounded-xl border border-border">
                  <h4 className="font-semibold text-primary mb-3">{group.label}</h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {group.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* PIPEDA Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-7 h-7 text-primary" />
              <h2 className="text-3xl font-bold">PIPEDA Compliance</h2>
            </div>

            <h3 className="text-xl font-semibold mb-3">What is PIPEDA?</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The Personal Information Protection and Electronic Documents Act (PIPEDA) is Canada's federal
              private-sector privacy law. It governs how organisations collect, use, and disclose personal
              information in the course of commercial activities. Quantyx Global serves Canadian law firms
              and is fully committed to meeting all ten Fair Information Principles under PIPEDA.
            </p>

            <h3 className="text-xl font-semibold mb-4">The Ten PIPEDA Principles — How We Comply</h3>
            <div className="space-y-3 mb-8">
              {[
                { num: "01", title: "Accountability", desc: "We have designated a Privacy Officer responsible for our compliance with PIPEDA and for handling all privacy-related inquiries and complaints." },
                { num: "02", title: "Identifying Purposes", desc: "We identify and document the purposes for which personal information is collected before or at the time of collection." },
                { num: "03", title: "Consent", desc: "We obtain meaningful consent from individuals for the collection, use, or disclosure of their personal information, except where not required by law." },
                { num: "04", title: "Limiting Collection", desc: "We collect only the personal information necessary for the identified purposes, using fair and lawful means." },
                { num: "05", title: "Limiting Use, Disclosure & Retention", desc: "Personal information is used or disclosed only for the purposes for which it was collected and is retained only as long as necessary." },
                { num: "06", title: "Accuracy", desc: "We take reasonable steps to ensure personal information is accurate, complete, and up-to-date for its intended use." },
                { num: "07", title: "Safeguards", desc: "We protect personal information with security safeguards appropriate to the sensitivity of the information, including encryption, access controls, and audit logging." },
                { num: "08", title: "Openness", desc: "Our privacy policies and practices are available to anyone upon request. This page forms part of that commitment." },
                { num: "09", title: "Individual Access", desc: "Upon request, individuals can access their personal information held by us and challenge its accuracy and completeness." },
                { num: "10", title: "Challenging Compliance", desc: "Individuals may direct complaints about our privacy practices to our Privacy Officer. We investigate all complaints and take corrective action where warranted." },
              ].map((p, i) => (
                <div key={i} className="flex gap-5 p-5 rounded-xl border border-border hover:border-primary/30 transition-colors">
                  <span className="text-2xl font-bold text-primary/30 flex-shrink-0 w-10">{p.num}</span>
                  <div>
                    <h4 className="font-semibold mb-1">{p.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Data Handling */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">How We Handle Your Data</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Database className="w-6 h-6" />, title: "Storage", desc: "All data is stored on AWS S3 with server-side AES-256 encryption. Supabase PostgreSQL databases use row-level security and encrypted connections." },
                { icon: <Lock className="w-6 h-6" />, title: "Transmission", desc: "All data in transit is protected by TLS 1.3. We do not transmit PHI over unencrypted channels under any circumstances." },
                { icon: <Eye className="w-6 h-6" />, title: "Access", desc: "Access to client data is strictly role-based. Employees access only what is required for their specific task. All access is logged and audited." },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-primary/5 border border-primary/20 text-center">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white" style={{ background: 'var(--gradient-primary)' }}>
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Breach Response */}
          <section className="mb-16 p-8 rounded-2xl bg-muted/40 border border-border">
            <h2 className="text-2xl font-bold mb-4">Breach Response Policy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In the unlikely event of a data breach involving PHI or personal information, Quantyx Global will:
            </p>
            <ul className="space-y-3">
              {[
                "Contain and assess the breach immediately upon discovery",
                "Notify affected clients within 72 hours of confirming a breach",
                "Notify affected individuals and relevant regulators as required by HIPAA and PIPEDA",
                "Provide a full incident report detailing the nature, scope, and remediation steps taken",
                "Implement corrective measures to prevent recurrence",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Contact */}
          <section className="p-8 rounded-2xl text-center" style={{ background: 'var(--gradient-hero)' }}>
            <h2 className="text-2xl font-bold mb-3">Privacy Questions or Concerns?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you have any questions about our HIPAA or PIPEDA compliance practices, wish to exercise your
              privacy rights, or need to report a concern, please contact our Privacy Officer directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm mb-6">
              <div className="px-6 py-3 rounded-xl bg-primary/10 border border-primary/20">
                <span className="font-semibold text-primary">Privacy: </span>
                <a href="mailto:privacy@quantyxg.com" className="text-muted-foreground hover:text-primary transition-colors">privacy@quantyxg.com</a>
              </div>
              <div className="px-6 py-3 rounded-xl bg-primary/10 border border-primary/20">
                <span className="font-semibold text-primary">General: </span>
                <a href="mailto:contact@quantyxg.com" className="text-muted-foreground hover:text-primary transition-colors">contact@quantyxg.com</a>
              </div>
            </div>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>
                <a href="tel:+917075184488" className="text-primary hover:underline">+91 70751 84488</a> (India) &nbsp;|&nbsp;
                <a href="tel:+61452257129" className="text-primary hover:underline">+61 452 257 129</a> (Australia) &nbsp;|&nbsp;
                <a href="tel:+15129314563" className="text-primary hover:underline">+1 (512) 931-4563</a> (USA)
              </p>
              <p>#204, B Block, Old Grand World Road, Smart City Tirupati, Andhra Pradesh – 517501, India</p>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HipaaPipedaCompliance;
