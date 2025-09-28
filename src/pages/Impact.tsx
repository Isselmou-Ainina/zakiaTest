import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, FileText, TrendingUp, Users, Utensils, Droplets, TreePine, Calendar, CheckCircle, Download, Eye, PieChart } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Impact = () => {
  const { t, language } = useLanguage();
  // Current metrics data
  const currentMetrics = [
    {
      icon: Utensils,
      title: t('impact.metrics.meals.title'),
      value: t('impact.metrics.meals.value'),
      period: t('impact.metrics.meals.period'),
      methodology: t('impact.metrics.meals.methodology'),
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Droplets,
      title: t('impact.metrics.water.title'),
      value: t('impact.metrics.water.value'),
      period: t('impact.metrics.water.period'),
      methodology: t('impact.metrics.water.methodology'),
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: TreePine,
      title: t('impact.metrics.waste.title'),
      value: t('impact.metrics.waste.value'),
      period: t('impact.metrics.waste.period'),
      methodology: t('impact.metrics.waste.methodology'),
      color: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      title: t('impact.metrics.families.title'),
      value: t('impact.metrics.families.value'),
      period: t('impact.metrics.families.period'),
      methodology: t('impact.metrics.families.methodology'),
      color: "from-purple-500 to-purple-600"
    }
  ];

  // Get highlights as arrays based on language
  const getHighlights = (quarter: string) => {
    const highlightsMap: { [key: string]: string[] } = {
      'q4': language === 'en' ? ['2,100 meals', '85 tons water', '4.2 tons waste', 'Beach cleanup campaign'] :
            language === 'fr' ? ['2,100 repas', '85 tonnes eau', '4,2 tonnes déchets', 'Campagne nettoyage plage'] :
            ['2,100 وجبة', '85 طن ماء', '4.2 طن نفايات', 'حملة تنظيف الشاطئ'],
      'q3': language === 'en' ? ['1,800 meals', '72 tons water', '3.8 tons waste', 'Community garden project'] :
            language === 'fr' ? ['1,800 repas', '72 tonnes eau', '3,8 tonnes déchets', 'Projet jardin communautaire'] :
            ['1,800 وجبة', '72 طن ماء', '3.8 طن نفايات', 'مشروع حديقة مجتمعية'],
      'q2': language === 'en' ? ['2,200 meals', '90 tons water', '4.5 tons waste', 'School nutrition program'] :
            language === 'fr' ? ['2,200 repas', '90 tonnes eau', '4,5 tonnes déchets', 'Programme nutrition scolaire'] :
            ['2,200 وجبة', '90 طن ماء', '4.5 طن نفايات', 'برنامج التغذية المدرسية'],
      'q1': language === 'en' ? ['1,900 meals', '78 tons water', '3.9 tons waste', 'Emergency food distribution'] :
            language === 'fr' ? ['1,900 repas', '78 tonnes eau', '3,9 tonnes déchets', 'Distribution alimentaire d\'urgence'] :
            ['1,900 وجبة', '78 طن ماء', '3.9 طن نفايات', 'توزيع غذائي طارئ']
    };
    return highlightsMap[quarter] || [];
  };

  const quarterlyReports = [
    {
      quarter: t('impact.reports.q4.quarter'),
      period: t('impact.reports.q4.period'),
      status: t('impact.reports.current'),
      highlights: getHighlights('q4')
    },
    {
      quarter: t('impact.reports.q3.quarter'),
      period: t('impact.reports.q3.period'),
      status: t('impact.reports.published'),
      highlights: getHighlights('q3')
    },
    {
      quarter: t('impact.reports.q2.quarter'),
      period: t('impact.reports.q2.period'), 
      status: t('impact.reports.published'),
      highlights: getHighlights('q2')
    },
    {
      quarter: t('impact.reports.q1.quarter'),
      period: t('impact.reports.q1.period'),
      status: t('impact.reports.published'), 
      highlights: getHighlights('q1')
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
              {t('impact.badge')}
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              {t('impact.title').split(' ').slice(0, 1).join(' ')} <span className="text-secondary bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent drop-shadow-lg">{t('impact.title').split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 max-w-4xl mx-auto opacity-95 leading-relaxed font-light">
              {t('impact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Current Metrics */}
      <section className="py-16 md:py-20 container-padding max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 px-6 py-2 community-gradient text-white border-0 rounded-full text-sm font-semibold">
            {t('impact.current.badge')}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {t('impact.metrics.title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('impact.metrics.subtitle')}
          </p>
          <div className="mt-4 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 inline mr-2" />
            {t('impact.metrics.lastUpdated')}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentMetrics.map((metric, index) => (
            <Card key={index} className="border-0 shadow-xl bg-gradient-to-br from-card via-card to-muted/20 text-center group hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6">
                <div className={`p-3 bg-gradient-to-br ${metric.color} rounded-lg w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <metric.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{metric.value}</div>
                <h3 className="font-semibold text-foreground mb-2">{metric.title}</h3>
                <p className="text-xs text-muted-foreground mb-2">{metric.period}</p>
                <div className="bg-muted/50 rounded p-2 mt-3">
                  <p className="text-xs text-muted-foreground">
                    <strong>{t('impact.metrics.howWeCount')}</strong> {metric.methodology}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 100% to Programs Model */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container-padding max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 px-6 py-2 community-gradient text-white border-0 rounded-full text-sm font-semibold">
              {t('impact.model.badge')}
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t('impact.model.title')}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('impact.model.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pie Chart Representation */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-card via-card to-muted/20">
              <CardContent className="p-8 text-center">
                <PieChart className="h-16 w-16 mx-auto mb-6 text-primary" />
                <h3 className="text-2xl font-bold mb-6 text-foreground">{t('impact.model.whereGoes')}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-primary/10 rounded-lg p-4">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-primary rounded mr-3"></div>
                      <span className="font-medium">{t('impact.model.programs')}</span>
                    </div>
                    <span className="font-bold text-primary">100%</span>
                  </div>
                  
                  <div className="flex items-center justify-between bg-green-50 rounded-lg p-4">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-green-600 rounded mr-3"></div>
                      <span className="font-medium">{t('impact.model.overhead')}</span>
                    </div>
                    <span className="font-bold text-green-600">{t('impact.model.covered')}</span>
                  </div>
                  
                  <div className="flex items-center justify-between bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-blue-600 rounded mr-3"></div>
                      <span className="font-medium">{t('impact.model.admin')}</span>
                    </div>
                    <span className="font-bold text-blue-600">{t('impact.model.donated')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Explanation */}
            <div className="space-y-6">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-card via-card to-muted/20">
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-foreground">{t('impact.model.howWorks.title')}</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      {t('impact.model.howWorks.transport')}
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      {t('impact.model.howWorks.admin')}
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      {t('impact.model.howWorks.volunteers')}
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      {t('impact.model.howWorks.donations')}
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-card via-card to-muted/20">
                <CardContent className="p-6">
                  <FileText className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-foreground">{t('impact.model.verification.title')}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {t('impact.model.verification.content')}
                  </p>
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    {t('impact.model.verification.button')}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quarterly Reports */}
      <section className="py-16 md:py-20 container-padding max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 px-6 py-2 community-gradient text-white border-0 rounded-full text-sm font-semibold">
            {t('impact.reports.badge')}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {t('impact.reports.title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('impact.reports.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quarterlyReports.map((report, index) => (
            <Card key={index} className={`border-0 shadow-xl bg-gradient-to-br from-card via-card to-muted/20 ${report.status === t('impact.reports.current') ? 'ring-2 ring-primary' : ''}`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground">{report.quarter}</h3>
                  <Badge variant={report.status === t('impact.reports.current') ? 'default' : 'outline'} className={report.status === t('impact.reports.current') ? 'community-gradient text-white' : ''}>
                    {report.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{report.period}</p>
                
                <div className="space-y-2 mb-4">
                  {report.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" size="sm" className="w-full" disabled={report.status === t('impact.reports.current')}>
                  <Download className="h-4 w-4 mr-2" />
                  {report.status === t('impact.reports.current') ? t('impact.reports.inProgress') : t('impact.reports.download')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild size="lg" variant="outline">
            <NavLink to="/contact" className="flex items-center justify-center">
              {t('impact.reports.requestAnnual')}
              <FileText className="h-5 w-5 ml-2" />
            </NavLink>
          </Button>
        </div>
      </section>

      {/* Donor Privacy */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container-padding max-w-4xl mx-auto text-center">
          <Shield className="h-12 w-12 mx-auto mb-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{t('impact.privacy.title')}</h2>
          <div className="text-left bg-white rounded-lg shadow-lg p-8 space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              <strong>{t('impact.privacy.private').split(':')[0]}:</strong> {t('impact.privacy.private').split(':').slice(1).join(':').trim()}
            </p>
            <p>
              <strong>{t('impact.privacy.collect').split(':')[0]}:</strong> {t('impact.privacy.collect').split(':').slice(1).join(':').trim()}
            </p>
            <p>
              <strong>{t('impact.privacy.use').split(':')[0]}:</strong> {t('impact.privacy.use').split(':').slice(1).join(':').trim()}
            </p>
            <p>
              <strong>{t('impact.privacy.photos').split(':')[0]}:</strong> {t('impact.privacy.photos').split(':').slice(1).join(':').trim()}
            </p>
            <p>
              <strong>{t('impact.privacy.security').split(':')[0]}:</strong> {t('impact.privacy.security').split(':').slice(1).join(':').trim()}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;