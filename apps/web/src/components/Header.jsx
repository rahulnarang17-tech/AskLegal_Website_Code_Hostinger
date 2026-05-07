import React, { useState, useEffect } from 'react';
import { Menu, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet.jsx';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Founder', href: '#founder' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg py-3' : 'bg-primary py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
        <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center gap-2 text-white group">
          <Scale className="h-8 w-8 text-secondary transition-transform group-hover:scale-110" />
          <span className="text-2xl font-bold tracking-tight">ASK Legal</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-white/90 hover:text-secondary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:scale-105 transition-all"
            onClick={(e) => scrollToSection(e, '#contact')}
          >
            Book Consultation
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary border-primary-foreground/10 text-white">
              <SheetTitle className="text-white text-left mb-8 flex items-center gap-2">
                <Scale className="h-6 w-6 text-secondary" />
                ASK Legal
              </SheetTitle>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      scrollToSection(e, link.href);
                      // Close sheet logic would go here in a real app, 
                      // but Radix UI handles it if we use SheetClose
                    }}
                    className="text-lg font-medium text-white/90 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <Button 
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 mt-4 w-full"
                  onClick={(e) => scrollToSection(e, '#contact')}
                >
                  Book Consultation
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;