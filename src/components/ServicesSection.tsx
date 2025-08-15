import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Briefcase, 
  FileText, 
  Truck, 
  Shield, 
  Settings,
  Search,
  Filter
} from "lucide-react";

const ServicesSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const services = [
    {
      category: "Government Tenders",
      icon: Building2,
      title: "Government Tender Participation",
      description: "Expert handling of central and state government tenders across multiple sectors including PSUs like UCIL, BHEL, IOCL, and more.",
      features: ["Tender Documentation", "Bid Management", "Compliance Handling", "Pre-qualification Support"],
      color: "primary"
    },
    {
      category: "Corporate Trading",
      icon: Briefcase,
      title: "Corporate Supply Chain",
      description: "End-to-end trading solutions for private sector clients with focus on industrial equipment, raw materials, and finished goods.",
      features: ["B2B Trading", "Bulk Procurement", "Supply Chain Management", "Quality Assurance"],
      color: "secondary"
    },
    {
      category: "Documentation",
      icon: FileText,
      title: "Legal & Documentation",
      description: "Comprehensive documentation services ensuring full compliance with government regulations and corporate requirements.",
      features: ["Contract Management", "Regulatory Compliance", "Document Preparation", "Legal Support"],
      color: "success"
    },
    {
      category: "Logistics",
      icon: Truck,
      title: "Logistics & Delivery",
      description: "Nationwide logistics network ensuring timely delivery of goods with end-to-end tracking and insurance coverage.",
      features: ["Pan-India Delivery", "Tracking System", "Insurance Coverage", "Warehousing"],
      color: "warning"
    },
    {
      category: "Consulting",
      icon: Shield,
      title: "Business Consulting",
      description: "Strategic consulting services to help businesses identify opportunities and optimize their tender participation strategies.",
      features: ["Market Analysis", "Strategy Development", "Risk Assessment", "Performance Optimization"],
      color: "primary"
    },
    {
      category: "Technology",
      icon: Settings,
      title: "Technical Solutions",
      description: "Technology-driven solutions for modern trading challenges including digital platforms and automated processes.",
      features: ["Digital Platforms", "Automation", "Data Analytics", "System Integration"],
      color: "secondary"
    }
  ];

  const categories = ["All", ...new Set(services.map(service => service.category))];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive trading and tender solutions designed to maximize your business opportunities
              and ensure successful project completion.
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="flex items-center gap-1"
                  >
                    <Filter className="h-3 w-3" />
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-none">
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <Badge variant="secondary" className="w-fit mx-auto mb-2">
                    {service.category}
                  </Badge>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-center">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full bg-gradient-primary hover:opacity-90 group-hover:scale-105 transition-transform">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No services found matching your criteria.</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-hero border-none">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-primary-foreground mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                  Let our experts help you identify the best opportunities and develop 
                  a winning strategy for your next tender or trading opportunity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-secondary hover:bg-secondary-light">
                    Schedule Consultation
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    Download Brochure
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;