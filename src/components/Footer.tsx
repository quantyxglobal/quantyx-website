import { Phone, Mail, MapPin, Cloud, Database, Shield, Lock, Instagram, Twitter, Linkedin, MessageCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import QuantyxLogo from "@/Quantyx.svg";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    // Navigate to services page
    navigate('/services');
    
    // Wait for navigation to complete, then scroll
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 120;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  return (
    <footer className="bg-gradient-to-r from-purple-600 via-blue-600 to-blue-500 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-500/20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              {/* Logo with Link */}
              <Link
                to="/"
                className="inline-block group transition-all duration-300 hover:scale-105"
                aria-label="Quantyx Global - Return to Home"
              >
                <img 
                  src={QuantyxLogo} 
                  alt="Quantyx Global - Medico-Legal Experts" 
                  className="w-48 h-auto group-hover:opacity-90 transition-opacity duration-300 filter brightness-0 invert group-hover:drop-shadow-lg"
                />
              </Link>
            </div>
            <p className="text-white/90 mb-6 max-w-md text-lg leading-relaxed">
              Medical Chronologies & Expert Reports analyzed by Physicians — Delivered in 3-5 days. HIPAA compliant.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-white/80 hover:text-white transition-colors">
                <Phone className="w-5 h-5 mt-1" />
                <div className="space-y-1">
                  <div className="text-base">+91 70751 84488 <span className="text-sm text-white/60">(India)</span></div>
                  <div className="text-base">+61 452 257 129 <span className="text-sm text-white/60">(Australia)</span></div>
                  <div className="text-base">+1 816-266-2122 <span className="text-sm text-white/60">(USA)</span></div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span className="text-base">contact@quantyxg.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
                <span className="text-base">#204, B Block, Old Grand World Road, Smart City Tirupati, Andhra Pradesh - 517501, India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-5">
            <h4 className="font-bold text-white mb-6 text-lg">Services</h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-white/80">
              <li><button onClick={() => scrollToSection('medical-chronology')} className="hover:text-white transition-colors text-base text-left">Medical Chronology</button></li>
              <li><button onClick={() => scrollToSection('narrative-summary')} className="hover:text-white transition-colors text-base text-left">Narrative Summary</button></li>
              <li><button onClick={() => scrollToSection('demand-letter')} className="hover:text-white transition-colors text-base text-left">Demand Letter</button></li>
              <li><button onClick={() => scrollToSection('life-care-plan')} className="hover:text-white transition-colors text-base text-left">Life Care Plan</button></li>
              <li><button onClick={() => scrollToSection('medical-opinion')} className="hover:text-white transition-colors text-base text-left">Medical Opinion</button></li>
              <li><button onClick={() => scrollToSection('medical-expenses')} className="hover:text-white transition-colors text-base text-left">Medical Expenses</button></li>
              <li><button onClick={() => scrollToSection('hyperlinks')} className="hover:text-white transition-colors text-base text-left">Hyperlinks</button></li>
              <li><button onClick={() => scrollToSection('bookmarks')} className="hover:text-white transition-colors text-base text-left">Bookmarks</button></li>
              <li><button onClick={() => scrollToSection('med-a-word')} className="hover:text-white transition-colors text-base text-left">Med-A-Word</button></li>
              <li><button onClick={() => scrollToSection('deposition-prep')} className="hover:text-white transition-colors text-base text-left">Deposition Transcript</button></li>
              <li className="col-span-2"><button onClick={() => scrollToSection('special-additional-services')} className="hover:text-white transition-colors text-base text-left">Special Additional Services</button></li>
            </ul>
            
            {/* Social Media Links */}
            <div className="mt-8">
              <h5 className="font-semibold text-white mb-4 text-base">Connect With Us</h5>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/quantyx-global-med-legal-solutions-pvt-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label="Connect with us on LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://x.com/Quantyx_Global"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/quantyx_global"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://wa.me/917075184488"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label="Chat with us on WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-6 text-lg">Legal</h4>
            <ul className="space-y-3 text-white/80">
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors text-base">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-white transition-colors text-base">Terms of Service</Link></li>
              <li><Link to="/professional-ethics" className="hover:text-white transition-colors text-base">Professional Ethics</Link></li>
              <li><Link to="/licensing" className="hover:text-white transition-colors text-base">Licensing</Link></li>
              <li><Link to="/hipaa-pipeda-compliance" className="hover:text-white transition-colors text-base">HIPAA & PIPEDA</Link></li>
              <li><Link to="/baa-template" className="hover:text-white transition-colors text-base">BAA Template</Link></li>
            </ul>
          </div>
        </div>

        {/* Trust & Technology Section */}
        <div className="border-t border-white/20 mt-16 pt-12 pb-8">
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-white/60 text-sm mb-6 uppercase tracking-wider">
              Powered by Enterprise-Grade Technology
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* HIPAA Compliance */}
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h5 className="text-white font-semibold mb-2">HIPAA Compliant</h5>
                <p className="text-white/70 text-sm">
                  Protected health information handled with strict compliance standards
                </p>
              </div>

              {/* PIPEDA Compliance */}
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h5 className="text-white font-semibold mb-2">PIPEDA Compliant</h5>
                <p className="text-white/70 text-sm">
                  Canadian privacy law compliance for personal information protection
                </p>
              </div>

              {/* AWS S3 */}
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3">
                  <Cloud className="w-6 h-6 text-white" />
                </div>
                <h5 className="text-white font-semibold mb-2">AWS S3 & SES</h5>
                <p className="text-white/70 text-sm">
                  Secure file storage and reliable email delivery with enterprise-grade AWS infrastructure
                </p>
              </div>

              {/* Supabase */}
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-3">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h5 className="text-white font-semibold mb-2">Supabase Database</h5>
                <p className="text-white/70 text-sm">
                  Real-time PostgreSQL database with row-level security and advanced encryption
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70 text-base">
            © 2026 Quantyx Global. All rights reserved. AI-powered medico-legal expertise.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
