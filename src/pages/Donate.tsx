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
      title: 'Clean Water Access',
      description: 'Contributes to water filtration and distribution systems',
      icon: Droplets,
      impact: '200L clean water'
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
      <section className="hero-gradient text-primary-foreground py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Make a Difference Today
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
              Your generosity directly impacts families and communities in Mauritania. 
              Every dollar helps us provide food, clean water, and environmental care.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm md:text-base">
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>500+ Families Helped</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                <span>100% Transparent</span>
              </div>
              <div className="flex items-center">
                <Heart className="h-5 w-5 mr-2" />
                <span>Direct Impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Levels */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Your Impact at Every Level
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {impactLevels.map((level) => (
              <Card 
                key={level.amount} 
                className={`soft-shadow cursor-pointer transition-smooth hover:shadow-lg ${
                  selectedAmount === level.amount ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedAmount(level.amount)}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto p-3 hero-gradient rounded-full w-fit mb-4">
                    <level.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    ${level.amount}
                  </div>
                  <CardTitle className="text-lg">{level.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <CardDescription className="text-sm">
                    {level.description}
                  </CardDescription>
                  <Badge variant="secondary" className="impact-gradient text-accent-foreground">
                    {level.impact}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="bg-muted py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="soft-shadow">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl">Complete Your Donation</CardTitle>
              <CardDescription className="text-lg">
                Choose your donation amount and help us continue our vital work
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleDonate} className="space-y-6">
                {/* Amount Selection */}
                <div>
                  <Label className="text-base font-semibold mb-4 block">Donation Amount</Label>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                    {quickAmounts.map((amount) => (
                      <Button
                        key={amount}
                        type="button"
                        variant={selectedAmount === amount ? "default" : "outline"}
                        className={selectedAmount === amount ? "hero-gradient" : ""}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount('');
                        }}
                      >
                        ${amount}
                      </Button>
                    ))}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Label htmlFor="custom-amount" className="text-sm">Custom Amount:</Label>
                    <div className="relative flex-1">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="custom-amount"
                        type="number"
                        placeholder="Enter amount"
                        className="pl-10"
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
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={donorInfo.name}
                        onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={donorInfo.email}
                        onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method Note */}
                <div className="bg-card p-4 rounded-lg border">
                  <div className="flex items-center mb-2">
                    <CreditCard className="h-5 w-5 mr-2 text-primary" />
                    <span className="font-semibold">Secure Payment Processing</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    This is a demonstration form. In a real implementation, this would integrate 
                    with secure payment processors like Stripe, PayPal, or local payment solutions.
                  </p>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="hero-gradient w-full"
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
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Trust, Our Transparency
            </h2>
            <p className="text-xl mb-8 text-muted-foreground">
              We believe in full transparency about how your donations are used to create impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="soft-shadow text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">85%</div>
                <CardTitle>Program Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Direct funding for food, water, and environmental programs
                </p>
              </CardContent>
            </Card>
            
            <Card className="soft-shadow text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">10%</div>
                <CardTitle>Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Administrative costs and program coordination
                </p>
              </CardContent>
            </Card>
            
            <Card className="soft-shadow text-center">
              <CardHeader>
                <div className="text-4xl font-bold text-primary mb-2">5%</div>
                <CardTitle>Growth & Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Expanding our reach and developing new programs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;