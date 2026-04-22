import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Clock,
  FileText,
  TrendingUp,
  Award,
} from "lucide-react";

const steps = [
  {
    step: "Step 1",
    timing: "Day 1",
    title: "Submit Your Records",
    desc: "Upload your files through the secure portal. Specify the service type and jurisdiction so we can scope the work accurately.",
  },
  {
    step: "Step 2",
    timing: "Within 6-8 hours",
    title: "Receive Your Estimate",
    desc: "You receive a fixed-price, itemised estimate. No ranges, no 'starting from' — one number, fully broken down.",
  },
  {
    step: "Step 3",
    timing: "Your decision",
    title: "Approve & We Begin",
    desc: "Work starts only after your explicit written approval. No surprises, no assumptions.",
  },
  {
    step: "Step 4",
    timing: "3–5 days",
    title: "Expert Review & Drafting",
    desc: "Your matter is assigned to a specialist. AI assists with initial analysis; a qualified expert reviews and verifies every output.",
  },
  {
    step: "Step 5",
    timing: "On delivery",
    title: "Receive Report & Invoice",
    desc: "You receive the completed report and an invoice for the exact amount quoted. Nothing more.",
  },
];

const pricingFactors = [
  {
    factor: "Record volume",
    how: "Primary driver — more pages means more review time",
    example: "200-page vs 2,000-page file",
  },
  {
    factor: "Service type",
    how: "Different services require different depth of analysis",
    example: "Chronology < Narrative < Medical Opinion < Life Care Plan",
  },
  {
    factor: "Medical specialty complexity",
    how: "Complex diagnoses require senior reviewer time",
    example: "Orthopaedic vs neurological injury",
  },
  {
    factor: "Turnaround required",
    how: "Rush (24h) carries a premium, always disclosed upfront",
    example: "Standard 3–5 days vs rush 24–48h rate",
  },
  {
    factor: "Firm template use",
    how: "No extra charge for using your firm's standard format",
    example: "Your firm's standard format",
  },
  {
    factor: "Jurisdiction",
    how: "Canadian SABS / Australian CTP structuring factored into complexity",
    example: "Ontario LAT vs NSW CTP",
  },
];

const estimateIncludes = [
  "Total fixed price in USD, AUD, or CAD",
  "Itemised breakdown by service",
  "Confirmed page count",
  "Confirmed delivery date and time",
  "Rush fee clearly disclosed (if applicable)",
];

const billingCommitments = [
  "Free estimate — always, no exceptions",
  "Fixed price before work begins",
  "Work starts only after your approval",
  "Invoice issued on delivery — not before",
  "No retainers or upfront deposits",
  "No billing for incomplete or rejected work",
  "Rush fee disclosed before you commit",
  "Revision requests handled at no extra cost within scope",
];

const assurances = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Revisions Within Scope",
    subtitle: "No Extra Charge",
    desc: "If a revision falls within the original scope of work, we handle it at no additional cost.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Rush Delivery",
    subtitle: "Always Quoted Upfront",
    desc: "Rush fees are disclosed in your estimate before you approve. You will never be surprised by a rush charge after the fact.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Invoiced in Your Local Currency",
    subtitle: "USD / AUD / CAD",
    desc: "We invoice in the currency of your jurisdiction. No conversion surprises.",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="How Pricing Works | Transparent Fixed-Price Estimates | Quantyx Global"
        description="Quantyx Global provides a free, fixed-price estimate before any work begins. No retainers, no hidden fees, no billing until delivery. Learn how our transparent pricing process works."
        keywords="medico-legal pricing, fixed price estimate, transparent pricing, no hidden fees, medical chronology cost"
        canonical="https://www.quantyxg.com/pricing"
        ogTitle="How Pricing Works | Transparent Fixed-Price Estimates | Quantyx Global"
        ogDescription="Free estimate in 2 hours. Fixed price before work starts. Billed only after delivery."
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
              <Award className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent">
                A Fixed-Price Estimate Before We Touch a Single Page
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              No retainers. No hourly billing. No surprises. You receive a complete, itemised estimate within 6-8 hours of submitting your records — and work begins only after you approve it.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {[
                "Free estimate — no commitment",
                "Fixed price before work starts",
                "Billed only after delivery",
                "No hidden fees",
                "No retainers",
              ].map((badge) => (
                <span key={badge} className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                  {badge}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/case-upload">
                <Button variant="professional" size="lg" style={{ boxShadow: "var(--shadow-elegant)" }} className="bg-primary hover:bg-primary/90 text-white font-semibold">
                  Upload Case Records
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white font-semibold transition-all">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Process Track */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From submission to delivery, every step is transparent and predictable.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {steps.map((s, i) => (
                <div key={i} className="relative p-6 rounded-2xl bg-primary/5 border border-primary/20 hover:border-primary/40 transition-colors">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm mb-4" style={{ background: "var(--gradient-primary)" }}>
                    {i + 1}
                  </div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{s.timing}</p>
                  <h3 className="font-bold text-base mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Factors Table */}
        <section className="py-20" style={{ background: "var(--gradient-hero)" }}>
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What Affects Your Estimate</h2>
                <p className="text-muted-foreground">
                  Six factors determine the price of any engagement. All are disclosed in your estimate.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
                <div className="grid grid-cols-3 bg-primary text-white text-sm font-semibold">
                  <div className="p-4">Factor</div>
                  <div className="p-4">How It Affects Pricing</div>
                  <div className="p-4">Example</div>
                </div>
                {pricingFactors.map((row, i) => (
                  <div key={i} className={`grid grid-cols-3 text-sm border-t border-border ${i % 2 === 0 ? "bg-background" : "bg-primary/5"}`}>
                    <div className="p-4 font-medium">{row.factor}</div>
                    <div className="p-4 text-muted-foreground">{row.how}</div>
                    <div className="p-4 text-muted-foreground italic">{row.example}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What Your Estimate Includes */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What Your Estimate Includes</h2>
                <p className="text-muted-foreground">
                  Every estimate we send contains the same five elements — no ambiguity.
                </p>
              </div>
              <div className="rounded-2xl p-8 text-white" style={{ background: "var(--gradient-primary)" }}>
                <ul className="space-y-4">
                  {estimateIncludes.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-base">
                      <CheckCircle className="w-5 h-5 text-white/80 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Billing Commitments */}
        <section className="py-20" style={{ background: "var(--gradient-hero)" }}>
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Billing Commitments</h2>
                <p className="text-muted-foreground">
                  Eight commitments we make to every client, on every engagement.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {billingCommitments.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Assurances */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Assurances</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {assurances.map((a, i) => (
                <div key={i} className="p-6 rounded-2xl bg-primary/5 border border-primary/20 text-center hover:border-primary/40 transition-colors">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white" style={{ background: "var(--gradient-primary)" }}>
                    {a.icon}
                  </div>
                  <h3 className="font-bold text-base mb-1">{a.title}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{a.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
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
                Get Your Free Estimate in 6-8 Hours
              </h2>
              <p className="text-white/80 mb-8">
                Upload your records and receive a fixed-price, itemised estimate — no commitment required.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/case-upload">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold shadow-lg">
                    Upload Case Records
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold transition-all">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
