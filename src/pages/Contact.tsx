import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [emailTouched, setEmailTouched] = useState(false);

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    // Must start with + and contain only digits, spaces, dashes, and parentheses
    // Must have at least 10 digits total (including country code)
    const phoneRegex = /^\+[1-9]\d{1,14}$/;
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    return phoneRegex.test(cleanPhone) && cleanPhone.length >= 10;
  };

  const sanitizeInput = (input: string): string => {
    return input.trim().replace(/[<>]/g, '');
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (formData.name.trim().length > 100) {
      newErrors.name = 'Name must be less than 100 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length > 200) {
      newErrors.subject = 'Subject must be less than 200 characters';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (formData.message.trim().length > 2000) {
      newErrors.message = 'Message must be less than 2000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    setErrors({});
    
    // Validate form
    if (!validateForm()) {
      toast({
        title: "Please fix the errors below",
        description: "Some fields need to be corrected before submitting.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Sanitize form data
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        subject: sanitizeInput(formData.subject),
        message: sanitizeInput(formData.message)
      };
      
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      // Check if environment variables are set
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }
      
      // Initialize EmailJS
      emailjs.init(publicKey);
      
      // Send email using EmailJS with sanitized data
      const result = await emailjs.send(serviceId, templateId, {
        from_name: sanitizedData.name,
        from_email: sanitizedData.email,
        subject: sanitizedData.subject || 'Contact from Zakia Relief Website',
        message: sanitizedData.message,
        to_email: 'info@zakiarelief.org'
      });
      
      console.log('Email sent successfully:', result);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error Sending Message",
        description: "There was an issue sending your message. Please try again or contact us directly at info@zakiarelief.org",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div className="space-y-2 flex flex-col items-center">
              <div className="flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <span className="font-medium text-foreground">Location</span>
              </div>
              <p className="text-sm text-muted-foreground">Nouakchott, Mauritania</p>
            </div>
            <div className="space-y-2 flex flex-col items-center">
              <div className="flex items-center justify-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <span className="font-medium text-foreground">Phone</span>
              </div>
              <a 
                href="tel:+22243727240" 
                className="text-sm text-primary hover:text-primary/80 transition-colors cursor-pointer"
              >
                +222 43 72 72 40
              </a>
            </div>
            <div className="space-y-2 flex flex-col items-center">
              <div className="flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-green-600 mr-2" />
                <span className="font-medium text-foreground">WhatsApp</span>
              </div>
              <a 
                href="https://wa.me/22243727240" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-green-600 hover:text-green-700 transition-colors cursor-pointer"
              >
                Chat with us
              </a>
            </div>
            <div className="space-y-2 flex flex-col items-center">
              <div className="flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <span className="font-medium text-foreground">Email</span>
              </div>
              <a 
                href="mailto:info@zakiarelief.org" 
                className="text-sm text-primary hover:text-primary/80 transition-colors cursor-pointer"
              >
                info@zakiarelief.org
              </a>
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
                    className={`mt-2 ${errors.name ? 'border-red-500 focus:border-red-500' : ''}`}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm md:text-base font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      className={`mt-2 ${errors.email ? 'border-red-500 focus:border-red-500' : ''}`}
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        setEmailTouched(true);
                        // Real-time email validation
                        if (e.target.value.trim() && !validateEmail(e.target.value)) {
                          setErrors(prev => ({ ...prev, email: 'Invalid email' }));
                        } else {
                          setErrors(prev => ({ ...prev, email: '' }));
                        }
                      }}
                      onBlur={() => setEmailTouched(true)}
                      required
                    />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
              
              <div>
                <Label htmlFor="subject" className="text-sm md:text-base font-medium">Subject *</Label>
                <Input
                  id="subject"
                  placeholder="e.g., Volunteer Opportunity, Partnership Inquiry"
                  className={`mt-2 ${errors.subject ? 'border-red-500 focus:border-red-500' : ''}`}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="message" className="text-sm md:text-base font-medium">Message *</Label>
                <Textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us how we can help or how you'd like to get involved..."
                  className={`mt-2 ${errors.message ? 'border-red-500 focus:border-red-500' : ''}`}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="community-gradient text-white w-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className={`h-5 w-5 mr-2 ${isSubmitting ? 'animate-pulse' : ''}`} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Contact;