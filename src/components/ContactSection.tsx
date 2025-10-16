import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Send,
  Building2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Office",
      content: "Mumbai Business District, Maharashtra - 400001",
      link: "https://maps.google.com/?q=Mumbai+Maharashtra"
    },
    {
      icon: Phone,
      title: "Phone Number",
      content: "+91 98765 43210",
      link: "tel:+919876543210"
    },
    {
      icon: Mail,
      title: "Email Address",
      content: "info@varunenterprises.com",
      link: "mailto:info@varunenterprises.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM",
      link: null
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: ""
    });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your trading and tender services. Please provide more information.");
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact <span className="bg-gradient-primary bg-clip-text text-transparent">Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to explore new opportunities? Get in touch with our experts for 
              personalized consulting and strategic guidance for your next project.
            </p>
          </div>

          {/* WhatsApp CTA - Full Width at the Top */}
          <Card className="bg-gradient-primary border-none w-full mb-12">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <MessageCircle className="h-10 w-10 text-primary-foreground" />
                  <div>
                    <h4 className="font-semibold text-xl text-primary-foreground mb-1">
                      Quick Support on WhatsApp
                    </h4>
                    <p className="text-primary-foreground/90">
                      Get instant responses to your queries - available 24/7
                    </p>
                  </div>
                </div>
                <Button 
                  onClick={openWhatsApp}
                  className="bg-secondary hover:bg-secondary-light text-secondary-foreground px-6 py-3 text-base"
                  size="lg"
                >
                  Chat Now
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Get In Touch
                </h3>
                <p className="text-muted-foreground mb-8">
                  We're here to help you navigate the complex world of government tenders 
                  and corporate trading. Reach out to us through any of the channels below.
                </p>
              </div>

              {/* Contact Details */}
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                          <info.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                          {info.link ? (
                            <a 
                              href={info.link}
                              className="text-muted-foreground hover:text-primary transition-colors"
                              target={info.link.startsWith('http') ? '_blank' : undefined}
                              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.content}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>


            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-gradient-card border-none shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                    <Building2 className="h-6 w-6" />
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service of Interest</Label>
                      <Input
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        placeholder="e.g., Government Tenders, Corporate Trading"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your requirements and how we can help you..."
                        rows={4}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-primary hover:opacity-90 group"
                      size="lg"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>

                  <div className="text-center text-sm text-muted-foreground pt-4 border-t border-border">
                    We typically respond within 24 hours during business days
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <Card className="overflow-hidden border-none shadow-xl">
              <CardContent className="p-0">
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.4935517553754!2d77.04823!3d28.459497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d194dcb77e90b%3A0x8a3b7e40f7b0e8b0!2sSector%2014%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1635781234567!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="TradeCorp Office Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;