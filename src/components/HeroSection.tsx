import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Trophy, Download, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-trading.jpg";

const HeroSection = () => {
  const highlights = [
    { icon: Award, label: "15+ Years", subtitle: "Experience" },
    { icon: Trophy, label: "500+", subtitle: "Tenders Won" },
    { icon: Users, label: "200+", subtitle: "Clients Served" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Enhanced Background with Better Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional trading and tender operations - Varun Enterprises"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary-dark/90 to-secondary/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 via-transparent to-transparent"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-24 right-12 w-36 h-36 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-24 left-12 w-52 h-52 bg-primary-light/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10 mt-28">
        <div className="max-w-5xl mx-auto text-center">
          {/* Company Badge */}
          {/* <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-3 mb-6 animate-fade-in">
            <TrendingUp className="h-5 w-5 text-secondary-light" />
            <span className="text-base font-medium text-primary-foreground">Leading Market Position</span>
          </div> */}

          {/* Main Heading - Adjusted size and spacing */}
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-1 leading-normal">
            <span className="block animate-fade-in">Leading the Future of</span>
            <span className="block animate-fade-in">
              Government & Corporate Trading
            </span>
          </h1>

          {/* Enhanced Subtitle - Adjusted spacing */}
          <p className="text-base md:text-lg text-primary-foreground/90 mb-6 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-600">
            Your trusted partner for government tenders, corporate trading, and supply chain solutions.
            <span className="block mt-2 font-medium text-secondary-light text-base">
              Proudly serving UCIL, BHEL, IOCL, and 200+ clients nationwide.
            </span>
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-slide-up animation-delay-900">
            <Button 
              size="default" 
              onClick={() => scrollToSection('services')}
              className="bg-secondary hover:bg-secondary-light text-secondary-foreground group shadow-xl transition-all duration-300 px-6 py-3"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="default" 
              variant="outline" 
              className="border border-white/30 text-primary-foreground hover:bg-white hover:text-primary backdrop-blur-sm bg-white/10 shadow-xl transition-all duration-300 px-6 py-3"
            >
              <Download className="mr-2 h-5 w-5" />
              Company Profile
            </Button>
          </div>

          {/* Trust Indicators and Highlights Combined */}
          <div className="space-y-6 animate-fade-in animation-delay-1200">
            {/* Trust Pills */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/90">
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">ISO Certified</span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">Government Approved</span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">Pan-India Operations</span>
            </div>
            
            {/* Highlight Cards - Horizontal Row */}
            <div className="flex flex-wrap justify-center gap-4 animate-scale-in animation-delay-1200">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="flex-1 min-w-[120px] max-w-[180px] group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-light rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-primary-foreground">
                        {item.label}
                      </div>
                      <div className="text-sm font-medium text-secondary-light">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;