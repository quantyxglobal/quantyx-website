import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Shield,
  CheckCircle,
  FileText,
  Users,
  Brain,
  TrendingUp,
  Stethoscope,
  Phone,
  Mail,
} from "lucide-react";

const services = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Medical Chronology",
    desc: "Comprehensive chronologies for CTP, WorkCover, and PI matters across NSW, VIC, QLD, WA, and SA. Every record reviewed, every event captured.",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Independent Medico-Legal Reports (IMR)",
    desc: "Structured independent medico-legal reports covering causation, diagnosis, treatment, and prognosis — formatted for Australian legal proceedings.",
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: "Narrative Medical Summary",
    desc: "Clear, diagnosis-driven narratives that translate complex medical records into accessible summaries for solicitors, adjusters, and tribunals.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Medical Expenses Analysis",
    desc: "Detailed analysis and categorisation of past and future medical expenses, including treatment costs, therapy, and equipment projections.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Life Care Plans",
    desc: "Pre-LCP medical analysis and cost aggregation for catastrophic injury matters, supporting structured settlement and damages assessment.",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Medico-Legal Demand Support",
    desc: "Medically supported demand documentation for CTP and PI matters, with precise referencing and damages calculation.",
  },
];

const privacyItems = [
  "Compliant with APPs 1–13 of the Privacy Act 1988 (Cth)",
  "Sensitive health information handled under APP 3",
  "AES-256 encryption at rest (AWS S3)",
  "Confidentiality agreements signed by all staff",
  "Secure portal upload — no email transmission of health records",
  "Records retained only for the duration of the matter",
  "No onward disclosure to third parties without consent",
  "Full audit trail of every access event",
];

const whyUs = [
  {
    num: "01",
    title: "Purpose-Built for CTP, WorkCover & PI Matters",
    desc: "Deep familiarity with Australian CTP schemes, WorkCover frameworks, and personal injury litigation across all major jurisdictions.",
  },
  {
    num: "02",
    title: "Faster Than Australian Local Providers",
    desc: "Local medico-legal providers typically take 2–4 weeks. We deliver in 3–5 days — without compromising quality.",
  },
  {
    num: "03",
    title: "Specialists Across Pain, Psychiatry, Orthopaedics & More",
    desc: "Our reviewer network covers 20+ medical specialties, including chronic pain, psychiatry, orthopaedics, neurology, and rehabilitation.",
  },
  {
    num: "04",
    title: "Court-Ready, Tribunal-Ready Documentation",
    desc: "Reports are structured for NCAT, WorkCover tribunals, and court proceedings. Formatted to the standards Australian practitioners expect.",
  },
  {
    num: "05",
    title: "Scale Without Adding Headcount",
    desc: "Handle volume spikes without hiring. Our capacity scales with your caseload — from a single matter to a full portfolio.",
  },
  {
    num: "06",
    title: "Transparent Estimate Within 6–8 Hours",
    desc: "Fixed-price estimate within 6–8 hours of submission. Work begins only after your written approval. Invoiced in AUD.",
  },
];

const stats = [
  { value: "3–5 days", label: "Standard turnaround" },
  { value: "24–48h", label: "Urgent delivery available" },
  { value: "24/7", label: "Round the clock case support" },
  { value: "APPs", label: "Privacy compliant" },
];

const LandingAustralia = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Independent Medico-Legal Reports for Australian Law Firms | Quantyx Global"
        description="Privacy Act 1988 compliant medico-legal reports, medical chronologies, and IMRs for Australian law firms and insurers. CTP, WorkCover, and PI specialists. 3–5 day turnaround."
        keywords="medico-legal reports Australia, medical chronology CTP, WorkCover medical review, Privacy Act 1988, independent medical report, personal injury Australia"
        canonical="https://www.quantyxg.com/australia"
        ogTitle="Independent Medico-Legal Reports for Australian Law Firms | Quantyx Global"
        ogDescription="Privacy Act 1988 compliant. CTP & WorkCover experienced. 3–5 day turnaround for Australian law firms and insurers."
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
              Independent Medico-Legal Services — Australia
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent">
                Independent Medico-Legal Reports for Australian Law Firms & Insurers
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Privacy Act 1988 compliant medical record review, chronologies, IMRs, and expert reports — purpose-built for CTP, WorkCover, and personal injury practitioners across Australia.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["Privacy Act 1988 Compliant", "Australian Privacy Principles (APPs)", "CTP & WorkCover Experienced", "3–5 Day Standard TAT"].map((badge) => (
                <span key={badge} className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                  {badge}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link to="/case-upload">
                <Button variant="professional" size="lg" style={{ boxShadow: "var(--shadow-elegant)" }}>
                  Submit a Matter
                </Button>
              </Link>
              <a href="mailto:contact@quantyxg.com">
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                  Request a Sample Report
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <a href="tel:+61452257129" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                +61 452 257 129
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Services for Australian Practitioners</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every report is reviewed by a qualified medical professional and formatted for Australian legal and tribunal proceedings.
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

        {/* Privacy Act Compliance Box */}
        <section className="py-20" style={{ background: "var(--gradient-hero)" }}>
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl p-8 bg-primary/10 border border-primary/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white" style={{ background: "var(--gradient-primary)" }}>
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Privacy Act 1988 & Australian Privacy Principles</h2>
                    <p className="text-sm text-muted-foreground">Our Commitment to Your Clients' Health Information</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {privacyItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/hipaa" className="text-sm font-semibold text-primary hover:underline">
                  View full privacy & security documentation →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Australian Firms Work With Us */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Australian Firms Work With Us</h2>
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
                Independent Medico-Legal Reports — Delivered in 3–5 Days
              </h2>
              <p className="text-white/80 mb-8">
                Submit your matter and receive a fixed-price estimate within 6–8 hours. Invoiced in AUD.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Link to="/case-upload">
                  <Button size="lg" className="bg-white text-primary font-semibold hover:bg-white/90 shadow-lg">
                    Submit a Matter
                  </Button>
                </Link>
                <a href="mailto:contact@quantyxg.com">
                  <Button size="lg" className="bg-transparent border-2 border-white text-white font-semibold hover:bg-white hover:text-primary transition-colors">
                    Request a Sample Report
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
                <a href="tel:+61452257129" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  +61 452 257 129
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
              Quantyx Global Med-Legal Solutions is not a law firm and does not provide legal advice. All reports are medico-legal in nature and are intended to support the work of licensed Australian legal practitioners. Health information is handled in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default LandingAustralia;
