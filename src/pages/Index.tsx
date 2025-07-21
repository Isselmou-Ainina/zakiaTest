import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Utensils, Droplets, TreePine, Users, Heart, ArrowRight, Target, Calendar } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Index = () => {
  const programs = [
    {
      icon: Utensils,
      title: "Feeding the Community",
      description: "Fighting hunger by providing nutritious meals to families in need throughout Nouakchott.",
      stats: "12,000+ meals served",
      color: "text-orange-600"
    },
    {
      icon: Droplets,
      title: "Providing Clean Water",
      description: "Ensuring access to safe, clean drinking water for underserved communities.",
      stats: "5 water points established",
      color: "text-blue-600"
    },
    {
      icon: TreePine,
      title: "Cleaning the Community",
      description: "Environmental stewardship through community clean-up drives and education.",
      stats: "15 tons of waste removed",
      color: "text-green-600"
    }
  ];

  const impactStats = [
    { number: "500+", label: "Families Served", icon: Users },
    { number: "12K+", label: "Meals Provided", icon: Utensils },
    { number: "5", label: "Water Points", icon: Droplets },
    { number: "6", label: "Years of Service", icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-8 px-6 py-3 text-sm font-medium gold-gradient text-white border-0">
              Volunteer-led since 2018
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Building Stronger Communities in <span className="text-primary-glow">Mauritania</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-95 leading-relaxed">
              Volunteer-led and rooted in compassion, Zakia Relief is helping families access food, 
              water, and clean environments throughout Nouakchott and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button asChild size="lg" className="gold-gradient text-white hover:opacity-90 px-8 py-4 text-lg">
                <NavLink to="/donate">
                  <Heart className="h-6 w-6 mr-3" />
                  Donate Now
                </NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 px-8 py-4 text-lg">
                <NavLink to="/our-work">
                  Learn About Our Work
                  <ArrowRight className="h-6 w-6 ml-3" />
                </NavLink>
              </Button>
            </div>
            
            {/* Impact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 mx-auto mb-2 opacity-80" />
                  <div className="text-2xl md:text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-sm md:text-base opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Programs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Through three focused initiatives, we address the most pressing needs of our communities 
              while building sustainable solutions for the future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="soft-shadow hover:warm-shadow transition-smooth group border-0">
                <CardHeader className="text-center">
                  <div className="mx-auto p-5 community-gradient rounded-full w-fit mb-6 group-hover:scale-110 transition-smooth">
                    <program.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-3 text-secondary">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <CardDescription className="text-lg leading-relaxed text-muted-foreground">
                    {program.description}
                  </CardDescription>
                  <Badge className="community-gradient text-white border-0 px-4 py-2 text-sm font-medium">
                    {program.stats}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button asChild size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4">
              <NavLink to="/our-work">
                See Our Work in Detail
                <ArrowRight className="h-5 w-5 ml-2" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="community-gradient text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Target className="h-20 w-20 mx-auto mb-8 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl md:text-2xl leading-relaxed opacity-95 mb-10">
            "To uplift vulnerable communities in Mauritania by addressing fundamental needs 
            through food security, clean water access, and environmental stewardship, 
            while fostering sustainable community development."
          </p>
          <Button asChild size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 px-8 py-4">
            <NavLink to="/about">
              Learn Our Story
              <ArrowRight className="h-5 w-5 ml-2" />
            </NavLink>
          </Button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-3xl p-10 md:p-16 soft-shadow border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-secondary leading-tight">
                  Join Our Mission
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed">
                  Whether you choose to volunteer your time, make a donation, or spread awareness, 
                  your contribution makes a real difference in the lives of families across Mauritania.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button asChild size="lg" className="community-gradient text-white px-8 py-4 text-lg">
                    <NavLink to="/get-involved">
                      <Users className="h-6 w-6 mr-3" />
                      Volunteer With Us
                    </NavLink>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 text-lg">
                    <NavLink to="/contact">
                      Get in Touch
                      <ArrowRight className="h-6 w-6 ml-3" />
                    </NavLink>
                  </Button>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-muted rounded-3xl p-12 aspect-square flex items-center justify-center">
                  <div>
                    <Heart className="h-28 w-28 mx-auto mb-6 text-primary/30" />
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Community impact photos and volunteer testimonials would be showcased here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
