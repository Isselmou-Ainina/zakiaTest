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
      <section className="hero-gradient text-primary-foreground py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-white/10 text-primary-foreground border-white/20">
              Making a difference since 2018
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Building Stronger Communities in <span className="text-primary-glow">Mauritania</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-95">
              Zakia Relief is a volunteer-driven charitable foundation dedicated to fighting hunger, 
              providing clean water, and protecting our environment in Nouakchott and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <NavLink to="/donate">
                  <Heart className="h-5 w-5 mr-2" />
                  Donate Now
                </NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-primary-foreground hover:bg-white/10">
                <NavLink to="/our-work">
                  Learn About Our Work
                  <ArrowRight className="h-5 w-5 ml-2" />
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
              <Card key={index} className="soft-shadow hover:shadow-lg transition-smooth group">
                <CardHeader className="text-center">
                  <div className="mx-auto p-4 hero-gradient rounded-full w-fit mb-4 group-hover:scale-110 transition-smooth">
                    <program.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {program.description}
                  </CardDescription>
                  <Badge variant="secondary" className="impact-gradient text-accent-foreground">
                    {program.stats}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <NavLink to="/our-work">
                See Our Work in Detail
                <ArrowRight className="h-5 w-5 ml-2" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-muted py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Target className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed text-muted-foreground mb-8">
            "To uplift vulnerable communities in Mauritania by addressing fundamental needs 
            through food security, clean water access, and environmental stewardship, 
            while fostering sustainable community development."
          </p>
          <Button asChild size="lg" variant="outline">
            <NavLink to="/about">
              Learn Our Story
              <ArrowRight className="h-5 w-5 ml-2" />
            </NavLink>
          </Button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl p-8 md:p-12 soft-shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Join Our Mission
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Whether you choose to volunteer your time, make a donation, or spread awareness, 
                  your contribution makes a real difference in the lives of families across Mauritania.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="hero-gradient">
                    <NavLink to="/get-involved">
                      <Users className="h-5 w-5 mr-2" />
                      Volunteer With Us
                    </NavLink>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <NavLink to="/contact">
                      Get in Touch
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </NavLink>
                  </Button>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-muted rounded-2xl p-8 aspect-square flex items-center justify-center">
                  <div>
                    <Heart className="h-24 w-24 mx-auto mb-4 text-primary opacity-20" />
                    <p className="text-muted-foreground">
                      Community photos and volunteer imagery would be displayed here
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
