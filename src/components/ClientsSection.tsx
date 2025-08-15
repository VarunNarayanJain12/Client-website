import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Factory, Zap, Fuel, Users, TrendingUp } from "lucide-react";

const ClientsSection = () => {
  const majorClients = [
    { name: "UCIL", fullName: "Uranium Corporation of India Limited", sector: "Nuclear Energy" },
    { name: "BHEL", fullName: "Bharat Heavy Electricals Limited", sector: "Power Equipment" },
    { name: "IOCL", fullName: "Indian Oil Corporation Limited", sector: "Oil & Gas" },
    { name: "ONGC", fullName: "Oil and Natural Gas Corporation", sector: "Oil & Gas" },
    { name: "NTPC", fullName: "National Thermal Power Corporation", sector: "Power Generation" },
    { name: "SAIL", fullName: "Steel Authority of India Limited", sector: "Steel & Mining" },
    { name: "Coal India", fullName: "Coal India Limited", sector: "Mining" },
    { name: "GAIL", fullName: "Gas Authority of India Limited", sector: "Natural Gas" },
  ];

  const industries = [
    {
      icon: Zap,
      name: "Power & Energy",
      description: "Thermal, hydro, and renewable energy projects",
      clients: 45
    },
    {
      icon: Fuel,
      name: "Oil & Gas",
      description: "Upstream, downstream, and petrochemical operations",
      clients: 38
    },
    {
      icon: Factory,
      name: "Manufacturing",
      description: "Heavy machinery, equipment, and industrial supplies",
      clients: 52
    },
    {
      icon: Building,
      name: "Infrastructure",
      description: "Construction, transportation, and urban development",
      clients: 41
    },
  ];

  const caseStudies = [
    {
      client: "BHEL",
      project: "Turbine Components Supply",
      value: "₹25 Cr",
      duration: "18 months",
      description: "Successfully supplied precision-engineered turbine components for thermal power plant projects across 3 states."
    },
    {
      client: "IOCL",
      project: "Pipeline Infrastructure",
      value: "₹18 Cr",
      duration: "12 months",
      description: "Delivered high-grade pipeline materials and fittings for refinery expansion projects with zero quality issues."
    },
    {
      client: "UCIL",
      project: "Safety Equipment Supply",
      value: "₹12 Cr",
      duration: "8 months",
      description: "Provided specialized safety and monitoring equipment for uranium processing facilities with enhanced security protocols."
    }
  ];

  return (
    <section id="clients" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Clients</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trusted by India's leading PSUs and corporations for over a decade. 
              Building partnerships that drive national progress.
            </p>
          </div>

          {/* Major Clients Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
              Major Government & PSU Clients
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {majorClients.map((client, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-none">
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                      {client.name}
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      {client.fullName}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {client.sector}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Industries Served */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
              Industries We Serve
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4 group-hover:scale-110 transition-transform">
                      <industry.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {industry.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {industry.description}
                    </p>
                    <div className="flex items-center justify-center gap-2 text-primary">
                      <Users className="h-4 w-4" />
                      <span className="font-semibold">{industry.clients}+ Clients</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
              Recent Success Stories
            </h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="font-semibold">
                        {study.client}
                      </Badge>
                      <div className="flex items-center gap-1 text-success">
                        <TrendingUp className="h-4 w-4" />
                        <span className="font-bold">{study.value}</span>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {study.project}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      {study.description}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Duration: {study.duration}</span>
                      <Badge variant="secondary">Completed</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="text-center">
            <Card className="bg-gradient-hero border-none">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-primary-foreground mb-6">
                  Our Impact in Numbers
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-foreground mb-2">200+</div>
                    <div className="text-primary-foreground/80">Active Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-foreground mb-2">₹500Cr+</div>
                    <div className="text-primary-foreground/80">Transactions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-foreground mb-2">15+</div>
                    <div className="text-primary-foreground/80">States Covered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-foreground mb-2">98%</div>
                    <div className="text-primary-foreground/80">Success Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;