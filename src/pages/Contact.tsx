import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
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

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: [
        "Nouakchott, Mauritania",
        "West Africa"
      ]
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "+222 XX XX XX XX",
        "WhatsApp: +222 XX XX XX XX"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "info@zakiarelief.org",
        "volunteer@zakiarelief.org"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Sunday - Thursday: 8:00 AM - 5:00 PM",
        "Friday - Saturday: Closed"
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", url: "#", description: "Follow our daily activities and community updates" },
    { name: "Instagram", url: "#", description: "See photos from our programs and events" },
    { name: "WhatsApp", url: "#", description: "Quick communication for volunteers and donors" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
              We'd love to hear from you. Reach out with questions, partnership opportunities, 
              or to learn more about how you can support our mission.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm md:text-base">
              <div className="flex items-center">
                <MessageCircle className="h-5 w-5 mr-2" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>Multiple Channels</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>24hr Email Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info) => (
              <Card key={info.title} className="soft-shadow text-center">
                <CardHeader>
                  <div className="mx-auto p-3 hero-gradient rounded-full w-fit mb-4">
                    <info.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {info.details.map((detail, index) => (
                      <p key={index} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="bg-muted py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="soft-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl">Send us a Message</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        placeholder="e.g., Volunteer Opportunity, Partnership Inquiry"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        rows={6}
                        placeholder="Tell us how we can help or how you'd like to get involved..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="hero-gradient w-full">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Location & Additional Info */}
            <div className="space-y-6">
              {/* Location Card */}
              <Card className="soft-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <MapPin className="h-6 w-6 mr-3 text-primary" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="h-16 w-16 mx-auto mb-2 opacity-20" />
                      <p>Interactive map would be embedded here</p>
                      <p className="text-sm">Nouakchott, Mauritania</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We're located in the heart of Nouakchott, making it easy for community 
                    members to access our services and for volunteers to participate in our programs.
                  </p>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="soft-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">Connect with Us</CardTitle>
                  <CardDescription>
                    Follow our work and stay updated on our latest initiatives
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {socialLinks.map((social) => (
                      <div key={social.name} className="flex items-start space-x-3">
                        <div className="p-2 hero-gradient rounded text-primary-foreground">
                          <MessageCircle className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{social.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {social.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="soft-shadow border-primary">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Emergency Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-2">
                    For urgent matters related to our programs or community emergencies:
                  </p>
                  <p className="font-semibold">+222 XX XX XX XX</p>
                  <p className="text-sm text-muted-foreground">
                    Available 24/7 for emergency situations
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;