import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Send, MessageCircle, Clock, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactType: 'donor',
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
        contactType: sanitizeInput(formData.contactType),
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
        contact_type: sanitizedData.contactType,
        subject: sanitizedData.subject || 'Contact from Zakia Relief Website',
        message: sanitizedData.message,
        to_email: 'info@zakiarelief.org'
      });
      
      console.log('Email sent successfully:', result);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. We'll get back to you within two business days.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        contactType: 'donor',
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative community-gradient text-white mobile-section overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-white/5 rounded-full transform -translate-x-24 -translate-y-24"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full transform translate-x-32 translate-y-32"></div>
        
        <div className="max-w-6xl mx-auto container-padding relative z-10">
          <div className="text-center">
            <Badge className="mb-4 md:mb-6 px-6 py-2 gold-gradient text-white border-0 rounded-full text-sm font-semibold shadow-xl">
              {t('contact.badge')}
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              {t('contact.title').split(' ').slice(0, 2).join(' ')} <span className="text-secondary bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent drop-shadow-lg">{t('contact.title').split(' ').slice(2).join(' ')}</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 max-w-4xl mx-auto opacity-95 leading-relaxed font-light">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>



      {/* Contact Form */}
      <section className="py-16 md:py-20 container-padding max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 px-6 py-2 community-gradient text-white border-0 rounded-full text-sm font-semibold">
            {t('contact.sendMessage')}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {t('contact.form.title')}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            {t('contact.form.description')}
          </p>
          
          {/* Response Time */}
          <div className="text-center mb-8">
            <div className="bg-muted/50 backdrop-blur-md rounded-lg p-4 max-w-md mx-auto border border-border">
              <Clock className="h-5 w-5 text-primary mx-auto mb-2" />
              <p className="text-foreground text-sm font-medium">{t('contact.response.time')}</p>
              <p className="text-muted-foreground text-xs mt-1">{t('contact.hours.description')}</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            <div className="space-y-2 flex flex-col items-center">
              <div className="flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <span className="font-medium text-foreground">{t('contact.location')}</span>
              </div>
              <p className="text-sm text-muted-foreground">{t('contact.location.address')}</p>
            </div>
            <div className="space-y-2 flex flex-col items-center">
              <div className="flex items-center justify-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <span className="font-medium text-foreground">{t('contact.phone')}</span>
              </div>
              <a 
                href="tel:+22243727240" 
                className="text-sm text-primary hover:text-primary/80 transition-colors cursor-pointer"
              >
                {t('contact.phone.number')}
              </a>
            </div>
            <div className="space-y-2 flex flex-col items-center">
              <div className="flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-green-600 mr-2" />
                <span className="font-medium text-foreground">{t('contact.whatsapp')}</span>
              </div>
              <a 
                href="https://wa.me/22243727240" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-green-600 hover:text-green-700 transition-colors cursor-pointer"
              >
                {t('contact.whatsapp')}
              </a>
            </div>
            <div className="space-y-2 flex flex-col items-center">
              <div className="flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <span className="font-medium text-foreground">{t('contact.email')}</span>
              </div>
              <a 
                href="mailto:info@zakiarelief.org" 
                className="text-sm text-primary hover:text-primary/80 transition-colors cursor-pointer"
              >
                {t('contact.email.address')}
              </a>
            </div>
          </div>
        </div>
        
        <Card className="bg-white border-0 shadow-xl">
          <CardContent className="p-6 md:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-sm md:text-base font-medium">{t('contact.form.name')} *</Label>
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
                  <Label htmlFor="email" className="text-sm md:text-base font-medium">{t('contact.form.email')} *</Label>
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="contactType" className="text-sm md:text-base font-medium">{t('contact.form.type')}</Label>
                  <div className="relative mt-2">
                    <select
                      id="contactType"
                      value={formData.contactType}
                      onChange={(e) => setFormData({ ...formData, contactType: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent appearance-none pr-10"
                    >
                      <option value="donor">{t('contact.dropdown.donor')}</option>
                      <option value="volunteer">{t('contact.dropdown.volunteer')}</option>
                      <option value="partner">{t('contact.dropdown.partner')}</option>
                      <option value="media">{t('contact.dropdown.media')}</option>
                      <option value="other">{t('contact.dropdown.other')}</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-sm md:text-base font-medium">{t('contact.form.subject')} *</Label>
                <Input
                  id="subject"
                  placeholder={t('contact.form.placeholder.subject')}
                  className={`mt-2 ${errors.subject ? 'border-red-500 focus:border-red-500' : ''}`}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                  )}
                </div>
              </div>
              
              <div>
                <Label htmlFor="message" className="text-sm md:text-base font-medium">{t('contact.form.message')} *</Label>
                <Textarea
                  id="message"
                  rows={6}
                  placeholder={t('contact.form.placeholder.message')}
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
                {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Location Map */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container-padding max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{t('contact.location.title')}</h2>
            <p className="text-muted-foreground">{t('contact.location.description')}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map Embed */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57896.84351604134!2d-15.9999999!3d18.0735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xee81b8f0b8f0b8f%3A0x0!2sNouakchott%2C%20Mauritania!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zakia Relief Location in Nouakchott, Mauritania"
              ></iframe>
            </div>
            
            {/* Location Details */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{t('contact.serviceArea.title')}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {t('contact.serviceArea.description')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{t('contact.hours.title')}</h3>
                      <div className="text-muted-foreground text-sm space-y-1">
                        <p>{t('contact.hours.weekdays')}</p>
                        <p>{t('contact.hours.weekend')}</p>
                        <p className="text-xs text-primary mt-2">
                          {t('contact.hours.emergency')}
                        </p>
                      </div>
                    </div>
                  </div>
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