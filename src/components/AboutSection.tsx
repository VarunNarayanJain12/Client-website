import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, Users, Shield, Award } from "lucide-react";

const AboutSection = () => {
  const certifications = [
    "ISO 9001:2015 Certified",
    "Government Approved Vendor",
    "MSME Registered",
    "GST Compliant",
  ];

  const milestones = [
    { year: "2008", event: "Company Established" },
    { year: "2012", event: "First Major Government Contract" },
    { year: "2016", event: "Expanded to 5 States" },
    { year: "2020", event: "Digital Transformation" },
    { year: "2024", event: "Pan-India Operations" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "Building lasting relationships through transparent business practices",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering superior quality in every tender and transaction",
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Working closely with clients to understand and exceed expectations",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">TradeCorp</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Since 2008, we've been at the forefront of government and corporate trading, 
              building bridges between opportunity and success for our valued clients.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Company Story */}
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-foreground mb-4">Our Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Founded with a vision to simplify the complex world of government tenders and 
                corporate trading, TradeCorp has grown from a small startup to a nationally 
                recognized trading house. We specialize in connecting businesses with lucrative 
                opportunities in the public and private sectors.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our expertise spans across multiple industries including energy, infrastructure, 
                manufacturing, and technology. We've successfully facilitated over ₹500 crores 
                worth of transactions, helping our clients grow and prosper.
              </p>

              {/* Certifications */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">Certifications & Compliance</h4>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert, index) => (
                    <Badge key={index} variant="secondary" className="flex items-center gap-1">
                      <CheckCircle className="h-3 w-3" />
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-foreground mb-4">Key Milestones</h3>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                      {milestone.year.slice(-2)}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground">{milestone.year}</div>
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {milestone.event}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="space-y-12">
            <h3 className="text-3xl font-semibold text-foreground text-center">Our Core Values</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4 group-hover:scale-110 transition-transform">
                      <value.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-3">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-card border-none shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
                <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                  To be the most trusted and innovative trading partner, empowering businesses 
                  to achieve sustainable growth through strategic market opportunities and 
                  exceptional service delivery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;