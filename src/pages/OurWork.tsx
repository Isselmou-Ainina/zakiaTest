import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Utensils, Droplets, TreePine, Users, Heart, Target, ArrowRight, CheckCircle, Building2, UserPlus, TrendingUp } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const OurWork = () => {
  const milestones = [
    {
      year: "2018",
      title: "Foundation Established",
      description: "Zakia Relief was founded with a vision to uplift vulnerable communities in Mauritania through sustainable development and community-driven solutions.",
      icon: Building2,
      impact: "Organization founded",
      color: "from-primary/20 to-primary/5"
    },
    {
      year: "2019",
      title: "First Community Kitchen",
      description: "Launched our first feeding program, serving 50 families weekly with nutritious meals and establishing the foundation of our food security mission.",
      icon: Utensils,
      impact: "50 families served weekly",
      color: "from-secondary/20 to-secondary/5"
    },
    {
      year: "2020",
      title: "Water Access Project",
      description: "Initiated clean water programs during challenging times, installing our first community water points and beginning our life-changing water delivery services.",
      icon: Droplets,
      impact: "First water points installed",
      color: "from-accent/20 to-accent/5"
    },
    {
      year: "2021",
      title: "Environmental Initiative",
      description: "Expanded to include community clean-up and environmental education programs, addressing the critical need for sustainable environmental stewardship.",
      icon: TreePine,
      impact: "Environmental programs launched",
      color: "from-primary/20 to-primary/5"
    },
    {
      year: "2022",
      title: "Partnership Growth",
      description: "Formed strategic partnerships with local organizations, international donors, and community leaders to amplify our impact and reach more families in need.",
      icon: UserPlus,
      impact: "Strategic partnerships formed",
      color: "from-secondary/20 to-secondary/5"
    },
    {
      year: "2023",
      title: "Major Water Impact",
      description: "Achieved our most significant milestone: delivering over 300 tons of clean water to communities across Nouakchott, directly impacting hundreds of families.",
      icon: TrendingUp,
      impact: "300+ tons of water delivered",
      color: "from-accent/20 to-accent/5"
    }
  ];

  const programs = [
    {
      icon: Utensils,
      title: "Feeding the Community",
      description: "Fighting hunger by providing nutritious meals to families in need throughout Nouakchott.",
      details: [
        "Weekly food distribution to 200+ families",
        "Emergency meal programs during Ramadan",
        "Nutritional support for children and elderly",
        "Community kitchen initiatives"
      ],
      impact: "8,000+ meals served in 2023",
      color: "from-primary/20 to-primary/5"
    },
    {
      icon: Droplets,
      title: "Providing Clean Water",
      description: "Ensuring access to safe, clean drinking water for underserved communities.",
      details: [
        "Installation of community water points",
        "Water filtration system maintenance",
        "Hygiene and sanitation education",
        "Emergency water distribution",
        "Mobile water delivery services"
      ],
      impact: "300+ tons of water delivered",
      color: "from-secondary/20 to-secondary/5"
    },
    {
      icon: TreePine,
      title: "Cleaning the Community",
      description: "Environmental stewardship through community clean-up drives and education.",
      details: [
        "Monthly neighborhood clean-up events",
        "Waste management education programs",
        "Tree planting initiatives",
        "Recycling awareness campaigns"
      ],
      impact: "15 tons of waste removed in 2023",
      color: "from-accent/20 to-accent/5"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Families Served" },
    { icon: Heart, value: "6 Years", label: "Since 2018" },
    { icon: Target, value: "3", label: "Core Programs" }
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
              Our Programs
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Our Work in <span className="text-secondary bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent drop-shadow-lg">Action</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 max-w-4xl mx-auto opacity-95 leading-relaxed font-light">
              Through three core programs, we're building stronger, healthier communities 
              across Nouakchott, Mauritania.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/15 transform hover:-translate-y-2">
                    <stat.icon className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-2 md:mb-3 opacity-90 text-secondary group-hover:scale-110 transition-transform duration-300" />
                    <div className="impact-stat text-white drop-shadow-lg group-hover:scale-105 transition-transform">{stat.value}</div>
                    <div className="impact-label text-white/95 font-medium text-xs md:text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-12 md:py-16 container-padding max-w-6xl mx-auto relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-muted/50 to-transparent"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-10 md:mb-14">
            <Badge className="mb-4 px-6 py-2 community-gradient text-white border-0 rounded-full text-sm font-semibold">
              Program Details
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              How We Make Impact
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Each program addresses critical community needs with sustainable solutions and measurable results.
            </p>
          </div>
          
          <div className="space-y-8 md:space-y-12">
            {programs.map((program, index) => (
              <Card key={program.title} className={`group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-gradient-to-br from-card via-card to-muted/20`}>
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>
                
                <CardContent className="p-0 relative z-10">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                      <CardHeader className="p-0 mb-6">
                        <div className="flex items-start mb-6">
                          <div className="mr-4 md:mr-6 p-4 md:p-5 community-gradient rounded-2xl group-hover:scale-110 transition-all duration-500 shadow-lg">
                            <program.icon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-2xl md:text-3xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                              {program.title}
                            </CardTitle>
                            <CardDescription className="text-base md:text-lg leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                              {program.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <div className="space-y-6">
                        <Badge className="community-gradient text-white border-0 px-6 py-3 text-sm md:text-base font-semibold rounded-full shadow-md group-hover:shadow-lg transition-shadow duration-300">
                          {program.impact}
                        </Badge>
                        
                        <ul className="space-y-3">
                          {program.details.map((detail, i) => (
                            <li key={i} className="flex items-start group/item">
                              <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                              <span className="text-sm md:text-base leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className={`bg-gradient-to-br ${program.color} p-6 md:p-8 lg:p-10 flex items-center justify-center relative overflow-hidden`}>
                      {/* Background decoration for image area */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                      <div className="text-center relative z-10">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-3xl"></div>
                          <program.icon className="h-24 w-24 md:h-32 md:w-32 text-primary mx-auto mb-6 opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500 relative z-10" />
                        </div>
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                          Program imagery and community photos showcasing our impact in action.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="community-gradient text-white py-12 md:py-16 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full transform translate-x-24 -translate-y-24"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full transform -translate-x-32 translate-y-32"></div>
        
        <div className="max-w-6xl mx-auto container-padding relative z-10">
          <div className="text-center mb-10 md:mb-14">
            <Badge className="mb-4 px-6 py-2 gold-gradient text-white border-0 rounded-full text-sm font-semibold shadow-xl">
              Timeline
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 text-white">Our Journey</h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              From our humble beginnings to major community impact, discover the milestones that have shaped our work and expanded our programs.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-12 top-8 bottom-8 w-0.5 bg-gradient-to-b from-secondary via-white/30 to-secondary opacity-60"></div>
            
            <div className="space-y-6 md:space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative flex flex-col md:flex-row items-start">
                  {/* Year badge with connecting dot */}
                  <div className="flex-shrink-0 relative z-10 mb-4 md:mb-0 md:mr-8">
                    <div className="gold-gradient text-white p-4 md:p-5 rounded-full text-center min-w-[80px] md:min-w-[90px] shadow-xl">
                      <span className="font-bold text-lg md:text-xl">{milestone.year}</span>
                    </div>
                    {/* Timeline connecting dot */}
                    <div className="absolute -right-2 md:-right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-white shadow-md"></div>
                  </div>
                  
                  {/* Content card */}
                  <div className="flex-1 group">
                    <Card className={`bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden bg-gradient-to-br ${milestone.color}`}>
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="p-3 community-gradient rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-md">
                              <milestone.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                            </div>
                            <div>
                              <CardTitle className="text-xl md:text-2xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                {milestone.title}
                              </CardTitle>
                              <Badge className="community-gradient text-white border-0 px-3 py-1 text-xs font-medium rounded-full shadow-sm">
                                <TrendingUp className="h-3 w-3 mr-1" />
                                {milestone.impact}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm md:text-base leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Future milestone - Looking Forward */}
            <div className="relative flex flex-col md:flex-row items-start mt-8 opacity-90">
              <div className="flex-shrink-0 relative z-10 mb-4 md:mb-0 md:mr-8">
                <div className="border-2 border-dashed border-secondary/60 text-secondary p-4 md:p-5 rounded-full text-center min-w-[80px] md:min-w-[90px] bg-white/10 backdrop-blur-sm">
                  <span className="font-bold text-lg md:text-xl">2024+</span>
                </div>
                <div className="absolute -right-2 md:-right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-secondary/60 rounded-full border-4 border-white"></div>
              </div>
              
              <Card className="bg-white/90 backdrop-blur-sm border-2 border-dashed border-secondary/30 flex-1 shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-secondary/20 rounded-lg">
                      <Target className="h-6 w-6 md:h-7 md:w-7 text-secondary" />
                    </div>
                    <CardTitle className="text-xl md:text-2xl text-foreground">
                      Looking Forward
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                    Continuing our mission to serve even more families, expand our water delivery program, 
                    and create lasting sustainable change across Mauritania. Join us as we write the next chapter of our journey.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 container-padding max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl md:rounded-[2rem] bg-gradient-to-br from-card via-card to-muted/30 p-6 md:p-10 lg:p-14 shadow-2xl border border-border/60">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full transform translate-x-24 -translate-y-24"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full transform -translate-x-16 translate-y-16"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Badge className="mb-4 px-6 py-2 community-gradient text-white border-0 rounded-full text-sm font-semibold">
              Take Action
            </Badge>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-5 md:mb-7 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
              Join Us in Making a Difference
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 leading-relaxed font-light">
              Every contribution helps us expand our reach and deepen our impact 
              in the communities that need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Button asChild size="lg" className="community-gradient text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-6 py-3">
                <NavLink to="/donate" className="flex items-center justify-center">
                  <Heart className="h-5 w-5 md:h-6 md:w-6 mr-2" />
                  Support Our Work
                </NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-outline text-primary hover:text-white hover:bg-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-6 py-3">
                <NavLink to="/get-involved" className="flex items-center justify-center">
                  Volunteer With Us
                  <ArrowRight className="h-5 w-5 md:h-6 md:w-6 ml-2" />
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;