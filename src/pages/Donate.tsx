import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Heart, DollarSign, Users, Utensils, Droplets, TreePine, Shield, CreditCard } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Donate = () => {
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    isAnonymous: false
  });

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = selectedAmount || customAmount;
    toast({
      title: "Thank You for Your Donation!",
      description: `Your generous contribution of $${amount} will help us continue our vital work.`,
    });
  };

  const impactLevels = [
    {
      amount: '25',
      title: 'Feed a Family',
      description: 'Provides nutritious meals for a family of 4 for one week',
      icon: Utensils,
      impact: '28 meals'
    },
    {
      amount: '50',
      title: 'Clean Water Delivery',
      description: 'Contributes to water delivery and distribution systems',
      icon: Droplets,
      impact: '500L clean water'
    },
    {
      amount: '100',
      title: 'Community Clean-up',
      description: 'Funds environmental education and clean-up initiatives',
      icon: TreePine,
      impact: '500kg waste removed'
    },
    {
      amount: '250',
      title: 'Monthly Program Support',
      description: 'Supports all three core programs for a month',
      icon: Heart,
      impact: 'Full program month'
    }
  ];

  const quickAmounts = ['25', '50', '100', '250', '500'];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
              Make a Difference Today
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-3xl mx-auto opacity-95 leading-relaxed">
              Your generosity directly impacts families and communities in Mauritania. 
              Every dollar helps us provide food, clean water, and environmental care.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto text-sm md:text-base">
              <div className="flex items-center justify-center space-x-2">
                <Users className="h-4 w-4 md:h-5 md:w-5" />
                <span>500+ Families Helped</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Shield className="h-4 w-4 md:h-5 md:w-5" />
                <span>100% Transparent</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Heart className="h-4 w-4 md:h-5 md:w-5" />
                <span>Direct Impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Levels */}
      <section className="nonprofit-section">
        <h2 className="nonprofit-heading">Your Impact at Every Level</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {impactLevels.map((level) => (
            <Card 
              key={level.amount} 
              className={`modern-card cursor-pointer transition-gentle hover:warm-shadow group ${
                selectedAmount === level.amount ? 'ring-2 ring-primary shadow-lg' : ''
              }`}
              onClick={() => setSelectedAmount(level.amount)}
            >
              <CardHeader className="text-center pb-3">
                <div className="mx-auto p-3 community-gradient rounded-full w-fit mb-3 md:mb-4 group-hover:scale-110 transition-gentle">
                  <level.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <div className="impact-stat text-primary mb-2">
                  ${level.amount}
                </div>
                <CardTitle className="text-base md:text-lg">{level.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-3 pt-0">
                <CardDescription className="text-sm md:text-base">
                  {level.description}
                </CardDescription>
                <Badge variant="secondary" className="gold-gradient text-white border-0 rounded-full">
                  {level.impact}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Donation Form */}
      <section className="bg-muted/50 section-padding">
        <div className="max-w-2xl mx-auto container-padding">
          <Card className="modern-card border">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl md:text-3xl">Complete Your Donation</CardTitle>
              <CardDescription className="text-base md:text-lg">
                Choose your donation amount and help us continue our vital work
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-8 space-y-6">
              <form onSubmit={handleDonate} className="space-y-6">
                {/* Amount Selection */}
                <div>
                  <Label className="text-base font-semibold mb-4 block">Donation Amount</Label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
                    {quickAmounts.map((amount) => (
                      <Button
                        key={amount}
                        type="button"
                        variant={selectedAmount === amount ? "default" : "outline"}
                        className={`touch-target ${selectedAmount === amount ? "community-gradient text-white" : ""}`}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount('');
                        }}
                      >
                        ${amount}
                      </Button>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="custom-amount" className="text-sm font-medium">Custom Amount:</Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="custom-amount"
                        type="number"
                        placeholder="Enter amount"
                        className="pl-10 h-12 text-base"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount('');
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Donor Information */}
                <div className="space-y-4">
                  <Label className="text-base font-semibold">Donor Information</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium mb-2 block">Full Name</Label>
                      <Input
                        id="name"
                        className="h-12 text-base"
                        value={donorInfo.name}
                        onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium mb-2 block">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        className="h-12 text-base"
                        value={donorInfo.email}
                        onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method Note */}
                <div className="modern-card p-4 md:p-6 border-primary/20">
                  <div className="flex items-center mb-3">
                    <CreditCard className="h-5 w-5 mr-2 text-primary" />
                    <span className="font-semibold text-primary">Secure Payment Processing</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This is a demonstration form. In a real implementation, this would integrate 
                    with secure payment processors like Stripe, PayPal, or local payment solutions.
                  </p>
                </div>

                <Button 
                  type="submit" 
                  size="xl" 
                  className="community-gradient text-white w-full"
                  disabled={!selectedAmount && !customAmount}
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Donate {selectedAmount || customAmount ? `$${selectedAmount || customAmount}` : ''}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="nonprofit-section">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="nonprofit-heading">Your Trust, Our Transparency</h2>
          <p className="nonprofit-subheading">
            We believe in full transparency about how your donations are used to create impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Card className="modern-card text-center border-0">
            <CardHeader className="pb-4">
              <div className="impact-stat text-primary mb-2">85%</div>
              <CardTitle className="text-lg md:text-xl">Program Activities</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm md:text-base text-muted-foreground">
                Direct funding for food, water, and environmental programs
              </p>
            </CardContent>
          </Card>
          
          <Card className="modern-card text-center border-0">
            <CardHeader className="pb-4">
              <div className="impact-stat text-primary mb-2">10%</div>
              <CardTitle className="text-lg md:text-xl">Operations</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm md:text-base text-muted-foreground">
                Administrative costs and program coordination
              </p>
            </CardContent>
          </Card>
          
          <Card className="modern-card text-center border-0">
            <CardHeader className="pb-4">
              <div className="impact-stat text-primary mb-2">5%</div>
              <CardTitle className="text-lg md:text-xl">Growth & Development</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm md:text-base text-muted-foreground">
                Expanding our reach and developing new programs
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Donate;