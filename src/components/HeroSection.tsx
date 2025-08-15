import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-trading.jpg";

const HeroSection = () => {
  const highlights = [
    { icon: Award, label: "15+ Years", subtitle: "Experience" },
    { icon: Trophy, label: "500+", subtitle: "Tenders Won" },
    { icon: Users, label: "200+", subtitle: "Clients Served" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional trading and tender operations"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Leading the Future of
            <span className="block bg-gradient-to-r from-secondary-light to-primary-light bg-clip-text text-transparent">
              Government & Corporate Trading
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-fade-in">
            Your trusted partner for government tenders, corporate trading, and supply chain solutions. 
            Serving UCIL, BHEL, IOCL, and 200+ prestigious clients nationwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <Button size="lg" className="bg-secondary hover:bg-secondary-light text-secondary-foreground group">
              View Our Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Download Company Profile
            </Button>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-scale-in">
            {highlights.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 mb-4 group-hover:bg-primary-foreground/20 transition-colors">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-primary-foreground mb-1">
                  {item.label}
                </div>
                <div className="text-primary-foreground/80">
                  {item.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;