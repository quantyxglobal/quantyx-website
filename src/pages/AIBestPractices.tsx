import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Brain, Shield, Eye, Server, CheckCircle, Users, Lock, Workflow } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AIBestPractices = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Brain className="w-16 h-16 mx-auto mb-4 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
                  Our AI Approach
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Responsible AI integration with local processing and human oversight
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                At Quantyx Global, we leverage artificial intelligence to enhance our medico-legal services while maintaining the highest standards of data privacy, security, and professional quality. Our AI implementation follows industry best practices to ensure your sensitive information never leaves your control.
              </p>
            </div>
          </div>
        </section>

        {/* Key Principles */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our AI Implementation Principles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <Server className="w-10 h-10 text-primary mb-2" />
                    <CardTitle className="text-lg">Local Processing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      AI models run on our secure local infrastructure, ensuring data never leaves our systems
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <Eye className="w-10 h-10 text-primary mb-2" />
                    <CardTitle className="text-lg">Human Oversight</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Every AI-generated output is reviewed and validated by qualified medical professionals
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <Shield className="w-10 h-10 text-primary mb-2" />
                    <CardTitle className="text-lg">Data Privacy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      HIPAA-compliant processes with zero external data transmission to third-party AI services
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <CheckCircle className="w-10 h-10 text-primary mb-2" />
                    <CardTitle className="text-lg">Quality Assurance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Multi-layer verification ensures accuracy and reliability of all deliverables
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Local LLM Infrastructure */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <Server className="w-12 h-12 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Local LLM Infrastructure</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We deploy large language models (LLMs) on our own secure, on-premises infrastructure. This approach provides several critical advantages:
                  </p>
                </div>
              </div>

              <div className="space-y-6 ml-16">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Complete Data Control</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Your sensitive medical records and case information never leave our secure environment. Unlike cloud-based AI services that transmit data to external servers, our local LLMs process everything within our HIPAA-compliant infrastructure.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">No Third-Party Access</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We do not use external AI APIs from providers like OpenAI, Anthropic, or Google. This eliminates the risk of your data being used for model training, stored on external servers, or accessed by third parties.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Customized Models</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our local LLMs are fine-tuned specifically for medico-legal applications, providing superior accuracy for medical terminology, legal standards, and case analysis compared to general-purpose AI services.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Regulatory Compliance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Local processing ensures full compliance with HIPAA, state privacy laws, and professional confidentiality requirements. We maintain complete audit trails and data governance controls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Human-in-the-Loop */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <Users className="w-12 h-12 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Human-in-the-Loop Quality Control</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    AI augments our capabilities but never replaces human expertise. Every deliverable undergoes rigorous human review:
                  </p>
                </div>
              </div>

              <div className="space-y-6 ml-16">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">AI-Assisted Analysis</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our local LLMs process medical records to identify key information, extract relevant data points, and generate initial drafts of chronologies, summaries, and analyses.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Medical Professional Review</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Qualified medical professionals review all AI-generated content for accuracy, completeness, and clinical appropriateness. They verify medical terminology, validate clinical interpretations, and ensure proper context.
                    </p>
                  </div>
                </div>


                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Quality Assurance Check</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      A final quality assurance review verifies consistency, accuracy, and completeness before delivery. This includes cross-referencing source documents and validating all citations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Applications */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-6">How We Use AI in Our Services</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Workflow className="w-6 h-6 text-primary" />
                    Medical Chronology Development
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    AI assists in extracting dates, events, and medical findings from records. Human reviewers verify accuracy, add clinical context, and ensure proper chronological organization.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Workflow className="w-6 h-6 text-primary" />
                    Document Summarization
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    AI generates initial summaries of lengthy medical records. Medical professionals review and refine these summaries to ensure clinical accuracy and highlight legally relevant information.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Workflow className="w-6 h-6 text-primary" />
                    Medical Terminology Standardization
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    AI helps identify and standardize medical terminology across documents. Human experts verify clinical appropriateness and ensure proper medical coding.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Workflow className="w-6 h-6 text-primary" />
                    Pattern Recognition
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    AI identifies patterns in treatment timelines, medication regimens, and diagnostic findings. Medical professionals interpret these patterns within clinical and legal contexts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <Lock className="w-12 h-12 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Security and Privacy Measures</h2>
                </div>
              </div>

              <div className="space-y-4 ml-16">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Encrypted Infrastructure:</span> All data is encrypted at rest and in transit within our secure environment
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Access Controls:</span> Strict role-based access controls limit data exposure to authorized personnel only
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Audit Trails:</span> Comprehensive logging of all AI processing and human review activities
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Data Isolation:</span> Each case is processed in isolated environments to prevent cross-contamination
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">No Model Training on Client Data:</span> Your data is never used to train or improve our AI models
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transparency */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-6">Transparency and Disclosure</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  We believe in complete transparency about our AI usage. All deliverables clearly indicate which portions involved AI assistance, and we provide detailed documentation of our review processes upon request.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our clients receive the same level of professional expertise and quality regardless of whether AI tools were used in the process. AI serves as an efficiency enhancer, not a replacement for human judgment and expertise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Commitment to Responsible AI</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Quantyx Global, we are committed to using AI technology responsibly, ethically, and in full compliance with all applicable regulations. We continuously evaluate and improve our AI practices to ensure they serve our clients' best interests while maintaining the highest standards of data privacy and professional quality.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIBestPractices;
