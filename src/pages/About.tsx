import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Award, Heart, Handshake, ArrowRight, CheckCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We lead with empathy and understanding, recognizing the dignity of every person we serve."
    },
    {
      icon: Handshake,
      title: "Community",
      description: "We believe in the power of community-driven solutions and collaborative action."
    },
    {
      icon: Target,
      title: "Impact",
      description: "We focus on sustainable, measurable outcomes that create lasting positive change."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "We operate with transparency, accountability, and unwavering ethical standards."
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
              Our Story
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              About <span className="text-secondary bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent drop-shadow-lg">Zakia Relief</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-4xl mx-auto opacity-95 leading-relaxed font-light">
              Founded in 2018, we are a volunteer-driven charitable foundation 
              dedicated to creating sustainable positive change in Mauritania's communities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 container-padding max-w-6xl mx-auto relative">
        <div className="relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 px-6 py-2 community-gradient text-white border-0 rounded-full text-sm font-semibold">
              Our Purpose
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Why We Exist
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our mission and vision guide everything we do, from daily operations to long-term strategic planning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
            <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-gradient-to-br from-card via-card to-muted/20 h-full">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-full transform translate-x-6 -translate-y-6"></div>
              
              <CardHeader className="pb-6 relative z-10">
                <CardTitle className="text-2xl md:text-3xl flex items-center text-foreground group-hover:text-primary transition-colors duration-300">
                  <div className="mr-4 p-4 community-gradient rounded-2xl group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <Target className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 relative z-10">
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  To uplift vulnerable communities in Mauritania by addressing fundamental needs 
                  through food security, clean water access, and environmental stewardship, 
                  while fostering sustainable community development.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-gradient-to-br from-card via-card to-muted/20 h-full">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-secondary/10 to-transparent rounded-full transform translate-x-6 -translate-y-6"></div>
              
              <CardHeader className="pb-6 relative z-10">
                <CardTitle className="text-2xl md:text-3xl flex items-center text-foreground group-hover:text-primary transition-colors duration-300">
                  <div className="mr-4 p-4 community-gradient rounded-2xl group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <Users className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 relative z-10">
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  A future where every community in Mauritania has access to basic necessities, 
                  lives in a clean environment, and possesses the tools and resources needed 
                  to thrive independently.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Transition element */}
          <div className="flex justify-center mb-16 md:mb-20">
            <div className="flex items-center space-x-4">
              <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent w-20"></div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent w-20"></div>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 px-6 py-2 community-gradient text-white border-0 rounded-full text-sm font-semibold">
              Our Foundation
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              What Guides Us
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These core values shape our approach to community service and define how we work with those we serve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-gradient-to-br from-card via-card to-muted/20 text-center h-full">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/5 to-transparent rounded-full transform translate-x-4 -translate-y-4"></div>
                
                <CardHeader className="pb-4 relative z-10">
                  <div className="mx-auto p-4 md:p-5 community-gradient rounded-2xl w-fit mb-4 group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <value.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                    </div>
                  <CardTitle className="text-lg md:text-xl text-foreground group-hover:text-primary transition-colors duration-300">{value.title}</CardTitle>
                  </CardHeader>
                <CardContent className="pt-0 relative z-10">
                  <CardDescription className="text-sm md:text-base leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="community-gradient text-white py-16 md:py-20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full transform translate-x-24 -translate-y-24"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full transform -translate-x-32 translate-y-32"></div>
        
        <div className="max-w-6xl mx-auto container-padding relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 px-6 py-2 gold-gradient text-white border-0 rounded-full text-sm font-semibold shadow-xl">
              Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 text-white">
              Meet Our Leadership
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Dedicated leaders who guide our mission and drive positive change in Mauritanian communities.
            </p>
          </div>
          
          {/* Co-Founders Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16 max-w-5xl mx-auto">
            {[
              {
                name: "Ely Boidaha",
                title: "Co-Founder & Executive Director",
                description: "Visionary leader who established Zakia Relief in 2018 with a commitment to sustainable community development and empowering local communities.",
                icon: Users,
                isFounder: true
              },
              {
                name: "Isselmou Ainina",
                title: "Co-Founder & Operations Director",
                description: "Co-founded the organization with a focus on operational excellence and ensuring programs reach those who need them most.",
                icon: Target,
                isFounder: true
              }
            ].map((leader, index) => (
              <Card key={leader.name} className="group relative overflow-hidden bg-white/95 backdrop-blur-sm border-2 border-secondary/30 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>
                
                <CardHeader className="text-center pb-6 relative z-10">
                  {/* Profile placeholder */}
                  <div className="mx-auto w-32 h-32 md:w-36 md:h-36 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg overflow-hidden">
                    <leader.icon className="h-12 w-12 md:h-14 md:w-14 text-primary opacity-80" />
                  </div>
                  
                  <CardTitle className="text-xl md:text-2xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {leader.name}
                  </CardTitle>
                  
                  <Badge className="gold-gradient text-white border-0 px-5 py-2 text-sm md:text-base font-semibold rounded-full shadow-md mb-2">
                    {leader.title}
                  </Badge>
                </CardHeader>
                
                <CardContent className="text-center pt-0 relative z-10 px-6">
                  <p className="text-sm md:text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                    {leader.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Leadership Team Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "[Leader Name]",
                title: "Program Director",
                description: "Oversees our three core programs, ensuring effective delivery of food security, water access, and environmental initiatives.",
                icon: Target
              },
              {
                name: "[Leader Name]",
                title: "Community Outreach Coordinator",
                description: "Builds relationships with local communities and coordinates volunteer efforts across our service areas.",
                icon: Handshake
              },
              {
                name: "[Leader Name]",
                title: "Finance & Administration Manager",
                description: "Manages financial operations, ensures transparency, and handles administrative functions to support our mission.",
                icon: Award
              }
            ].map((leader, index) => (
              <Card key={leader.name} className="group relative overflow-hidden bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-full transform translate-x-6 -translate-y-6"></div>
                
                <CardHeader className="text-center pb-4 relative z-10">
                  {/* Profile placeholder */}
                  <div className="mx-auto w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-muted to-muted/60 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 shadow-lg overflow-hidden">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                      <leader.icon className="h-8 w-8 md:h-10 md:w-10 text-primary opacity-60" />
                  </div>
                </div>
                  
                  <CardTitle className="text-lg md:text-xl mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {leader.name}
                  </CardTitle>
                  
                  <Badge className="community-gradient text-white border-0 px-4 py-2 text-xs md:text-sm font-medium rounded-full shadow-sm">
                    {leader.title}
                  </Badge>
                  </CardHeader>
                
                <CardContent className="text-center pt-0 relative z-10">
                  <p className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                    {leader.description}
                  </p>
                  </CardContent>
                </Card>
            ))}
          </div>
          
          <div className="text-center mt-12 md:mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl max-w-4xl mx-auto">
              <CheckCircle className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">Join Our Leadership</h3>
              <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6">
                We're always looking for passionate leaders to join our mission. If you're interested in board positions or leadership roles, we'd love to hear from you.
              </p>
              <Button asChild size="lg" variant="outline" className="border-white/60 border-2 text-white hover:bg-white hover:text-primary bg-white/10 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-6 py-3">
                <a href="mailto:info@zakiarelief.org" className="flex items-center justify-center">
                  Contact Leadership
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 container-padding max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl md:rounded-[2rem] bg-gradient-to-br from-card via-card to-muted/30 p-8 md:p-12 lg:p-16 shadow-2xl border border-border/60">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full transform translate-x-24 -translate-y-24"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full transform -translate-x-16 translate-y-16"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Badge className="mb-6 px-6 py-2 community-gradient text-white border-0 rounded-full text-sm font-semibold">
              Join Us
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
            Be Part of Our Story
          </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-10 leading-relaxed font-light">
            Join us in our mission to create lasting positive change in Mauritanian communities. 
            Together, we can build a brighter future.
          </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Button asChild size="lg" className="community-gradient text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-8 py-4">
                <NavLink to="/get-involved" className="flex items-center justify-center">
                  <Heart className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" />
                  Get Involved
                </NavLink>
            </Button>
              <Button asChild size="lg" variant="outline" className="btn-outline text-primary hover:text-white hover:bg-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-4">
                <NavLink to="/our-work" className="flex items-center justify-center">
                  See Our Impact
                  <ArrowRight className="h-5 w-5 md:h-6 md:w-6 ml-2 md:ml-3" />
                </NavLink>
            </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;