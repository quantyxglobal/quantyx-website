import { 
  Shield, 
  Bot, 
  Clock, 
  Zap, 
  UserCheck, 
  Users, 
  Lightbulb, 
  GraduationCap, 
  Headphones 
} from 'lucide-react';
import { WhyChooseItem, DefaultContent } from './types';

export const whyChooseItems: WhyChooseItem[] = [
  {
    id: 'compliance',
    title: 'Compliance (HIPAA)',
    icon: <Shield className="w-8 h-8" />,
    description: 'HIPAA Compliant',
    detailedDescription: 'Full HIPAA compliance ensures your medical data is protected with the highest security standards. Our platform meets all regulatory requirements for handling sensitive medical information, giving you peace of mind that patient privacy is always maintained.'
  },
  {
    id: 'ai-driven',
    title: 'AI-Driven',
    icon: <Bot className="w-8 h-8" />,
    description: 'Advanced AI Technology',
    detailedDescription: 'Our cutting-edge AI technology revolutionizes medical record analysis with unprecedented accuracy and speed. Machine learning algorithms continuously improve our analysis capabilities, delivering insights that traditional methods simply cannot match.'
  },
  {
    id: 'tat',
    title: 'Turn Around Time (TAT)',
    icon: <Clock className="w-8 h-8" />,
    description: 'Fast Delivery',
    detailedDescription: 'Experience industry-leading turnaround times without compromising quality. Our streamlined processes and AI-powered analysis deliver comprehensive medical reports in a fraction of the time required by traditional services.'
  },
  {
    id: 'efficiency',
    title: 'Efficiency',
    icon: <Zap className="w-8 h-8" />,
    description: 'Streamlined Processes',
    detailedDescription: 'Maximize productivity with our optimized workflows and automated systems. Every step of our process is designed for maximum efficiency, reducing administrative burden while maintaining the highest standards of accuracy and thoroughness.'
  },
  {
    id: 'professionalism',
    title: 'Professionalism',
    icon: <UserCheck className="w-8 h-8" />,
    description: 'Expert Standards',
    detailedDescription: 'Our team maintains the highest professional standards in every interaction and deliverable. With rigorous quality controls and expert oversight, we ensure that every report meets the exacting standards required for legal proceedings.'
  },
  {
    id: 'client-focus',
    title: 'Client Focus',
    icon: <Users className="w-8 h-8" />,
    description: 'Dedicated Support',
    detailedDescription: 'Your success is our priority. We provide personalized attention to each case, understanding your unique needs and delivering tailored solutions. Our client-centric approach ensures you receive the support and results you deserve.'
  },
  {
    id: 'innovation',
    title: 'Innovation',
    icon: <Lightbulb className="w-8 h-8" />,
    description: 'Cutting-Edge Solutions',
    detailedDescription: 'Stay ahead with our innovative approach to medical-legal services. We continuously invest in new technologies and methodologies to provide you with the most advanced tools and insights available in the industry.'
  },
  {
    id: 'expertise',
    title: 'Expertise',
    icon: <GraduationCap className="w-8 h-8" />,
    description: 'Medical-Legal Knowledge',
    detailedDescription: 'Benefit from our deep expertise in both medical and legal domains. Our team combines years of medical knowledge with legal acumen to provide comprehensive analysis that bridges the gap between healthcare and law.'
  },
  {
    id: 'support',
    title: 'Support',
    icon: <Headphones className="w-8 h-8" />,
    description: '24/7 Assistance',
    detailedDescription: 'Access comprehensive support whenever you need it. Our dedicated support team is available to assist with questions, provide updates, and ensure your experience with our platform is seamless from start to finish.'
  }
];

export const defaultContent: DefaultContent = {
  title: 'Why Choose Quantix?',
  description: 'A unique blend of efficiency, professionalism, AI-driven accuracy, compliance, and unwavering client focus. Hover over each panel to learn more about our core strengths.',
  cta: 'Get Started'
};