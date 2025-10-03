import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Award, Heart, Handshake, ArrowRight, CheckCircle, Shield, FileText } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();
  
  const values = [
    {
      icon: Heart,
      title: t('about.values.compassion.title'),
      description: t('about.values.compassion.description')
    },
    {
      icon: Handshake,
      title: t('about.values.community.title'),
      description: t('about.values.community.description')
    },
    {
      icon: Target,
      title: t('about.values.impact.title'),
      description: t('about.values.impact.description')
    },
    {
      icon: Award,
      title: t('about.values.integrity.title'),
      description: t('about.values.integrity.description')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative community-gradient text-white mobile-section overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-white/5 rounded-full transform -translate-x-24 -translate-y-24"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full transform translate-x-32 translate-y-32"></div>
        
        <div className="max-w-6xl mx-auto container-padding relative z-10">
          <div className="text-center">
            <Badge className="mb-4 md:mb-6 px-6 py-2 gold-gradient text-white border-0 rounded-full text-sm font-semibold shadow-xl">
              {t('about.story.title')}
            </Badge>
            <h1 className="mobile-text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              {t('about.title').split(' ').slice(0, 1).join(' ')} <span className="text-secondary bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent drop-shadow-lg">{t('about.title').split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="mobile-text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-4xl mx-auto opacity-95 leading-relaxed font-light">
              {t('about.subtitle')}
            </p>
            
            {/* Key Impact Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 mobile-gap max-w-4xl mx-auto mt-8 md:mt-12">
              {[
                { number: "500+", label: t('about.story.families'), icon: Users },
                { number: "8K+", label: t('about.story.meals'), icon: Heart },
                { number: "300+", label: t('about.story.water'), icon: Target },
                { number: "6", label: t('about.story.years'), icon: Award }
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/15 transform hover:-translate-y-2">
                    <stat.icon className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-2 md:mb-3 opacity-90 text-secondary group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg group-hover:scale-105 transition-transform">{stat.number}</div>
                    <div className="text-white/95 font-medium text-xs md:text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mobile-section mobile-container max-w-6xl mx-auto relative">
        <div className="relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 px-6 py-2 community-gradient text-white border-0 rounded-full text-sm font-semibold">
              {t('about.purpose.title')}
            </Badge>
            <h2 className="mobile-text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t('about.purpose.subtitle')}
            </h2>
            <p className="mobile-text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('about.purpose.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 mobile-gap mb-16 md:mb-20">
            <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-gradient-to-br from-card via-card to-muted/20 h-full">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-full transform translate-x-6 -translate-y-6"></div>
              
              <CardHeader className="pb-6 relative z-10">
                <CardTitle className="mobile-text-xl md:text-3xl flex items-center text-foreground group-hover:text-primary transition-colors duration-300">
                  <div className="mr-4 p-4 community-gradient rounded-2xl group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <Target className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  {t('about.mission.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 relative z-10">
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {t('about.mission.description')}
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
                  {t('about.vision.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 relative z-10">
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {t('about.vision.description')}
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
              {t('about.foundation.title')}
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t('about.foundation.subtitle')}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('about.foundation.description')}
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
      <section className="community-gradient text-white mobile-section relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full transform translate-x-24 -translate-y-24"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full transform -translate-x-32 translate-y-32"></div>
        
        <div className="max-w-6xl mx-auto container-padding relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 px-6 py-2 gold-gradient text-white border-0 rounded-full text-sm font-semibold shadow-xl">
              {t('about.team.title')}
            </Badge>
            <h2 className="mobile-text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 text-white">
              {t('about.team.subtitle')}
            </h2>
            <p className="mobile-text-base md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t('about.team.description')}
            </p>
          </div>
          
          {/* Co-Founders Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 mobile-gap mb-12 md:mb-16 max-w-5xl mx-auto">
            {[
              {
                name: t('about.leadership.ely.name'),
                title: t('about.leadership.ely.title'),
                description: t('about.leadership.ely.description'),
                icon: Users,
                isFounder: true,
                imageKey: 'ely'
              },
              {
                name: t('about.leadership.isselmou.name'),
                title: t('about.leadership.isselmou.title'),
                description: t('about.leadership.isselmou.description'),
                icon: Target,
                isFounder: true,
                imageKey: 'isselmou'
              }
            ].map((leader, index) => (
              <Card key={leader.name} className="group relative overflow-hidden bg-white/95 backdrop-blur-sm border-2 border-secondary/30 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>
                
                <CardHeader className="text-center pb-6 relative z-10">
                  {/* Profile image */}
                  <div className="mx-auto w-32 h-32 md:w-36 md:h-36 rounded-full mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg overflow-hidden border-4 border-white/20">
                    <img 
                      src={leader.imageKey === "ely" ? "/ely.jpeg" : "/isselmou.jpeg"} 
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
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

          {/* Growing Team */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto border-0 shadow-xl bg-gradient-to-br from-card via-card to-muted/20">
              <CardContent className="p-8">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">{t('about.growing.title')}</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  {t('about.growing.description')}
                </p>
                <Badge className="community-gradient text-white border-0 px-6 py-2 text-sm font-medium rounded-full shadow-sm">
                  {t('about.growing.volunteerLed')}
                </Badge>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12 md:mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl max-w-4xl mx-auto">
              <CheckCircle className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">{t('about.growing.joinLeadership')}</h3>
              <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6">
                {t('about.growing.cta')}
              </p>
              <Button asChild size="lg" variant="outline" className="border-white/60 border-2 text-white hover:bg-white hover:text-primary bg-white/10 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-6 py-3">
                <NavLink to="/contact" className="flex items-center justify-center">
                  {t('about.growing.contact')}
                  <ArrowRight className="h-5 w-5 ml-2" />
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency & Accountability */}
      <section className="py-16 md:py-20 container-padding max-w-6xl mx-auto relative">
        <div className="relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 px-6 py-2 community-gradient text-white border-0 rounded-full text-sm font-semibold">
              {t('about.commitment.title')}
            </Badge>
            <h2 className="mobile-text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t('about.commitment.transparency.title')}
            </h2>
            <p className="mobile-text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('about.commitment.transparency.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mobile-gap">
            {[
              {
                icon: Shield,
                title: t('about.transparency.title'),
                description: t('about.transparency.description'),
                color: "from-green-500 to-green-600"
              },
              {
                icon: CheckCircle,
                title: t('about.commitment.verified.title'),
                description: t('about.commitment.verified.description'),
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Users,
                title: t('about.commitment.community.title'),
                description: t('about.commitment.community.description'),
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: Award,
                title: t('about.commitment.volunteer.title'),
                description: t('about.commitment.volunteer.description'),
                color: "from-orange-500 to-orange-600"
              }
            ].map((item, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-gradient-to-br from-card via-card to-muted/20 text-center h-full">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/5 to-transparent rounded-full transform translate-x-4 -translate-y-4"></div>
                
                <CardHeader className="pb-4 relative z-10">
                  <div className="mx-auto p-4 md:p-5 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <item.icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg md:text-xl text-foreground group-hover:text-primary transition-colors duration-300">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 relative z-10">
                  <CardDescription className="text-sm md:text-base leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Safeguarding & Ethics */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container-padding max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 px-6 py-2 community-gradient text-white border-0 rounded-full text-sm font-semibold">
              {t('about.ethics.title')}
            </Badge>
            <h2 className="mobile-text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t('about.ethics.subtitle')}
            </h2>
            <p className="mobile-text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('about.ethics.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 mobile-gap">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-card via-card to-muted/20">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-bold mb-3">{t('about.ethics.anticorruption.title')}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t('about.ethics.anticorruption.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-card via-card to-muted/20">
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-bold mb-3">{t('about.ethics.conflict.title')}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t('about.ethics.conflict.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-gradient-to-br from-card via-card to-muted/20">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-bold mb-3">{t('about.ethics.photo.title')}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t('about.ethics.photo.description')}
                </p>
              </CardContent>
            </Card>
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
              {t('about.join.title')}
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
            {t('about.join.subtitle')}
          </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-10 leading-relaxed font-light">
            {t('about.join.description')}
          </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Button asChild size="lg" className="community-gradient text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-8 py-4">
                <NavLink to="/get-involved" className="flex items-center justify-center">
                  <Heart className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" />
                  {t('about.join.getInvolved')}
                </NavLink>
            </Button>
              <Button asChild size="lg" variant="outline" className="btn-outline text-primary hover:text-white hover:bg-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-4">
                <NavLink to="/our-work" className="flex items-center justify-center">
                  {t('about.join.seeImpact')}
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