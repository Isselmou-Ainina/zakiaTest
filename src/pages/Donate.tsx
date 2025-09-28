import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Utensils, Droplets, TreePine, Shield, Smartphone, CheckCircle, Copy, Phone, Globe, TrendingUp, Calculator, RefreshCw, AlertCircle, CreditCard, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Donate = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [selectedCurrency, setSelectedCurrency] = useState('MRU');
  const [donationAmount, setDonationAmount] = useState<number | ''>(1000);
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>({});
  const [isLoadingRates, setIsLoadingRates] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [ratesError, setRatesError] = useState<string | null>(null);
  const [donationType, setDonationType] = useState('monthly'); // Default to monthly
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('bankily');

  // Fast rate checking with immediate cache loading
  const shouldUpdateRates = () => {
    try {
      const lastUpdate = localStorage.getItem('zakia-exchange-rates-last-update');
      if (!lastUpdate) return true;
      
      const lastUpdateDate = new Date(lastUpdate);
      const now = new Date();
      const hoursDiff = (now.getTime() - lastUpdateDate.getTime()) / (1000 * 60 * 60);
      
      return hoursDiff >= 24;
    } catch (error) {
      return true;
    }
  };

  // Instant cache loading with fallback rates
  const loadCachedRates = () => {
    try {
      const cachedRates = localStorage.getItem('zakia-exchange-rates');
      const lastUpdate = localStorage.getItem('zakia-exchange-rates-last-update');
      
      if (cachedRates && lastUpdate) {
        const rates = JSON.parse(cachedRates);
        setExchangeRates(rates);
        setLastUpdated(new Date(lastUpdate));
        setIsLoadingRates(false);
        return true;
      }
    } catch (error) {
      console.error('Error loading cached rates:', error);
    }
    
    // Instant fallback rates for immediate display
    setExchangeRates({
      'MRU': 1,
      'USD': 0.027,
      'EUR': 0.025
    });
    setIsLoadingRates(false);
    return false;
  };


  // Ultra-fast exchange rate fetching with multiple reliable APIs
  const fetchExchangeRates = async (forceUpdate = false) => {
    if (!forceUpdate) {
      setIsLoadingRates(false); // Don't show loading for background updates
    }
    
    try {
      setRatesError(null);
      
      // Fast timeout and multiple API fallbacks
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000); // 2 second timeout for speed
      
      // Try multiple reliable APIs in parallel for speed and reliability
      const apiPromises = [
        // Primary: ExchangeRate-API (free, reliable)
        fetch('https://api.exchangerate-api.com/v4/latest/MRU', { 
          signal: controller.signal,
          headers: { 'Accept': 'application/json' }
        }),
        // Backup: Fixer.io free tier (if available)
        fetch('https://api.fixer.io/latest?base=MRU', { 
          signal: controller.signal,
          headers: { 'Accept': 'application/json' }
        }).catch(() => null), // Ignore if not available
        // Backup: CurrencyAPI (free tier)
        fetch('https://api.currencyapi.com/v3/latest?apikey=free&currencies=USD,EUR&base_currency=MRU', { 
          signal: controller.signal,
          headers: { 'Accept': 'application/json' }
        }).catch(() => null) // Ignore if not available
      ];
      
      const responses = await Promise.allSettled(apiPromises);
      clearTimeout(timeoutId);
      
      // Find the first successful response
      let data = null;
      for (const response of responses) {
        if (response.status === 'fulfilled' && response.value && response.value.ok) {
          data = await response.value.json();
          break;
        }
      }
      
      if (!data) {
        throw new Error('All APIs failed');
      }
      
      // Extract rates from different API response formats
      const rates = data.rates || data.data?.rates || data;
      
      setExchangeRates(rates);
      setLastUpdated(new Date());
      
      // Fast cache update
      try {
        localStorage.setItem('zakia-exchange-rates', JSON.stringify(rates));
        localStorage.setItem('zakia-exchange-rates-last-update', new Date().toISOString());
      } catch (error) {
        console.error('Error saving rates to cache:', error);
      }

      if (forceUpdate) {
        toast({
          title: "Rates Updated",
          description: "Currency rates refreshed from reliable sources",
        });
      }
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
      setRatesError('Using cached rates');
      
      // Keep existing rates, don't overwrite with fallback
      if (forceUpdate) {
        toast({
          title: "Using Cached Rates",
          description: "Live rates unavailable, using cached data",
          variant: "destructive" as const
        });
      }
    } finally {
      setIsLoadingRates(false);
    }
  };

  // Ultra-fast initialization with immediate display
  useEffect(() => {
    // Load cached rates instantly (no loading state)
    const hasCachedRates = loadCachedRates();
    
    // Background fetch for fresh rates (no loading indicator)
    if (!hasCachedRates || shouldUpdateRates()) {
      fetchExchangeRates(); // Runs in background
    }
  }, []);

  // Currency data with live exchange rates
  const currencies = [
    {
      code: 'MRU',
      name: t('donate.impactPreview.currency'),
      symbol: 'MRU',
      flag: '🇲🇷',
      exchangeRate: 1,
      impactMultiplier: 1,
      description: t('donate.amount.local'),
      color: 'from-green-500 to-green-600'
    },
    {
      code: 'USD',
      name: 'US Dollar',
      symbol: '$',
      flag: '🇺🇸',
      exchangeRate: exchangeRates.USD || 0.027,
      impactMultiplier: exchangeRates.USD ? 1 / exchangeRates.USD : 37,
      description: 'Strong purchasing power',
      color: 'from-blue-500 to-blue-600'
    },
    {
      code: 'EUR',
      name: 'Euro',
      symbol: '€',
      flag: '🇪🇺',
      exchangeRate: exchangeRates.EUR || 0.025,
      impactMultiplier: exchangeRates.EUR ? 1 / exchangeRates.EUR : 40,
      description: 'High value impact',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const selectedCurrencyData = currencies.find(c => c.code === selectedCurrency) || currencies[0];
  const numericAmount = typeof donationAmount === 'number' ? donationAmount : 0;
  const equivalentAmount = Math.round(numericAmount * selectedCurrencyData.impactMultiplier);
  const localAmount = Math.round(numericAmount / selectedCurrencyData.impactMultiplier);

  // Impact calculations based on amount
  const getImpact = (amount: number) => {
    if (amount >= 10000) return { meals: 28, water: 500, waste: 500, families: 1 };
    if (amount >= 4000) return { meals: 12, water: 200, waste: 200, families: 0.5 };
    if (amount >= 2000) return { meals: 6, water: 100, waste: 100, families: 0.25 };
    return { meals: 3, water: 50, waste: 50, families: 0.1 };
  };

  const impact = getImpact(equivalentAmount);



  const impactLevels = [
    {
      amount: '1000',
      title: t('donate.levels.1000.title'),
      description: t('donate.levels.1000.meals'),
      icon: Utensils,
      impact: '1,000 MRU',
      color: 'from-primary/20 to-primary/5'
    },
    {
      amount: '2000',
      title: t('donate.levels.2000.title'),
      description: '',
      icon: Droplets,
      impact: '2,000 MRU',
      color: 'from-secondary/20 to-secondary/5'
    },
    {
      amount: '4000',
      title: t('donate.levels.4000.title'),
      description: t('donate.levels.4000.details'),
      icon: TreePine,
      impact: '4,000 MRU',
      color: 'from-accent/20 to-accent/5'
    },
    {
      amount: '10000',
      title: t('donate.levels.10000.title'),
      description: '',
      icon: Heart,
      impact: '10,000 MRU',
      color: 'from-primary/20 to-primary/5'
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: t('donate.trust.families') },
    { icon: Shield, value: "100%", label: t('donate.trust.100transparent') },
    { icon: Heart, value: t('donate.trust.direct'), label: t('donate.trust.verified') }
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
              {t('donate.hero.title')}
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              {t('donate.hero.subtitle').split(' ').slice(0, 2).join(' ')} <span className="text-secondary bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent drop-shadow-lg">{t('donate.hero.subtitle').split(' ').slice(2).join(' ')}</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 max-w-4xl mx-auto opacity-95 leading-relaxed font-light">
              {t('donate.hero.description')}
              <br />
              {t('donate.hero.details')}
            </p>
            
            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 opacity-90 mb-8">
              <div className="flex items-center space-x-2 text-white/90">
                <Shield className="h-5 w-5" />
                <span className="text-sm md:text-base font-medium">{t('donate.trust.100transparent')}</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <CheckCircle className="h-5 w-5" />
                <span className="text-sm md:text-base font-medium">{t('donate.trust.verified')}</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <Users className="h-5 w-5" />
                <span className="text-sm md:text-base font-medium">{t('donate.trust.volunteer')}</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90">
                <Heart className="h-5 w-5" />
                <span className="text-sm md:text-base font-medium">{t('donate.trust.since2018')}</span>
              </div>
            </div>
            
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

      {/* Impact Levels */}
      <section className="py-12 md:py-16 container-padding max-w-6xl mx-auto relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-muted/50 to-transparent"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-10 md:mb-14">
            <Badge className="mb-4 px-6 py-2 community-gradient text-white border-0 rounded-full text-sm font-semibold">
              {t('donate.impact.title')}
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t('donate.impact.subtitle')}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('donate.impact.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16">
            {impactLevels.map((level, index) => (
              <Card 
                key={level.amount} 
                className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-gradient-to-br from-card via-card to-muted/20"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/5 to-transparent rounded-full transform translate-x-4 -translate-y-4"></div>
                
                <CardHeader className="text-center pb-3 relative z-10">
                  <div className="mx-auto p-4 md:p-5 community-gradient rounded-2xl w-fit mb-4 group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <level.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <div className="impact-stat text-primary mb-3 group-hover:scale-105 transition-transform duration-300">
                    {level.amount} MRU
                  </div>
                  <CardTitle className="text-lg md:text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {level.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4 pt-0 relative z-10">
                  <CardDescription className="text-sm md:text-base leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {level.description}
                  </CardDescription>
                  <Badge className="community-gradient text-white border-0 px-4 py-2 text-xs md:text-sm font-semibold rounded-full shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    {level.impact}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Currency Selector */}
      <section className="py-12 md:py-16 mobile-container max-w-6xl mx-auto relative">
        <div className="relative z-10">
          <div className="text-center mb-10 md:mb-14">
            <Badge className="mb-4 px-6 py-2 community-gradient text-white border-0 rounded-full text-sm font-semibold">
              <Globe className="h-4 w-4 mr-2" />
              {t('donate.currency.title')}
            </Badge>
            <h2 className="mobile-text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t('donate.currency.subtitle')}
            </h2>
            <p className="mobile-text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('donate.currency.description')}
            </p>
          </div>

          {/* Currency Selector */}
          <Card className="mb-8 border-0 shadow-xl bg-gradient-to-br from-card via-card to-muted/20">
            <CardContent className="mobile-card">
              <div className="space-y-6">
                {/* Currency Selection */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Globe className="h-5 w-5 mr-2 text-primary" />
{t('donate.currency.select')}
                    </h3>
                    <div className="flex items-center space-x-2">
                      {ratesError && (
                        <div className="flex items-center text-amber-600 text-sm">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          <span>Approximate rates</span>
                        </div>
                      )}
                      <button
                        onClick={(e) => {
                          fetchExchangeRates(true);
                          // Remove focus after click to prevent outline from staying
                          e.currentTarget.blur();
                        }}
                        disabled={isLoadingRates}
                        className="flex items-center px-3 py-1 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
                      >
                        <RefreshCw className={`h-4 w-4 mr-1 ${isLoadingRates ? 'animate-spin' : ''}`} />
{t('donate.currency.update')}
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 mobile-gap">
                    {currencies.map((currency) => (
                      <button
                        key={currency.code}
                        onClick={() => setSelectedCurrency(currency.code)}
                        disabled={isLoadingRates}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                          selectedCurrency === currency.code
                            ? `border-primary bg-gradient-to-br ${currency.color} text-white shadow-lg`
                            : 'border-border bg-card hover:border-primary/50 hover:shadow-md'
                        }`}
                      >
                        <div className="text-center">
                          <div className="text-2xl mb-2">{currency.flag}</div>
                          <div className="font-semibold text-sm">{currency.code}</div>
                          <div className="text-xs opacity-75">{currency.symbol}</div>
                          {isLoadingRates && currency.code !== 'MRU' && (
                            <div className="text-xs mt-1 opacity-60">Loading...</div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Donation Type Selection */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Heart className="h-5 w-5 mr-2 text-primary" />
                    {t('donate.frequency.title')}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <button
                      onClick={() => setDonationType('monthly')}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                        donationType === 'monthly'
                          ? 'border-primary bg-gradient-to-br from-primary/20 to-primary/10 shadow-lg'
                          : 'border-border bg-card hover:border-primary/50 hover:shadow-md'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-2">📅</div>
                        <div className="font-semibold">{t('donate.frequency.monthly')}</div>
                        <div className="text-xs opacity-75 mt-1">{t('donate.frequency.monthlyRecommended')}</div>
                      </div>
                    </button>
                    <button
                      onClick={() => setDonationType('once')}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                        donationType === 'once'
                          ? 'border-primary bg-gradient-to-br from-primary/20 to-primary/10 shadow-lg'
                          : 'border-border bg-card hover:border-primary/50 hover:shadow-md'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-2">💝</div>
                        <div className="font-semibold">{t('donate.frequency.onetime')}</div>
                        <div className="text-xs opacity-75 mt-1">{t('donate.frequency.onetimeDescription')}</div>
                      </div>
                    </button>
                  </div>
                  <div className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-3">
                    <strong>{t('donate.frequency.monthly')} {t('donate.giving')}:</strong> {t('donate.frequency.monthlyNote')}
                  </div>
                </div>

                {/* Amount Input */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Calculator className="h-5 w-5 mr-2 text-primary" />
                    {t('donate.amount.enter')}
                  </h3>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <input
                        type="number"
                        value={donationAmount}
                        onChange={(e) => {
                          const value = e.target.value;
                          setDonationAmount(value === '' ? '' : Number(value));
                        }}
                        className="w-full px-4 py-3 border border-border rounded-lg text-lg font-semibold focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter amount"
                        min="0"
                      />
                    </div>
                    <div className="text-lg font-semibold text-muted-foreground">
                      {selectedCurrencyData.symbol}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {selectedCurrencyData.description}
                  </p>
                </div>

                {/* Impact Comparison */}
                <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-xl p-6 border border-border/60">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                      {t('donate.impactPreview.title')}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Your Donation */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-foreground">{t('donate.impactPreview.donation')}</h4>
                      <div className="bg-white rounded-lg p-4 border border-border/60">
                        <div className="text-xl font-bold text-primary">
                          {numericAmount.toLocaleString()} {selectedCurrencyData.symbol}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {selectedCurrencyData.name}
                        </div>
                      </div>
                    </div>

                    {/* Currency Estimates */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-foreground">{t('donate.impactPreview.converted')}</h4>
                      <div className="bg-muted/50 rounded-lg p-4 border border-border/60 space-y-2">
                        {currencies.filter(c => c.code !== selectedCurrency).slice(0, 2).map((currency) => (
                          <div key={currency.code} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{currency.flag} {currency.code}:</span>
                            <span className="font-medium">
                              {Math.round(numericAmount * selectedCurrencyData.exchangeRate / currency.exchangeRate).toLocaleString()} {currency.symbol}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Local Impact */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-foreground">{t('donate.impactPreview.currency')} Impact:</h4>
                      <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-4 border border-primary/20">
                        <div className="text-xl font-bold text-primary">
                          {equivalentAmount.toLocaleString()} MRU
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {t('donate.impactPreview.localPower')}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Impact Breakdown */}
                  <div className="mt-6">
                    <h4 className="font-medium text-foreground mb-4">{t('donate.impactPreview.provides')}</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 mobile-gap">
                      <div className="text-center bg-white rounded-lg p-4 border border-border/60">
                        <Utensils className="h-6 w-6 mx-auto mb-2 text-accent" />
                        <div className="font-semibold text-accent">{impact.meals}</div>
                        <div className="text-xs text-muted-foreground">{t('donate.impactPreview.meals')}</div>
                      </div>
                      <div className="text-center bg-white rounded-lg p-4 border border-border/60">
                        <Droplets className="h-6 w-6 mx-auto mb-2 text-primary" />
                        <div className="font-semibold text-primary">{impact.water}L</div>
                        <div className="text-xs text-muted-foreground">{t('donate.impactPreview.water')}</div>
                      </div>
                      <div className="text-center bg-white rounded-lg p-4 border border-border/60">
                        <TreePine className="h-6 w-6 mx-auto mb-2 text-secondary" />
                        <div className="font-semibold text-secondary">{impact.waste}kg</div>
                        <div className="text-xs text-muted-foreground">{t('donate.impactPreview.waste')}</div>
                      </div>
                      <div className="text-center bg-white rounded-lg p-4 border border-border/60">
                        <Users className="h-6 w-6 mx-auto mb-2 text-accent" />
                        <div className="font-semibold text-accent">{impact.families}</div>
                        <div className="text-xs text-muted-foreground">{t('donate.impactPreview.families')}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Methods */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <CreditCard className="h-5 w-5 mr-2 text-primary" />
                    {t('donate.payment.title')}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <button
                      onClick={() => setSelectedPaymentMethod('bankily')}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                        selectedPaymentMethod === 'bankily'
                          ? 'border-primary bg-gradient-to-br from-primary/20 to-primary/10 shadow-lg'
                          : 'border-border bg-card hover:border-primary/50 hover:shadow-md'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-2">📱</div>
                        <div className="font-semibold text-sm">{t('donate.payment.bankily')}</div>
                        <div className="text-xs opacity-75 mt-1">{t('donate.payment.bankilyDescription')}</div>
                      </div>
                    </button>
                    <button
                      onClick={() => setSelectedPaymentMethod('stripe')}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                        selectedPaymentMethod === 'stripe'
                          ? 'border-primary bg-gradient-to-br from-primary/20 to-primary/10 shadow-lg'
                          : 'border-border bg-card hover:border-primary/50 hover:shadow-md'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-2">💳</div>
                        <div className="font-semibold text-sm">{t('donate.payment.credit')}</div>
                        <div className="text-xs opacity-75 mt-1">{t('donate.payment.creditDescription')}</div>
                      </div>
                    </button>
                    <button
                      onClick={() => setSelectedPaymentMethod('paypal')}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                        selectedPaymentMethod === 'paypal'
                          ? 'border-primary bg-gradient-to-br from-primary/20 to-primary/10 shadow-lg'
                          : 'border-border bg-card hover:border-primary/50 hover:shadow-md'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-2">🅿️</div>
                        <div className="font-semibold text-sm">{t('donate.payment.paypal')}</div>
                        <div className="text-xs opacity-75 mt-1">{t('donate.payment.paypalDescription')}</div>
                      </div>
                    </button>
                    <button
                      onClick={() => setSelectedPaymentMethod('wise')}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 ${
                        selectedPaymentMethod === 'wise'
                          ? 'border-primary bg-gradient-to-br from-primary/20 to-primary/10 shadow-lg'
                          : 'border-border bg-card hover:border-primary/50 hover:shadow-md'
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-2">🌍</div>
                        <div className="font-semibold text-sm">{t('donate.payment.wise')}</div>
                        <div className="text-xs opacity-75 mt-1">{t('donate.payment.wiseDescription')}</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Link to Impact & Transparency */}
          <div className="text-center mt-8">
            <Card className="max-w-2xl mx-auto border-0 shadow-lg bg-gradient-to-br from-card via-card to-muted/20">
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="text-lg font-bold mb-2 text-foreground">{t('donate.model.title')}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {t('donate.model.description')}
                </p>
                <Button asChild variant="outline" size="sm">
                  <a href="/impact" className="flex items-center justify-center">
{t('donate.model.viewImpact')}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="community-gradient text-white py-12 md:py-16 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full transform translate-x-24 -translate-y-24"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full transform -translate-x-32 translate-y-32"></div>
        
        <div className="max-w-3xl mx-auto container-padding relative z-10">
          <div className="text-center mb-8 md:mb-10">
            <Badge className="mb-4 px-6 py-2 bg-green-600 text-white border-0 rounded-full text-sm font-semibold shadow-xl">
              {selectedPaymentMethod === 'bankily' ? t('donate.mobile.title') : 
               selectedPaymentMethod === 'stripe' ? t('donate.credit.title') :
               selectedPaymentMethod === 'paypal' ? t('donate.paypal.donation') : t('donate.wise.transfer')}
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-white">
              {donationType === 'monthly' ? t('donate.monthlyDonation') : t('donate.frequency.onetime')} {selectedPaymentMethod === 'bankily' ? t('donate.mobile.title').split(' ').slice(1).join(' ') : selectedPaymentMethod === 'stripe' ? t('donate.credit.title').split(' ').slice(1).join(' ') : selectedPaymentMethod === 'paypal' ? t('donate.paypal.donation').split(' ').slice(1).join(' ') : t('donate.wise.transfer').split(' ').slice(1).join(' ')}
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              {donationType === 'monthly' ? t('donate.setupRecurring') : t('donate.makeA')} {selectedPaymentMethod === 'bankily' ? t('donate.mobile.title').split(' ').slice(1).join(' ') : selectedPaymentMethod === 'stripe' ? t('donate.credit.title').split(' ').slice(1).join(' ') : selectedPaymentMethod === 'paypal' ? t('donate.paypal.donation').split(' ').slice(1).join(' ') : t('donate.wise.transfer').split(' ').slice(1).join(' ')} {t('donate.of')} <span className="font-semibold text-secondary">{numericAmount.toLocaleString()} {selectedCurrencyData.symbol}</span>
              {selectedCurrency !== 'MRU' && (
                <span className="block text-sm mt-1">
                  (≈ {equivalentAmount.toLocaleString()} MRU local impact)
                </span>
              )}
            </p>
            <div className="mt-4 text-sm text-white/80 bg-white/10 rounded-lg p-3 max-w-2xl mx-auto">
              <CheckCircle className="h-4 w-4 inline mr-2" />
{t('donate.mobile.receipt')}
            </div>
          </div>
          
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-6 md:p-8 lg:p-10 space-y-6">
                            <div className="space-y-6">
                {selectedPaymentMethod === 'bankily' && (
                  <>
                {/* Bankily Payment Instructions */}
                <div className="bg-gradient-to-br from-green-50 via-muted/30 to-green-50 p-6 md:p-8 rounded-xl border border-green-200">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-green-600 rounded-lg mr-4">
                      <Smartphone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <span className="font-bold text-green-800 text-lg md:text-xl">{t('donate.mobile.pay')}</span>
                      <p className="text-sm text-green-700">{t('donate.mobile.secure')}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-green-100">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <Phone className="h-5 w-5 text-green-600 mr-2" />
                          <span className="font-medium text-gray-800">{t('donate.mobile.transferTo')}</span>
                        </div>
                        <button
                          type="button"
                              className="flex items-center px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:ring-offset-1"
                              onClick={(e) => {
                            navigator.clipboard.writeText('+222 43727240');
                            toast({
                              title: t('donate.phone.copied'),
                              description: t('donate.phone.copiedDescription'),
                            });
                                // Remove focus after click to prevent outline from staying
                                e.currentTarget.blur();
                          }}
                        >
                          <Copy className="h-3 w-3 mr-1" />
                          {t('donate.mobile.copy')}
                        </button>
                      </div>
                          <a 
                            href="tel:+22243727240" 
                            className="text-2xl font-bold text-green-800 tracking-wider hover:text-green-700 transition-colors cursor-pointer"
                          >
                            +222 43727240
                          </a>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Instructions */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-green-800 mb-2">{t('donate.mobile.instructions')}</h4>
                        <div className="space-y-2 text-sm text-green-700">
                          <div className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>{t('donate.mobile.step1')}</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>{t('donate.mobile.step2')}</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                                <span>{t('donate.mobile.step3')}</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>{t('donate.mobile.step4')}</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>{t('donate.mobile.step5')}</span>
                          </div>
                        </div>
                      </div>

                      {/* QR Code */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-green-800 mb-2">{t('donate.mobile.or')}</h4>
                        <div className="bg-white rounded-lg p-4 border border-green-100 text-center">
                          <img 
                            src="/bankily_qr_code.jpeg" 
                            alt={t('donate.mobile.qrAlt')}
                            className="w-48 h-48 mx-auto object-contain rounded-lg shadow-sm"
                          />
                          <p className="text-xs text-gray-600 mt-2">{t('donate.mobile.qrDescription')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button 
                    type="button" 
                    size="lg" 
                    className="bg-green-600 hover:bg-green-700 text-white w-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 py-4"
                    onClick={() => {
                      // Copy phone number to clipboard
                      navigator.clipboard.writeText('+222 43727240');
                      
                      // Show instructions based on device type
                      if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                        toast({
                          title: t('donate.phone.copiedTitle'),
                          description: t('donate.phone.mobileInstructions'),
                        });
                      } else {
                        toast({
                          title: t('donate.phone.copiedTitle'),
                          description: t('donate.phone.desktopInstructions'),
                        });
                      }
                    }}
                  >
                    <Copy className="h-5 w-5 mr-2" />
{t('donate.mobile.copyPhone')}
                  </Button>
                  
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-sm text-blue-800">
                          <strong>{t('donate.mobile.currencyNote').split(':')[0]}:</strong> {t('donate.mobile.currencyNote').split(':')[1]}
                        </p>
                      </div>
                      
                      {/* Security & Trust */}
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                          <Shield className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-green-800 mb-1">{t('donate.secure.title')}</h4>
                            <p className="text-sm text-green-700">
                              • {t('donate.secure.point1')}<br/>
                              • {t('donate.secure.point2')}<br/>
                              • {t('donate.secure.point3')}<br/>
                              • {t('donate.secure.point4')}
                            </p>
                          </div>
                        </div>
                      </div>
                  
                  <p className="text-center text-sm text-muted-foreground">
                    {t('donate.secure.instruction')}
                  </p>
                </div>
                  </>
                )}

                {selectedPaymentMethod === 'stripe' && (
                  <div className="bg-gradient-to-br from-blue-50 via-muted/30 to-blue-50 p-6 md:p-8 rounded-xl border border-blue-200">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-blue-600 rounded-lg mr-4">
                        <CreditCard className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-blue-800 text-lg md:text-xl">{t('donate.credit.pay')}</span>
                        <p className="text-sm text-blue-700">{t('donate.credit.secure')}</p>
                      </div>
                    </div>
                    <div className="text-center py-8">
                      <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                        <CreditCard className="h-5 w-5 mr-2" />
{t('donate.pay')} {numericAmount.toLocaleString()} {selectedCurrencyData.symbol} {donationType === 'monthly' ? t('donate.monthlySuffix') : ''}
                      </Button>
                      <p className="text-sm text-blue-700 mt-4">
{t('donate.credit.ssl')}
                      </p>
                    </div>
                  </div>
                )}

                {selectedPaymentMethod === 'paypal' && (
                  <div className="bg-gradient-to-br from-yellow-50 via-muted/30 to-yellow-50 p-6 md:p-8 rounded-xl border border-yellow-200">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-yellow-600 rounded-lg mr-4">
                        <Globe className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-yellow-800 text-lg md:text-xl">{t('donate.paypal.pay')}</span>
                        <p className="text-sm text-yellow-700">{t('donate.paypal.international')}</p>
                      </div>
                    </div>
                    <div className="text-center py-8">
                      <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4">
                        <Globe className="h-5 w-5 mr-2" />
{t('donate.pay')} {numericAmount.toLocaleString()} {selectedCurrencyData.symbol} {donationType === 'monthly' ? t('donate.monthlySuffix') : ''}
                      </Button>
                      <p className="text-sm text-yellow-700 mt-4">
{t('donate.paypal.protection')}
                      </p>
                    </div>
                  </div>
                )}

                {selectedPaymentMethod === 'wise' && (
                  <div className="bg-gradient-to-br from-purple-50 via-muted/30 to-purple-50 p-6 md:p-8 rounded-xl border border-purple-200">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-purple-600 rounded-lg mr-4">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <span className="font-bold text-purple-800 text-lg md:text-xl">{t('donate.wise.pay')}</span>
                        <p className="text-sm text-purple-700">{t('donate.wise.rates')}</p>
                      </div>
                    </div>
                    <div className="text-center py-8">
                      <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4">
                        <TrendingUp className="h-5 w-5 mr-2" />
{t('donate.pay')} {numericAmount.toLocaleString()} {selectedCurrencyData.symbol} {donationType === 'monthly' ? t('donate.monthlySuffix') : ''}
                      </Button>
                      <p className="text-sm text-purple-700 mt-4">
{t('donate.wise.direct')}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Donate;