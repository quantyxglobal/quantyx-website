import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Lock,
  Eye,
  FileText,
  Users,
  Database,
  Cloud,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Globe,
  Trash2,
} from "lucide-react";

const pillars = [
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Encryption at Rest & in Transit",
    desc: "All records are encrypted with AES-256 via AWS S3 at rest and TLS 1.3 in transit. PHI is never transmitted over unencrypted channels or by email.",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Role-Based Access Controls",
    desc: "Row-level security ensures only the assigned reviewer can access a given matter. No staff member sees records outside their assigned cases.",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Complete Audit Logging",
    desc: "Every access event is logged with a timestamp and user ID. Logs are immutable and available for review on request.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Business Associate Agreements",
    desc: "A BAA is signed before every US engagement. We can sign your firm's BAA or provide our own template within one business day.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Staff NDAs & Confidentiality",
    desc: "Every staff member signs a comprehensive NDA and confidentiality agreement before accessing any client records.",
  },
  {
    icon: <Trash2 className="w-6 h-6" />,
    title: "Data Retention & Disposal",
    desc: "Records are purged within 30 days of project completion. Secure deletion is confirmed and documented.",
  },
];

const technicalControls = [
  "Secure portal upload only",
  "AES-256 encryption",
  "TLS 1.3 in transit",
  "No third-party sharing",
  "Row-level database security",
  "Multi-factor authentication",
  "Minimum necessary access",
  "No PHI in communications",
  "Incident response policy",
  "Secure delivery of reports",
  "Vendor security assessment",
  "Annual staff training",
];

const infraStack = [
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "AWS S3",
    desc: "AES-256 server-side encryption, HIPAA-eligible, FedRAMP-authorised storage.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "AWS SES",
    desc: "Secure email delivery. No PHI is ever included in outbound communications.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Supabase PostgreSQL",
    desc: "Row-level security enforced at the database layer. Encrypted connections only.",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "TLS 1.3 Encryption",
    desc: "Modern transport layer security for all data in transit between client and server.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Multi-Factor Authentication",
    desc: "MFA is mandatory for all staff accounts. No exceptions.",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Immutable Audit Logs",
    desc: "Tamper-proof, full audit trail of every access event across the platform.",
  },
];

const jurisdictions = [
  {
    flag: "🇺🇸",
    country: "United States",
    law: "HIPAA",
    color: "border-blue-500",
    items: [
      "BAA signed before every engagement",
      "Minimum necessary standard applied",
      "Breach notification within 60 days",
      "AWS HIPAA-eligible infrastructure",
    ],
  },
  {
    flag: "🇦🇺",
    country: "Australia",
    law: "Privacy Act 1988 & APPs",
    color: "border-green-500",
    items: [
      "Sensitive information handled under APP 3",
      "No overseas disclosure without consent",
      "AES-256 encryption at rest",
      "Full audit trail maintained",
    ],
  },
  {
    flag: "🇨🇦",
    country: "Canada",
    law: "PIPEDA + PHIPA",
    color: "border-red-500",
    items: [
      "Explicit consent obtained before processing",
      "PHIPA controls applied for Ontario matters",
      "Minimum necessary collection",
      "Secure portal — no email transmission",
    ],
  },
];

const faqs = [
  {
    q: "Do I need to sign a BAA before sending records?",
    a: "Yes. For US engagements, a signed BAA must be on file before we access any PHI. We can provide our template or sign yours — whichever you prefer.",
  },
  {
    q: "Can I send records by email?",
    a: "No. We do not accept records by email. All files must be uploaded through our secure portal, which uses TLS 1.3 in transit and AES-256 at rest.",
  },
  {
    q: "Who at Quantyx Global can see my clients' records?",
    a: "Only the reviewer assigned to your specific matter. Row-level security at the database layer enforces this — no other staff member can access your files.",
  },
  {
    q: "Are records used to train your AI?",
    a: "No. Client records are never used to train AI models. They are used solely to complete the work you have commissioned.",
  },
  {
    q: "What happens to my records after the project is complete?",
    a: "Records are purged within 30 days of project completion. Secure deletion is confirmed and documented in our audit log.",
  },
  {
    q: "What happens if there is a data breach?",
    a: "We will contain and assess the breach immediately, notify affected clients within 72 hours of confirmation, and notify relevant regulators as required by HIPAA and applicable law. A full incident report will follow.",
  },
  {
    q: "Can I request a copy of your security policies?",
    a: "Yes. Email contact@quantyxg.com and we will provide our security policy documentation under NDA.",
  },
];

const HipaaPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <SEO
        title="HIPAA Compliance & Data Security | Quantyx Global"
        description="Quantyx Global is fully HIPAA, PIPEDA, and Privacy Act 1988 compliant. AES-256 encryption, BAA available, role-based access, and complete audit logging protect your clients' records at every step."
        keywords="HIPAA compliance, PIPEDA, Privacy Act 1988, BAA, AES-256, medical record security, PHI protection"
        canonical="https://www.quantyxg.com/hipaa"
        ogTitle="HIPAA Compliance & Data Security | Quantyx Global"
        ogDescription="Your clients' records are protected at every step. HIPAA compliant, BAA available, AES-256 encryption."
        noindex={false}
      />
      <Header />
      <main className="pt-20">

        {/* Hero */}
        <section className="py-20 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl text-white shadow-lg mb-6" style={{ background: "var(--gradient-primary)" }}>
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent">
                Your Clients' Records Are Protected at Every Step
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Quantyx Global operates under strict HIPAA, PIPEDA, and Privacy Act 1988 compliance frameworks. Every record is encrypted, every access is logged, and every staff member is bound by NDA.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["HIPAA Compliant", "PIPEDA Compliant", "Privacy Act 1988 (AU)", "AWS S3 Encrypted", "BAA Available", "NDA on All Staff"].map((badge) => (
                <span key={badge} className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                  {badge}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/case-upload">
                <Button variant="professional" size="lg" style={{ boxShadow: "var(--shadow-elegant)" }}>
                  Upload Case Records
                </Button>
              </Link>
              <a href="mailto:contact@quantyxg.com">
                <Button variant="outline" size="lg">
                  Request BAA Template
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Six Pillars */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Six Pillars of Data Security</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our security framework is built on six non-negotiable principles that protect your clients' health information at every stage.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((p, i) => (
                <div key={i} className="p-6 rounded-2xl bg-primary/5 border border-primary/20 hover:border-primary/40 transition-colors shadow-sm">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4" style={{ background: "var(--gradient-primary)" }}>
                    {p.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Controls */}
        <section className="py-20" style={{ background: "var(--gradient-hero)" }}>
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Controls</h2>
                <p className="text-muted-foreground">
                  A comprehensive set of technical safeguards applied to every engagement.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {technicalControls.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BAA Process */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">BAA Process</h2>
                <p className="text-muted-foreground">
                  Getting a Business Associate Agreement in place is straightforward and takes less than one business day.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { step: "1", title: "You contact us", desc: "Reach out by email or through the portal. We send our BAA template within one business day." },
                  { step: "2", title: "You review and sign", desc: "Sign our template or provide your firm's own BAA — we will sign either." },
                  { step: "3", title: "Portal access granted", desc: "Once a signed BAA is on file, your secure portal access is activated." },
                  { step: "4", title: "BAA remains in effect", desc: "The agreement covers all future cases — no need to re-sign for each matter." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-5 p-6 rounded-2xl border border-border bg-primary/5 hover:border-primary/30 transition-colors">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0" style={{ background: "var(--gradient-primary)" }}>
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure Stack */}
        <section className="py-20 text-white" style={{ background: "var(--gradient-primary)" }}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Infrastructure Stack</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Enterprise-grade infrastructure purpose-built for HIPAA-eligible workloads.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {infraStack.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/15 transition-colors backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Jurisdiction Compliance */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Jurisdiction Compliance</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We serve law firms across three jurisdictions, each with its own privacy framework.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {jurisdictions.map((j, i) => (
                <div key={i} className={`p-6 rounded-2xl border-l-4 ${j.color} bg-primary/5 border border-primary/20 border-l-4`}>
                  <div className="text-3xl mb-3">{j.flag}</div>
                  <h3 className="font-bold text-lg mb-1">{j.country}</h3>
                  <p className="text-sm text-primary font-medium mb-4">{j.law}</p>
                  <ul className="space-y-2">
                    {j.items.map((item, k) => (
                      <li key={k} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20" style={{ background: "var(--gradient-hero)" }}>
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground">
                  Common questions about how we handle your clients' protected health information.
                </p>
              </div>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="rounded-2xl border border-border bg-background overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-primary/5 transition-colors"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      aria-expanded={openFaq === i}
                    >
                      <span className="font-semibold pr-4">{faq.q}</span>
                      {openFaq === i ? (
                        <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-2xl mx-auto">
              <Globe className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Submit Your First Case Securely?
              </h2>
              <p className="text-muted-foreground mb-8">
                Upload through our secure portal or request a BAA template — we will have everything in place within one business day.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/case-upload">
                  <Button variant="professional" size="lg" style={{ boxShadow: "var(--shadow-elegant)" }}>
                    Upload Case Records
                  </Button>
                </Link>
                <a href="mailto:contact@quantyxg.com">
                  <Button variant="outline" size="lg">
                    Request BAA Template
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default HipaaPage;
