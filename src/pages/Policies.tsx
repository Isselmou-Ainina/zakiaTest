import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Camera, AlertTriangle, Users, FileText, Phone, Mail, CheckCircle, Eye, Lock, Heart } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Policies = () => {
  const { t, language } = useLanguage();
  const policies = [
    {
      id: "safeguarding",
      title: t('policies.safeguarding.title'),
      icon: Shield,
      color: "from-blue-500 to-blue-600",
      summary: t('policies.safeguarding.summary'),
      sections: [
        {
          heading: t('policies.safeguarding.commitment.title'),
          content: t('policies.safeguarding.commitment.content')
        },
        {
          heading: t('policies.safeguarding.scope.title'),
          content: t('policies.safeguarding.scope.content')
        },
        {
          heading: t('policies.safeguarding.principles.title'),
          content: t('policies.safeguarding.principles.content')
        },
        {
          heading: t('policies.safeguarding.prohibited.title'),
          content: t('policies.safeguarding.prohibited.content')
        },
        {
          heading: t('policies.safeguarding.reporting.title'),
          content: t('policies.safeguarding.reporting.content')
        },
        {
          heading: t('policies.safeguarding.support.title'),
          content: t('policies.safeguarding.support.content')
        }
      ]
    },
    {
      id: "photo-consent",
      title: t('policies.media.title'),
      icon: Camera,
      color: "from-green-500 to-green-600",
      summary: t('policies.media.summary'),
      sections: [
        {
          heading: t('policies.media.consent.title'),
          content: t('policies.media.consent.content')
        },
        {
          heading: t('policies.media.children.title'),
          content: t('policies.media.children.content')
        },
        {
          heading: t('policies.media.usage.title'),
          content: t('policies.media.usage.content')
        },
        {
          heading: t('policies.media.dignity.title'),
          content: t('policies.media.dignity.content')
        },
        {
          heading: t('policies.media.storage.title'),
          content: t('policies.media.storage.content')
        },
        {
          heading: t('policies.media.withdrawal.title'),
          content: t('policies.media.withdrawal.content')
        }
      ]
    },
    {
      id: "anti-corruption",
      title: t('policies.anticorruption.title'),
      icon: AlertTriangle,
      color: "from-red-500 to-red-600",
      summary: t('policies.anticorruption.summary'),
      sections: [
        {
          heading: t('policies.anticorruption.zero.title'),
          content: t('policies.anticorruption.zero.content')
        },
        {
          heading: t('policies.anticorruption.prohibited.title'),
          content: t('policies.anticorruption.prohibited.content')
        },
        {
          heading: t('policies.anticorruption.transparency.title'),
          content: t('policies.anticorruption.transparency.content')
        },
        {
          heading: t('policies.anticorruption.procurement.title'),
          content: t('policies.anticorruption.procurement.content')
        },
        {
          heading: t('policies.anticorruption.conflict.title'),
          content: t('policies.anticorruption.conflict.content')
        },
        {
          heading: t('policies.anticorruption.reporting.title'),
          content: t('policies.anticorruption.reporting.content')
        },
        {
          heading: t('policies.anticorruption.consequences.title'),
          content: t('policies.anticorruption.consequences.content')
        }
      ]
    }
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
              {t('policies.badge')}
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              {t('policies.title').split(' ').slice(0, 1).join(' ')} <span className="text-secondary bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent drop-shadow-lg">{t('policies.title').split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 max-w-4xl mx-auto opacity-95 leading-relaxed font-light">
              {t('policies.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Policy Overview */}
      <section className="py-16 md:py-20 container-padding max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {policies.map((policy, index) => (
            <Card key={policy.id} className="border-0 shadow-xl bg-gradient-to-br from-card via-card to-muted/20 text-center group hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-8">
                <div className={`p-4 bg-gradient-to-r ${policy.color} rounded-lg w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <policy.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{policy.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{policy.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Detailed Policies */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container-padding max-w-6xl mx-auto space-y-16">
          {policies.map((policy, policyIndex) => (
            <div key={policy.id} className="space-y-8">
              {/* Policy Header */}
              <div className="text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className={`p-4 bg-gradient-to-r ${policy.color} rounded-lg mr-4`}>
                    <policy.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">{policy.title}</h2>
                    <p className="text-muted-foreground">{policy.summary}</p>
                  </div>
                </div>
              </div>

              {/* Policy Sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {policy.sections.map((section, sectionIndex) => (
                  <Card key={sectionIndex} className="border-0 shadow-lg bg-gradient-to-br from-card via-card to-muted/20">
                    <CardHeader>
                      <CardTitle className="text-lg font-bold text-foreground flex items-center">
                        <CheckCircle className="h-5 w-5 mr-3 text-primary" />
                        {section.heading}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
                        {section.content}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Policy Implementation */}
      <section className="py-16 md:py-20 container-padding max-w-6xl mx-auto">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t('policies.implementation.title')}</h2>
           <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
             {t('policies.implementation.subtitle')}
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
              {
                icon: Users,
                title: t('policies.implementation.training.title'),
                description: t('policies.implementation.training.content')
              },
              {
                icon: Eye,
                title: t('policies.implementation.monitoring.title'),
                description: t('policies.implementation.monitoring.content')
              },
              {
                icon: FileText,
                title: t('policies.implementation.documentation.title'),
                description: t('policies.implementation.documentation.content')
              },
              {
                icon: Lock,
                title: t('policies.implementation.updates.title'),
                description: t('policies.implementation.updates.content')
              }
          ].map((item, index) => (
            <Card key={index} className="border-0 shadow-lg bg-gradient-to-br from-card via-card to-muted/20 text-center">
              <CardContent className="p-6">
                <item.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact for Policy Questions */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container-padding max-w-4xl mx-auto text-center">
          <Shield className="h-12 w-12 mx-auto mb-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{t('policies.contact.title')}</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {t('policies.contact.subtitle')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-card via-card to-muted/20">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-bold mb-2">{t('policies.contact.general.title')}</h3>
                <a href="mailto:info@zakiarelief.org" className="text-sm text-primary hover:underline">
                  {t('policies.contact.general.email')}
                </a>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-gradient-to-br from-card via-card to-muted/20">
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-bold mb-2">{t('policies.contact.safeguarding.title')}</h3>
                <a href="mailto:safeguarding@zakiarelief.org" className="text-sm text-primary hover:underline">
                  {t('policies.contact.safeguarding.email')}
                </a>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-gradient-to-br from-card via-card to-muted/20">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-bold mb-2">{t('policies.contact.anonymous.title')}</h3>
                <a href="https://wa.me/22243727240" className="text-sm text-primary hover:underline">
                  {t('policies.contact.anonymous.whatsapp')}
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="community-gradient text-white">
              <NavLink to="/contact" className="flex items-center justify-center">
                <Heart className="h-5 w-5 mr-2" />
                {t('policies.contact.cta.contact')}
              </NavLink>
            </Button>
            <Button asChild size="lg" variant="outline">
              <NavLink to="/faq" className="flex items-center justify-center">
                <FileText className="h-5 w-5 mr-2" />
                {t('policies.contact.cta.faq')}
              </NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Policies;
