import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Users, Clock, Heart, Megaphone, Handshake, Calendar } from 'lucide-react';
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
      requirements: "Strong communication skills, empathy, local language proficiency"
    },
    {
      icon: Handshake,
      title: "Food Distribution",
      description: "Assist with preparing and distributing meals to community members.",
      commitment: "Weekend shifts",
      requirements: "Physical ability to lift supplies, reliable transportation"
    },
    {
      icon: Clock,
      title: "Administrative Support",
      description: "Help with organizing events, data entry, and program coordination.",
      commitment: "Flexible hours",
      requirements: "Basic computer skills, organizational abilities"
    },
    {
      icon: Megaphone,
      title: "Awareness Campaigns",
      description: "Support our advocacy and education efforts in the community.",
      commitment: "Event-based",
      requirements: "Creative thinking, public speaking comfort"
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Involved
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
              Join our volunteer community and help us create lasting change 
              in Mauritanian communities. Every helping hand makes a difference.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm md:text-base">
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>50+ Active Volunteers</span>
              </div>
              <div className="flex items-center">
                <Heart className="h-5 w-5 mr-2" />
                <span>Multiple Opportunities</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>Flexible Scheduling</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Volunteer Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {opportunities.map((opportunity) => (
              <Card key={opportunity.title} className="soft-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-3 hero-gradient rounded-lg mr-4">
                      <opportunity.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                      <div className="flex items-center mt-1">
                        <Clock className="h-4 w-4 mr-1 text-primary" />
                        <span className="text-sm text-primary font-medium">
                          {opportunity.commitment}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">
                    {opportunity.description}
                  </CardDescription>
                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <p className="text-sm text-muted-foreground">
                      {opportunity.requirements}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="bg-muted py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Volunteer?
            </h2>
            <p className="text-xl text-muted-foreground">
              Fill out the form below and we'll get in touch to discuss how you can contribute.
            </p>
          </div>
          
          <Card className="soft-shadow">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="interest">Area of Interest *</Label>
                    <Input
                      id="interest"
                      placeholder="e.g., Food Distribution, Community Outreach"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="availability">Availability</Label>
                  <Input
                    id="availability"
                    placeholder="e.g., Weekends, Weekday evenings"
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Tell us about yourself and why you'd like to volunteer</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                
                <Button type="submit" size="lg" className="hero-gradient w-full">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We welcome partnerships with organizations that share our commitment 
              to community development and sustainable impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerships.map((partnership) => (
              <Card key={partnership.title} className="soft-shadow text-center">
                <CardHeader>
                  <div className="mx-auto p-4 hero-gradient rounded-full w-fit mb-4">
                    <partnership.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{partnership.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {partnership.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <NavLink to="/contact">Discuss Partnership</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;