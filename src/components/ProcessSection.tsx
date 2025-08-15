import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  FileText, 
  CheckCircle, 
  Send, 
  Monitor, 
  Truck, 
  HandCoins,
  ArrowRight 
} from "lucide-react";

const ProcessSection = () => {
  const processSteps = [
    {
      step: 1,
      icon: Search,
      title: "Opportunity Identification",
      description: "We continuously monitor government portals and corporate announcements to identify relevant tender opportunities that match your capabilities.",
      duration: "1-2 days",
      deliverables: ["Tender alerts", "Opportunity assessment", "Eligibility verification"]
    },
    {
      step: 2,
      icon: FileText,
      title: "Documentation & Preparation",
      description: "Our experts prepare comprehensive tender documents, ensuring all technical and commercial requirements are met with precision.",
      duration: "3-5 days",
      deliverables: ["Technical documentation", "Commercial proposals", "Compliance certificates"]
    },
    {
      step: 3,
      icon: CheckCircle,
      title: "Review & Quality Check",
      description: "Multiple quality checks and reviews are conducted to ensure error-free submissions that maximize your chances of success.",
      duration: "1-2 days",
      deliverables: ["Quality audit", "Final review", "Client approval"]
    },
    {
      step: 4,
      icon: Send,
      title: "Tender Submission",
      description: "Timely submission of bids through appropriate channels, whether online portals or physical submission as per requirements.",
      duration: "Same day",
      deliverables: ["Bid submission", "Acknowledgment receipt", "Submission confirmation"]
    },
    {
      step: 5,
      icon: Monitor,
      title: "Follow-up & Monitoring",
      description: "Continuous monitoring of bid status, attending clarification meetings, and providing additional information as required.",
      duration: "Ongoing",
      deliverables: ["Status updates", "Clarification responses", "Presentation support"]
    },
    {
      step: 6,
      icon: Truck,
      title: "Execution & Delivery",
      description: "Upon winning, we manage the entire supply chain from procurement to delivery, ensuring timely and quality execution.",
      duration: "As per contract",
      deliverables: ["Supply chain management", "Quality assurance", "Timely delivery"]
    },
    {
      step: 7,
      icon: HandCoins,
      title: "Payment & Closure",
      description: "Complete handling of payment processes, warranty claims, and project closure documentation for seamless completion.",
      duration: "1-2 weeks",
      deliverables: ["Payment processing", "Warranty documentation", "Project closure"]
    }
  ];

  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From tender identification to successful delivery - our proven 7-step process 
              ensures maximum success rate and seamless execution of your projects.
            </p>
          </div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Connection Line - Hidden on mobile */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-32 bottom-32 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>

            <div className="space-y-12 lg:space-y-24">
              {processSteps.map((step, index) => (
                <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                  {/* Step Card */}
                  <div className="flex-1 w-full max-w-lg">
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-none">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                            {step.step}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                              {step.title}
                            </h3>
                            <div className="text-sm text-muted-foreground">
                              Duration: {step.duration}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4">
                          {step.description}
                        </p>

                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground text-sm">Key Deliverables:</h4>
                          <ul className="space-y-1">
                            {step.deliverables.map((deliverable, deliverableIndex) => (
                              <li key={deliverableIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                                <CheckCircle className="h-3 w-3 text-success flex-shrink-0" />
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Step Icon - Center for desktop */}
                  <div className="lg:flex-shrink-0 lg:order-none order-first">
                    <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <step.icon className="h-10 w-10 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Arrow or Spacer */}
                  <div className="flex-1 w-full max-w-lg lg:flex lg:justify-center hidden">
                    {index < processSteps.length - 1 && (
                      <ArrowRight className="h-8 w-8 text-muted-foreground" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success Metrics */}
          <div className="mt-20">
            <Card className="bg-gradient-hero border-none">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold text-primary-foreground mb-6">
                  Process Success Metrics
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-primary-foreground mb-2">98%</div>
                    <div className="text-primary-foreground/80 text-sm">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-foreground mb-2">24hrs</div>
                    <div className="text-primary-foreground/80 text-sm">Response Time</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-foreground mb-2">500+</div>
                    <div className="text-primary-foreground/80 text-sm">Completed Projects</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-foreground mb-2">Zero</div>
                    <div className="text-primary-foreground/80 text-sm">Quality Issues</div>
                  </div>
                </div>
                <Button size="lg" className="bg-secondary hover:bg-secondary-light text-secondary-foreground">
                  Start Your Project Today
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;