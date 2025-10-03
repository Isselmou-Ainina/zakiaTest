import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Users, Clock, Heart, Megaphone, Handshake, Calendar, ArrowRight, CheckCircle, Send, ChevronDown } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '../contexts/LanguageContext';
import emailjs from '@emailjs/browser';

const GetInvolved = () => {
  const { toast } = useToast();
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    availability: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [emailTouched, setEmailTouched] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState('+222');

  // Helper function to get translated country name
  const getCountryName = (countryKey: string) => {
    return t(`countries.${countryKey}`);
  };

  // Country codes data with translation keys
  const countryCodes = [
    { code: '+222', countryKey: 'mauritania', flag: '🇲🇷' },
    { code: '+1', countryKey: 'unitedStates', flag: '🇺🇸' },
    { code: '+33', countryKey: 'france', flag: '🇫🇷' },
    { code: '+44', countryKey: 'unitedKingdom', flag: '🇬🇧' },
    { code: '+49', countryKey: 'germany', flag: '🇩🇪' },
    { code: '+34', countryKey: 'spain', flag: '🇪🇸' },
    { code: '+39', countryKey: 'italy', flag: '🇮🇹' },
    { code: '+31', countryKey: 'netherlands', flag: '🇳🇱' },
    { code: '+32', countryKey: 'belgium', flag: '🇧🇪' },
    { code: '+41', countryKey: 'switzerland', flag: '🇨🇭' },
    { code: '+46', countryKey: 'sweden', flag: '🇸🇪' },
    { code: '+47', countryKey: 'norway', flag: '🇳🇴' },
    { code: '+45', countryKey: 'denmark', flag: '🇩🇰' },
    { code: '+358', countryKey: 'finland', flag: '🇫🇮' },
    { code: '+351', countryKey: 'portugal', flag: '🇵🇹' },
    { code: '+30', countryKey: 'greece', flag: '🇬🇷' },
    { code: '+90', countryKey: 'turkey', flag: '🇹🇷' },
    { code: '+7', countryKey: 'russia', flag: '🇷🇺' },
    { code: '+86', countryKey: 'china', flag: '🇨🇳' },
    { code: '+81', countryKey: 'japan', flag: '🇯🇵' },
    { code: '+82', countryKey: 'southKorea', flag: '🇰🇷' },
    { code: '+91', countryKey: 'india', flag: '🇮🇳' },
    { code: '+92', countryKey: 'pakistan', flag: '🇵🇰' },
    { code: '+880', countryKey: 'bangladesh', flag: '🇧🇩' },
    { code: '+94', countryKey: 'sriLanka', flag: '🇱🇰' },
    { code: '+977', countryKey: 'nepal', flag: '🇳🇵' },
    { code: '+975', countryKey: 'bhutan', flag: '🇧🇹' },
    { code: '+960', countryKey: 'maldives', flag: '🇲🇻' },
    { code: '+20', countryKey: 'egypt', flag: '🇪🇬' },
    { code: '+212', countryKey: 'morocco', flag: '🇲🇦' },
    { code: '+213', countryKey: 'algeria', flag: '🇩🇿' },
    { code: '+216', countryKey: 'tunisia', flag: '🇹🇳' },
    { code: '+218', countryKey: 'libya', flag: '🇱🇾' },
    { code: '+220', countryKey: 'gambia', flag: '🇬🇲' },
    { code: '+221', countryKey: 'senegal', flag: '🇸🇳' },
    { code: '+223', countryKey: 'mali', flag: '🇲🇱' },
    { code: '+224', countryKey: 'guinea', flag: '🇬🇳' },
    { code: '+225', countryKey: 'ivoryCoast', flag: '🇨🇮' },
    { code: '+226', countryKey: 'burkinaFaso', flag: '🇧🇫' },
    { code: '+227', countryKey: 'niger', flag: '🇳🇪' },
    { code: '+228', countryKey: 'togo', flag: '🇹🇬' },
    { code: '+229', countryKey: 'benin', flag: '🇧🇯' },
    { code: '+230', countryKey: 'mauritius', flag: '🇲🇺' },
    { code: '+231', countryKey: 'liberia', flag: '🇱🇷' },
    { code: '+232', countryKey: 'sierraLeone', flag: '🇸🇱' },
    { code: '+233', countryKey: 'ghana', flag: '🇬🇭' },
    { code: '+234', countryKey: 'nigeria', flag: '🇳🇬' },
    { code: '+235', countryKey: 'chad', flag: '🇹🇩' },
    { code: '+236', countryKey: 'centralAfricanRepublic', flag: '🇨🇫' },
    { code: '+237', countryKey: 'cameroon', flag: '🇨🇲' },
    { code: '+238', countryKey: 'capeVerde', flag: '🇨🇻' },
    { code: '+239', countryKey: 'saoTomeAndPrincipe', flag: '🇸🇹' },
    { code: '+240', countryKey: 'equatorialGuinea', flag: '🇬🇶' },
    { code: '+241', countryKey: 'gabon', flag: '🇬🇦' },
    { code: '+242', countryKey: 'republicOfTheCongo', flag: '🇨🇬' },
    { code: '+243', countryKey: 'democraticRepublicOfTheCongo', flag: '🇨🇩' },
    { code: '+244', countryKey: 'angola', flag: '🇦🇴' },
    { code: '+245', countryKey: 'guineaBissau', flag: '🇬🇼' },
    { code: '+246', countryKey: 'britishIndianOceanTerritory', flag: '🇮🇴' },
    { code: '+248', countryKey: 'seychelles', flag: '🇸🇨' },
    { code: '+249', countryKey: 'sudan', flag: '🇸🇩' },
    { code: '+250', countryKey: 'rwanda', flag: '🇷🇼' },
    { code: '+251', countryKey: 'ethiopia', flag: '🇪🇹' },
    { code: '+252', countryKey: 'somalia', flag: '🇸🇴' },
    { code: '+253', countryKey: 'djibouti', flag: '🇩🇯' },
    { code: '+254', countryKey: 'kenya', flag: '🇰🇪' },
    { code: '+255', countryKey: 'tanzania', flag: '🇹🇿' },
    { code: '+256', countryKey: 'uganda', flag: '🇺🇬' },
    { code: '+257', countryKey: 'burundi', flag: '🇧🇮' },
    { code: '+258', countryKey: 'mozambique', flag: '🇲🇿' },
    { code: '+260', countryKey: 'zambia', flag: '🇿🇲' },
    { code: '+261', countryKey: 'madagascar', flag: '🇲🇬' },
    { code: '+262', countryKey: 'reunion', flag: '🇷🇪' },
    { code: '+263', countryKey: 'zimbabwe', flag: '🇿🇼' },
    { code: '+264', countryKey: 'namibia', flag: '🇳🇦' },
    { code: '+265', countryKey: 'malawi', flag: '🇲🇼' },
    { code: '+266', countryKey: 'lesotho', flag: '🇱🇸' },
    { code: '+267', countryKey: 'botswana', flag: '🇧🇼' },
    { code: '+268', countryKey: 'swaziland', flag: '🇸🇿' },
    { code: '+269', countryKey: 'comoros', flag: '🇰🇲' },
    { code: '+290', countryKey: 'saintHelena', flag: '🇸🇭' },
    { code: '+291', countryKey: 'eritrea', flag: '🇪🇷' },
    { code: '+297', countryKey: 'aruba', flag: '🇦🇼' },
    { code: '+298', countryKey: 'faroeIslands', flag: '🇫🇴' },
    { code: '+299', countryKey: 'greenland', flag: '🇬🇱' },
    { code: '+350', countryKey: 'gibraltar', flag: '🇬🇮' },
    { code: '+351', countryKey: 'portugal', flag: '🇵🇹' },
    { code: '+352', countryKey: 'luxembourg', flag: '🇱🇺' },
    { code: '+353', countryKey: 'ireland', flag: '🇮🇪' },
    { code: '+354', countryKey: 'iceland', flag: '🇮🇸' },
    { code: '+355', countryKey: 'albania', flag: '🇦🇱' },
    { code: '+356', countryKey: 'malta', flag: '🇲🇹' },
    { code: '+357', countryKey: 'cyprus', flag: '🇨🇾' },
    { code: '+358', countryKey: 'finland', flag: '🇫🇮' },
    { code: '+359', countryKey: 'bulgaria', flag: '🇧🇬' },
    { code: '+370', countryKey: 'lithuania', flag: '🇱🇹' },
    { code: '+371', countryKey: 'latvia', flag: '🇱🇻' },
    { code: '+372', countryKey: 'estonia', flag: '🇪🇪' },
    { code: '+373', countryKey: 'moldova', flag: '🇲🇩' },
    { code: '+374', countryKey: 'armenia', flag: '🇦🇲' },
    { code: '+375', countryKey: 'belarus', flag: '🇧🇾' },
    { code: '+376', countryKey: 'andorra', flag: '🇦🇩' },
    { code: '+377', countryKey: 'monaco', flag: '🇲🇨' },
    { code: '+378', countryKey: 'sanMarino', flag: '🇸🇲' },
    { code: '+380', countryKey: 'ukraine', flag: '🇺🇦' },
    { code: '+381', countryKey: 'serbia', flag: '🇷🇸' },
    { code: '+382', countryKey: 'montenegro', flag: '🇲🇪' },
    { code: '+383', countryKey: 'kosovo', flag: '🇽🇰' },
    { code: '+385', countryKey: 'croatia', flag: '🇭🇷' },
    { code: '+386', countryKey: 'slovenia', flag: '🇸🇮' },
    { code: '+387', countryKey: 'bosniaAndHerzegovina', flag: '🇧🇦' },
    { code: '+389', countryKey: 'northMacedonia', flag: '🇲🇰' },
    { code: '+420', countryKey: 'czechRepublic', flag: '🇨🇿' },
    { code: '+421', countryKey: 'slovakia', flag: '🇸🇰' },
    { code: '+423', countryKey: 'liechtenstein', flag: '🇱🇮' },
    { code: '+500', countryKey: 'falklandIslands', flag: '🇫🇰' },
    { code: '+501', countryKey: 'belize', flag: '🇧🇿' },
    { code: '+502', countryKey: 'guatemala', flag: '🇬🇹' },
    { code: '+503', countryKey: 'elSalvador', flag: '🇸🇻' },
    { code: '+504', countryKey: 'honduras', flag: '🇭🇳' },
    { code: '+505', countryKey: 'nicaragua', flag: '🇳🇮' },
    { code: '+506', countryKey: 'costaRica', flag: '🇨🇷' },
    { code: '+507', countryKey: 'panama', flag: '🇵🇦' },
    { code: '+508', countryKey: 'saintPierreAndMiquelon', flag: '🇵🇲' },
    { code: '+509', countryKey: 'haiti', flag: '🇭🇹' },
    { code: '+590', countryKey: 'guadeloupe', flag: '🇬🇵' },
    { code: '+591', countryKey: 'bolivia', flag: '🇧🇴' },
    { code: '+592', countryKey: 'guyana', flag: '🇬🇾' },
    { code: '+593', countryKey: 'ecuador', flag: '🇪🇨' },
    { code: '+594', countryKey: 'frenchGuiana', flag: '🇬🇫' },
    { code: '+595', countryKey: 'paraguay', flag: '🇵🇾' },
    { code: '+596', countryKey: 'martinique', flag: '🇲🇶' },
    { code: '+597', countryKey: 'suriname', flag: '🇸🇷' },
    { code: '+598', countryKey: 'uruguay', flag: '🇺🇾' },
    { code: '+599', countryKey: 'netherlandsAntilles', flag: '🇧🇶' },
    { code: '+670', countryKey: 'eastTimor', flag: '🇹🇱' },
    { code: '+672', countryKey: 'antarctica', flag: '🇦🇶' },
    { code: '+673', countryKey: 'brunei', flag: '🇧🇳' },
    { code: '+674', countryKey: 'nauru', flag: '🇳🇷' },
    { code: '+675', countryKey: 'papuaNewGuinea', flag: '🇵🇬' },
    { code: '+676', countryKey: 'tonga', flag: '🇹🇴' },
    { code: '+677', countryKey: 'solomonIslands', flag: '🇸🇧' },
    { code: '+678', countryKey: 'vanuatu', flag: '🇻🇺' },
    { code: '+679', countryKey: 'fiji', flag: '🇫🇯' },
    { code: '+680', countryKey: 'palau', flag: '🇵🇼' },
    { code: '+681', countryKey: 'wallisAndFutuna', flag: '🇼🇫' },
    { code: '+682', countryKey: 'cookIslands', flag: '🇨🇰' },
    { code: '+683', countryKey: 'niue', flag: '🇳🇺' },
    { code: '+684', countryKey: 'americanSamoa', flag: '🇦🇸' },
    { code: '+685', countryKey: 'samoa', flag: '🇼🇸' },
    { code: '+686', countryKey: 'kiribati', flag: '🇰🇮' },
    { code: '+687', countryKey: 'newCaledonia', flag: '🇳🇨' },
    { code: '+688', countryKey: 'tuvalu', flag: '🇹🇻' },
    { code: '+689', countryKey: 'frenchPolynesia', flag: '🇵🇫' },
    { code: '+690', countryKey: 'tokelau', flag: '🇹🇰' },
    { code: '+691', countryKey: 'micronesia', flag: '🇫🇲' },
    { code: '+692', countryKey: 'marshallIslands', flag: '🇲🇭' },
    { code: '+850', countryKey: 'northKorea', flag: '🇰🇵' },
    { code: '+852', countryKey: 'hongKong', flag: '🇭🇰' },
    { code: '+853', countryKey: 'macau', flag: '🇲🇴' },
    { code: '+855', countryKey: 'cambodia', flag: '🇰🇭' },
    { code: '+856', countryKey: 'laos', flag: '🇱🇦' },
    { code: '+880', countryKey: 'bangladesh', flag: '🇧🇩' },
    { code: '+886', countryKey: 'taiwan', flag: '🇹🇼' },
    { code: '+960', countryKey: 'maldives', flag: '🇲🇻' },
    { code: '+961', countryKey: 'lebanon', flag: '🇱🇧' },
    { code: '+962', countryKey: 'jordan', flag: '🇯🇴' },
    { code: '+963', countryKey: 'syria', flag: '🇸🇾' },
    { code: '+964', countryKey: 'iraq', flag: '🇮🇶' },
    { code: '+965', countryKey: 'kuwait', flag: '🇰🇼' },
    { code: '+966', countryKey: 'saudiArabia', flag: '🇸🇦' },
    { code: '+967', countryKey: 'yemen', flag: '🇾🇪' },
    { code: '+968', countryKey: 'oman', flag: '🇴🇲' },
    { code: '+970', countryKey: 'palestine', flag: '🇵🇸' },
    { code: '+971', countryKey: 'unitedArabEmirates', flag: '🇦🇪' },
    { code: '+972', countryKey: 'israel', flag: '🇮🇱' },
    { code: '+973', countryKey: 'bahrain', flag: '🇧🇭' },
    { code: '+974', countryKey: 'qatar', flag: '🇶🇦' },
    { code: '+975', countryKey: 'bhutan', flag: '🇧🇹' },
    { code: '+976', countryKey: 'mongolia', flag: '🇲🇳' },
    { code: '+977', countryKey: 'nepal', flag: '🇳🇵' },
    { code: '+992', countryKey: 'tajikistan', flag: '🇹🇯' },
    { code: '+993', countryKey: 'turkmenistan', flag: '🇹🇲' },
    { code: '+994', countryKey: 'azerbaijan', flag: '🇦🇿' },
    { code: '+995', countryKey: 'georgia', flag: '🇬🇪' },
    { code: '+996', countryKey: 'kyrgyzstan', flag: '🇰🇬' },
    { code: '+998', countryKey: 'uzbekistan', flag: '🇺🇿' }
  ];

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    // Phone number should only contain digits (no country code needed as it's separate)
    const phoneRegex = /^[0-9]{7,15}$/;
    return phoneRegex.test(phone);
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

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (7-15 digits)';
    }

    // Interest validation
    if (!formData.interest.trim()) {
      newErrors.interest = 'Area of interest is required';
    } else if (formData.interest.trim().length > 200) {
      newErrors.interest = 'Interest must be less than 200 characters';
    }

    // Availability validation
    if (!formData.availability.trim()) {
      newErrors.availability = 'Availability is required';
    } else if (formData.availability.trim().length > 200) {
      newErrors.availability = 'Availability must be less than 200 characters';
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
        phone: sanitizeInput(formData.phone),
        interest: sanitizeInput(formData.interest),
        availability: sanitizeInput(formData.availability),
        message: sanitizeInput(formData.message)
      };
      
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_VOLUNTEER_TEMPLATE_ID; // Different template for volunteers
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
        phone: `${selectedCountryCode}${sanitizedData.phone}`,
        interest: sanitizedData.interest,
        availability: sanitizedData.availability,
        message: sanitizedData.message,
        to_email: 'info@zakiarelief.org'
      });
      
      console.log('Volunteer application sent successfully:', result);
      
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest in volunteering. We'll contact you soon.",
    });
      
      // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: '',
      availability: '',
      message: ''
    });
      
    } catch (error) {
      console.error('Error sending volunteer application:', error);
      toast({
        title: "Error Submitting Application",
        description: "There was an issue submitting your application. Please try again or contact us directly at info@zakiarelief.org",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const opportunities = [
    {
      icon: Users,
      title: t('involved.opportunities.community.title'),
      description: t('involved.opportunities.community.description'),
      commitment: t('involved.opportunities.community.time'),
      requirements: t('involved.opportunities.community.requirementsText'),
      color: "from-primary/20 to-primary/5"
    },
    {
      icon: Handshake,
      title: t('involved.opportunities.food.title'),
      description: t('involved.opportunities.food.description'),
      commitment: t('involved.opportunities.food.time'),
      requirements: t('involved.opportunities.food.requirementsText'),
      color: "from-secondary/20 to-secondary/5"
    },
    {
      icon: Clock,
      title: t('involved.opportunities.admin.title'),
      description: t('involved.opportunities.admin.description'),
      commitment: t('involved.opportunities.admin.time'),
      requirements: t('involved.opportunities.admin.requirementsText'),
      color: "from-accent/20 to-accent/5"
    },
    {
      icon: Megaphone,
      title: t('involved.opportunities.awareness.title'),
      description: t('involved.opportunities.awareness.description'),
      commitment: t('involved.opportunities.awareness.time'),
      requirements: t('involved.opportunities.awareness.requirementsText'),
      color: "from-primary/20 to-primary/5"
    }
  ];

  const partnerships = [
    {
      icon: Heart,
      title: t('involved.partnerships.businesses.title'),
      description: t('involved.partnerships.businesses.description'),
      examples: t('involved.partnerships.businesses.partners').split(', ')
    },
    {
      icon: Calendar,
      title: t('involved.partnerships.community.title'), 
      description: t('involved.partnerships.community.description'),
      examples: t('involved.partnerships.community.partners').split(', ')
    },
    {
      icon: Users,
      title: t('involved.partnerships.education.title'),
      description: t('involved.partnerships.education.description'),
      examples: t('involved.partnerships.education.partners').split(', ')
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
              {t('involved.badge')}
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              {t('involved.title').split(' ').slice(0, 2).join(' ')} <span className="text-secondary bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent drop-shadow-lg">{t('involved.title').split(' ').slice(2).join(' ')}</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 max-w-4xl mx-auto opacity-95 leading-relaxed font-light">
              {t('involved.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-12 md:py-16 container-padding max-w-6xl mx-auto relative">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-muted/50 to-transparent"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-10 md:mb-14">
            <Badge className="mb-4 px-6 py-2 community-gradient text-white border-0 rounded-full text-sm font-semibold">
              {t('involved.opportunities.badge')}
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t('involved.opportunities.title')}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('involved.opportunities.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {opportunities.map((opportunity, index) => (
              <Card key={opportunity.title} className={`group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-gradient-to-br from-card via-card to-muted/20`}>
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-full transform translate-x-6 -translate-y-6"></div>
                
                <CardHeader className="pb-3 relative z-10">
                  <div className="flex items-start mb-4">
                    <div className="mr-4 p-4 md:p-5 community-gradient rounded-2xl group-hover:scale-110 transition-all duration-500 shadow-lg">
                      <opportunity.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl md:text-2xl mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                        {opportunity.title}
                      </CardTitle>
                      <div className="flex items-center">
                        <Badge className="community-gradient text-white border-0 px-3 py-1 text-xs font-medium rounded-full shadow-sm">
                          <Clock className="h-3 w-3 mr-1" />
                          {opportunity.commitment}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4 pt-0 relative z-10">
                  <CardDescription className="text-sm md:text-base leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {opportunity.description}
                  </CardDescription>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground text-sm md:text-base">{t('involved.opportunities.community.requirements')}</h4>
                    <div className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                        {opportunity.requirements}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Volunteer Application Form */}
      <section className="community-gradient text-white py-12 md:py-16 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full transform translate-x-24 -translate-y-24"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full transform -translate-x-32 translate-y-32"></div>
        
        <div className="max-w-4xl mx-auto container-padding relative z-10">
          <div className="text-center mb-10 md:mb-12">
            <Badge className="mb-4 px-6 py-2 gold-gradient text-white border-0 rounded-full text-sm font-semibold shadow-xl">
              {t('involved.form.badge')}
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
              {t('involved.form.title')}
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              {t('involved.form.subtitle')}
            </p>
          </div>
          
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-6 md:p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm md:text-base font-medium">{t('involved.form.name')} *</Label>
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
                    <Label htmlFor="email" className="text-sm md:text-base font-medium">{t('involved.form.email')} *</Label>
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
                    <Label htmlFor="phone" className="text-sm md:text-base font-medium">{t('involved.form.phone')} *</Label>
                    <div className="flex mt-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:border-primary">
                      <div className="relative">
                        <select
                          value={selectedCountryCode}
                          onChange={(e) => setSelectedCountryCode(e.target.value)}
                          className="px-2 h-10 border-0 rounded-l-lg bg-white text-xs focus:outline-none w-40"
                        >
                          {countryCodes.map((country) => (
                            <option key={country.code} value={country.code}>
                              {country.flag} {getCountryName(country.countryKey)} {country.code}
                            </option>
                          ))}
                        </select>
                      </div>
                    <Input
                      id="phone"
                        type="tel"
                        placeholder={t('involved.form.placeholder.phone')}
                        className={`flex-1 rounded-l-none border-0 focus:ring-0 focus:outline-none bg-white ${errors.phone ? 'border-red-500 focus:border-red-500' : ''}`}
                      value={formData.phone}
                        onChange={(e) => {
                          let value = e.target.value;
                          // Only allow digits
                          value = value.replace(/[^0-9]/g, '');
                          setFormData({ ...formData, phone: value });
                        }}
                        required
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="interest" className="text-sm md:text-base font-medium">{t('involved.form.interest')} *</Label>
                    <Input
                      id="interest"
                      placeholder={t('involved.form.placeholder.interest')}
                      className={`mt-2 ${errors.interest ? 'border-red-500 focus:border-red-500' : ''}`}
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      required
                    />
                    {errors.interest && (
                      <p className="text-red-500 text-sm mt-1">{errors.interest}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="availability" className="text-sm md:text-base font-medium">{t('involved.form.availability')} *</Label>
                  <Input
                    id="availability"
                    placeholder={t('involved.form.placeholder.availability')}
                    className={`mt-2 ${errors.availability ? 'border-red-500 focus:border-red-500' : ''}`}
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    required
                  />
                  {errors.availability && (
                    <p className="text-red-500 text-sm mt-1">{errors.availability}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm md:text-base font-medium">{t('involved.form.message')} *</Label>
                  <Textarea
                    id="message"
                    rows={4}
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
                  {isSubmitting ? 'Submitting...' : t('involved.form.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-12 md:py-16 container-padding max-w-6xl mx-auto relative">
        <div className="relative z-10">
          <div className="text-center mb-10 md:mb-14">
            <Badge className="mb-4 px-6 py-2 community-gradient text-white border-0 rounded-full text-sm font-semibold">
              {t('involved.partnerships.title')}
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t('involved.partnerships.subtitle')}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('involved.partnerships.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {partnerships.map((partnership, index) => (
              <Card key={partnership.title} className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-gradient-to-br from-card via-card to-muted/20 text-center">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/5 to-transparent rounded-full transform translate-x-4 -translate-y-4"></div>
                
                <CardHeader className="pb-3 relative z-10">
                  <div className="mx-auto p-4 md:p-5 community-gradient rounded-2xl w-fit mb-4 group-hover:scale-110 transition-all duration-500 shadow-lg">
                    <partnership.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {partnership.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-sm md:text-base leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300 mb-4">
                    {partnership.description}
                  </CardDescription>
                  
                  <div className="mt-4">
                    <h4 className="font-semibold text-sm mb-2 text-foreground">{t('involved.partnerships.current')}</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {partnership.examples.map((example, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10 md:mt-12 space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="community-gradient text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-6 py-3">
              <NavLink to="/contact" className="flex items-center justify-center">
                  {t('involved.partnerships.cta.propose')}
                <ArrowRight className="h-5 w-5 ml-2" />
              </NavLink>
            </Button>
              <Button asChild size="lg" variant="outline" className="btn-outline text-primary hover:text-white hover:bg-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-6 py-3">
                <a href="/partnership-deck.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  {t('involved.partnerships.cta.download')}
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </Button>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-card via-card to-muted/20">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold mb-3 text-foreground">{t('involved.partnerships.form.title')}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {t('involved.partnerships.form.description')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input 
                      placeholder={t('involved.partnerships.form.placeholder')} 
                      className="flex-1"
                    />
                    <Button size="sm" className="community-gradient text-white">
                      <Send className="h-4 w-4 mr-2" />
                      {t('involved.partnerships.form.submit')}
                    </Button>
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

export default GetInvolved;