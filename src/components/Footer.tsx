import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Twitter, 
  Facebook,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { name: "Government Tenders", href: "#services" },
      { name: "Corporate Trading", href: "#services" },
      { name: "Legal Documentation", href: "#services" },
      { name: "Logistics & Delivery", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Process", href: "#process" },
      { name: "Clients", href: "#clients" },
      { name: "Careers", href: "#" },
    ],
    resources: [
      { name: "Tender Alerts", href: "#" },
      { name: "Company Profile", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Industry Insights", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Compliance", href: "#" },
      { name: "Sitemap", href: "#" },
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-gradient-hero text-primary-foreground relative">
      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 rounded-full w-12 h-12 bg-secondary hover:bg-secondary-light text-secondary-foreground shadow-lg"
        size="sm"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>

      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">TradeCorp</h2>
              <p className="text-primary-foreground/90 text-lg leading-relaxed">
                Your trusted partner for government tenders and corporate trading solutions. 
                Building bridges between opportunity and success since 2008.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-secondary-light flex-shrink-0" />
                <span className="text-primary-foreground/90">
                  123 Business Tower, Sector 14, Gurgaon, Haryana - 122001
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-secondary-light flex-shrink-0" />
                <a href="tel:+919876543210" className="text-primary-foreground/90 hover:text-secondary-light transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-secondary-light flex-shrink-0" />
                <a href="mailto:info@tradecorp.in" className="text-primary-foreground/90 hover:text-secondary-light transition-colors">
                  info@tradecorp.in
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary-light hover:text-secondary-foreground transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-3">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Services */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-secondary-light">Services</h3>
                <ul className="space-y-2">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-secondary-light">Company</h3>
                <ul className="space-y-2">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-secondary-light">Resources</h3>
                <ul className="space-y-2">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-secondary-light">Legal</h3>
                <ul className="space-y-2">
                  {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-primary-foreground/80 text-sm">
            © 2024 TradeCorp. All rights reserved. | Registered Company No: U12345DL2008PTC123456
          </div>
          <div className="flex items-center gap-6 text-sm text-primary-foreground/80">
            <span>ISO 9001:2015 Certified</span>
            <span>•</span>
            <span>MSME Registered</span>
            <span>•</span>
            <span>Government Approved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;