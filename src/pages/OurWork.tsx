import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Utensils, Droplets, TreePine, Users, Heart, Target, ArrowRight, CheckCircle, Building2, UserPlus, TrendingUp } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import beachCleanup1 from '/beach_cleanup_1.jpg';
import foodDonation1 from '/food_donation_1.jpg';
import waterDonation1 from '/water_donation_1.jpg';

const OurWork = () => {
  const { t, language } = useLanguage();
  
  const milestones = [
    {
      year: "2018",
      title: t('work.timeline.2018.title'),
      description: t('work.timeline.2018.description'),
      icon: Building2,
      impact: t('work.timeline.2018.impact'),
      color: "from-primary/20 to-primary/5"
    },
    {
      year: "2019",
      title: t('work.timeline.2019.title'),
      description: t('work.timeline.2019.description'),
      icon: Utensils,
      impact: t('work.timeline.2019.impact'),
      color: "from-secondary/20 to-secondary/5"
    },
    {
      year: "2020",
      title: t('work.timeline.2020.title'),
      description: t('work.timeline.2020.description'),
      icon: Droplets,
      impact: t('work.timeline.2020.impact'),
      color: "from-accent/20 to-accent/5"
    },
    {
      year: "2021",
      title: t('work.timeline.2021.title'),
      description: t('work.timeline.2021.description'),
      icon: TreePine,
      impact: t('work.timeline.2021.impact'),
      color: "from-primary/20 to-primary/5"
    },
    {
      year: "2022",
      title: t('work.timeline.2022.title'),
      description: t('work.timeline.2022.description'),
      icon: UserPlus,
      impact: t('work.timeline.2022.impact'),
      color: "from-secondary/20 to-secondary/5"
    },
    {
      year: "2023",
      title: t('work.timeline.2023.title'),
      description: t('work.timeline.2023.description'),
      icon: TrendingUp,
      impact: t('work.timeline.2023.impact'),
      color: "from-accent/20 to-accent/5"
    }
  ];

  const programs = [
    {
      programKey: 'food',
      icon: Utensils,
      title: t('work.programs.food.title'),
      description: t('work.programs.food.description'),
      locations: t('work.programs.food.locations'),
      details: [
        "Weekly food distribution to 200+ families",
        "Emergency meal programs during Ramadan",
        "Nutritional support for children and elderly",
        "Community kitchen initiatives"
      ],
      impact: t('work.programs.food.impact'),
      outcomes: [
        t('work.programs.food.outcome1'),
        t('work.programs.food.outcome2'),
        t('work.programs.food.outcome3')
      ],
      costs: {
        perUnit: t('work.programs.food.costPerUnit'),
        weeklyFamily: t('work.programs.food.weeklyFamily'),
        volunteerHours: t('work.programs.food.volunteerHours')
      },
      story: t('work.programs.food.story'),
      photoCaption: t('work.programs.food.photoCaption'),
      color: "from-primary/20 to-primary/5"
    },
    {
      programKey: 'water',
      icon: Droplets,
      title: t('work.programs.water.title'),
      description: t('work.programs.water.description'),
      locations: t('work.programs.water.locations'),
      details: [
        "Installation of community water points",
        "Water filtration system maintenance",
        "Hygiene and sanitation education",
        "Emergency water distribution",
        "Mobile water delivery services"
      ],
      impact: t('work.programs.water.impact'),
      outcomes: [
        t('work.programs.water.outcome1'),
        t('work.programs.water.outcome2'),
        t('work.programs.water.outcome3')
      ],
      costs: {
        perUnit: t('work.programs.water.costPerUnit'),
        weeklyFamily: t('work.programs.water.weeklyFamily'),
        volunteerHours: t('work.programs.water.volunteerHours')
      },
      story: t('work.programs.water.story'),
      photoCaption: t('work.programs.water.photoCaption'),
      color: "from-secondary/20 to-secondary/5"
    },
    {
      programKey: 'environment',
      icon: TreePine,
      title: t('work.programs.environment.title'),
      description: t('work.programs.environment.description'),
      locations: t('work.programs.environment.locations'),
      details: [
        "Monthly neighborhood clean-up events",
        "Waste management education programs",
        "Tree planting initiatives",
        "Recycling awareness campaigns"
      ],
      impact: t('work.programs.environment.impact'),
      outcomes: [
        t('work.programs.environment.outcome1'),
        t('work.programs.environment.outcome2'),
        t('work.programs.environment.outcome3')
      ],
      costs: {
        perUnit: t('work.programs.environment.costPerUnit'),
        weeklyFamily: t('work.programs.environment.weeklyFamily'),
        volunteerHours: t('work.programs.environment.volunteerHours')
      },
      story: t('work.programs.environment.story'),
      photoCaption: t('work.programs.environment.photoCaption'),
      color: "from-accent/20 to-accent/5"
    }
  ];

  const stats = [
    { icon: Users, value: t('work.stats.familiesValue'), label: t('work.stats.familiesServed') },
    { icon: Heart, value: t('work.stats.yearsValue'), label: t('work.stats.yearsSince') },
    { icon: Target, value: t('work.stats.programsValue'), label: t('work.stats.corePrograms') }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative community-gradient text-white py-12 md:py-16 lg:py-20 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-white/5 rounded-full transform -translate-x-24 -translate-y-24"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full transform translate-x-32 translate-y-32"></div>
        
        <div className="max-w-6xl mx-auto container-padding relative z-10">
          <div className="text-center">
            <Badge className="mb-4 md:mb-6 px-6 py-2 gold-gradient text-white border-0 rounded-full text-sm font-semibold shadow-xl">
              {t('work.badge')}
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              {t('work.title').split(' ').slice(0, 3).join(' ')} <span className="text-secondary bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent drop-shadow-lg">{t('work.title').split(' ').slice(3).join(' ')}</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 max-w-4xl mx-auto opacity-95 leading-relaxed font-light">
              {t('work.subtitle')}
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
              {t('work.programDetails.badge')}
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t('work.programDetails.title')}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('work.programDetails.subtitle')}
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
                        {/* Location Badge */}
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline" className="text-xs">
                            📍 {program.locations}
                          </Badge>
                        </div>

                        {/* Impact Badge */}
                        <Badge className="community-gradient text-white border-0 px-6 py-3 text-sm md:text-base font-semibold rounded-full shadow-md group-hover:shadow-lg transition-shadow duration-300">
                          {program.impact}
                        </Badge>

                        {/* Cost Table */}
                        <div className="bg-muted/50 rounded-lg p-4">
                          <h4 className="font-semibold mb-3 text-sm">{t('work.programDetails.costsTitle')}</h4>
                          <div className="space-y-2 text-xs">
                            <div className="flex justify-between">
                              <span>{t('work.programDetails.costPerUnit')}</span>
                              <span className="font-medium">{program.costs.perUnit}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>{t('work.programDetails.weeklyFamilySupport')}</span>
                              <span className="font-medium">{program.costs.weeklyFamily}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>{t('work.programDetails.volunteerHours')}</span>
                              <span className="font-medium">{program.costs.volunteerHours}</span>
                            </div>
                          </div>
                        </div>

                        {/* Outcomes */}
                        <div>
                          <h4 className="font-semibold mb-3 text-sm">{t('work.programDetails.measuredOutcomes')}</h4>
                          <ul className="space-y-2">
                            {program.outcomes.map((outcome, i) => (
                              <li key={i} className="flex items-start group/item">
                                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                                <span className="text-xs leading-relaxed text-muted-foreground">{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Micro-story */}
                        <div className="bg-primary/5 rounded-lg p-4">
                          <h4 className="font-semibold mb-2 text-sm">{t('work.programDetails.communityStory')}</h4>
                          <p className="text-xs leading-relaxed text-muted-foreground italic">"{program.story}"</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className={`bg-gradient-to-br ${program.color} relative overflow-hidden h-96 md:h-[32rem]`}>
                      {program.programKey === "food" ? (
                        <>
                          <img 
                            src={foodDonation1} 
                            alt="Food security program in Nouakchott communities" 
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          <div className="absolute bottom-0 left-0 right-0 text-center p-4">
                            <p className="text-white text-sm md:text-base leading-relaxed font-medium drop-shadow-lg">
                              {program.photoCaption}
                            </p>
                          </div>
                        </>
                      ) : program.programKey === "water" ? (
                        <>
                          <img 
                            src={waterDonation1} 
                            alt="Clean water access program in Nouakchott districts" 
                            className="w-full h-full object-cover object-bottom group-hover:scale-105 transition-all duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          <div className="absolute bottom-0 left-0 right-0 text-center p-4">
                            <p className="text-white text-sm md:text-base leading-relaxed font-medium drop-shadow-lg">
                              {program.photoCaption}
                            </p>
                          </div>
                        </>
                      ) : program.programKey === "environment" ? (
                        <>
                          <img 
                            src={beachCleanup1} 
                            alt="Environmental care program in Nouakchott neighborhoods" 
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          <div className="absolute bottom-0 left-0 right-0 text-center p-4">
                            <p className="text-white text-sm md:text-base leading-relaxed font-medium drop-shadow-lg">
                              {program.photoCaption}
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Background decoration for image area */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                          <div className="p-6 md:p-8 lg:p-10 flex items-center justify-center h-full">
                            <div className="text-center relative z-10">
                              <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-3xl"></div>
                                <program.icon className="h-24 w-24 md:h-32 md:w-32 text-primary mx-auto mb-6 opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500 relative z-10" />
                              </div>
                              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                                {t('work.programDetails.programImagery')}
                              </p>
                            </div>
                          </div>
                        </>
                      )}
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
              {t('work.timeline.badge')}
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 text-white">{t('work.timeline.title')}</h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t('work.timeline.subtitle')}
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
                      {t('work.timeline.2024.title')}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                    {t('work.timeline.2024.description')}
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
              {t('work.cta.badge')}
            </Badge>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-5 md:mb-7 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
              {t('work.cta.title')}
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 leading-relaxed font-light">
              {t('work.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Button asChild size="lg" className="community-gradient text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 px-6 py-3">
                <NavLink to="/donate" className="flex items-center justify-center">
                  <Heart className="h-5 w-5 md:h-6 md:w-6 mr-2" />
                  {t('work.cta.support')}
                </NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-outline text-primary hover:text-white hover:bg-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-6 py-3">
                <NavLink to="/get-involved" className="flex items-center justify-center">
                  {t('work.cta.volunteer')}
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