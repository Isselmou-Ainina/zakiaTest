import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Utensils, Droplets, TreePine, Shield, Smartphone, CheckCircle, Copy, Phone, Globe, TrendingUp, Calculator, RefreshCw, AlertCircle, CreditCard, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState, useEffect } from 'react';

const Donate = () => {
  const { toast } = useToast();
  const [selectedCurrency, setSelectedCurrency] = useState('MRU');
  const [donationAmount, setDonationAmount] = useState<number | ''>(1000);
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>({});
  const [isLoadingRates, setIsLoadingRates] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [ratesError, setRatesError] = useState<string | null>(null);

  // Fast rate checking with immediate cache loading
  const shouldUpdateRates = () => {
    const lastUpdate = localStorage.getItem('zakia-exchange-rates-last-update');
    if (!lastUpdate) return true;
    
    const lastUpdateDate = new Date(lastUpdate);
    const now = new Date();
    const hoursDiff = (now.getTime() - lastUpdateDate.getTime()) / (1000 * 60 * 60);
    
    return hoursDiff >= 24;
  };

  // Instant cache loading with fallback rates
  const loadCachedRates = () => {
    const cachedRates = localStorage.getItem('zakia-exchange-rates');
    const lastUpdate = localStorage.getItem('zakia-exchange-rates-last-update');
    
    if (cachedRates && lastUpdate) {
      try {
        const rates = JSON.parse(cachedRates);
        setExchangeRates(rates);
        setLastUpdated(new Date(lastUpdate));
        setIsLoadingRates(false); // Stop loading immediately
        return true;
      } catch (error) {
        console.error('Error loading cached rates:', error);
      }
    }
    
    // Instant fallback rates for immediate display
    setExchangeRates({
      'MRU': 1,
      'USD': 0.027,
      'EUR': 0.025,
      'XOF': 16.5
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
        fetch('https://api.currencyapi.com/v3/latest?apikey=free&currencies=USD,EUR,XOF&base_currency=MRU', { 
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
      localStorage.setItem('zakia-exchange-rates', JSON.stringify(rates));
      localStorage.setItem('zakia-exchange-rates-last-update', new Date().toISOString());
      
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
          variant: "destructive"
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
      name: 'Mauritanian Ouguiya',
      symbol: 'MRU',
      flag: '🇲🇷',
      exchangeRate: 1,
      impactMultiplier: 1,
      description: 'Local currency - maximum impact',
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
    },
    {
      code: 'XOF',
      name: 'West African CFA Franc',
      symbol: 'CFA',
      flag: '🇸🇳',
      exchangeRate: exchangeRates.XOF || 16.5,
      impactMultiplier: exchangeRates.XOF ? 1 / exchangeRates.XOF : 0.06,
      description: 'Regional currency',
      color: 'from-orange-500 to-orange-600'
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
      title: 'Feed a Family',
      description: 'Provides nutritious meals for a family of 4 for one week',
      icon: Utensils,
      impact: '28 meals',
      color: 'from-primary/20 to-primary/5'
    },
    {
      amount: '2000',
      title: 'Clean Water Delivery',
      description: 'Contributes to water delivery and distribution systems',
      icon: Droplets,
      impact: '500L clean water',
      color: 'from-secondary/20 to-secondary/5'
    },
    {
      amount: '4000',
      title: 'Community Clean-up',
      description: 'Funds environmental education and clean-up initiatives',
      icon: TreePine,
      impact: '500kg waste removed',
      color: 'from-accent/20 to-accent/5'
    },
    {
      amount: '10000',
      title: 'Monthly Program Support',
      description: 'Supports all three core programs for a month',
      icon: Heart,
      impact: 'Full program month',
      color: 'from-primary/20 to-primary/5'
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Families Helped" },
    { icon: Shield, value: "100%", label: "Transparent" },
    { icon: Heart, value: "Direct", label: "Impact" }
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
              Support Our Mission
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Make a Difference <span className="text-secondary bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent drop-shadow-lg">Today</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 max-w-4xl mx-auto opacity-95 leading-relaxed font-light">
              Your generosity directly impacts families and communities in Mauritania. 
              Every contribution helps us provide food, clean water, and environmental care.
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

      {/* Impact Levels */}
      <section className="py-12 md:py-16 container-padding max-w-6xl mx-auto relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-muted/50 to-transparent"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-10 md:mb-14">
            <Badge className="mb-4 px-6 py-2 community-gradient text-white border-0 rounded-full text-sm font-semibold">
              Your Impact
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Your Impact at Every Level
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose a donation level that matches your ability to give and see the direct impact of your generosity.
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
              Daily Exchange Rates
            </Badge>
            <h2 className="mobile-text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Choose Your Currency, See Your Impact
            </h2>
            <p className="mobile-text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Donate in your preferred currency using daily updated exchange rates and see exactly how your contribution translates to local impact in Mauritania.
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
                      Select Your Currency
                    </h3>
                    <div className="flex items-center space-x-2">
                      {ratesError && (
                        <div className="flex items-center text-amber-600 text-sm">
                          <AlertCircle className="h-4 w-4 mr-1" />
                          <span>Approximate rates</span>
                        </div>
                      )}
                      <button
                        onClick={() => fetchExchangeRates(true)}
                        disabled={isLoadingRates}
                        className="flex items-center px-3 py-1 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors disabled:opacity-50"
                      >
                        <RefreshCw className={`h-4 w-4 mr-1 ${isLoadingRates ? 'animate-spin' : ''}`} />
                        Update Rates
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

                {/* Amount Input */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Calculator className="h-5 w-5 mr-2 text-primary" />
                    Enter Donation Amount
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
                      Your Impact in Mauritania
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Your Donation */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-foreground">Your Donation:</h4>
                      <div className="bg-white rounded-lg p-4 border border-border/60">
                        <div className="text-2xl font-bold text-primary">
                          {numericAmount.toLocaleString()} {selectedCurrencyData.symbol}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {selectedCurrencyData.name}
                        </div>
                      </div>
                    </div>

                    {/* Local Equivalent */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-foreground">Local Impact Value:</h4>
                      <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-4 border border-primary/20">
                        <div className="text-2xl font-bold text-primary">
                          {equivalentAmount.toLocaleString()} MRU
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Mauritanian Ouguiya
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Impact Breakdown */}
                  <div className="mt-6">
                    <h4 className="font-medium text-foreground mb-4">This donation provides:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 mobile-gap">
                      <div className="text-center bg-white rounded-lg p-4 border border-border/60">
                        <Utensils className="h-6 w-6 mx-auto mb-2 text-accent" />
                        <div className="font-semibold text-accent">{impact.meals}</div>
                        <div className="text-xs text-muted-foreground">Meals</div>
                      </div>
                      <div className="text-center bg-white rounded-lg p-4 border border-border/60">
                        <Droplets className="h-6 w-6 mx-auto mb-2 text-primary" />
                        <div className="font-semibold text-primary">{impact.water}L</div>
                        <div className="text-xs text-muted-foreground">Clean Water</div>
                      </div>
                      <div className="text-center bg-white rounded-lg p-4 border border-border/60">
                        <TreePine className="h-6 w-6 mx-auto mb-2 text-secondary" />
                        <div className="font-semibold text-secondary">{impact.waste}kg</div>
                        <div className="text-xs text-muted-foreground">Waste Removed</div>
                      </div>
                      <div className="text-center bg-white rounded-lg p-4 border border-border/60">
                        <Users className="h-6 w-6 mx-auto mb-2 text-accent" />
                        <div className="font-semibold text-accent">{impact.families}</div>
                        <div className="text-xs text-muted-foreground">Families Helped</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
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
              Mobile Money Donation
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-white">
              Donate via Bankily
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Transfer your donation of <span className="font-semibold text-secondary">{numericAmount.toLocaleString()} {selectedCurrencyData.symbol}</span> 
              {selectedCurrency !== 'MRU' && (
                <span className="block text-sm mt-1">
                  (≈ {equivalentAmount.toLocaleString()} MRU local impact)
                </span>
              )}
            </p>
          </div>
          
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-6 md:p-8 lg:p-10 space-y-6">
                            <div className="space-y-6">
                {/* Bankily Payment Instructions */}
                <div className="bg-gradient-to-br from-green-50 via-muted/30 to-green-50 p-6 md:p-8 rounded-xl border border-green-200">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-green-600 rounded-lg mr-4">
                      <Smartphone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <span className="font-bold text-green-800 text-lg md:text-xl">Pay with Bankily</span>
                      <p className="text-sm text-green-700">Secure mobile money transfer</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border border-green-100">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <Phone className="h-5 w-5 text-green-600 mr-2" />
                          <span className="font-medium text-gray-800">Transfer to:</span>
                        </div>
                        <button
                          type="button"
                          className="flex items-center px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition-colors"
                          onClick={() => {
                            navigator.clipboard.writeText('+222 43727240');
                            toast({
                              title: "Copied!",
                              description: "Phone number copied to clipboard",
                            });
                          }}
                        >
                          <Copy className="h-3 w-3 mr-1" />
                          Copy
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
                        <h4 className="font-semibold text-green-800 mb-2">How to send via Bankily:</h4>
                        <div className="space-y-2 text-sm text-green-700">
                          <div className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Open your Bankily app and select "Send Money"</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Enter the phone number: <strong>+222 43727240</strong></span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Enter your donation amount: <strong>{equivalentAmount.toLocaleString()} MRU</strong></span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Add "Zakia Relief Donation" in the reference/note field</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span>Confirm and complete your transfer</span>
                          </div>
                        </div>
                      </div>

                      {/* QR Code */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-green-800 mb-2">Or scan QR code:</h4>
                        <div className="bg-white rounded-lg p-4 border border-green-100 text-center">
                          <img 
                            src="/bankily_qr_code.jpeg" 
                            alt="Bankily QR Code for Zakia Relief donations"
                            className="w-48 h-48 mx-auto object-contain rounded-lg shadow-sm"
                          />
                          <p className="text-xs text-gray-600 mt-2">Scan with Bankily app</p>
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
                          title: "Phone Number Copied!",
                          description: "Now open your Bankily app and send to +222 43727240 with reference: Zakia Relief Donation",
                        });
                      } else {
                        toast({
                          title: "Phone Number Copied!",
                          description: "Please open Bankily on your mobile device and send to +222 43727240",
                        });
                      }
                    }}
                  >
                    <Copy className="h-5 w-5 mr-2" />
                    Copy Phone Number for Bankily
                  </Button>
                  

                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                      <strong>Currency Note:</strong> Bankily transfers are in MRU. 
                      Your {numericAmount.toLocaleString()} {selectedCurrencyData.symbol} donation 
                      equals {equivalentAmount.toLocaleString()} MRU for maximum local impact.
                    </p>
                  </div>
                  
                  <p className="text-center text-sm text-muted-foreground">
                    Copy the phone number, then use Bankily app or scan the QR code to send your donation
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>


    </div>
  );
};

export default Donate;