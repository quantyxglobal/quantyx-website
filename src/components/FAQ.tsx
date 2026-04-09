import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What makes Quantyx Global different from traditional medico-legal services?",
      answer: "We combine AI-powered technology with expert medical and legal knowledge to deliver faster, more accurate, and comprehensive medico-legal services. Our platform can process complex medical records in a fraction of the time while maintaining the highest standards of accuracy."
    },
    {
      question: "How quickly can you deliver medical chronologies and reports?",
      answer: "Our AI-powered platform significantly reduces turnaround times. Most medical chronologies are completed within 24-48 hours, while complex cases may take 3-5 business days. Rush services are available for urgent cases."
    },
    {
      question: "What types of cases do you handle?",
      answer: "We specialize in personal injury cases, medical malpractice, workers' compensation, product liability, and other medico-legal matters. Our services include medical chronologies, narrative summaries, expert analysis, and case evaluations."
    },
    {
      question: "Are your reports admissible in court?",
      answer: "Yes, our reports are prepared to meet legal standards and are designed to be admissible in court proceedings. Our team includes qualified medical and legal professionals who ensure all documentation meets required standards."
    },
    {
      question: "How do you ensure the accuracy of your AI-powered analysis?",
      answer: "All AI-generated content undergoes rigorous review by our expert medical and legal professionals. We use multiple quality assurance checkpoints and have developed proprietary algorithms specifically for medico-legal analysis."
    },
    {
      question: "What security measures do you have in place for sensitive medical information?",
      answer: "We maintain HIPAA compliance and use enterprise-grade security measures including encrypted data transmission, secure cloud storage, and strict access controls. All team members undergo background checks and sign confidentiality agreements."
    },
    {
      question: "Do you provide expert witness services?",
      answer: "Yes, we have a network of qualified medical experts who can provide expert witness testimony. Our experts have extensive experience in their respective medical fields and courtroom testimony."
    },
    {
      question: "How do you handle large volumes of medical records?",
      answer: "Our AI-powered platform is designed to efficiently process large volumes of medical records. We can handle cases with thousands of pages of medical documentation while maintaining accuracy and quick turnaround times."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'var(--gradient-subtle)' }}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about our AI-powered medico-legal services
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-primary/20 rounded-xl px-6 bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;