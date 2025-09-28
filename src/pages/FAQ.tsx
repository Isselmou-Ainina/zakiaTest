import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp, HelpCircle, CreditCard, Heart, Users, Handshake, Shield, Clock, Phone } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ = () => {
  const { t, language } = useLanguage();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      category: t('faq.categories.donations'),
      icon: CreditCard,
      color: "from-blue-500 to-blue-600",
      questions: [
        {
          question: t('faq.donations.bankily.question'),
          answer: t('faq.donations.bankily.answer')
        },
        {
          question: t('faq.donations.creditcard.question'),
          answer: t('faq.donations.creditcard.answer')
        },
        {
          question: t('faq.donations.receipt.question'),
          answer: t('faq.donations.receipt.answer')
        },
        {
          question: t('faq.donations.tax.question'),
          answer: t('faq.donations.tax.answer')
        },
        {
          question: t('faq.donations.currencies.question'),
          answer: t('faq.donations.currencies.answer')
        }
      ]
    },
    {
      category: t('faq.categories.monthly'),
      icon: Heart,
      color: "from-red-500 to-red-600",
      questions: [
        {
          question: t('faq.monthly.how.question'),
          answer: t('faq.monthly.how.answer')
        },
        {
          question: t('faq.monthly.change.question'),
          answer: t('faq.monthly.change.answer')
        },
        {
          question: t('faq.monthly.when.question'),
          answer: t('faq.monthly.when.answer')
        },
        {
          question: t('faq.monthly.minimum.question'),
          answer: t('faq.monthly.minimum.answer')
        }
      ]
    },
    {
      category: t('faq.categories.volunteering'),
      icon: Users,
      color: "from-green-500 to-green-600",
      questions: [
        {
          question: t('faq.volunteering.time.question'),
          answer: t('faq.volunteering.time.answer')
        },
        {
          question: t('faq.volunteering.skills.question'),
          answer: t('faq.volunteering.skills.answer')
        },
        {
          question: t('faq.volunteering.expenses.question'),
          answer: t('faq.volunteering.expenses.answer')
        },
        {
          question: t('faq.volunteering.age.question'),
          answer: t('faq.volunteering.age.answer')
        },
        {
          question: t('faq.volunteering.process.question'),
          answer: t('faq.volunteering.process.answer')
        }
      ]
    },
    {
      category: t('faq.categories.partnerships'),
      icon: Handshake,
      color: "from-purple-500 to-purple-600",
      questions: [
        {
          question: t('faq.partnerships.types.question'),
          answer: t('faq.partnerships.types.answer')
        },
        {
          question: t('faq.partnerships.propose.question'),
          answer: t('faq.partnerships.propose.answer')
        },
        {
          question: t('faq.partnerships.deck.question'),
          answer: t('faq.partnerships.deck.answer')
        },
        {
          question: t('faq.partnerships.requirements.question'),
          answer: t('faq.partnerships.requirements.answer')
        }
      ]
    },
    {
      category: t('faq.categories.programs'),
      icon: Shield,
      color: "from-orange-500 to-orange-600",
      questions: [
        {
          question: t('faq.programs.impact.question'),
          answer: t('faq.programs.impact.answer')
        },
        {
          question: t('faq.programs.areas.question'),
          answer: t('faq.programs.areas.answer')
        },
        {
          question: t('faq.programs.qualify.question'),
          answer: t('faq.programs.qualify.answer')
        },
        {
          question: t('faq.programs.emergency.question'),
          answer: t('faq.programs.emergency.answer')
        }
      ]
    },
    {
      category: t('faq.categories.contact'),
      icon: Phone,
      color: "from-teal-500 to-teal-600",
      questions: [
        {
          question: t('faq.contact.hours.question'),
          answer: t('faq.contact.hours.answer')
        },
        {
          question: t('faq.contact.languages.question'),
          answer: t('faq.contact.languages.answer')
        },
        {
          question: t('faq.contact.updates.question'),
          answer: t('faq.contact.updates.answer')
        },
        {
          question: t('faq.contact.visit.question'),
          answer: t('faq.contact.visit.answer')
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
              {t('faq.badge')}
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              {t('faq.title').split(' ').slice(0, 2).join(' ')} <span className="text-secondary bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent drop-shadow-lg">{t('faq.title').split(' ').slice(2).join(' ')}</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 max-w-4xl mx-auto opacity-95 leading-relaxed font-light">
              {t('faq.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 md:py-20 container-padding max-w-6xl mx-auto">
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg mr-4`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{category.category}</h2>
                  <p className="text-muted-foreground">{category.questions.length} {t('faq.questions')}</p>
                </div>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <Card key={questionIndex} className="border-0 shadow-lg bg-gradient-to-br from-card via-card to-muted/20">
                      <CardHeader 
                        className="cursor-pointer hover:bg-muted/50 transition-colors duration-200"
                        onClick={() => toggleItem(globalIndex)}
                      >
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg font-semibold text-foreground pr-4">
                            {faq.question}
                          </CardTitle>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                          )}
                        </div>
                      </CardHeader>
                      
                      {isOpen && (
                        <CardContent className="pt-0 pb-6">
                          <CardDescription className="text-base leading-relaxed text-muted-foreground">
                            {faq.answer}
                          </CardDescription>
                        </CardContent>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container-padding max-w-4xl mx-auto text-center">
          <HelpCircle className="h-12 w-12 mx-auto mb-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{t('faq.footer.questions')}</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {t('faq.footer.help')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="community-gradient text-white">
              <NavLink to="/contact" className="flex items-center justify-center">
                <Phone className="h-5 w-5 mr-2" />
                {t('faq.footer.contact')}
              </NavLink>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://wa.me/22243727240" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <Clock className="h-5 w-5 mr-2" />
                {t('faq.footer.whatsapp')}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
