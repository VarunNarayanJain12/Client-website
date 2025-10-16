import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MapPin, Clock } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Clients", href: "#clients" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Info Bar - Hidden on scroll */}
      <div className={`bg-primary text-primary-foreground transition-all duration-300 ${
        isScrolled ? 'h-0 overflow-hidden opacity-0' : 'h-auto opacity-100'
      }`}>
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm">
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-secondary-light transition-colors group">
                <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:info@varunenterprises.com" className="flex items-center gap-2 hover:text-secondary-light transition-colors group">
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>info@varunenterprises.com</span>
              </a>
              <div className="hidden lg:flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, Maharashtra</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90">
              <Clock className="h-4 w-4" />
              <span className="font-medium">Serving Excellence Since 2008</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-border/50' 
          : 'bg-background/95 backdrop-blur-sm border-b border-border/30'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <span className="text-2xl font-bold text-white">VE</span>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  Varun Enterprises
                </span>
                <span className="text-xs text-muted-foreground font-medium">
                  Trading & Tender Solutions
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-6">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="relative text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-all duration-200 group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>
              
              <div className="flex items-center gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Company Profile
                </Button>
                <Button 
                  size="sm" 
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary text-white shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Get Quote
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-foreground" />
                ) : (
                  <Menu className="h-6 w-6 text-foreground" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-xl">
              <div className="px-4 py-6 space-y-1">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-foreground hover:text-primary hover:bg-accent rounded-lg text-base font-medium transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                
                {/* Mobile Contact Info */}
                <div className="pt-4 mt-4 border-t border-border space-y-3">
                  <div className="flex items-center gap-3 px-4 py-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>info@varunenterprises.com</span>
                  </div>
                  
                  {/* Mobile CTA Buttons */}
                  <div className="px-4 pt-4 space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Company Profile
                    </Button>
                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-secondary text-white"
                    >
                      Get Quote
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navigation;