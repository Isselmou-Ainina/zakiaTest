import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/our-work', label: 'Our Work' },
    { path: '/about', label: 'About Us' },
    { path: '/get-involved', label: 'Get Involved' },
    { path: '/donate', label: 'Donate' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-card shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/120a1810-4f10-43f7-bca8-c4ce25963e03.png" 
              alt="Zakia Relief Logo" 
              className="h-12 w-auto"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `transition-smooth hover:text-primary ${
                    isActive ? 'text-primary font-medium' : 'text-foreground'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button asChild variant="default" className="hero-gradient">
              <NavLink to="/donate">Donate Now</NavLink>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium transition-smooth ${
                      isActive
                        ? 'text-primary bg-muted'
                        : 'text-foreground hover:text-primary hover:bg-muted'
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="px-3 py-2">
                <Button asChild variant="default" className="hero-gradient w-full">
                  <NavLink to="/donate" onClick={() => setIsOpen(false)}>
                    Donate Now
                  </NavLink>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;