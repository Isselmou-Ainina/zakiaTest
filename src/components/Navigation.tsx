import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, language } = useLanguage();

  const navItems = [
    { path: '/about', label: t('nav.about') },
    { path: '/our-work', label: t('nav.ourWork') },
    { path: '/impact', label: t('nav.impact') },
    { path: '/get-involved', label: t('nav.getInvolved') },
    { path: '/contact', label: t('nav.contact') }
  ];

  const closeMenu = () => setIsOpen(false);

  const handleLogoClick = (e) => {
    closeMenu();
    // If already on homepage, scroll to top smoothly
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // If on other pages, navigation will happen normally via NavLink
  };

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95" role="navigation" aria-label="Main navigation">
      <div className="max-w-6xl mx-auto container-padding" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <NavLink 
            to="/" 
            className="flex items-center space-x-3 transition-gentle hover:opacity-80 focus:outline-2 focus:outline-primary rounded-md p-1" 
            onClick={handleLogoClick}
          >
            <img 
              src="/zakia_transparent_logo.webp" 
              alt="Zakia Relief - Building Stronger Communities" 
              className="h-10 md:h-14 w-auto"
            />
            <div className="hidden md:block">
              <h1 className="text-base md:text-lg font-semibold text-foreground">Zakia Relief</h1>
              <p className="text-xs text-muted-foreground">{t('nav.tagline')}</p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `transition-gentle hover:text-primary text-sm font-medium touch-target flex items-center justify-center px-3 py-2 rounded-md ${
                    isActive ? 'text-primary font-semibold' : 'text-foreground'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="ml-2">
              <Button asChild className="community-gradient text-white hover:opacity-90 touch-target">
              <NavLink to="/donate" className="flex items-center">
                <Heart className="h-4 w-4 mr-2" />
                {t('nav.donate')}
              </NavLink>
            </Button>
            </div>
            <div className="ml-2">
              <LanguageSelector />
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden touch-target p-2"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div 
          id="mobile-menu"
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'max-h-screen opacity-100 pb-6' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="pt-4 pb-3 space-y-1 border-t border-border mt-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-base font-medium transition-gentle touch-target ${
                    isActive
                      ? 'text-primary bg-primary/10 border-l-4 border-primary'
                      : 'text-foreground hover:text-primary hover:bg-muted'
                  }`
                }
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="pt-4 space-y-3">
              <Button asChild className="community-gradient text-white w-full touch-target">
                <NavLink to="/donate" onClick={closeMenu} className="flex items-center justify-center">
                  <Heart className="h-4 w-4 mr-2" />
                  {t('nav.donate')}
                </NavLink>
              </Button>
              <div className="px-4 flex justify-center">
                <LanguageSelector />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;