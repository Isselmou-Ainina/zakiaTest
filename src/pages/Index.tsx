import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Utensils, Droplets, TreePine, Users, Heart, ArrowRight, Target, Calendar } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import teamPhoto from '/team_pic.jpg';
import teamPhoto2 from '/team_pic_2.jpg';

const Index = () => {
  const programs = [
    {
      icon: Utensils,
      title: "Feeding the Community",
      description: "Fighting hunger by providing nutritious meals to families in need throughout Nouakchott.",
      stats: "8,000+ meals served",
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
    { number: "8K+", label: "Meals Provided", icon: Utensils },
    { number: "300+", label: "Tons of Water", icon: Droplets },
    { number: "6", label: "Years of Service", icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Hero Section */}
      <section className="relative text-white py-12 md:py-16 lg:py-20 overflow-hidden min-h-[85vh] flex items-center">
        {/* Background Image */}
        <img 
          src={teamPhoto} 
          alt="Zakia Relief Team" 
          className="absolute inset-0 w-full h-full object-cover z-0"
          onError={(e) => {
            console.log('Image failed to load:', e);
            e.currentTarget.style.display = 'none';
          }}
          onLoad={() => console.log('Image loaded successfully')}
        />
        
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/80 to-accent/85 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 max-w-6xl mx-auto container-padding w-full">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 md:mb-6 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold gold-gradient text-white border-0 rounded-full shadow-xl backdrop-blur-sm">
              ✨ Volunteer-led since 2018
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Building Stronger Communities in{' '}
              <span className="text-secondary bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent drop-shadow-lg">Mauritania</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-4xl mx-auto opacity-95 leading-relaxed font-light">
              Volunteer-led and rooted in compassion, Zakia Relief is helping families access food, 
              water, and clean environments throughout Nouakchott and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-10 md:mb-12">
              <Button asChild size="lg" className="gold-gradient text-white hover:opacity-90 shadow-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm px-6 md:px-8 py-3 md:py-4">
                <NavLink to="/donate" className="flex items-center justify-center">
                  <Heart className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" />
                  Donate Now
                </NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white border-2 text-white hover:bg-white hover:text-primary bg-white/10 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-6 md:px-8 py-3 md:py-4">
                <NavLink to="/our-work" className="flex items-center justify-center">
                  Learn About Our Work
                  <ArrowRight className="h-5 w-5 md:h-6 md:w-6 ml-2 md:ml-3" />
                </NavLink>
              </Button>
            </div>
            
            {/* Impact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
              {impactStats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/15 transform hover:-translate-y-2">
                    <stat.icon className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-2 md:mb-3 opacity-90 text-secondary group-hover:scale-110 transition-transform duration-300" />
                    <div className="impact-stat text-white drop-shadow-lg group-hover:scale-105 transition-transform">{stat.number}</div>
                    <div className="impact-label text-white/95 font-medium text-xs md:text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section className="py-12 md:py-16 container-padding max-w-6xl mx-auto relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-muted/50 to-transparent"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-10 md:mb-14">
            <Badge className="mb-4 px-6 py-2 community-gradient text-white border-0 rounded-full text-sm font-semibold">
              Our Impact Areas
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Our Core Programs
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Through three focused initiatives, we address the most pressing needs of our communities 
              while building sustainable solutions for the future.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-gradient-to-br from-card via-card to-muted/20">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-full transform translate-x-6 -translate-y-6"></div>
                
                <CardHeader className="text-center pb-3 relative z-10">
                  <div className="mx-auto p-4 md:p-5 community-gradient rounded-2xl w-fit mb-4 md:mb-5 group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <program.icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4 pt-0 relative z-10">
                  <CardDescription className="text-sm md:text-base leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {program.description}
                  </CardDescription>
                  <Badge className="community-gradient text-white border-0 px-4 py-2 text-xs md:text-sm font-semibold rounded-full shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    {program.stats}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10 md:mt-12">
            <Button asChild size="lg" variant="outline" className="btn-outline text-primary hover:text-white hover:bg-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-6 py-3">
              <NavLink to="/our-work" className="flex items-center">
                See Our Work in Detail
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="community-gradient text-white py-12 md:py-16 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-white/5 rounded-full transform -translate-x-24 -translate-y-24"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full transform translate-x-32 translate-y-32"></div>
        
        <div className="max-w-5xl mx-auto container-padding text-center relative z-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-10 lg:p-12 border border-white/20 shadow-2xl">
            <Target className="h-16 w-16 md:h-18 md:w-18 mx-auto mb-6 md:mb-7 opacity-90 text-secondary" />
            <Badge className="mb-4 px-6 py-2 gold-gradient text-white border-0 rounded-full text-sm font-semibold">
              Our Mission
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-7">Our Mission</h2>
            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed opacity-95 mb-6 md:mb-8 font-light">
              "To uplift vulnerable communities in Mauritania by addressing fundamental needs 
              through food security, clean water access, and environmental stewardship, 
              while fostering sustainable community development."
            </p>
            <Button asChild size="lg" variant="outline" className="border-white/60 border-2 text-white hover:bg-white hover:text-primary bg-white/10 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-6 py-3">
              <NavLink to="/about" className="flex items-center">
                Learn Our Story
                <ArrowRight className="h-5 w-5 ml-2" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 container-padding max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl md:rounded-[2rem] bg-gradient-to-br from-card via-card to-muted/30 p-6 md:p-10 lg:p-14 shadow-2xl border border-border/60">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full transform translate-x-24 -translate-y-24"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full transform -translate-x-16 translate-y-16"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center relative z-10">
            <div>
              <Badge className="mb-4 px-6 py-2 community-gradient text-white border-0 rounded-full text-sm font-semibold">
                Take Action
              </Badge>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-5 md:mb-7 text-foreground leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Join Our Mission
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 leading-relaxed font-light">
                Whether you choose to volunteer your time, make a donation, or spread awareness, 
                your contribution makes a real difference in the lives of families across Mauritania.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <Button asChild size="lg" className="community-gradient text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-6 py-3">
                  <NavLink to="/get-involved" className="flex items-center justify-center">
                    <Users className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" />
                    Volunteer With Us
                  </NavLink>
                </Button>
                <Button asChild size="lg" variant="outline" className="btn-outline text-primary hover:text-white hover:bg-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-6 py-3">
                  <NavLink to="/contact" className="flex items-center justify-center">
                    Get in Touch
                    <ArrowRight className="h-5 w-5 md:h-6 md:w-6 ml-2 md:ml-3" />
                  </NavLink>
                </Button>
              </div>
            </div>
            
            <div className="text-center">
              <div className="relative bg-gradient-to-br from-muted to-muted/60 rounded-3xl md:rounded-[2rem] overflow-hidden aspect-square group shadow-xl hover:shadow-2xl transition-all duration-500">
                <img 
                  src={teamPhoto2} 
                  alt="Zakia Relief team working in the community" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Subtle overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Enhanced caption overlay */}
                <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4">
                  <div className="bg-black/80 backdrop-blur-md rounded-xl px-3 py-2 md:px-4 md:py-3 border border-white/20 shadow-2xl">
                    <p className="text-white text-xs md:text-sm leading-relaxed font-medium">
                      Join our volunteers transforming lives through food security, clean water, and community care
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
