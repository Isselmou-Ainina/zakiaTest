import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Heart } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/our-work', label: 'Our Work' },
    { path: '/get-involved', label: 'Get Involved' },
    { path: '/contact', label: 'Contact' }
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
      <div className="max-w-6xl mx-auto container-padding">
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
              className="h-12 md:h-16 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-semibold text-foreground">Zakia Relief</h1>
              <p className="text-xs text-muted-foreground">Building Communities</p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `transition-gentle hover:text-primary text-base font-medium touch-target flex items-center justify-center px-3 py-2 rounded-md ${
                    isActive ? 'text-primary font-semibold' : 'text-foreground'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button asChild className="community-gradient text-white hover:opacity-90 touch-target ml-4">
              <NavLink to="/donate" className="flex items-center">
                <Heart className="h-4 w-4 mr-2" />
                Donate
              </NavLink>
            </Button>
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
            <div className="pt-4">
              <Button asChild className="community-gradient text-white w-full touch-target">
                <NavLink to="/donate" onClick={closeMenu} className="flex items-center justify-center">
                  <Heart className="h-4 w-4 mr-2" />
                  Donate Now
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;