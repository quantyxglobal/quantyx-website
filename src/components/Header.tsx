import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/Quantyx.png";
import { useState, useRef, useEffect } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [globalDeliveryOpen, setGlobalDeliveryOpen] = useState(false);
  const globalRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (globalRef.current && !globalRef.current.contains(e.target as Node)) {
        setGlobalDeliveryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-primary/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
            <img src={logo} alt="Quantyx Global - Medico-Legal Experts" className="h-12 object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground/80 hover:text-primary transition-all font-medium">Home</Link>
            <Link to="/services" className="text-foreground/80 hover:text-primary transition-all font-medium">Services</Link>

            {/* Global Delivery Dropdown */}
            <div className="relative" ref={globalRef}>
              <button
                className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-all font-medium"
                onClick={() => setGlobalDeliveryOpen(!globalDeliveryOpen)}
              >
                Global Delivery
                <ChevronDown className={`w-4 h-4 transition-transform ${globalDeliveryOpen ? "rotate-180" : ""}`} />
              </button>
              {globalDeliveryOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-background border border-border rounded-xl shadow-lg py-2 z-50">
                  <Link
                    to="/us"
                    className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-primary/5 hover:text-primary transition-colors"
                    onClick={() => setGlobalDeliveryOpen(false)}
                  >
                    <span className="text-base">🇺🇸</span> United States
                  </Link>
                  <Link
                    to="/australia"
                    className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-primary/5 hover:text-primary transition-colors"
                    onClick={() => setGlobalDeliveryOpen(false)}
                  >
                    <span className="text-base">🇦🇺</span> Australia
                  </Link>
                  <Link
                    to="/canada"
                    className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-primary/5 hover:text-primary transition-colors"
                    onClick={() => setGlobalDeliveryOpen(false)}
                  >
                    <span className="text-base">🇨🇦</span> Canada
                  </Link>
                </div>
              )}
            </div>

            {/* Why Trust Us — direct link */}
            <Link to="/hipaa-pipeda-compliance" className="text-foreground/80 hover:text-primary transition-all font-medium">
              Why Trust Us
            </Link>

            <Link to="/about" className="text-foreground/80 hover:text-primary transition-all font-medium">About</Link>
            <Link to="/case-upload" className="text-foreground/80 hover:text-primary transition-all font-medium">Case Upload</Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={import.meta.env.VITE_DASHBOARD_URL || 'http://localhost:3000/login'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-all font-medium"
            >
              Login
            </a>
            <Link to="/quote">
              <Button variant="professional" className="shadow-lg hover:text-primary" style={{ boxShadow: 'var(--shadow-elegant)' }}>
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-primary/10 pt-4">
            <nav className="flex flex-col gap-4">
              <Link to="/" className="text-foreground/80 hover:text-primary transition-all font-medium" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/services" className="text-foreground/80 hover:text-primary transition-all font-medium" onClick={() => setMobileMenuOpen(false)}>Services</Link>

              {/* Global Delivery mobile */}
              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Global Delivery</p>
                <div className="pl-4 flex flex-col gap-2">
                  <Link to="/us" className="text-foreground/80 hover:text-primary text-sm" onClick={() => setMobileMenuOpen(false)}>🇺🇸 United States</Link>
                  <Link to="/australia" className="text-foreground/80 hover:text-primary text-sm" onClick={() => setMobileMenuOpen(false)}>🇦🇺 Australia</Link>
                  <Link to="/canada" className="text-foreground/80 hover:text-primary text-sm" onClick={() => setMobileMenuOpen(false)}>🇨🇦 Canada</Link>
                </div>
              </div>

              <Link to="/hipaa-pipeda-compliance" className="text-foreground/80 hover:text-primary transition-all font-medium" onClick={() => setMobileMenuOpen(false)}>Why Trust Us</Link>
              <Link to="/about" className="text-foreground/80 hover:text-primary transition-all font-medium" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link to="/case-upload" className="text-foreground/80 hover:text-primary transition-all font-medium" onClick={() => setMobileMenuOpen(false)}>Case Upload</Link>
              <a
                href={import.meta.env.VITE_DASHBOARD_URL || 'http://localhost:3000/login'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-all font-medium"
              >
                Login
              </a>
              <Link to="/quote" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="professional" className="w-full shadow-lg" style={{ boxShadow: 'var(--shadow-elegant)' }}>
                  Get Quote
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
