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
import emailjs from '@emailjs/browser';

const GetInvolved = () => {
  const { toast } = useToast();
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

  // Country codes data
  const countryCodes = [
    { code: '+222', country: 'Mauritania', flag: '🇲🇷' },
    { code: '+1', country: 'United States', flag: '🇺🇸' },
    { code: '+33', country: 'France', flag: '🇫🇷' },
    { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
    { code: '+49', country: 'Germany', flag: '🇩🇪' },
    { code: '+34', country: 'Spain', flag: '🇪🇸' },
    { code: '+39', country: 'Italy', flag: '🇮🇹' },
    { code: '+31', country: 'Netherlands', flag: '🇳🇱' },
    { code: '+32', country: 'Belgium', flag: '🇧🇪' },
    { code: '+41', country: 'Switzerland', flag: '🇨🇭' },
    { code: '+46', country: 'Sweden', flag: '🇸🇪' },
    { code: '+47', country: 'Norway', flag: '🇳🇴' },
    { code: '+45', country: 'Denmark', flag: '🇩🇰' },
    { code: '+358', country: 'Finland', flag: '🇫🇮' },
    { code: '+351', country: 'Portugal', flag: '🇵🇹' },
    { code: '+30', country: 'Greece', flag: '🇬🇷' },
    { code: '+90', country: 'Turkey', flag: '🇹🇷' },
    { code: '+7', country: 'Russia', flag: '🇷🇺' },
    { code: '+86', country: 'China', flag: '🇨🇳' },
    { code: '+81', country: 'Japan', flag: '🇯🇵' },
    { code: '+82', country: 'South Korea', flag: '🇰🇷' },
    { code: '+91', country: 'India', flag: '🇮🇳' },
    { code: '+92', country: 'Pakistan', flag: '🇵🇰' },
    { code: '+880', country: 'Bangladesh', flag: '🇧🇩' },
    { code: '+94', country: 'Sri Lanka', flag: '🇱🇰' },
    { code: '+977', country: 'Nepal', flag: '🇳🇵' },
    { code: '+975', country: 'Bhutan', flag: '🇧🇹' },
    { code: '+960', country: 'Maldives', flag: '🇲🇻' },
    { code: '+20', country: 'Egypt', flag: '🇪🇬' },
    { code: '+212', country: 'Morocco', flag: '🇲🇦' },
    { code: '+213', country: 'Algeria', flag: '🇩🇿' },
    { code: '+216', country: 'Tunisia', flag: '🇹🇳' },
    { code: '+218', country: 'Libya', flag: '🇱🇾' },
    { code: '+220', country: 'Gambia', flag: '🇬🇲' },
    { code: '+221', country: 'Senegal', flag: '🇸🇳' },
    { code: '+223', country: 'Mali', flag: '🇲🇱' },
    { code: '+224', country: 'Guinea', flag: '🇬🇳' },
    { code: '+225', country: 'Ivory Coast', flag: '🇨🇮' },
    { code: '+226', country: 'Burkina Faso', flag: '🇧🇫' },
    { code: '+227', country: 'Niger', flag: '🇳🇪' },
    { code: '+228', country: 'Togo', flag: '🇹🇬' },
    { code: '+229', country: 'Benin', flag: '🇧🇯' },
    { code: '+230', country: 'Mauritius', flag: '🇲🇺' },
    { code: '+231', country: 'Liberia', flag: '🇱🇷' },
    { code: '+232', country: 'Sierra Leone', flag: '🇸🇱' },
    { code: '+233', country: 'Ghana', flag: '🇬🇭' },
    { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
    { code: '+235', country: 'Chad', flag: '🇹🇩' },
    { code: '+236', country: 'Central African Republic', flag: '🇨🇫' },
    { code: '+237', country: 'Cameroon', flag: '🇨🇲' },
    { code: '+238', country: 'Cape Verde', flag: '🇨🇻' },
    { code: '+239', country: 'São Tomé and Príncipe', flag: '🇸🇹' },
    { code: '+240', country: 'Equatorial Guinea', flag: '🇬🇶' },
    { code: '+241', country: 'Gabon', flag: '🇬🇦' },
    { code: '+242', country: 'Republic of the Congo', flag: '🇨🇬' },
    { code: '+243', country: 'Democratic Republic of the Congo', flag: '🇨🇩' },
    { code: '+244', country: 'Angola', flag: '🇦🇴' },
    { code: '+245', country: 'Guinea-Bissau', flag: '🇬🇼' },
    { code: '+246', country: 'British Indian Ocean Territory', flag: '🇮🇴' },
    { code: '+248', country: 'Seychelles', flag: '🇸🇨' },
    { code: '+249', country: 'Sudan', flag: '🇸🇩' },
    { code: '+250', country: 'Rwanda', flag: '🇷🇼' },
    { code: '+251', country: 'Ethiopia', flag: '🇪🇹' },
    { code: '+252', country: 'Somalia', flag: '🇸🇴' },
    { code: '+253', country: 'Djibouti', flag: '🇩🇯' },
    { code: '+254', country: 'Kenya', flag: '🇰🇪' },
    { code: '+255', country: 'Tanzania', flag: '🇹🇿' },
    { code: '+256', country: 'Uganda', flag: '🇺🇬' },
    { code: '+257', country: 'Burundi', flag: '🇧🇮' },
    { code: '+258', country: 'Mozambique', flag: '🇲🇿' },
    { code: '+260', country: 'Zambia', flag: '🇿🇲' },
    { code: '+261', country: 'Madagascar', flag: '🇲🇬' },
    { code: '+262', country: 'Réunion', flag: '🇷🇪' },
    { code: '+263', country: 'Zimbabwe', flag: '🇿🇼' },
    { code: '+264', country: 'Namibia', flag: '🇳🇦' },
    { code: '+265', country: 'Malawi', flag: '🇲🇼' },
    { code: '+266', country: 'Lesotho', flag: '🇱🇸' },
    { code: '+267', country: 'Botswana', flag: '🇧🇼' },
    { code: '+268', country: 'Swaziland', flag: '🇸🇿' },
    { code: '+269', country: 'Comoros', flag: '🇰🇲' },
    { code: '+290', country: 'Saint Helena', flag: '🇸🇭' },
    { code: '+291', country: 'Eritrea', flag: '🇪🇷' },
    { code: '+297', country: 'Aruba', flag: '🇦🇼' },
    { code: '+298', country: 'Faroe Islands', flag: '🇫🇴' },
    { code: '+299', country: 'Greenland', flag: '🇬🇱' },
    { code: '+350', country: 'Gibraltar', flag: '🇬🇮' },
    { code: '+351', country: 'Portugal', flag: '🇵🇹' },
    { code: '+352', country: 'Luxembourg', flag: '🇱🇺' },
    { code: '+353', country: 'Ireland', flag: '🇮🇪' },
    { code: '+354', country: 'Iceland', flag: '🇮🇸' },
    { code: '+355', country: 'Albania', flag: '🇦🇱' },
    { code: '+356', country: 'Malta', flag: '🇲🇹' },
    { code: '+357', country: 'Cyprus', flag: '🇨🇾' },
    { code: '+358', country: 'Finland', flag: '🇫🇮' },
    { code: '+359', country: 'Bulgaria', flag: '🇧🇬' },
    { code: '+370', country: 'Lithuania', flag: '🇱🇹' },
    { code: '+371', country: 'Latvia', flag: '🇱🇻' },
    { code: '+372', country: 'Estonia', flag: '🇪🇪' },
    { code: '+373', country: 'Moldova', flag: '🇲🇩' },
    { code: '+374', country: 'Armenia', flag: '🇦🇲' },
    { code: '+375', country: 'Belarus', flag: '🇧🇾' },
    { code: '+376', country: 'Andorra', flag: '🇦🇩' },
    { code: '+377', country: 'Monaco', flag: '🇲🇨' },
    { code: '+378', country: 'San Marino', flag: '🇸🇲' },
    { code: '+380', country: 'Ukraine', flag: '🇺🇦' },
    { code: '+381', country: 'Serbia', flag: '🇷🇸' },
    { code: '+382', country: 'Montenegro', flag: '🇲🇪' },
    { code: '+383', country: 'Kosovo', flag: '🇽🇰' },
    { code: '+385', country: 'Croatia', flag: '🇭🇷' },
    { code: '+386', country: 'Slovenia', flag: '🇸🇮' },
    { code: '+387', country: 'Bosnia and Herzegovina', flag: '🇧🇦' },
    { code: '+389', country: 'North Macedonia', flag: '🇲🇰' },
    { code: '+420', country: 'Czech Republic', flag: '🇨🇿' },
    { code: '+421', country: 'Slovakia', flag: '🇸🇰' },
    { code: '+423', country: 'Liechtenstein', flag: '🇱🇮' },
    { code: '+500', country: 'Falkland Islands', flag: '🇫🇰' },
    { code: '+501', country: 'Belize', flag: '🇧🇿' },
    { code: '+502', country: 'Guatemala', flag: '🇬🇹' },
    { code: '+503', country: 'El Salvador', flag: '🇸🇻' },
    { code: '+504', country: 'Honduras', flag: '🇭🇳' },
    { code: '+505', country: 'Nicaragua', flag: '🇳🇮' },
    { code: '+506', country: 'Costa Rica', flag: '🇨🇷' },
    { code: '+507', country: 'Panama', flag: '🇵🇦' },
    { code: '+508', country: 'Saint Pierre and Miquelon', flag: '🇵🇲' },
    { code: '+509', country: 'Haiti', flag: '🇭🇹' },
    { code: '+590', country: 'Guadeloupe', flag: '🇬🇵' },
    { code: '+591', country: 'Bolivia', flag: '🇧🇴' },
    { code: '+592', country: 'Guyana', flag: '🇬🇾' },
    { code: '+593', country: 'Ecuador', flag: '🇪🇨' },
    { code: '+594', country: 'French Guiana', flag: '🇬🇫' },
    { code: '+595', country: 'Paraguay', flag: '🇵🇾' },
    { code: '+596', country: 'Martinique', flag: '🇲🇶' },
    { code: '+597', country: 'Suriname', flag: '🇸🇷' },
    { code: '+598', country: 'Uruguay', flag: '🇺🇾' },
    { code: '+599', country: 'Netherlands Antilles', flag: '🇧🇶' },
    { code: '+670', country: 'East Timor', flag: '🇹🇱' },
    { code: '+672', country: 'Antarctica', flag: '🇦🇶' },
    { code: '+673', country: 'Brunei', flag: '🇧🇳' },
    { code: '+674', country: 'Nauru', flag: '🇳🇷' },
    { code: '+675', country: 'Papua New Guinea', flag: '🇵🇬' },
    { code: '+676', country: 'Tonga', flag: '🇹🇴' },
    { code: '+677', country: 'Solomon Islands', flag: '🇸🇧' },
    { code: '+678', country: 'Vanuatu', flag: '🇻🇺' },
    { code: '+679', country: 'Fiji', flag: '🇫🇯' },
    { code: '+680', country: 'Palau', flag: '🇵🇼' },
    { code: '+681', country: 'Wallis and Futuna', flag: '🇼🇫' },
    { code: '+682', country: 'Cook Islands', flag: '🇨🇰' },
    { code: '+683', country: 'Niue', flag: '🇳🇺' },
    { code: '+684', country: 'American Samoa', flag: '🇦🇸' },
    { code: '+685', country: 'Samoa', flag: '🇼🇸' },
    { code: '+686', country: 'Kiribati', flag: '🇰🇮' },
    { code: '+687', country: 'New Caledonia', flag: '🇳🇨' },
    { code: '+688', country: 'Tuvalu', flag: '🇹🇻' },
    { code: '+689', country: 'French Polynesia', flag: '🇵🇫' },
    { code: '+690', country: 'Tokelau', flag: '🇹🇰' },
    { code: '+691', country: 'Micronesia', flag: '🇫🇲' },
    { code: '+692', country: 'Marshall Islands', flag: '🇲🇭' },
    { code: '+850', country: 'North Korea', flag: '🇰🇵' },
    { code: '+852', country: 'Hong Kong', flag: '🇭🇰' },
    { code: '+853', country: 'Macau', flag: '🇲🇴' },
    { code: '+855', country: 'Cambodia', flag: '🇰🇭' },
    { code: '+856', country: 'Laos', flag: '🇱🇦' },
    { code: '+880', country: 'Bangladesh', flag: '🇧🇩' },
    { code: '+886', country: 'Taiwan', flag: '🇹🇼' },
    { code: '+960', country: 'Maldives', flag: '🇲🇻' },
    { code: '+961', country: 'Lebanon', flag: '🇱🇧' },
    { code: '+962', country: 'Jordan', flag: '🇯🇴' },
    { code: '+963', country: 'Syria', flag: '🇸🇾' },
    { code: '+964', country: 'Iraq', flag: '🇮🇶' },
    { code: '+965', country: 'Kuwait', flag: '🇰🇼' },
    { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
    { code: '+967', country: 'Yemen', flag: '🇾🇪' },
    { code: '+968', country: 'Oman', flag: '🇴🇲' },
    { code: '+970', country: 'Palestine', flag: '🇵🇸' },
    { code: '+971', country: 'United Arab Emirates', flag: '🇦🇪' },
    { code: '+972', country: 'Israel', flag: '🇮🇱' },
    { code: '+973', country: 'Bahrain', flag: '🇧🇭' },
    { code: '+974', country: 'Qatar', flag: '🇶🇦' },
    { code: '+975', country: 'Bhutan', flag: '🇧🇹' },
    { code: '+976', country: 'Mongolia', flag: '🇲🇳' },
    { code: '+977', country: 'Nepal', flag: '🇳🇵' },
    { code: '+992', country: 'Tajikistan', flag: '🇹🇯' },
    { code: '+993', country: 'Turkmenistan', flag: '🇹🇲' },
    { code: '+994', country: 'Azerbaijan', flag: '🇦🇿' },
    { code: '+995', country: 'Georgia', flag: '🇬🇪' },
    { code: '+996', country: 'Kyrgyzstan', flag: '🇰🇬' },
    { code: '+998', country: 'Uzbekistan', flag: '🇺🇿' }
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
      title: "Community Outreach",
      description: "Help us connect with families in need and build community relationships.",
      commitment: "4-8 hours/week",
      requirements: "Strong communication skills, empathy, local language proficiency",
      color: "from-primary/20 to-primary/5"
    },
    {
      icon: Handshake,
      title: "Food Distribution",
      description: "Assist with preparing and distributing meals to community members.",
      commitment: "Weekend shifts",
      requirements: "Physical ability to lift supplies, reliable transportation",
      color: "from-secondary/20 to-secondary/5"
    },
    {
      icon: Clock,
      title: "Administrative Support",
      description: "Help with organizing events, data entry, and program coordination.",
      commitment: "Flexible hours",
      requirements: "Basic computer skills, organizational abilities",
      color: "from-accent/20 to-accent/5"
    },
    {
      icon: Megaphone,
      title: "Awareness Campaigns",
      description: "Support our advocacy and education efforts in the community.",
      commitment: "Event-based",
      requirements: "Creative thinking, public speaking comfort",
      color: "from-primary/20 to-primary/5"
    }
  ];

  const partnerships = [
    {
      icon: Heart,
      title: "Local Businesses",
      description: "Partner with us through sponsorships, in-kind donations, or employee volunteer programs."
    },
    {
      icon: Calendar,
      title: "Community Organizations", 
      description: "Collaborate on joint initiatives and share resources to maximize community impact."
    },
    {
      icon: Users,
      title: "Educational Institutions",
      description: "Engage students in service-learning opportunities and awareness programs."
    }
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
              Join Our Mission
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Get <span className="text-secondary bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent drop-shadow-lg">Involved</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 max-w-4xl mx-auto opacity-95 leading-relaxed font-light">
              Join our volunteer community and help us create lasting change 
              in Mauritanian communities. Every helping hand makes a difference.
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
              Volunteer Roles
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Volunteer Opportunities
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose from diverse volunteer roles that match your skills, interests, and availability.
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
                    <h4 className="font-semibold mb-2 text-foreground text-sm md:text-base">Requirements:</h4>
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
              Apply Now
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
              Ready to Volunteer?
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Fill out the form below and we'll get in touch to discuss how you can contribute.
            </p>
          </div>
          
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-sm md:text-base font-medium">Phone Number *</Label>
                    <div className="flex mt-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:border-primary">
                      <div className="relative">
                        <select
                          value={selectedCountryCode}
                          onChange={(e) => setSelectedCountryCode(e.target.value)}
                          className="px-2 h-10 border-0 rounded-l-lg bg-white text-xs focus:outline-none w-40"
                        >
                          {countryCodes.map((country) => (
                            <option key={country.code} value={country.code}>
                              {country.flag} {country.country} {country.code}
                            </option>
                          ))}
                        </select>
                      </div>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="43727240"
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
                    <Label htmlFor="interest" className="text-sm md:text-base font-medium">Area of Interest *</Label>
                    <Input
                      id="interest"
                      placeholder="e.g., Food Distribution, Community Outreach"
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
                  <Label htmlFor="availability" className="text-sm md:text-base font-medium">Availability *</Label>
                  <Input
                    id="availability"
                    placeholder="e.g., Weekends, Weekday evenings"
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
                  <Label htmlFor="message" className="text-sm md:text-base font-medium">Tell us about yourself and why you'd like to volunteer *</Label>
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
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
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
              Partnerships
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Partnership Opportunities
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We welcome partnerships with organizations that share our commitment 
              to community development and sustainable impact.
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
                  <CardDescription className="text-sm md:text-base leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {partnership.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10 md:mt-12">
            <Button asChild size="lg" variant="outline" className="btn-outline text-primary hover:text-white hover:bg-primary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-6 py-3">
              <NavLink to="/contact" className="flex items-center justify-center">
                Discuss Partnership
                <ArrowRight className="h-5 w-5 ml-2" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;