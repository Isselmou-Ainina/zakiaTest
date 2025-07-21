import { Heart, Phone, Mail, MapPin } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/120a1810-4f10-43f7-bca8-c4ce25963e03.png" 
                alt="Zakia Relief Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm mb-4 max-w-md">
              Zakia Relief is dedicated to uplifting vulnerable communities in Mauritania through 
              sustainable programs focused on food security, clean water access, and environmental stewardship.
            </p>
            <div className="flex items-center text-sm">
              <Heart className="h-4 w-4 mr-2 text-primary" />
              <span>Making a difference since 2018</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/our-work" className="hover:text-primary transition-smooth">Our Work</NavLink></li>
              <li><NavLink to="/about" className="hover:text-primary transition-smooth">About Us</NavLink></li>
              <li><NavLink to="/get-involved" className="hover:text-primary transition-smooth">Get Involved</NavLink></li>
              <li><NavLink to="/donate" className="hover:text-primary transition-smooth">Donate</NavLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                <span>Nouakchott, Mauritania</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <span>+222 XX XX XX XX</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <span>info@zakiarelief.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 Zakia Relief. All rights reserved. | Built with ❤️ for the community</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;