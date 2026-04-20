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
  Mail,
} from "lucide-react";

const services = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Medical Chronology",
    desc: "Comprehensive chronologies for MVA, SABS, and PI matters across Ontario, BC, Alberta, and Quebec. Structured for LAT proceedings and mediation.",
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: "Medical Summary Reports",
    desc: "Clear, diagnosis-driven summaries formatted for LAT proceedings, mediation, and settlement negotiations. Accessible to non-medical stakeholders.",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "IME Support Documentation",
    desc: "Structured documentation to support independent medical examinations, including record summaries, issue identification, and chronological context.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Medical Expenses Analysis",
    desc: "Detailed analysis of past and future medical expenses, including treatment, therapy, medication, and assistive device costs.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Life Care Plans",
    desc: "Pre-LCP medical analysis and cost aggregation for catastrophic injury matters under SABS and tort claims.",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Demand & Settlement Support",
    desc: "Medically supported demand documentation and settlement summaries for MVA, SABS, and personal injury matters.",
  },
];

const complianceItems = [
  "Compliant with PIPEDA (federal private-sector privacy law)",
  "PHIPA controls applied for all Ontario health matters",
  "Explicit consent obtained before processing health records",
  "AES-256 encryption at rest (AWS S3)",
  "Secure portal upload — no email transmission of health records",
  "NDA signed by all staff before accessing records",
  "Records retained only for the duration of the matter",
  "Full audit log of every access event",
];

const whyUs = [
  {
    num: "01",
    title: "Deep Familiarity With the Canadian PI Landscape",
    desc: "Experienced with MVA, SABS, LAT proceedings, ICBC claims, and Alberta tort matters. We understand the frameworks your cases operate within.",
  },
  {
    num: "02",
    title: "Dramatically Faster Than Local Alternatives",
    desc: "Local providers typically take 3–6 weeks. We deliver in 48–72 hours — without compromising the quality your cases require.",
  },
  {
    num: "03",
    title: "PIPEDA + PHIPA Compliant From Day One",
    desc: "Every engagement is structured for PIPEDA compliance. Ontario matters receive PHIPA-specific controls as standard.",
  },
  {
    num: "04",
    title: "Structured for LAT, Mediation & Trial",
    desc: "Reports are formatted for the Licence Appeal Tribunal, mediation, and trial. Structured to the standards Ontario and Canadian practitioners expect.",
  },
  {
    num: "05",
    title: "Scale With Your Caseload — No Headcount Required",
    desc: "Handle volume spikes without hiring. Our capacity scales with your caseload — from a single file to a full portfolio.",
  },
  {
    num: "06",
    title: "Estimate in 2 Hours. No Surprises.",
    desc: "Fixed-price estimate within 2 hours of submission. Work begins only after your written approval. Invoiced in CAD.",
  },
];

const stats = [
  { value: "48–72h", label: "Standard turnaround" },
  { value: "24h", label: "Rush delivery available" },
  { value: "20+", label: "Medical specialties" },
  { value: "PIPEDA + PHIPA", label: "Compliant" },
];

const LandingCanada = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Medical Chronologies for Canadian Law Firms | PIPEDA & PHIPA Compliant | Quantyx Global"
        description="PIPEDA and PHIPA compliant medical chronologies, summaries, and expert reports for Canadian personal injury law firms. MVA, SABS, LAT, ICBC experienced. 48–72 hour turnaround."
        keywords="medical chronology Canada, PIPEDA compliant, PHIPA Ontario, SABS medical review, LAT proceedings, MVA medical records, personal injury Canada"
        canonical="https://www.quantyxg.com/canada"
        ogTitle="Medical Chronologies for Canadian Law Firms | PIPEDA & PHIPA Compliant | Quantyx Global"
        ogDescription="PIPEDA + PHIPA compliant. MVA, SABS & LAT experienced. 48–72 hour turnaround for Canadian personal injury firms."
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
              Medico-Legal Services — Canada
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent">
                Medical Chronologies & Expert Reports for Canadian Personal Injury Firms
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              PIPEDA and PHIPA compliant medical record review, chronologies, summaries, and expert reports — purpose-built for MVA, SABS, and personal injury practitioners across Canada.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["PIPEDA Compliant", "PHIPA (Ontario) Compliant", "MVA & SABS Experienced", "48–72 Hr Standard TAT", "AI-Assisted Review"].map((badge) => (
                <span key={badge} className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                  {badge}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link to="/case-upload">
                <Button variant="professional" size="lg" style={{ boxShadow: "var(--shadow-elegant)" }}>
                  Submit a File
                </Button>
              </Link>
              <a href="mailto:contact@quantyxg.com">
                <Button variant="outline" size="lg">
                  Request a Sample Report
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
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
                  <div className="text-2xl md:text-3xl font-bold mb-1">{s.value}</div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Services for Canadian Practitioners</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every report is reviewed by a qualified medical professional and structured for Canadian legal proceedings, LAT, and mediation.
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

        {/* PIPEDA & PHIPA Compliance Box */}
        <section className="py-20" style={{ background: "var(--gradient-hero)" }}>
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl p-8 bg-primary/10 border border-primary/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white" style={{ background: "var(--gradient-primary)" }}>
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">PIPEDA & PHIPA Compliance</h2>
                    <p className="text-sm text-muted-foreground">How We Handle Your Clients' Health Records</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {complianceItems.map((item, i) => (
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

        {/* Why Canadian Firms Choose Quantyx */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Canadian Firms Choose Quantyx</h2>
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
                Medical Chronologies & Expert Reports — Delivered in 48–72 Hours
              </h2>
              <p className="text-white/80 mb-8">
                Submit your file and receive a fixed-price estimate within 2 hours. Invoiced in CAD.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Link to="/case-upload">
                  <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                    Submit a File
                  </Button>
                </Link>
                <a href="mailto:contact@quantyxg.com">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    Request a Sample Report
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
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
              Quantyx Global Med-Legal Solutions is not a law firm and does not provide legal advice. All reports are medico-legal in nature. Health information is handled in accordance with PIPEDA and Ontario's PHIPA.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default LandingCanada;
