import { useEffect, useRef, useState } from "react";
import { Upload, CheckSquare, Search, FileText, Award } from "lucide-react";

const OurProcess = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const processSteps = [
    {
      id: 1,
      icon: Upload,
      title: "Submit Case",
      description: "Upload your medical records and case details through our secure portal. Our AI system begins initial document processing and organization."
    },
    {
      id: 2,
      icon: CheckSquare,
      title: "Preliminary Assessment",
      description: "Our expert team conducts a thorough preliminary review to understand case complexity and determine the optimal analysis approach."
    },
    {
      id: 3,
      icon: Search,
      title: "Expert Review",
      description: "Board-certified medical professionals analyze your case using advanced AI tools to identify key medical issues and chronological events."
    },
    {
      id: 4,
      icon: FileText,
      title: "Draft Report",
      description: "We compile comprehensive reports with detailed analysis, medical chronologies, and expert opinions tailored to your legal needs."
    },
    {
      id: 5,
      icon: Award,
      title: "Final delivery",
      description: "Receive your completed analysis with quality assurance review, ready for legal proceedings with full expert support available."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = stepRefs.current.findIndex(ref => ref === entry.target);
            if (stepIndex !== -1 && !visibleSteps.includes(stepIndex)) {
              setTimeout(() => {
                setVisibleSteps(prev => [...prev, stepIndex]);
              }, stepIndex * 200); // Cascading delay
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    stepRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleSteps]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From case submission to final delivery, our streamlined process ensures accuracy,
            efficiency, and expert analysis at every step.
          </p>
        </div>

        {/* Process Steps - Alternating Edge L-Shape Connections */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              const isVisible = visibleSteps.includes(index);
              const isLast = index === processSteps.length - 1;
              const isLeft = index % 2 === 0; // Alternating sides: 0,2,4 = left, 1,3 = right

              return (
                <div key={step.id} className="relative mb-12 md:mb-16">
                  {/* Orthogonal L-shaped Connector Line */}
                  {!isLast && (
                    <svg
                      className={`hidden md:block absolute transition-all duration-700 ${
                        isVisible && visibleSteps.includes(index + 1)
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-8'
                      }`}
                      style={{
                        position: 'absolute',
                        bottom: '-80px',
                        left: isLeft ? 'calc(50% + 5px)' : 'calc(50% - 405px)',
                        zIndex: 1,
                        transitionDelay: `${index * 200 + 400}ms`,
                        width: '400px',
                        height: '160px'
                      }}
                      viewBox="0 0 400 160"
                    >
                      <defs>
                        <linearGradient id={`flowGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="hsl(262 83% 58%)" />
                          <stop offset="50%" stopColor="hsl(43 96% 56%)" />
                          <stop offset="100%" stopColor="hsl(262 83% 58%)" />
                        </linearGradient>
                        
                        <linearGradient id={`flowAnimation-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="transparent" />
                          <stop offset="20%" stopColor="rgba(255, 255, 255, 0.4)">
                            <animate attributeName="offset" values="-0.2;1" dur="2s" repeatCount="indefinite" begin={`${index * 0.3}s`} />
                          </stop>
                          <stop offset="40%" stopColor="rgba(255, 255, 255, 0.8)">
                            <animate attributeName="offset" values="0;1.2" dur="2s" repeatCount="indefinite" begin={`${index * 0.3}s`} />
                          </stop>
                          <stop offset="60%" stopColor="rgba(255, 255, 255, 0.4)">
                            <animate attributeName="offset" values="0.2;1.4" dur="2s" repeatCount="indefinite" begin={`${index * 0.3}s`} />
                          </stop>
                          <stop offset="80%" stopColor="transparent">
                            <animate attributeName="offset" values="0.4;1.6" dur="2s" repeatCount="indefinite" begin={`${index * 0.3}s`} />
                          </stop>
                        </linearGradient>
                      </defs>
                      
                      <path
                        d={isLeft 
                          ? "M 0 10 L 250 10 L 250 135" 
                          : "M 400 10 L 250 10 L 250 135"
                        }
                        stroke={`url(#flowGradient-${index})`}
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      
                      <path
                        d={isLeft 
                          ? "M 0 10 L 250 10 L 250 135"
                          : "M 400 10 L 250 10 L 250 135"
                        }
                        stroke={`url(#flowAnimation-${index})`}
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="0.9"
                      />
                      
                      <polygon
                        points="245,130 250,140 255,130"
                        fill="hsl(43 96% 56%)"
                      >
                        <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" begin={`${index * 0.3}s`} />
                      </polygon>
                      
                      <circle
                        cx="250"
                        cy="10"
                        r="4"
                        fill="hsl(43 96% 56%)"
                        opacity="0.8"
                      />
                    </svg>
                  )}

                  {/* Step Card Container */}
                  <div
                    ref={el => stepRefs.current[index] = el}
                    className={`process-step transition-all duration-700 hover:scale-[1.03] ${isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                      } ${
                      // Desktop positioning - alternating left/right
                      isLeft
                        ? 'md:flex md:justify-start'
                        : 'md:flex md:justify-end'
                      }`}
                  >
                    {/* Step Card */}
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl hover:border-primary/20 transition-all duration-300 max-w-md w-full md:w-auto relative z-10">
                      {/* Step Icon and Number */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0">
                          <div className="relative">
                            <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl shadow-lg flex items-center justify-center border border-white hover:scale-110 transition-all duration-300 group">
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            {/* Step Number Badge */}
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-white text-primary text-xs font-bold rounded-full flex items-center justify-center border-2 border-primary shadow-md">
                              {step.id}
                            </div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="mb-2">
                            <span className="text-sm font-medium text-slate-400 uppercase tracking-wide">
                              Step {step.id}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-slate-900 mb-3">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Ready to Experience Our Process?
            </h3>
            <p className="text-slate-600 mb-6">
              Get started with your case today and see how our streamlined process
              delivers exceptional results.
            </p>
            <div className="flex justify-center">
              <a
                href="/quote"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors duration-200"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;