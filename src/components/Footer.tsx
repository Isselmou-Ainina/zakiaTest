import { Heart, Phone, Mail, MapPin } from 'lucide-react';
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
                className="h-12 md:h-14 w-auto"
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
            <div className="flex items-center text-sm md:text-base">
              <Heart className="h-4 w-4 md:h-5 md:w-5 mr-2 text-secondary opacity-80" />
              <span className="opacity-90">Making a difference since 2018</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 md:mb-6 text-base md:text-lg text-white">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
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
                  to="/about" 
                  className="hover:text-secondary transition-gentle opacity-90 hover:opacity-100 block py-1"
                >
                  About Us
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
                  <p className="text-xs md:text-sm opacity-75">West Africa</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 md:h-5 md:w-5 text-secondary opacity-80 flex-shrink-0" />
                <div className="opacity-90">
                  <p>+222 XX XX XX XX</p>
                  <p className="text-xs md:text-sm opacity-75">WhatsApp available</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 md:h-5 md:w-5 text-secondary opacity-80 flex-shrink-0" />
                <div className="opacity-90">
                  <p>info@zakiarelief.org</p>
                  <p className="text-xs md:text-sm opacity-75">24hr response</p>
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