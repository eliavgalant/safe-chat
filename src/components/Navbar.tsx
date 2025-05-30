
import { useEffect, useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-safechat-gold rounded-full flex items-center justify-center">
            <Shield className="w-5 h-5 text-safechat-dark" />
          </div>
          <span className="font-bold text-xl">SafeChat</span>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="text-sm font-medium hover:text-safechat-gold transition-colors"
          >
            איך זה עובד
          </button>
          <button
            onClick={() => scrollToSection('benefits')}
            className="text-sm font-medium hover:text-safechat-gold transition-colors"
          >
            יתרונות
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="text-sm font-medium hover:text-safechat-gold transition-colors"
          >
            מחירים
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className="text-sm font-medium hover:text-safechat-gold transition-colors"
          >
            המלצות
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="text-sm font-medium hover:text-safechat-gold transition-colors"
          >
            שאלות נפוצות
          </button>
        </nav>

        <div className="hidden md:flex flex-col items-end">
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-safechat-gold hover:bg-safechat-gold-dark text-safechat-dark font-medium"
          >
            לשבועיים נסיון חינם ללא התחייבות
          </Button>
          <span className="text-xs font-bold text-safechat-gold animate-pulse mt-1">
            
          </span>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-safechat-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full py-4">
          <div className="flex flex-col space-y-3 px-4">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-sm font-medium hover:text-safechat-gold transition-colors py-2 rtl-text"
            >
              איך זה עובד
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-sm font-medium hover:text-safechat-gold transition-colors py-2 rtl-text"
            >
              יתרונות
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-sm font-medium hover:text-safechat-gold transition-colors py-2 rtl-text"
            >
              מחירים
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-sm font-medium hover:text-safechat-gold transition-colors py-2 rtl-text"
            >
              המלצות
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-sm font-medium hover:text-safechat-gold transition-colors py-2 rtl-text"
            >
              שאלות נפוצות
            </button>
            <div className="bg-safechat-gold/20 border border-safechat-gold rounded-lg p-2 mb-2 text-center rtl-text animate-pulse">
              <p className="font-bold text-safechat-dark text-sm">
                ✨ שבועיים התנסות חינם! | ללא התחייבות ✨
              </p>
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-safechat-gold hover:bg-safechat-gold-dark text-safechat-dark font-medium w-full rtl-text"
            >
              לשבועיים נסיון חינם ללא התחייבות
            </Button>
            <span className="text-xs font-bold text-center text-safechat-dark">
              ואז רק 49 ש"ח לחודש
            </span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
