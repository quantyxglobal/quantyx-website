import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Shield, Lock, CheckCircle, FileText, Users, Database, Cloud, Eye, Trash2, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: <Lock className="w-6 h-6" />,
    num: "01",
    title: "Encryption at Rest & in Transit",
    desc: "All files uploaded to our platform are encrypted using AES-256 via AWS S3. Data in transit is protected by TLS 1.3. No record is ever transmitted by email or unencrypted channel.",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    num: "02",
    title: "Role-Based Access Controls",
    desc: "Only the specific reviewer assigned to your case can access your records. We use row-level security on our Supabase PostgreSQL database — no employee can browse records outside their assigned cases.",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    num: "03",
    title: "Complete Audit Logging",
    desc: "Every access event, file upload, download, and processing action is logged with a timestamp and user ID. This creates a full, immutable audit trail — available upon request.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    num: "04",
    title: "Business Associate Agreements",
    desc: "For all US law firm clients, we execute a signed Business Associate Agreement (BAA) before any protected health information is shared. No exceptions, no workarounds.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    num: "05",
    title: "Staff NDAs & Confidentiality",
    desc: "Every member of our team — including all medical reviewers, analysts, and support staff — signs a strict Non-Disclosure Agreement before accessing any client records.",
  },
  {
    icon: <Trash2 className="w-6 h-6" />,
    num: "06",
    title: "Data Retention & Disposal Policy",
    desc: "Records are retained only for the duration of your active engagement. Upon project completion, all uploaded files are purged from our systems within 30 days unless you request otherwise in writing.",
  },
];

const technicalControls = [
  { title: "Secure portal upload only", desc: "No records accepted by email. All files uploaded through our encrypted client portal — zero exposure in transit." },
  { title: "AES-256 encryption", desc: "All stored files encrypted with AES-256 on AWS S3. Encryption keys are managed separately from data." },
  { title: "TLS 1.3 in transit", desc: "All data moving between your browser and our servers is protected by modern TLS encryption — no exceptions." },
  { title: "No third-party sharing", desc: "Your records are never shared with any third party, sub-processor, or AI training system." },
  { title: "Row-level database security", desc: "Our Supabase PostgreSQL database enforces row-level security — users can only access rows they are explicitly authorised to access." },
  { title: "Multi-factor authentication", desc: "All internal staff accounts require MFA. No account can access client records with a password alone." },
  { title: "Minimum necessary access", desc: "Staff access only the specific records required for their assigned task — aligned with HIPAA's minimum necessary standard." },
  { title: "No PHI in communications", desc: "Protected health information is never referenced in emails, chat messages, or any unencrypted communication channel." },
  { title: "Incident response policy", desc: "We maintain a documented breach notification and incident response procedure. Affected clients are notified promptly and in compliance with applicable law." },
  { title: "Secure delivery of reports", desc: "All completed reports are delivered through our secure portal — never as unencrypted email attachments." },
  { title: "Vendor security assessment", desc: "All technology vendors and sub-processors are assessed for compliance before engagement. No non-compliant tools are permitted in our workflow." },
  { title: "Annual staff training", desc: "All staff complete annual privacy and security training covering HIPAA, PIPEDA, and Australian Privacy Principles." },
];

const infraStack = [
  { icon: <Cloud className="w-6 h-6" />, title: "AWS S3", desc: "All files stored in Amazon S3 with server-side AES-256 encryption. AWS S3 is HIPAA-eligible and FedRAMP-authorised — the gold standard for healthcare data storage." },
  { icon: <Shield className="w-6 h-6" />, title: "AWS SES", desc: "All platform email communication uses Amazon SES — a secure, authenticated email infrastructure. No PHI is ever included in outbound email communications." },
  { icon: <Database className="w-6 h-6" />, title: "Supabase PostgreSQL", desc: "Our database uses Supabase with real-time PostgreSQL and row-level security policies. Each user can only access records they are explicitly granted permission to view." },
  { icon: <Lock className="w-6 h-6" />, title: "TLS 1.3 Encryption", desc: "All web traffic is encrypted using TLS 1.3 — the most current and secure transport layer protocol. Older, weaker cipher suites are disabled across our entire platform." },
  { icon: <Users className="w-6 h-6" />, title: "Multi-Factor Authentication", desc: "All staff and client portal accounts are protected by mandatory MFA. Password-only access is not permitted for any account that touches client data." },
  { icon: <FileText className="w-6 h-6" />, title: "Immutable Audit Logs", desc: "Every access event is recorded in tamper-proof logs. Logs capture user ID, timestamp, action, and affected record — providing a complete and defensible audit trail." },
];

const baaSteps = [
  { step: "1", title: "You contact us", desc: "Reach out by email or through the portal. We send our standard BAA template within one business day." },
  { step: "2", title: "You review and sign", desc: "Sign our template or provide your firm's own BAA for us to execute. We accept both. No records are shared until this step is complete." },
  { step: "3", title: "Portal access is granted", desc: "Once the signed BAA is on file, you can upload records securely at any time." },
  { step: "4", title: "The BAA remains in effect", desc: "For all future cases — you only need to sign once unless your firm's requirements change." },
];

const faqs = [
  { q: "Do I need to sign a BAA before sending records?", a: "Yes — for all US law firm clients, a Business Associate Agreement must be executed before any protected health information is shared with us. This is a legal requirement under HIPAA and a standard we enforce without exception. We provide a BAA template, or we can execute your firm's BAA. The process typically takes one business day." },
  { q: "Can I send records by email?", a: "No. We do not accept protected health information by email — this is a firm policy with no exceptions. All records must be uploaded through our secure, encrypted client portal. This protects your clients' information and ensures you remain compliant with your own obligations as a covered entity or business associate." },
  { q: "Who at Quantyx Global can see my clients' records?", a: "Only the specific reviewer assigned to your case. Our database enforces row-level security — meaning that even our own technical team cannot browse client records outside of their assigned cases. Every access event is logged." },
  { q: "Are records used to train your AI?", a: "Absolutely not. Client records are never used for AI training, model improvement, or any purpose beyond delivering your specific case deliverable. This is explicitly prohibited in our data handling policy and in our BAA." },
  { q: "What happens to my records after the project is complete?", a: "All uploaded client records are purged from our systems within 30 days of project completion, unless you request a longer retention period in writing. We do not archive client records indefinitely." },
  { q: "What happens if there is a data breach?", a: "We maintain a documented incident response procedure. In the event of any data security incident, we will notify affected clients promptly and in accordance with applicable breach notification requirements — including HIPAA's 60-day notification rule for US clients." },
  { q: "Can I request a copy of your security policies?", a: "Yes. We are happy to provide our Privacy Policy, Security Policy, and BAA template on request. Contact us at contact@quantyxg.com with the subject line 'Security Documentation Request' and we will respond within one business day." },
];

const pipedaPrinciples = [
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
];

const HipaaPipedaCompliance = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <SEO
        title="HIPAA & PIPEDA Compliance | Data Security | Quantyx Global"
        description="Quantyx Global is fully HIPAA, PIPEDA, and Privacy Act 1988 compliant. AES-256 encryption, BAA available, role-based access, complete audit logging, and staff NDAs protect your clients' records at every step."
        keywords="HIPAA compliance, PIPEDA compliance, Privacy Act 1988, BAA, AES-256, medical record security, PHI protection, data security"
        canonical="https://www.quantyxg.com/hipaa-pipeda-compliance"
        ogTitle="HIPAA & PIPEDA Compliance | Quantyx Global"
        ogDescription="Your clients' records are protected at every step. HIPAA compliant, PIPEDA compliant, BAA available."
      />
      <Header />
      <main className="pt-20">

        {/* Hero */}
        <section className="py-20 relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
                Your Clients' Records Are Protected at Every Step
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Quantyx Global is built on a foundation of strict data security and regulatory compliance. Every case we handle is protected by enterprise-grade infrastructure, robust access controls, and legally binding confidentiality agreements.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["HIPAA Compliant", "PIPEDA Compliant", "Privacy Act 1988 (AU)", "AWS S3 Encrypted", "BAA Available", "NDA on All Staff"].map((badge) => (
                <span key={badge} className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                  {badge}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/case-upload">
                <Button variant="professional" size="lg" style={{ boxShadow: 'var(--shadow-elegant)' }}>Upload Case Records</Button>
              </Link>
              <a href="mailto:contact@quantyxg.com">
                <Button variant="outline" size="lg">Request BAA Template</Button>
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-6">Last updated: April 14, 2026</p>
          </div>
        </section>

        {/* Six Pillars */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Six Pillars of Data Protection</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We don't treat compliance as a checkbox. Every element of our workflow — from upload to delivery to record disposal — is designed to protect your clients' PHI and meet the strictest legal standards across all three jurisdictions we serve.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((p, i) => (
                <div key={i} className="p-6 rounded-2xl bg-primary/5 border border-primary/20 hover:border-primary/40 transition-colors relative">
                  <span className="absolute top-4 right-5 text-3xl font-bold text-primary/10">{p.num}</span>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4" style={{ background: 'var(--gradient-primary)' }}>
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
        <section className="py-20" style={{ background: 'var(--gradient-hero)' }}>
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical & Administrative Controls</h2>
                <p className="text-muted-foreground">These are not policies on paper — they are enforced controls built into our platform architecture and operational workflow.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {technicalControls.map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm mb-1">{item.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
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
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Business Associate Agreement (BAA)</h2>
                <p className="text-muted-foreground">Under HIPAA, any vendor that handles protected health information on behalf of a covered entity must execute a BAA. Quantyx Global executes a BAA with every US law firm before any records are shared.</p>
              </div>
              <div className="space-y-4">
                {baaSteps.map((item) => (
                  <div key={item.step} className="flex gap-5 p-6 rounded-2xl border border-border bg-primary/5 hover:border-primary/30 transition-colors">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0" style={{ background: 'var(--gradient-primary)' }}>
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
        <section className="py-20 text-white" style={{ background: 'var(--gradient-primary)' }}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise-Grade Security Stack</h2>
              <p className="text-white/80 max-w-2xl mx-auto">Our platform is built on the same infrastructure trusted by Fortune 500 companies and major healthcare organisations. Security is the foundation our platform is built on.</p>
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
        <section className="py-20" style={{ background: 'var(--gradient-hero)' }}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Jurisdiction-Specific Compliance</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Our compliance framework is not a single US-centric policy applied globally. We have built specific controls for each jurisdiction — because the privacy laws in the US, Australia, and Canada have meaningful differences.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="p-6 rounded-2xl bg-background border-l-4 border-l-blue-500 border border-border">
                <div className="text-3xl mb-3">🇺🇸</div>
                <h3 className="font-bold text-lg mb-1">United States</h3>
                <p className="text-sm text-primary font-medium mb-4">HIPAA</p>
                <ul className="space-y-2">
                  {["BAA executed before every engagement", "Minimum necessary access enforced", "Breach notification procedures documented", "AWS HIPAA-eligible infrastructure used exclusively"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-background border-l-4 border-l-green-500 border border-border">
                <div className="text-3xl mb-3">🇦🇺</div>
                <h3 className="font-bold text-lg mb-1">Australia</h3>
                <p className="text-sm text-primary font-medium mb-4">Privacy Act 1988 & APPs</p>
                <ul className="space-y-2">
                  {["Health information handled as sensitive information under APP 3", "Collection limited to medico-legal purpose", "No overseas disclosure without consent", "Full audit trail maintained"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-background border-l-4 border-l-red-500 border border-border">
                <div className="text-3xl mb-3">🇨🇦</div>
                <h3 className="font-bold text-lg mb-1">Canada</h3>
                <p className="text-sm text-primary font-medium mb-4">PIPEDA + PHIPA</p>
                <ul className="space-y-2">
                  {["Explicit consent obtained before processing", "PHIPA-specific controls applied for Ontario matters", "Purpose limitation strictly enforced", "Secure portal — no email transmission"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PIPEDA Principles */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <Lock className="w-7 h-7 text-primary" />
              <h2 className="text-3xl font-bold">The Ten PIPEDA Principles — How We Comply</h2>
            </div>
            <div className="space-y-3">
              {pipedaPrinciples.map((p, i) => (
                <div key={i} className="flex gap-5 p-5 rounded-xl border border-border hover:border-primary/30 transition-colors">
                  <span className="text-2xl font-bold text-primary/30 flex-shrink-0 w-10">{p.num}</span>
                  <div>
                    <h4 className="font-semibold mb-1">{p.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20" style={{ background: 'var(--gradient-hero)' }}>
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Security Questions Answered</h2>
              </div>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="rounded-2xl border border-border bg-background overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-primary/5 transition-colors"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span className="font-semibold pr-4">{faq.q}</span>
                      {openFaq === i
                        ? <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                        : <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      }
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

        {/* Contact */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-3">Privacy Questions or Concerns?</h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions about our compliance practices, wish to exercise your privacy rights, or need to report a concern, please contact our Privacy Officer directly.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm mb-6">
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
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default HipaaPipedaCompliance;
