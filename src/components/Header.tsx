import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-primary/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/src/Quantyx.png" alt="Quantix Global - Medico-Legal Experts" className="h-12 object-contain" />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground/80 hover:text-primary transition-all font-medium">Home</Link>
            <Link to="/services" className="text-foreground/80 hover:text-primary transition-all font-medium">Services</Link>
            <Link to="/ai-best-practices" className="text-foreground/80 hover:text-primary transition-all font-medium">Our AI Approach</Link>
            <Link to="/about" className="text-foreground/80 hover:text-primary transition-all font-medium">About</Link>
            <Link to="/contact" className="text-foreground/80 hover:text-primary transition-all font-medium">Contact</Link>
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
              <Button variant="professional" className="shadow-lg hover:text-primary" style={{ boxShadow: 'var(--shadow-elegant)' }}>Get Quote</Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;