import { useEffect, useRef } from 'react';
import CTAButton from './CTAButton';
import { MessageCircle } from 'lucide-react';
const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100');
      }
    }, {
      threshold: 0.1
    });
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 z-0"></div>
      
      {/* Animated background circles */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-safechat-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-safechat-gold/10 rounded-full blur-3xl"></div>
      
      <div ref={heroRef} className="container mx-auto px-4 z-10 opacity-0 transition-opacity duration-1000 ease-out">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          <div className="flex-1 space-y-6 text-center lg:text-right max-w-2xl mx-auto lg:mx-0">
            <div className="flex justify-center lg:justify-end">
              <div className="w-32 h-32 rounded-full p-3">
                <img alt="SafeChat Logo" className="w-full h-full object-contain animate-subtle-bounce" src="/lovable-uploads/b40aa161-67d2-4633-b913-fdac7ef3b172.png" />
              </div>
            </div>
            
            <h1 className="rtl-text heading-xl text-center">
              <span className="gold-gradient-text drop-shadow-md\n">SafeChat</span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-gradient shadow-text">
                שומרים על הילדים שלכם ב-WhatsApp
              </span>
            </h1>
            
            <p className="rtl-text text-lg md:text-xl text-gray-700 max-w-3xl text-center shadow-text-light">
              הגנו על ילדיכם מפני בריונות והתנהגות פוגענית בקבוצות וואטסאפ באמצעות מערכת זיהוי אוטומטית המבוססת על בינה מלאכותית
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end pt-4">
              <CTAButton size="lg" onClick={() => scrollToSection('pricing')}>
                התחל עכשיו
              </CTAButton>
              
              <button onClick={() => scrollToSection('how-it-works')} className="flex items-center justify-center gap-2 text-safechat-dark-light hover:text-safechat-gold transition-colors font-medium py-3 shadow-text-light">
                <span className="rtl-text">איך זה עובד</span>
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
            
            <div className="rtl-text backdrop-blur-sm p-4 rounded-lg border border-gray-100 text-gray-200 inline-block drop-shadow-xl bg-slate-950">
              <span className="text-base font-semibold text-zinc-950">מחיר השקה מיוחד:</span> 49 ₪ לחודש, ללא התחייבות
            </div>
          </div>
          
          <div className="flex-1 max-w-lg">
            <div className="relative">
              <div className="absolute inset-0 bg-safechat-gold rounded-2xl rotate-3 transform-gpu"></div>
              <div className="glass-card rounded-2xl shadow-xl overflow-hidden relative hidden">
                <img src="/lovable-uploads/55f69d75-54ee-404e-91ee-8f6bfb533fc2.png" alt="SafeChat Logo" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;