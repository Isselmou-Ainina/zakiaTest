import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };





  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Hero Section */}
      <section className="relative community-gradient text-white mobile-section overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-white/5 rounded-full transform -translate-x-24 -translate-y-24"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full transform translate-x-32 translate-y-32"></div>
        
        <div className="max-w-6xl mx-auto container-padding relative z-10">
          <div className="text-center">
            <Badge className="mb-4 md:mb-6 px-6 py-2 gold-gradient text-white border-0 rounded-full text-sm font-semibold shadow-xl">
              Reach Out
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Get in <span className="text-secondary bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent drop-shadow-lg">Touch</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 max-w-4xl mx-auto opacity-95 leading-relaxed font-light">
              We'd love to hear from you. Reach out with questions, partnership opportunities, 
              or to learn more about how you can support our mission.
            </p>
          </div>
        </div>
      </section>



      {/* Contact Form */}
      <section className="py-16 md:py-20 container-padding max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 px-6 py-2 community-gradient text-white border-0 rounded-full text-sm font-semibold">
            Send Message
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Send us a Message
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
          
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <span className="font-medium text-foreground">Location</span>
              </div>
              <p className="text-sm text-muted-foreground">Nouakchott, Mauritania</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <span className="font-medium text-foreground">Phone</span>
              </div>
              <p className="text-sm text-muted-foreground">+222 XX XX XX XX</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <span className="font-medium text-foreground">Email</span>
              </div>
              <p className="text-sm text-muted-foreground">info@zakiarelief.org</p>
            </div>
          </div>
        </div>
        
        <Card className="bg-white border-0 shadow-xl">
          <CardContent className="p-6 md:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-sm md:text-base font-medium">Full Name *</Label>
                  <Input
                    id="name"
                    className="mt-2"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm md:text-base font-medium">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    className="mt-2"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="subject" className="text-sm md:text-base font-medium">Subject *</Label>
                <Input
                  id="subject"
                  placeholder="e.g., Volunteer Opportunity, Partnership Inquiry"
                  className="mt-2"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-sm md:text-base font-medium">Message *</Label>
                <Textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us how we can help or how you'd like to get involved..."
                  className="mt-2"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              
              <Button type="submit" size="lg" className="community-gradient text-white w-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 py-3">
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Contact;