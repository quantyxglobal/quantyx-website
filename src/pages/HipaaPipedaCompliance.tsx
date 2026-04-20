import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Shield, Lock, CheckCircle, FileText, Users, Database, Cloud, Eye, Trash2, ChevronDown, ChevronUp, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Data ────────────────────────────────────────────────────────────────────

const pillars = [
  { icon: <Lock className="w-6 h-6" />, num: "01", title: "Encryption at Rest & in Transit", desc: "All files are encrypted using AES-256 via AWS S3. Data in transit is protected by TLS 1.3. No record is ever transmitted by email or unencrypted channel." },
  { icon: <Eye className="w-6 h-6" />, num: "02", title: "Role-Based Access Controls", desc: "Only the specific reviewer assigned to your case can access your records. Row-level security on our Supabase PostgreSQL database ensures no employee can browse records outside their assigned cases." },
  { icon: <FileText className="w-6 h-6" />, num: "03", title: "Complete Audit Logging", desc: "Every access event, file upload, download, and processing action is logged with a timestamp and user ID — creating a full, immutable audit trail available upon request." },
  { icon: <Shield className="w-6 h-6" />, num: "04", title: "Business Associate Agreements", desc: "For all US law firm clients, we execute a signed BAA before any protected health information is shared. No exceptions, no workarounds." },
  { icon: <Users className="w-6 h-6" />, num: "05", title: "Staff NDAs & Confidentiality", desc: "Every team member — including all medical reviewers, analysts, and support staff — signs a strict Non-Disclosure Agreement before accessing any client records." },
  { icon: <Trash2 className="w-6 h-6" />, num: "06", title: "Data Retention & Disposal", desc: "Records are retained only for the duration of your active engagement. All uploaded files are purged within 30 days of project completion unless you request otherwise in writing." },
];

const technicalControls = [
  { title: "Secure portal upload only", desc: "No records accepted by email. All files uploaded through our encrypted client portal — zero exposure in transit." },
  { title: "AES-256 encryption", desc: "All stored files encrypted with AES-256 on AWS S3. Encryption keys managed separately from data." },
  { title: "TLS 1.3 in transit", desc: "All data moving between your browser and our servers is protected by modern TLS encryption — no exceptions." },
  { title: "No third-party sharing", desc: "Your records are never shared with any third party, sub-processor, or AI training system." },
  { title: "Row-level database security", desc: "Supabase PostgreSQL enforces row-level security — users can only access rows they are explicitly authorised to access." },
  { title: "Multi-factor authentication", desc: "All internal staff accounts require MFA. No account can access client records with a password alone." },
  { title: "Minimum necessary access", desc: "Staff access only the specific records required for their assigned task — aligned with HIPAA's minimum necessary standard." },
  { title: "No PHI in communications", desc: "Protected health information is never referenced in emails, chat messages, or any unencrypted communication channel." },
  { title: "Incident response policy", desc: "Documented breach notification and incident response procedure. Affected clients notified promptly and in compliance with applicable law." },
  { title: "Secure delivery of reports", desc: "All completed reports delivered through our secure portal — never as unencrypted email attachments." },
  { title: "Vendor security assessment", desc: "All technology vendors and sub-processors assessed for compliance before engagement." },
  { title: "Annual staff training", desc: "All staff complete annual privacy and security training covering HIPAA, PIPEDA, and Australian Privacy Principles." },
];

const infraStack = [
  { icon: <Cloud className="w-6 h-6" />, title: "AWS S3", desc: "AES-256 server-side encryption. HIPAA-eligible and FedRAMP-authorised — the gold standard for healthcare data storage." },
  { icon: <Shield className="w-6 h-6" />, title: "AWS SES", desc: "Secure, authenticated email infrastructure. No PHI is ever included in outbound email communications." },
  { icon: <Database className="w-6 h-6" />, title: "Supabase PostgreSQL", desc: "Real-time PostgreSQL with row-level security policies. Each user can only access records they are explicitly granted permission to view." },
  { icon: <Lock className="w-6 h-6" />, title: "TLS 1.3 Encryption", desc: "All web traffic encrypted using TLS 1.3 — the most current and secure transport layer protocol. Older cipher suites are disabled." },
  { icon: <Users className="w-6 h-6" />, title: "Multi-Factor Authentication", desc: "All staff and client portal accounts protected by mandatory MFA. Password-only access is not permitted for any account that touches client data." },
  { icon: <FileText className="w-6 h-6" />, title: "Immutable Audit Logs", desc: "Every access event recorded in tamper-proof logs capturing user ID, timestamp, action, and affected record." },
];

const baaSteps = [
  { step: "1", title: "You contact us", desc: "Reach out by email or through the portal. We send our standard BAA template within one business day." },
  { step: "2", title: "You review and sign", desc: "Sign our template or provide your firm's own BAA for us to execute. We accept both. No records are shared until this step is complete." },
  { step: "3", title: "Portal access is granted", desc: "Once the signed BAA is on file, you can upload records securely at any time." },
  { step: "4", title: "The BAA remains in effect", desc: "For all future cases — you only need to sign once unless your firm's requirements change." },
];

const hipaaFaqs = [
  { q: "Do I need to sign a BAA before sending records?", a: "Yes — for all US law firm clients, a Business Associate Agreement must be executed before any protected health information is shared with us. This is a legal requirement under HIPAA and a standard we enforce without exception. We provide a BAA template, or we can execute your firm's BAA. The process typically takes one business day." },
  { q: "Can I send records by email?", a: "No. We do not accept protected health information by email — this is a firm policy with no exceptions. All records must be uploaded through our secure, encrypted client portal." },
  { q: "Who at Quantyx Global can see my clients' records?", a: "Only the specific reviewer assigned to your case. Our database enforces row-level security — even our own technical team cannot browse client records outside of their assigned cases. Every access event is logged." },
  { q: "Are records used to train your AI?", a: "Absolutely not. Client records are never used for AI training, model improvement, or any purpose beyond delivering your specific case deliverable. This is explicitly prohibited in our data handling policy and in our BAA." },
  { q: "What happens to my records after the project is complete?", a: "All uploaded client records are purged from our systems within 30 days of project completion, unless you request a longer retention period in writing." },
  { q: "What happens if there is a data breach?", a: "We maintain a documented incident response procedure. We will notify affected clients promptly and in accordance with applicable breach notification requirements — including HIPAA's 60-day notification rule for US clients." },
  { q: "Can I request a copy of your security policies?", a: "Yes. Email contact@quantyxg.com with the subject line 'Security Documentation Request' and we will respond within one business day." },
];

const pipedaPrinciples = [
  { num: "01", title: "Accountability", desc: "We have designated a Chief Privacy Officer (CPO) responsible for PIPEDA compliance and all privacy-related inquiries. All staff are trained on PIPEDA obligations upon onboarding and annually. Third-party processors are bound by contractual data protection obligations." },
  { num: "02", title: "Identifying Purposes", desc: "We identify and document the purposes for which personal information is collected at or before the time of collection. Privacy notices are issued at every data collection point. No secondary use of data without renewed consent or legal basis." },
  { num: "03", title: "Consent", desc: "Express consent is obtained for sensitive personal data. Implied consent is used only for non-sensitive data where reasonable. Consent withdrawal mechanisms are provided in all interfaces. Minors under 13 require parental consent." },
  { num: "04", title: "Limiting Collection", desc: "We collect only the information necessary for the identified purposes (data minimization). Collection fields are reviewed and approved by the CPO. Annual data audits identify and eliminate over-collection." },
  { num: "05", title: "Limiting Use, Disclosure & Retention", desc: "Personal information is used or disclosed only for the purposes for which it was collected. A retention schedule is maintained per category of data. Secure deletion or anonymization occurs upon retention expiry. No sale of personal data to third parties." },
  { num: "06", title: "Accuracy", desc: "We take reasonable steps to ensure personal information is accurate, complete, and up-to-date. Clients can update their data via self-service portal. Erroneous data is corrected within 5 business days of report." },
  { num: "07", title: "Safeguards", desc: "Personal information is protected by AES-256 encryption at rest and TLS 1.3 in transit. Multi-factor authentication is required for all staff accessing personal data. Annual penetration testing and quarterly vulnerability scans are conducted. Incident response plan includes 72-hour OPC breach notification capability." },
  { num: "08", title: "Openness", desc: "Our privacy policies and practices are readily available to individuals. Privacy Policy is published on our website in plain language. Privacy notice is provided at point of collection. CPO contact information is publicly accessible." },
  { num: "09", title: "Individual Access", desc: "Upon request, individuals are informed of the existence, use, and disclosure of their personal information and given access to it. Access requests are fulfilled within 30 calendar days. Corrections are made within 15 days of a verified access request." },
  { num: "10", title: "Challenging Compliance", desc: "Individuals may challenge our compliance with PIPEDA to our CPO. A formal complaint process is available on our website. Responses are provided within 30 days. The escalation path to the Office of the Privacy Commissioner of Canada (OPC) is communicated." },
];

const provincialLaws = [
  { province: "Alberta", law: "Personal Information Protection Act (PIPA Alberta)", note: "Applies to provincially regulated private sector" },
  { province: "British Columbia", law: "Personal Information Protection Act (PIPA BC)", note: "Applies to provincially regulated private sector" },
  { province: "Quebec", law: "Law 25 (Act respecting the protection of personal information in the private sector)", note: "Enhanced rights, stricter consent, mandatory PIA, 72-hour breach notification to CAI" },
  { province: "All Other Provinces", law: "PIPEDA applies directly", note: "Federal standard governs" },
];

const breachTimeline = [
  { time: "Hour 0–4", action: "Contain the breach; engage incident response team; preserve evidence" },
  { time: "Hour 4–24", action: "Assess scope, sensitivity of data involved, and real risk of significant harm (RROSH) determination" },
  { time: "Within 72 Hours", action: "Report to Office of the Privacy Commissioner of Canada if RROSH confirmed" },
  { time: "Immediately after OPC report", action: "Notify affected individuals in plain language" },
  { time: "Within 30 Days", action: "Document breach in internal Breach Register (mandatory under PIPEDA)" },
  { time: "Post-Incident", action: "Root cause analysis; remediation; policy update if required" },
];

// ─── Component ────────────────────────────────────────────────────────────────

const HipaaPipedaCompliance = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <SEO
        title="Why Trust Us | HIPAA, PIPEDA & Privacy Act Compliance | Quantyx Global"
        description="Quantyx Global is fully HIPAA, PIPEDA, and Privacy Act 1988 compliant. AES-256 encryption, BAA available, role-based access, complete audit logging, and staff NDAs protect your clients' records at every step."
        keywords="HIPAA compliance, PIPEDA compliance, Privacy Act 1988, BAA, AES-256, medical record security, PHI protection, data security, why trust us"
        canonical="https://www.quantyxg.com/hipaa-pipeda-compliance"
        ogTitle="Why Trust Us | HIPAA, PIPEDA & Privacy Act Compliance | Quantyx Global"
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
              Quantyx Global is built on a foundation of strict data security and regulatory compliance. Every case we handle is protected by enterprise-grade infrastructure, robust access controls, and legally binding confidentiality agreements — across all three jurisdictions we serve.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["HIPAA Compliant", "PIPEDA Compliant", "Privacy Act 1988 (AU)", "AWS S3 Encrypted", "BAA Available", "NDA on All Staff"].map((badge) => (
                <span key={badge} className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">{badge}</span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/case-upload">
                <Button variant="professional" size="lg" style={{ boxShadow: 'var(--shadow-elegant)' }}>Upload Case Records</Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-6">Last updated: April 14, 2026</p>
          </div>
        </section>

        {/* Six Pillars */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Six Pillars of Data Protection</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">We don't treat compliance as a checkbox. Every element of our workflow — from upload to delivery to record disposal — is designed to protect your clients' PHI and meet the strictest legal standards across all three jurisdictions we serve.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((p, i) => (
                <div key={i} className="p-6 rounded-2xl bg-primary/5 border border-primary/20 hover:border-primary/40 transition-colors relative">
                  <span className="absolute top-4 right-5 text-3xl font-bold text-primary/10">{p.num}</span>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4" style={{ background: 'var(--gradient-primary)' }}>{p.icon}</div>
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
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0" style={{ background: 'var(--gradient-primary)' }}>{item.step}</div>
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
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── HIPAA Section ─────────────────────────────────────────────────── */}
        <section className="py-20" style={{ background: 'var(--gradient-hero)' }}>
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{ background: 'var(--gradient-primary)' }}><Shield className="w-5 h-5" /></div>
              <div>
                <h2 className="text-3xl font-bold">HIPAA Compliance</h2>
                <p className="text-sm text-muted-foreground">Health Insurance Portability and Accountability Act — United States</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The Health Insurance Portability and Accountability Act (HIPAA) is a US federal law that establishes national standards for the protection of sensitive patient health information. As a Business Associate to covered entities such as law firms and healthcare providers, Quantyx Global is legally obligated to safeguard all Protected Health Information (PHI) we access, process, or store.
            </p>

            <h3 className="text-xl font-semibold mb-4">HIPAA Security Rule Safeguards</h3>
            <div className="space-y-3 mb-10">
              {[
                { label: "Administrative Safeguards", items: ["Designated Privacy Officer", "Workforce training and supervision", "Contingency planning and disaster recovery", "Regular risk assessments"] },
                { label: "Physical Safeguards", items: ["Facility access controls", "Workstation use policies", "Device and media controls"] },
                { label: "Technical Safeguards", items: ["Unique user identification", "Automatic logoff", "Encryption and decryption", "Audit controls and integrity verification"] },
              ].map((group, i) => (
                <div key={i} className="p-5 rounded-xl border border-border bg-background">
                  <h4 className="font-semibold text-primary mb-3">{group.label}</h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {group.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
            <div className="space-y-3">
              {hipaaFaqs.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-border bg-background overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-primary/5 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-semibold pr-4 text-sm">{faq.q}</span>
                    {openFaq === i ? <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">{faq.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PIPEDA Section ────────────────────────────────────────────────── */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{ background: 'var(--gradient-primary)' }}><Lock className="w-5 h-5" /></div>
              <div>
                <h2 className="text-3xl font-bold">PIPEDA Compliance</h2>
                <p className="text-sm text-muted-foreground">Personal Information Protection and Electronic Documents Act — Canada</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              PIPEDA is Canada's federal private-sector privacy law governing how organisations collect, use, and disclose personal information in the course of commercial activities. Compliance with PIPEDA is mandatory for all organisations handling Canadian personal data, regardless of where the organisation is physically located. Quantyx Global serves Canadian law firms and is fully committed to meeting all ten Fair Information Principles under PIPEDA.
            </p>

            <h3 className="text-xl font-semibold mb-4">The Ten Fair Information Principles</h3>
            <div className="space-y-3 mb-10">
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

            {/* Cross-Border Transfers */}
            <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20 mb-8">
              <h3 className="text-xl font-semibold mb-4">Cross-Border Data Transfer Framework</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                As an India-based organisation handling Canadian personal data, cross-border data transfers are inherent to our operations. PIPEDA does not prohibit cross-border transfers but requires that organisations use contractual or other means to provide comparable protection to the information while it is being processed in other jurisdictions.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { title: "Contractual Safeguards", desc: "All processing agreements include PIPEDA-compliant data protection clauses, purpose limitation, security requirements, and audit rights." },
                  { title: "Technical Safeguards", desc: "End-to-end encryption for all cross-border transfers; VPN-secured access channels for staff accessing Canadian data." },
                  { title: "Organisational Safeguards", desc: "Staff handling Canadian data are trained on PIPEDA requirements; access restricted to need-to-know basis." },
                  { title: "Transparency", desc: "Privacy notices inform individuals that data may be processed in India and subject to Indian law, in addition to PIPEDA protections." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 p-4 rounded-xl bg-background border border-border">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm mb-1">{item.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Breach Protocol */}
            <div className="p-8 rounded-2xl bg-muted/40 border border-border mb-8">
              <h3 className="text-xl font-semibold mb-2">Breach Response Protocol</h3>
              <p className="text-sm text-muted-foreground mb-6">Under PIPEDA Breach of Security Safeguards Regulations (SOR/2018-64), organisations must notify the OPC and affected individuals of any breach that poses a real risk of significant harm. Failure to report carries penalties up to CAD $100,000.</p>
              <div className="space-y-3">
                {breachTimeline.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full flex-shrink-0 min-w-[120px] text-center">{item.time}</span>
                    <p className="text-sm text-muted-foreground leading-relaxed pt-1">{item.action}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Provincial Laws */}
            <h3 className="text-xl font-semibold mb-4">Provincial Privacy Laws</h3>
            <p className="text-sm text-muted-foreground mb-4">While PIPEDA is the federal standard, three provinces have substantially similar legislation. We ensure compliance with all applicable laws:</p>
            <div className="rounded-2xl overflow-hidden border border-border">
              <div className="grid grid-cols-3 bg-primary text-white text-xs font-semibold">
                <div className="p-3">Province / Territory</div>
                <div className="p-3">Applicable Law</div>
                <div className="p-3">Note</div>
              </div>
              {provincialLaws.map((row, i) => (
                <div key={i} className={`grid grid-cols-3 text-sm border-t border-border ${i % 2 === 0 ? "bg-background" : "bg-primary/5"}`}>
                  <div className="p-3 font-medium">{row.province}</div>
                  <div className="p-3 text-muted-foreground">{row.law}</div>
                  <div className="p-3 text-muted-foreground text-xs">{row.note}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
              <strong>Quebec Law 25 Note:</strong> Quebec's Law 25 (fully in force since September 2023) imposes additional requirements including mandatory Privacy Impact Assessments for new systems, 72-hour breach notification to the Commission d'accès à l'information (CAI), and enhanced individual rights. Our operations in Quebec are subject to these additional obligations.
            </p>
          </div>
        </section>

        {/* ─── Privacy Act 1988 (AU) ──────────────────────────────────────────── */}
        <section className="py-20" style={{ background: 'var(--gradient-hero)' }}>
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{ background: 'var(--gradient-primary)' }}><Globe className="w-5 h-5" /></div>
              <div>
                <h2 className="text-3xl font-bold">Privacy Act 1988 & Australian Privacy Principles</h2>
                <p className="text-sm text-muted-foreground">Privacy Act 1988 (Cth) — Australia</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs) govern how organisations collect, use, and disclose personal information in Australia. Quantyx Global treats all health information as sensitive information under APP 3 and applies the highest standards of collection, storage, and access control for all Australian matters.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: "Compliant with APPs 1–13", desc: "All 13 Australian Privacy Principles are implemented across our platform and operational workflow." },
                { title: "Sensitive information under APP 3", desc: "Health information is handled as sensitive information — requiring explicit consent for collection and use." },
                { title: "AES-256 encryption via AWS S3", desc: "All Australian client data stored with server-side AES-256 encryption on HIPAA-eligible AWS infrastructure." },
                { title: "Confidentiality agreements", desc: "All reviewing medical experts and staff sign confidentiality agreements before accessing Australian client records." },
                { title: "Secure upload portal", desc: "No record sharing by email. All files uploaded through our encrypted portal — zero exposure in transit." },
                { title: "Records retained for matter duration only", desc: "Records are retained only for the duration of the active matter and purged within 30 days of completion." },
                { title: "No onward disclosure without authorisation", desc: "No disclosure to third parties without written authorisation from the instructing firm." },
                { title: "Full audit trail", desc: "Complete audit trail of all access and processing activity — available upon request." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm mb-1">{item.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Jurisdiction Summary */}
            <h3 className="text-xl font-semibold mb-4">Compliance Across All Three Jurisdictions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-background border-l-4 border-l-blue-500 border border-border">
                <div className="text-3xl mb-3">🇺🇸</div>
                <h3 className="font-bold text-lg mb-1">United States</h3>
                <p className="text-sm text-primary font-medium mb-4">HIPAA</p>
                <ul className="space-y-2">
                  {["BAA signed before every engagement", "Minimum necessary access enforced", "Breach notification within 60 days", "AWS HIPAA-eligible infrastructure"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-background border-l-4 border-l-green-500 border border-border">
                <div className="text-3xl mb-3">🇦🇺</div>
                <h3 className="font-bold text-lg mb-1">Australia</h3>
                <p className="text-sm text-primary font-medium mb-4">Privacy Act 1988 & APPs</p>
                <ul className="space-y-2">
                  {["Sensitive info handled under APP 3", "No overseas disclosure without consent", "AES-256 encryption at rest", "Full audit trail maintained"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-background border-l-4 border-l-red-500 border border-border">
                <div className="text-3xl mb-3">🇨🇦</div>
                <h3 className="font-bold text-lg mb-1">Canada</h3>
                <p className="text-sm text-primary font-medium mb-4">PIPEDA + PHIPA</p>
                <ul className="space-y-2">
                  {["Explicit consent before processing", "PHIPA controls for Ontario matters", "Purpose limitation enforced", "Secure portal — no email transmission"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
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
                If you have any questions about our compliance practices, wish to exercise your privacy rights, or need to report a concern, please contact us directly.
              </p>
              <div className="flex justify-center text-sm mb-6">
                <div className="px-6 py-3 rounded-xl bg-primary/10 border border-primary/20">
                  <span className="font-semibold text-primary">Email: </span>
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
