import { Heart, Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="community-gradient text-white">
      <div className="max-w-6xl mx-auto container-padding section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {/* Logo and Mission */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/zakia_transparent_logo.png" 
                alt="Zakia Relief - Building Stronger Communities" 
                className="h-16 md:h-20 w-auto"
              />
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-white">Zakia Relief</h3>
                <p className="text-sm text-white/80">Building Communities</p>
              </div>
            </div>
            <p className="text-sm md:text-base mb-6 max-w-md opacity-90 leading-relaxed">
              Zakia Relief is dedicated to uplifting vulnerable communities in Mauritania through 
              sustainable programs focused on food security, clean water access, and environmental stewardship.
            </p>
            <div className="flex items-center text-sm md:text-base mb-6">
              <Heart className="h-4 w-4 md:h-5 md:w-5 mr-2 text-secondary opacity-80" />
              <span className="opacity-90">Making a difference since 2018</span>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="font-medium mb-3 text-white text-sm md:text-base">Follow Us</h4>
              <div className="flex items-center space-x-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=100083276394454" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 hover:text-secondary transition-all duration-300 opacity-90 hover:opacity-100"
                  title="Follow us on Facebook"
                >
                  <Facebook className="h-5 w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">Facebook</span>
                </a>
                <a 
                  href="https://instagram.com/zakia.relief" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 hover:text-secondary transition-all duration-300 opacity-90 hover:opacity-100"
                  title="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">Instagram</span>
                </a>
                <a 
                  href="https://wa.me/22243727240" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 hover:text-secondary transition-all duration-300 opacity-90 hover:opacity-100"
                  title="Contact us on WhatsApp"
                >
                  <MessageCircle className="h-5 w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 md:mb-6 text-base md:text-lg text-white">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li>
                <NavLink 
                  to="/about" 
                  className="hover:text-secondary transition-gentle opacity-90 hover:opacity-100 block py-1"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/our-work" 
                  className="hover:text-secondary transition-gentle opacity-90 hover:opacity-100 block py-1"
                >
                  Our Work
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/get-involved" 
                  className="hover:text-secondary transition-gentle opacity-90 hover:opacity-100 block py-1"
                >
                  Get Involved
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/donate" 
                  className="hover:text-secondary transition-gentle opacity-90 hover:opacity-100 block py-1"
                >
                  Donate
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 md:mb-6 text-base md:text-lg text-white">Contact Us</h3>
            <div className="space-y-3 md:space-y-4 text-sm md:text-base">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 mt-0.5 text-secondary opacity-80 flex-shrink-0" />
                <div className="opacity-90">
                  <p>Nouakchott, Mauritania</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-secondary opacity-80 flex-shrink-0" />
                <div className="opacity-90">
                  <a 
                    href="tel:+22243727240" 
                    className="text-white hover:text-secondary transition-colors cursor-pointer"
                  >
                    +222 43 72 72 40
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-secondary opacity-80 flex-shrink-0" />
                <div className="opacity-90">
                  <a 
                    href="mailto:info@zakiarelief.org" 
                    className="text-white hover:text-secondary transition-colors cursor-pointer"
                  >
                    info@zakiarelief.org
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 md:mt-12 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm md:text-base opacity-80 text-center md:text-left">
              &copy; 2024 Zakia Relief. All rights reserved.
            </p>
            <p className="text-sm opacity-75 text-center md:text-right flex items-center">
              Built with <Heart className="h-3 w-3 mx-1 text-secondary" /> for the community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;