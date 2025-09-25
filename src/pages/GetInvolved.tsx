import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Users, Clock, Heart, Megaphone, Handshake, Calendar, ArrowRight, CheckCircle, Send } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const GetInvolved = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    availability: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest in volunteering. We'll contact you soon.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: '',
      availability: '',
      message: ''
    });
  };

  const opportunities = [
    {
      icon: Users,
      title: "Community Outreach",
      description: "Help us connect with families in need and build community relationships.",
      commitment: "4-8 hours/week",
      requirements: "Strong communication skills, empathy, local language proficiency",
      color: "from-primary/20 to-primary/5"
    },
    {
      icon: Handshake,
      title: "Food Distribution",
      description: "Assist with preparing and distributing meals to community members.",
      commitment: "Weekend shifts",
      requirements: "Physical ability to lift supplies, reliable transportation",
      color: "from-secondary/20 to-secondary/5"
    },
    {
      icon: Clock,
      title: "Administrative Support",
      description: "Help with organizing events, data entry, and program coordination.",
      commitment: "Flexible hours",
      requirements: "Basic computer skills, organizational abilities",
      color: "from-accent/20 to-accent/5"
    },
    {
      icon: Megaphone,
      title: "Awareness Campaigns",
      description: "Support our advocacy and education efforts in the community.",
      commitment: "Event-based",
      requirements: "Creative thinking, public speaking comfort",
      color: "from-primary/20 to-primary/5"
    }
  ];

  const partnerships = [
    {
      icon: Heart,
      title: "Local Businesses",
      description: "Partner with us through sponsorships, in-kind donations, or employee volunteer programs."
    },
    {
      icon: Calendar,
      title: "Community Organizations", 
      description: "Collaborate on joint initiatives and share resources to maximize community impact."
    },
    {
      icon: Users,
      title: "Educational Institutions",
      description: "Engage students in service-learning opportunities and awareness programs."
    }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Hero Section */}
      <section className="relative community-gradient text-white py-12 md:py-16 lg:py-20 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-white/5 rounded-full transform -translate-x-24 -translate-y-24"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full transform translate-x-32 translate-y-32"></div>
        
        <div className="max-w-6xl mx-auto container-padding relative z-10">
          <div className="text-center">
            <Badge className="mb-4 md:mb-6 px-6 py-2 gold-gradient text-white border-0 rounded-full text-sm font-semibold shadow-xl">
              Join Our Mission
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Get <span className="text-secondary bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent drop-shadow-lg">Involved</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 max-w-4xl mx-auto opacity-95 leading-relaxed font-light">
              Join our volunteer community and help us create lasting change 
              in Mauritanian communities. Every helping hand makes a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-12 md:py-16 container-padding max-w-6xl mx-auto relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-muted/50 to-transparent"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-10 md:mb-14">
            <Badge className="mb-4 px-6 py-2 community-gradient text-white border-0 rounded-full text-sm font-semibold">
              Volunteer Roles
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Volunteer Opportunities
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose from diverse volunteer roles that match your skills, interests, and availability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {opportunities.map((opportunity, index) => (
              <Card key={opportunity.title} className={`group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-gradient-to-br from-card via-card to-muted/20`}>
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-full transform translate-x-6 -translate-y-6"></div>
                
                <CardHeader className="pb-3 relative z-10">
                  <div className="flex items-start mb-4">
                    <div className="mr-4 p-4 md:p-5 community-gradient rounded-2xl group-hover:scale-110 transition-all duration-500 shadow-lg">
                      <opportunity.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl md:text-2xl mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                        {opportunity.title}
                      </CardTitle>
                      <div className="flex items-center">
                        <Badge className="community-gradient text-white border-0 px-3 py-1 text-xs font-medium rounded-full shadow-sm">
                          <Clock className="h-3 w-3 mr-1" />
                          {opportunity.commitment}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4 pt-0 relative z-10">
                  <CardDescription className="text-sm md:text-base leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {opportunity.description}
                  </CardDescription>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground text-sm md:text-base">Requirements:</h4>
                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                        {opportunity.requirements}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="community-gradient text-white py-12 md:py-16 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full transform translate-x-24 -translate-y-24"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full transform -translate-x-32 translate-y-32"></div>
        
        <div className="max-w-4xl mx-auto container-padding relative z-10">
          <div className="text-center mb-10 md:mb-12">
            <Badge className="mb-4 px-6 py-2 gold-gradient text-white border-0 rounded-full text-sm font-semibold shadow-xl">
              Apply Now
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
              Ready to Volunteer?
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Fill out the form below and we'll get in touch to discuss how you can contribute.
            </p>
          </div>
          
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-6 md:p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm md:text-base font-medium">Full Name *</Label>
                    <Input
                      id="name"
                      className="mt-2"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm md:text-base font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      className="mt-2"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-sm md:text-base font-medium">Phone Number</Label>
                    <Input
                      id="phone"
                      className="mt-2"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="interest" className="text-sm md:text-base font-medium">Area of Interest *</Label>
                    <Input
                      id="interest"
                      placeholder="e.g., Food Distribution, Community Outreach"
                      className="mt-2"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="availability" className="text-sm md:text-base font-medium">Availability</Label>
                  <Input
                    id="availability"
                    placeholder="e.g., Weekends, Weekday evenings"
                    className="mt-2"
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm md:text-base font-medium">Tell us about yourself and why you'd like to volunteer</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    className="mt-2"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                
                <Button type="submit" size="lg" className="community-gradient text-white w-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 py-3">
                  <Send className="h-5 w-5 mr-2" />
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-12 md:py-16 container-padding max-w-6xl mx-auto relative">
        <div className="relative z-10">
          <div className="text-center mb-10 md:mb-14">
            <Badge className="mb-4 px-6 py-2 community-gradient text-white border-0 rounded-full text-sm font-semibold">
              Partnerships
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Partnership Opportunities
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We welcome partnerships with organizations that share our commitment 
              to community development and sustainable impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {partnerships.map((partnership, index) => (
              <Card key={partnership.title} className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-gradient-to-br from-card via-card to-muted/20 text-center">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/5 to-transparent rounded-full transform translate-x-4 -translate-y-4"></div>
                
                <CardHeader className="pb-3 relative z-10">
                  <div className="mx-auto p-4 md:p-5 community-gradient rounded-2xl w-fit mb-4 group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <partnership.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {partnership.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-sm md:text-base leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {partnership.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10 md:mt-12">
            <Button asChild size="lg" variant="outline" className="btn-outline text-primary hover:text-white hover:bg-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-6 py-3">
              <NavLink to="/contact" className="flex items-center justify-center">
                Discuss Partnership
                <ArrowRight className="h-5 w-5 ml-2" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;