import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Lock,
  CheckCircle,
  FileText,
  Users,
  Database,
  Clock,
  Stethoscope,
  Brain,
  TrendingUp,
  Phone,
  Mail,
} from "lucide-react";

const services = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Medical Chronology",
    desc: "Comprehensive, date-ordered chronologies of all medical records. Every visit, diagnosis, treatment, and test — organised for litigation clarity.",
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: "Narrative Summary",
    desc: "Diagnosis-driven narratives that translate complex medical records into clear, attorney-ready summaries highlighting causation and case value.",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Demand Letters",
    desc: "Persuasive, medically supported demand drafts with damages calculation and precise medical referencing for insurance negotiations.",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Medical Opinions",
    desc: "Expert medical opinions from board-reviewed specialists covering causation, standard of care, and prognosis for litigation support.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Life Care Plans",
    desc: "Pre-LCP medical analysis, cost aggregation, and structured planning support for catastrophic injury and long-term care cases.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Deposition Transcripts",
    desc: "Accurate summaries and issue-focused extracts from deposition transcripts, highlighting key testimony and medically relevant opinions.",
  },
];

const hipaaItems = [
  "BAA signed before every engagement",
  "AES-256 encryption at rest (AWS S3)",
  "Role-based access — only assigned reviewer sees records",
  "Secure portal upload — no email transmission of PHI",
  "NDA signed by all staff before accessing records",
  "Complete audit log of every access event",
  "No PHI retained after project completion (purged within 30 days)",
  "Supabase row-level security at the database layer",
];

const whyUs = [
  {
    num: "01",
    title: "3–5 Day Turnaround — Faster Than In-House",
    desc: "Standard delivery in 3–5 days. Rush delivery available in 24–48 hours. Faster than hiring, training, or waiting on in-house staff.",
  },
  {
    num: "02",
    title: "AI-Powered Review, Expert Verified",
    desc: "AI assists with initial analysis and pattern recognition. A qualified medical expert reviews and verifies every output before delivery.",
  },
  {
    num: "03",
    title: "Works With Your Case Management System",
    desc: "Compatible with Clio, Filevine, MyCase, and any system that accepts standard document formats. No workflow disruption.",
  },
  {
    num: "04",
    title: "No Missed Records, No Missed Issues",
    desc: "Systematic review methodology ensures every page is reviewed and every clinically significant finding is captured.",
  },
  {
    num: "05",
    title: "Scalable — From Single Cases to High Volume",
    desc: "Handle one case or one hundred. Our capacity scales with your caseload — no headcount required on your end.",
  },
  {
    num: "06",
    title: "Transparent Estimate Before You Commit",
    desc: "Fixed-price estimate within 6–8 hours of submission. Work begins only after your written approval. No surprises.",
  },
];

const stats = [
  { value: "3–5 days", label: "Standard turnaround" },
  { value: "24–48h", label: "Rush delivery available" },
  { value: "24/7", label: "Round the clock case support" },
  { value: "100%", label: "HIPAA compliant" },
];

const LandingUS = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Medical Chronologies for US Law Firms | HIPAA Compliant | Quantyx Global"
        description="HIPAA-compliant medical chronologies, narrative summaries, demand letters, and expert reports for US personal injury law firms. BAA available. 3–5 day standard turnaround."
        keywords="medical chronology US law firms, HIPAA compliant medical review, demand letter drafting, medical opinion, personal injury medical records"
        canonical="https://www.quantyxg.com/us"
        ogTitle="Medical Chronologies for US Law Firms | HIPAA Compliant | Quantyx Global"
        ogDescription="HIPAA compliant. BAA available. 3–5 day turnaround. Expert medical record review for US personal injury attorneys."
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
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              Serving US Law Firms Nationwide
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent">
                Medical Chronologies & Expert Reports — Delivered in 3–5 Days
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              HIPAA-compliant medical record review, chronologies, narrative summaries, demand letters, and expert opinions — purpose-built for US personal injury and medical malpractice attorneys.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["HIPAA Compliant", "BAA Available", "AI-Powered Analysis", "Board-Reviewed Reports", "3–5 Day Standard TAT"].map((badge) => (
                <span key={badge} className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                  {badge}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link to="/case-upload">
                <Button variant="professional" size="lg" style={{ boxShadow: "var(--shadow-elegant)" }}>
                  Upload Your Case
                </Button>
              </Link>
              <a href="mailto:contact@quantyxg.com">
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                  Request a Free Sample
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <a href="tel:+15129314563" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +1 (512) 931-4563
              </a>
              <a href="mailto:contact@quantyxg.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                contact@quantyxg.com
              </a>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-12 text-white" style={{ background: "var(--gradient-primary)" }}>
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold mb-1">{s.value}</div>
                  <div className="text-sm text-white/80">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Services for US Law Firms</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every service is delivered by a qualified medical professional, verified for accuracy, and formatted for immediate use in litigation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <div key={i} className="p-6 rounded-2xl bg-primary/5 border border-primary/20 hover:border-primary/40 transition-colors shadow-sm">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4" style={{ background: "var(--gradient-primary)" }}>
                    {s.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HIPAA Compliance Box */}
        <section className="py-20" style={{ background: "var(--gradient-hero)" }}>
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl p-8 bg-primary/10 border border-primary/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white" style={{ background: "var(--gradient-primary)" }}>
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">HIPAA Compliance</h2>
                    <p className="text-sm text-muted-foreground">How We Protect Your Clients' Records</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {hipaaItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/hipaa" className="text-sm font-semibold text-primary hover:underline">
                  View full HIPAA & security documentation →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why US Attorneys Choose Quantyx */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why US Attorneys Choose Quantyx</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {whyUs.map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border border-border hover:border-primary/30 transition-colors">
                  <span className="text-3xl font-bold text-primary/20 block mb-3">{item.num}</span>
                  <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 text-white" style={{ background: "var(--gradient-primary)" }}>
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your First Case Review Starts in Minutes
              </h2>
              <p className="text-white/80 mb-8">
                Upload your records and receive a fixed-price estimate within 6–8 hours. No commitment required.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Link to="/case-upload">
                  <Button size="lg" className="bg-white text-primary font-semibold hover:bg-white/90 shadow-lg">
                    Upload Case Records
                  </Button>
                </Link>
                <a href="mailto:contact@quantyxg.com">
                  <Button size="lg" className="bg-transparent border-2 border-white text-white font-semibold hover:bg-white hover:text-primary transition-colors">
                    Request a Free Sample Report
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
                <a href="tel:+15129314563" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  +1 (512) 931-4563
                </a>
                <a href="mailto:contact@quantyxg.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  contact@quantyxg.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 bg-muted/40 border-t border-border">
          <div className="container mx-auto px-6">
            <p className="text-xs text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
              Quantyx Global Med-Legal Solutions is not a law firm and does not provide legal advice or legal opinions. All reports are medico-legal in nature and intended to support the work of licensed attorneys. Protected health information is handled in strict accordance with HIPAA regulations. A Business Associate Agreement is required prior to engagement.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default LandingUS;
