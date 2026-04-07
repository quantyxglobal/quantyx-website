import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText, Stethoscope, Brain, Heart, Eye, Check, FileCheck, Link as LinkIcon, BookOpen, Activity, Users, TrendingUp, Calendar, Clock, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Interactive Animation Components for each service
const ChronologyAnimation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const events = [
    { date: "Jan 15", event: "Initial Consultation" },
    { date: "Jan 20", event: "Medical Examination" },
    { date: "Feb 05", event: "Treatment Started" },
    { date: "Feb 28", event: "Follow-up Visit" },
    { date: "Mar 15", event: "Recovery Assessment" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % events.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[400px] bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 overflow-hidden">
      <div className="absolute top-4 left-8">
        <Calendar className="w-8 h-8 text-primary animate-pulse" />
      </div>
      <div className="flex flex-col gap-4 mt-16">
        {events.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 transition-all duration-500 ${
              index === activeIndex ? "scale-105 opacity-100" : "scale-100 opacity-50"
            }`}
          >
            <div className={`w-3 h-3 rounded-full ${index <= activeIndex ? "bg-primary" : "bg-muted"} transition-colors duration-500`} />
            <div className={`flex-1 p-3 rounded-lg ${index === activeIndex ? "bg-white shadow-lg" : "bg-white/50"} transition-all duration-500`}>
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-primary">{item.date}</span>
                <span className="text-sm text-foreground">{item.event}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const NarrativeAnimation = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[400px] bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 overflow-hidden">
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-6">
          <FileText className="w-8 h-8 text-primary" />
          <h3 className="text-lg font-semibold">Medical Narrative</h3>
        </div>
        {[1, 2, 3, 4, 5, 6].map((line) => (
          <div key={line} className="space-y-2">
            <div className="h-3 bg-white/60 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-300"
                style={{ width: `${Math.min(100, Math.max(0, progress - (line - 1) * 15))}%` }}
              />
            </div>
          </div>
        ))}
        <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
          <p className="text-sm text-muted-foreground">Translating complex medical data into clear narratives...</p>
        </div>
      </div>
    </div>
  );
};

const DemandLetterAnimation = () => {
  const [stage, setStage] = useState(0);
  const stages = ["Gathering Facts", "Calculating Damages", "Drafting Letter", "Review Complete"];

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev + 1) % stages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[400px] bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 overflow-hidden">
      <div className="flex flex-col items-center justify-center h-full">
        <Heart className="w-16 h-16 text-primary mb-8 animate-pulse" />
        <div className="w-full max-w-sm space-y-4">
          {stages.map((stageName, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg transition-all duration-500 ${
                index === stage ? "bg-white shadow-lg scale-105" : "bg-white/40 scale-100"
              }`}
            >
              <div className="flex items-center gap-3">
                {index < stage ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : index === stage ? (
                  <Clock className="w-5 h-5 text-primary animate-spin" />
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-muted" />
                )}
                <span className={`text-sm font-medium ${index === stage ? "text-foreground" : "text-muted-foreground"}`}>
                  {stageName}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const LifeCarePlanAnimation = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const categories = [
    { name: "Medical Care", value: 85 },
    { name: "Therapy", value: 65 },
    { name: "Equipment", value: 45 },
    { name: "Medications", value: 75 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % categories.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[400px] bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 overflow-hidden">
      <div className="flex items-center gap-3 mb-8">
        <Activity className="w-8 h-8 text-primary" />
        <h3 className="text-lg font-semibold">Life Care Planning</h3>
      </div>
      <div className="space-y-6">
        {categories.map((category, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className={`text-sm font-medium ${index === activeCategory ? "text-primary" : "text-muted-foreground"}`}>
                {category.name}
              </span>
              <span className="text-sm text-muted-foreground">{category.value}%</span>
            </div>
            <div className="h-4 bg-white rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-1000 ${
                  index === activeCategory ? "bg-gradient-to-r from-primary to-primary-glow" : "bg-muted"
                }`}
                style={{ width: `${category.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MedicalOpinionAnimation = () => {
  const [analyzing, setAnalyzing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnalyzing((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[400px] bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 overflow-hidden">
      <div className="flex flex-col items-center justify-center h-full">
        <Brain className={`w-20 h-20 text-primary mb-8 transition-transform duration-1000 ${analyzing ? "scale-110" : "scale-100"}`} />
        <div className="w-full max-w-sm space-y-4">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <p className="text-sm font-semibold text-primary mb-2">Expert Analysis</p>
            <div className="flex gap-2">
              {[1, 2, 3].map((dot) => (
                <div
                  key={dot}
                  className="w-2 h-2 rounded-full bg-primary animate-pulse"
                  style={{ animationDelay: `${dot * 0.2}s` }}
                />
              ))}
            </div>
          </div>
          {!analyzing && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg animate-fade-in">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-green-800">Opinion Ready</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ExpensesAnimation = () => {
  const [total, setTotal] = useState(0);
  const targetTotal = 125000;

  useEffect(() => {
    const interval = setInterval(() => {
      setTotal((prev) => {
        if (prev >= targetTotal) return 0;
        return prev + 2500;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[400px] bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 overflow-hidden">
      <div className="flex flex-col items-center justify-center h-full">
        <TrendingUp className="w-16 h-16 text-primary mb-8" />
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-2">Total Medical Expenses</p>
          <h2 className="text-5xl font-bold text-primary mb-8">
            ${total.toLocaleString()}
          </h2>
        </div>
        <div className="w-full max-w-sm grid grid-cols-2 gap-4">
          {[
            { label: "Treatment", amount: 45000 },
            { label: "Medication", amount: 28000 },
            { label: "Therapy", amount: 32000 },
            { label: "Equipment", amount: 20000 }
          ].map((item, index) => (
            <div key={index} className="p-3 bg-white rounded-lg shadow-sm">
              <p className="text-xs text-muted-foreground">{item.label}</p>
              <p className="text-sm font-semibold text-foreground">${item.amount.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HyperlinksAnimation = () => {
  const [activeLink, setActiveLink] = useState(0);
  const links = ["Page 1", "Page 5", "Page 12", "Page 18", "Page 24"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLink((prev) => (prev + 1) % links.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[400px] bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 overflow-hidden">
      <div className="flex items-center gap-3 mb-8">
        <LinkIcon className="w-8 h-8 text-primary" />
        <h3 className="text-lg font-semibold">Interactive Navigation</h3>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {links.map((link, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg transition-all duration-500 cursor-pointer ${
              index === activeLink
                ? "bg-primary text-white shadow-lg scale-110"
                : "bg-white text-foreground hover:shadow-md"
            }`}
          >
            <div className="flex flex-col items-center gap-2">
              <FileText className="w-6 h-6" />
              <span className="text-sm font-medium">{link}</span>
              {index === activeLink && <ArrowRight className="w-4 h-4 animate-pulse" />}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
        <p className="text-xs text-muted-foreground text-center">Click to navigate instantly between related sections</p>
      </div>
    </div>
  );
};

const BookmarksAnimation = () => {
  const [expandedSection, setExpandedSection] = useState(0);
  const sections = [
    { title: "Office visit", pages: 3 },
    { title: "MRI", pages: 8 },
    { title: "ER record", pages: 15 },
    { title: "Lab results", pages: 6 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setExpandedSection((prev) => (prev + 1) % sections.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[400px] bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 overflow-hidden">
      <div className="flex items-center gap-3 mb-8">
        <BookOpen className="w-8 h-8 text-primary" />
        <h3 className="text-lg font-semibold">Document Structure</h3>
      </div>
      <div className="space-y-3">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg transition-all duration-500 ${
              index === expandedSection ? "bg-white shadow-lg" : "bg-white/60"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${index === expandedSection ? "bg-primary" : "bg-muted"}`} />
                <span className={`text-sm font-medium ${index === expandedSection ? "text-primary" : "text-foreground"}`}>
                  {section.title}
                </span>
              </div>
              <span className="text-xs text-muted-foreground">{section.pages} pages</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MedAWordAnimation = () => {
  const [hoveredTerm, setHoveredTerm] = useState<number | null>(null);
  const terms = [
    { term: "Myocardial Infarction", definition: "Heart Attack" },
    { term: "Cerebrovascular Accident", definition: "Stroke" },
    { term: "Hypertension", definition: "High Blood Pressure" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHoveredTerm((prev) => (prev === null ? 0 : (prev + 1) % terms.length));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[400px] bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8 overflow-hidden">
      <div className="flex items-center gap-3 mb-8">
        <FileCheck className="w-8 h-8 text-primary" />
        <h3 className="text-lg font-semibold">Medical Terminology</h3>
      </div>
      <div className="space-y-6">
        {terms.map((item, index) => (
          <div key={index} className="relative">
            <div
              className={`p-4 rounded-lg transition-all duration-500 ${
                hoveredTerm === index ? "bg-primary text-white shadow-lg" : "bg-white text-foreground"
              }`}
            >
              <p className="text-sm font-semibold mb-2">{item.term}</p>
              {hoveredTerm === index && (
                <div className="mt-2 pt-2 border-t border-white/20 animate-fade-in">
                  <p className="text-sm opacity-90">{item.definition}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
        <p className="text-xs text-muted-foreground text-center">Hover over medical terms for instant translations</p>
      </div>
    </div>
  );
};

const DepositionAnimation = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev >= totalPages ? 1 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[400px] bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 overflow-hidden">
      <div className="flex items-center gap-3 mb-8">
        <Users className="w-8 h-8 text-primary" />
        <h3 className="text-lg font-semibold">Deposition Analysis</h3>
      </div>
      <div className="flex items-center justify-center h-64">
        <div className="relative w-64 h-80 perspective-1000">
          {[...Array(totalPages)].map((_, index) => {
            const pageNum = index + 1;
            const isActive = pageNum === currentPage;
            const offset = (pageNum - currentPage) * 20;
            
            return (
              <div
                key={pageNum}
                className={`absolute inset-0 bg-white rounded-lg shadow-xl transition-all duration-500 p-6 ${
                  isActive ? "z-10" : "z-0"
                }`}
                style={{
                  transform: `translateX(${offset}px) translateY(${offset}px) scale(${isActive ? 1 : 0.95})`,
                  opacity: isActive ? 1 : 0.3
                }}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs text-muted-foreground">Page {pageNum}</span>
                    <span className="text-xs text-primary font-semibold">Key Testimony</span>
                  </div>
                  {[1, 2, 3, 4].map((line) => (
                    <div key={line} className="h-2 bg-muted rounded-full" />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [activeSection, setActiveSection] = useState("medical-chronology");
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const services = [
    {
      id: "medical-chronology",
      icon: <FileText className="w-6 h-6" />,
      title: "Medical Chronology",
      description: "Comprehensive chronological organization of medical records for personal injury cases, creating clear timelines that help legal professionals understand the sequence of medical events. Detailed, error-free chronological summaries designed for litigation clarity.",
      features: [
        "Timeline creation",
        "Flow of events",
        "Medical Record organization",
        "Key event identification",
        "Missing medical records identification"
      ],
      animation: <ChronologyAnimation />
    },
    {
      id: "narrative-summary",
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Narrative Summary",
      description: "Detailed narrative summaries that translate complex medical information into clear, understandable reports for legal proceedings. Diagnosis-driven narratives highlighting causation, liability, and case value.",
      features: [
        "Medical translation",
        "Clear documentation",
        "Expert interpretation",
        "Legal formatting"
      ],
      animation: <NarrativeAnimation />
    },
    {
      id: "demand-letter",
      icon: <Heart className="w-6 h-6" />,
      title: "Demand Letter",
      description: "Professionally crafted demand letters that effectively communicate medical findings and damages to insurance companies and opposing counsel. Persuasive, attorney-ready demand drafts with damages calculation and medical referencing.",
      features: [
        "Professional drafting",
        "Medical support",
        "Compelling presentation",
        "Legal compliance"
      ],
      animation: <DemandLetterAnimation />
    },
    {
      id: "life-care-plan",
      icon: <Activity className="w-6 h-6" />,
      title: "Life Care Plan",
      description: "Pre-LCP medical analysis, cost aggregation, and structured planning assistance. Comprehensive support for developing detailed life care plans.",
      features: [
        "Pre-LCP medical analysis",
        "Cost aggregation",
        "Structured planning assistance",
        "Expert medical consultation",
        "Comprehensive documentation"
      ],
      animation: <LifeCarePlanAnimation />
    },
    {
      id: "medical-opinion",
      icon: <Brain className="w-6 h-6" />,
      title: "Medical Opinion",
      description: "Expert medical opinions and analysis from board-certified physicians for legal proceedings and case evaluation. Authoritative medical assessments that strengthen your legal arguments.",
      features: [
        "Expert analysis",
        "Medical opinions",
        "Professional testimony",
        "Case evaluation"
      ],
      animation: <MedicalOpinionAnimation />
    },
    {
      id: "medical-expenses",
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Medical Expenses Summary",
      description: "Comprehensive analysis and summary of medical expenses related to injury or malpractice claims with future care projections. Detailed financial documentation supporting damages claims.",
      features: [
        "Cost analysis",
        "Expense categorization",
        "Future care projections",
        "Economic impact assessment"
      ],
      animation: <ExpensesAnimation />
    },
    {
      id: "hyperlinks",
      icon: <LinkIcon className="w-6 h-6" />,
      title: "Hyperlinks",
      description: "Embedded, clickable links within medical records that connect related entries, references, and exhibits. Enables seamless navigation, faster cross-referencing, and efficient review for legal and medico-legal use.",
      features: [
        "Click-to-navigate PDFs",
        "Rapid case review",
        "Seamless navigation",
        "Faster cross-referencing",
        "Efficient review"
      ],
      animation: <HyperlinksAnimation />
    },
    {
      id: "bookmarks",
      icon: <BookOpen className="w-6 h-6" />,
      title: "Bookmarks",
      description: "Structured, clickable navigation added to medical records for quick access to key sections, encounters, and exhibits. Enhances document usability, review efficiency, and presentation during legal proceedings.",
      features: [
        "Structured navigation",
        "Quick access to key sections",
        "Enhanced document usability",
        "Review efficiency",
        "Legal presentation support"
      ],
      animation: <BookmarksAnimation />
    },
    {
      id: "med-a-word",
      icon: <FileCheck className="w-6 h-6" />,
      title: "Med-A-Word",
      description: "Plain-language explanations of complex medical terminology directly linked to records and findings. Designed to improve clarity and comprehension for attorneys, adjusters, and non-medical stakeholders during case evaluation and presentation.",
      features: [
        "Plain-language explanations",
        "Medical terminology translation",
        "Improved clarity",
        "Enhanced comprehension",
        "Stakeholder accessibility"
      ],
      animation: <MedAWordAnimation />
    },
    {
      id: "deposition-prep",
      icon: <Users className="w-6 h-6" />,
      title: "Deposition Transcript",
      description: "Accurate, well-organized summaries and issue-focused extracts from deposition transcripts, highlighting key testimony, inconsistencies, and medically relevant opinions to support case strategy and legal review.",
      features: [
        "Tailored summaries",
        "Question frameworks",
        "Key testimony highlights",
        "Inconsistency identification",
        "Case strategy support"
      ],
      animation: <DepositionAnimation />
    }
  ];

  const specializedServices = [
    { name: "Mass Tort Case Reviews", description: "Scalable medical record review and analytical support for high-volume mass tort litigation, including standardized summaries, issue identification, and consistency analysis to ensure efficiency, accuracy, and defensible outcomes." },
    { name: "Customizable special pain charts and medication graphs", description: "Tailored visual charts that track pain medications, dosages, and treatment patterns over time. Designed to clearly demonstrate escalation, frequency, and consistency of pain management for legal, insurance, and medico-legal analysis." },
    { name: "Medical illustrations", description: "Clear, case-specific visual depictions of anatomy, pathology, and surgical procedures. Designed to enhance understanding of complex medical concepts and effectively support case presentations." },
    { name: "Graphical Timeline Summaries", description: "Visually organized timelines that present medical events, treatments, and symptom progression in chronological order. Designed for quick comprehension of complex records, supporting legal review, case strategy, and decision-making." },
    { name: "Pressure ulcer matrix", description: "A structured, date-wise matrix summarizing skin risk assessments, preventive interventions, wound evaluations, and treatment progression. Enables clear tracking of compliance, care gaps, and clinical outcomes for quality review purposes." },
    { name: "Comparison Charts", description: "Side-by-side analytical charts that clearly compare multiple incidents, medical encounters, or timelines. Designed to highlight differences and similarities in injuries, diagnoses, treatment, and outcomes, enabling quick evaluation." },
    { name: "Case Facts & Opinions", description: "A concise, objective summary of accident-related facts and medical opinions, highlighting mechanism of injury, diagnosis, treatment course, and causation." }
  ];

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      // Check special services section first
      const specialElement = sectionsRef.current["special-additional-services"];
      if (specialElement) {
        const { offsetTop, offsetHeight } = specialElement;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection("special-additional-services");
          return;
        }
      }

      // Then check regular services
      for (const service of services) {
        const element = sectionsRef.current[service.id];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(service.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [services]);

  const scrollToSection = (id: string) => {
    const element = sectionsRef.current[id];
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl animate-pulse" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                  Our Services
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
                Comprehensive medico-legal services tailored to support your case with expert analysis and professional documentation.
              </p>
            </div>
          </div>
        </section>

        {/* Three Column Layout */}
        <section className="py-12 relative" style={{ background: 'var(--gradient-subtle)' }}>
          <div className="container mx-auto pl-0 pr-6">
            <div className="grid grid-cols-12 gap-6">
              {/* Left Column - Sticky Navigation */}
              <div className="col-span-12 lg:col-span-3 pl-6">
                <div className="sticky top-24 space-y-1 pl-0">
                  <h3 className="text-base font-bold mb-3 text-primary">Services</h3>
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => scrollToSection(service.id)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg transition-all duration-300 flex items-center gap-2.5 ${
                        activeSection === service.id
                          ? "bg-primary text-white shadow-lg"
                          : "bg-card/50 hover:bg-card text-foreground/70 hover:text-foreground"
                      }`}
                    >
                      <div className={`flex-shrink-0 ${activeSection === service.id ? "text-white" : "text-primary"}`}>
                        {service.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold leading-tight">{service.title}</div>
                      </div>
                    </button>
                  ))}
                  <button
                    onClick={() => scrollToSection('special-additional-services')}
                    className={`w-full text-left px-3 py-2.5 rounded-lg transition-all duration-300 flex items-center gap-2.5 ${
                      activeSection === 'special-additional-services'
                        ? "bg-primary text-white shadow-lg"
                        : "bg-card/50 hover:bg-card text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    <div className={`flex-shrink-0 ${activeSection === 'special-additional-services' ? "text-white" : "text-primary"}`}>
                      <Eye className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold leading-tight">Special Additional Services</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Middle and Right Columns - Alternating Content */}
              <div className="col-span-12 lg:col-span-9 pr-0">
                <div className="space-y-24">
                  {services.map((service, index) => {
                    const isEven = index % 2 === 0;
                    
                    return (
                      <div
                        key={service.id}
                        id={service.id}
                        ref={(el) => (sectionsRef.current[service.id] = el)}
                        className="scroll-mt-32"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                          {/* Content Block */}
                          <div className={`${isEven ? "md:order-1" : "md:order-2"} space-y-6`}>
                            <div>
                              <h2 className="text-3xl font-bold mb-4 text-foreground">
                                {service.title}
                              </h2>
                              <p className="text-muted-foreground leading-relaxed mb-6">
                                {service.description}
                              </p>
                            </div>

                            <div>
                              <h3 className="text-lg font-semibold mb-4 text-primary">Key Features:</h3>
                              <ul className="space-y-3">
                                {service.features.map((feature, featureIndex) => (
                                  <li key={featureIndex} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-foreground/80 leading-relaxed">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Interactive Animation */}
                          <div className={`${isEven ? "md:order-2" : "md:order-1"}`}>
                            {service.animation}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Specialized Additional Services Section */}
                <div 
                  id="special-additional-services"
                  ref={(el) => (sectionsRef.current["special-additional-services"] = el)}
                  className="mt-24 p-8 rounded-2xl bg-primary/5 border border-primary/10 scroll-mt-32"
                >
                  <h2 className="text-3xl font-bold mb-6 text-center">Specialized Additional Services</h2>
                  <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
                    Beyond our core services, we offer specialized solutions tailored to complex case requirements and unique litigation needs.
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {specializedServices.map((service, index) => (
                      <div 
                        key={index} 
                        className="flex flex-col gap-2 p-4 rounded-lg bg-card/50 hover:bg-card transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <span className="text-sm font-semibold text-foreground">{service.name}</span>
                          </div>
                        </div>
                        {service.description && (
                          <p className="text-xs text-muted-foreground leading-relaxed ml-8">{service.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your medico-legal needs and get a custom quote for your case.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button size="lg" className="shadow-lg">
                  Get Instant Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
