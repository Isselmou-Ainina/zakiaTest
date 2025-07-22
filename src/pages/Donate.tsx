import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Utensils, Droplets, TreePine, Shield, Smartphone, CheckCircle, Copy, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Donate = () => {
  const { toast } = useToast();



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
              Choose your donation amount and transfer securely using Bankily mobile money
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
                      <p className="text-2xl font-bold text-green-800 tracking-wider">+222 43727240</p>
                    </div>
                    
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
                          <span>Enter your donation amount in MRU</span>
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
                  </div>
                </div>

                <div className="space-y-4">
                  <Button 
                    type="button" 
                    size="lg" 
                    className="bg-green-600 hover:bg-green-700 text-white w-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 py-4"
                    onClick={() => {
                      // Try to open Bankily app with deep link
                      const bankilyUrl = 'bankily://send?phone=22243727240&reference=Zakia+Relief+Donation';
                      const bankilyWebUrl = 'https://bankily.mr/send?phone=22243727240&reference=Zakia+Relief+Donation';
                      
                      // For mobile devices, try to open the app
                      if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                        // Try deep link first
                        window.location.href = bankilyUrl;
                        
                        // Fallback: try web URL after a short delay
                        setTimeout(() => {
                          window.open(bankilyWebUrl, '_blank');
                        }, 1000);
                        
                        // Also copy the number as backup
                        navigator.clipboard.writeText('+222 43727240');
                        toast({
                          title: "Opening Bankily App...",
                          description: "If the app doesn't open, the phone number has been copied to your clipboard.",
                        });
                      } else {
                        // For desktop, copy number and show instructions
                        navigator.clipboard.writeText('+222 43727240');
                        toast({
                          title: "Phone Number Copied!",
                          description: "Please open Bankily on your mobile device and send to +222 43727240",
                        });
                      }
                    }}
                  >
                    <Smartphone className="h-5 w-5 mr-2" />
                    Open Bankily App
                  </Button>
                  
                  <Button 
                    type="button" 
                    size="sm" 
                    variant="outline" 
                    className="w-full border-green-200 text-green-700 hover:bg-green-50"
                    onClick={() => {
                      navigator.clipboard.writeText('+222 43727240');
                      toast({
                        title: "Phone Number Copied!",
                        description: "The number +222 43727240 has been copied to your clipboard.",
                      });
                    }}
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Just Copy Phone Number
                  </Button>
                  
                  <p className="text-center text-sm text-muted-foreground">
                    Use the main button to open Bankily directly, or copy the number manually if needed
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