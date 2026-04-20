import { Button } from "@/components/ui/button";
import { Shield, Award, Stethoscope, Calculator } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const heroSlides = [
    {
      badge: "First Case on Us — US Law Firms",
      title: "First 500 Pages",
      subtitle: "Free",
      description: "Try Quantyx Global risk-free. Upload your first case — up to 500 pages — and receive a complete physician-reviewed report at no charge. No credit card required.",
      cta: "free",
      smallTitle: false
    },
    {
      badge: "Trusted Medico-Legal Expertise",
      title: "Expert Reports Delivered in",
      subtitle: "24–48 Hours (Rush Delivery)",
      description: "Accurate Medical Chronologies & Expert Reports — Physician-Reviewed. Ready in 3–5 Days standard, 24–48 Hours rush. HIPAA-Compliant.",
      cta: "default",
      smallTitle: true
    },
    {
      badge: "Professional Medical Analysis",
      title: "Comprehensive Medical",
      subtitle: "Documentation",
      description: "Physicians handle every case. AI accelerates the process — organising records, flagging key events, and structuring reports so doctors can focus on what matters: accurate analysis.",
      cta: "default",
      smallTitle: false
    },
    {
      badge: "AI-Assisted. Physician-Verified.",
      title: "Faster Analysis,",
      subtitle: "Human Expertise",
      description: "Our AI processes thousands of pages in minutes — identifying patterns, gaps, and key medical events. Every output is then reviewed and validated by a licensed physician before delivery.",
      cta: "ai",
      smallTitle: false
    },
    {
      badge: "Instant Cost Estimation",
      title: "Get Your Quote",
      subtitle: "Instantly",
      description: "Upload your PDF files and receive precise cost estimates in seconds. No waiting, no phone calls, no meetings required - just instant, transparent pricing for all your medico-legal services.",
      cta: "quote",
      smallTitle: false
    }
  ];



  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(timer);
    }
  }, [heroSlides.length, isPaused]);

  const currentHero = heroSlides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      {/* Background decoration with elegant glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-glow/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div
          className="max-w-4xl mx-auto text-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Badge with animation */}
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-8 shadow-lg transition-all duration-500" style={{ boxShadow: 'var(--shadow-elegant)' }}>
            {currentHero.cta === 'quote' ? (
              <Calculator className="w-4 h-4 text-primary" />
            ) : currentHero.cta === 'free' ? (
              <Award className="w-4 h-4 text-primary" />
            ) : (
              <Shield className="w-4 h-4 text-primary" />
            )}
            <span className="text-sm font-semibold text-foreground">
              {currentHero.badge}
            </span>
          </div>

          {/* Main heading with carousel animation */}
          <div className={`relative mb-6 ${currentHero.smallTitle ? 'h-36 md:h-44' : 'h-32 md:h-40'}`}>
            <h1
              key={currentSlide}
              className={`font-bold leading-tight hero-slide-enter ${currentHero.smallTitle ? 'text-4xl md:text-6xl' : 'text-5xl md:text-7xl'}`}
            >
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                {currentHero.title}
              </span>
              <span className="block bg-gradient-to-r from-foreground to-primary/80 bg-clip-text text-transparent">
                {currentHero.subtitle}
              </span>
            </h1>
          </div>

          {/* Subheading with animation */}
          <div className="relative h-24 mb-8">
            <p
              key={`desc-${currentSlide}`}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              {currentHero.description}
            </p>
          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center gap-2 mb-8">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                  ? 'bg-primary scale-125'
                  : 'bg-primary/30 hover:bg-primary/50'
                  }`}
              />
            ))}
          </div>

          {/* CTA Buttons - Dynamic based on current slide */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            {currentHero.cta === 'free' ? (
              <>
                <Link to="/case-upload">
                  <Button size="xl" className="shadow-2xl" style={{ boxShadow: 'var(--shadow-elegant)' }}>
                    Claim Your Free Review
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="xl" className="border-primary/30 hover:border-primary/50 hover:bg-primary/5">
                    View Our Services
                  </Button>
                </Link>
              </>
            ) : currentHero.cta === 'ai' ? (
              <>
                <Link to="/ai-best-practices">
                  <Button size="xl" className="shadow-2xl" style={{ boxShadow: 'var(--shadow-elegant)' }}>
                    Our AI Approach
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="xl" className="border-primary/30 hover:border-primary/50 hover:bg-primary/5">
                    View Our Services
                  </Button>
                </Link>
              </>
            ) : currentHero.cta === 'quote' ? (
              <>
                <Link to="/quote">
                  <Button size="xl" className="shadow-2xl" style={{ boxShadow: 'var(--shadow-elegant)' }}>
                    <Calculator className="w-5 h-5 mr-2" />
                    Get Instant Quote
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="xl" className="border-primary/30 hover:border-primary/50 hover:bg-primary/5">
                    View Our Services
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/quote">
                  <Button size="xl" className="shadow-2xl" style={{ boxShadow: 'var(--shadow-elegant)' }}>
                    Get Quote
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="xl" className="border-primary/30 hover:border-primary/50 hover:bg-primary/5">
                    View Our Services
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Professional Credentials */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center stagger-animation" style={{ animationDelay: '0.6s' }}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg" style={{ boxShadow: 'var(--shadow-glow)' }}>
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-2 text-primary">Physician-Reviewed</h3>
                <p className="text-sm text-muted-foreground">Every report is reviewed and validated by licensed medical professionals — not just generated by software.</p>
              </div>

              <div className="text-center stagger-animation" style={{ animationDelay: '0.7s' }}>
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-amber-500 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-2 text-primary">AI-Accelerated</h3>
                <p className="text-sm text-muted-foreground">AI processes and organises records at speed — so physicians spend their time on analysis, not administration.</p>
              </div>

              <div className="text-center stagger-animation" style={{ animationDelay: '0.8s' }}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg" style={{ boxShadow: 'var(--shadow-glow)' }}>
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-2xl mb-2 text-primary">Court-Ready</h3>
                <p className="text-sm text-muted-foreground">HIPAA-compliant documentation formatted to meet legal standards and court admissibility requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;