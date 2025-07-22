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
      color: "text-accent"
    },
    {
      icon: Droplets,
      title: "Providing Clean Water",
      description: "Ensuring access to safe, clean drinking water for underserved communities.",
      stats: "300+ tons of water delivered",
      color: "text-primary"
    },
    {
      icon: TreePine,
      title: "Cleaning the Community",
      description: "Environmental stewardship through community clean-up drives and education.",
      stats: "15 tons of waste removed",
      color: "text-secondary"
    }
  ];

  const impactStats = [
    { number: "500+", label: "Families Served", icon: Users },
    { number: "12K+", label: "Meals Provided", icon: Utensils },
    { number: "300+", label: "Tons of Water", icon: Droplets },
    { number: "6", label: "Years of Service", icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 md:mb-8 px-4 md:px-6 py-2 md:py-3 text-sm font-medium gold-gradient text-white border-0 rounded-full">
              Volunteer-led since 2018
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight">
              Building Stronger Communities in{' '}
              <span className="text-secondary bg-secondary/10 px-2 py-1 rounded-lg">Mauritania</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-4xl mx-auto opacity-95 leading-relaxed">
              Volunteer-led and rooted in compassion, Zakia Relief is helping families access food, 
              water, and clean environments throughout Nouakchott and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12 md:mb-16">
              <Button asChild size="lg" className="gold-gradient text-white hover:opacity-90 touch-target text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
                <NavLink to="/donate" className="flex items-center justify-center">
                  <Heart className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" />
                  Donate Now
                </NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white border-2 text-white hover:bg-white hover:text-primary bg-transparent touch-target text-base md:text-lg px-6 md:px-8 py-3 md:py-4">
                <NavLink to="/our-work" className="flex items-center justify-center">
                  Learn About Our Work
                  <ArrowRight className="h-5 w-5 md:h-6 md:w-6 ml-2 md:ml-3" />
                </NavLink>
              </Button>
            </div>
            
            {/* Impact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-2 opacity-80" />
                  <div className="impact-stat text-white">{stat.number}</div>
                  <div className="impact-label text-white/90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section className="nonprofit-section">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="nonprofit-heading">Our Core Programs</h2>
          <p className="nonprofit-subheading">
            Through three focused initiatives, we address the most pressing needs of our communities 
            while building sustainable solutions for the future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="modern-card group border-0 h-full">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto p-4 md:p-5 community-gradient rounded-full w-fit mb-4 md:mb-6 group-hover:scale-110 transition-gentle">
                  <program.icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                </div>
                <CardTitle className="text-xl md:text-2xl mb-3 text-foreground">{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4 md:space-y-6 pt-0">
                <CardDescription className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  {program.description}
                </CardDescription>
                <Badge className="community-gradient text-white border-0 px-3 md:px-4 py-1 md:py-2 text-sm font-medium rounded-full">
                  {program.stats}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 md:mt-16">
          <Button asChild size="lg" variant="outline" className="btn-outline text-primary hover:text-white hover:bg-primary">
            <NavLink to="/our-work" className="flex items-center">
              See Our Work in Detail
              <ArrowRight className="h-5 w-5 ml-2" />
            </NavLink>
          </Button>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="community-gradient text-white section-padding">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <Target className="h-16 w-16 md:h-20 md:w-20 mx-auto mb-6 md:mb-8 opacity-90" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">Our Mission</h2>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed opacity-95 mb-8 md:mb-10">
            "To uplift vulnerable communities in Mauritania by addressing fundamental needs 
            through food security, clean water access, and environmental stewardship, 
            while fostering sustainable community development."
          </p>
          <Button asChild size="lg" variant="outline" className="border-white border-2 text-white hover:bg-white hover:text-primary bg-transparent touch-target">
            <NavLink to="/about" className="flex items-center">
              Learn Our Story
              <ArrowRight className="h-5 w-5 ml-2" />
            </NavLink>
          </Button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="nonprofit-section">
        <div className="modern-card p-8 md:p-12 lg:p-16 border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-foreground leading-tight">
                Join Our Mission
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-10 leading-relaxed">
                Whether you choose to volunteer your time, make a donation, or spread awareness, 
                your contribution makes a real difference in the lives of families across Mauritania.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <Button asChild size="lg" className="community-gradient text-white touch-target">
                  <NavLink to="/get-involved" className="flex items-center justify-center">
                    <Users className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" />
                    Volunteer With Us
                  </NavLink>
                </Button>
                <Button asChild size="lg" variant="outline" className="btn-outline text-primary hover:text-white hover:bg-primary touch-target">
                  <NavLink to="/contact" className="flex items-center justify-center">
                    Get in Touch
                    <ArrowRight className="h-5 w-5 md:h-6 md:w-6 ml-2 md:ml-3" />
                  </NavLink>
                </Button>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-muted rounded-2xl md:rounded-3xl p-8 md:p-12 aspect-square flex items-center justify-center">
                <div>
                  <Heart className="h-20 w-20 md:h-28 md:w-28 mx-auto mb-4 md:mb-6 text-primary/30" />
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Community impact photos and volunteer testimonials would be showcased here
                  </p>
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
