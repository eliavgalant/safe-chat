
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
  
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 z-0"></div>
      
      {/* Background decorations */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-safechat-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-safechat-gold/10 rounded-full blur-3xl"></div>
      
      {/* Main content container with proper width constraints */}
      <div 
        ref={heroRef} 
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 z-10 opacity-0 transition-opacity duration-1000 ease-out"
      >
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-2xl mx-auto space-y-6 text-center">
            <div className="flex justify-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full p-3">
                <img 
                  alt="SafeChat Logo" 
                  className="w-full h-full object-contain animate-subtle-bounce" 
                  src="/lovable-uploads/b40aa161-67d2-4633-b913-fdac7ef3b172.png" 
                />
              </div>
            </div>
            
            <h1 className="rtl-text heading-xl text-center">
              <span className="gold-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl">SafeChat</span>
              <br />
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gradient shadow-text">
                שומרים על הילדים שלכם בווטסאפ
              </span>
            </h1>
            
            <p className="rtl-text text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto text-center shadow-text-light">
              זיהוי אוטומטי של בריונות והתנהגות פוגענית בקבוצות הווטסאפ של ילדיכם - בזמן אמת
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <CTAButton size="lg" target="contact">
                לשבועיים נסיון חינם ללא התחייבות
              </CTAButton>
            </div>
            
            <div className="mx-auto">
              <p className="rtl-text text-base sm:text-lg font-bold text-gray-400 text-center">
                ואז רק 49₪ לחודש
              </p>
            </div>

            <div className="mt-12 space-y-6 text-center pt-20 mb-12">
              <h2 className="rtl-text text-xl sm:text-2xl md:text-3xl font-bold text-gradient shadow-text text-center">
                הילדים שלכם מוגנים?
              </h2>
              
              <p className="rtl-text text-lg sm:text-xl font-semibold text-gray-800 shadow-text-light text-center">
                76% מההורים לא יודעים מה באמת קורה בקבוצות הווטסאפ של ילדיהם
              </p>
              
              <p className="rtl-text text-base sm:text-lg text-gray-700 shadow-text-light max-w-3xl mx-auto text-center">
                ילדיכם מעבירים שעות בקבוצות ווטסאפ מחוץ להשגחתכם.<br />
                סקרים מראים ש-1 מכל 3 ילדים נחשף לבריונות ברשת, ורובם אינם מספרים להוריהם על כך.
              </p>
              
              <div className="bg-gradient-to-b from-white to-gray-50 p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-3xl mx-auto border border-gray-100">
                <h3 className="rtl-text text-lg sm:text-xl font-bold mb-6 text-safechat-dark text-center bg-safechat-gold/10 py-2 rounded-lg">הפתרון: SafeChat</h3>
                <ul className="rtl-text space-y-4 text-gray-700 flex flex-col items-center">
                  <li className="flex items-center gap-3 w-full max-w-md">
                    <div className="bg-safechat-gold/20 p-1.5 rounded-full flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-safechat-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium">מנטר באופן אוטומטי את תוכן ההודעות בקבוצות</span>
                  </li>
                  <li className="flex items-center gap-3 w-full max-w-md">
                    <div className="bg-safechat-gold/20 p-1.5 rounded-full flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-safechat-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium">מזהה תכנים פוגעניים באמצעות בינה מלאכותית מתקדמת</span>
                  </li>
                  <li className="flex items-center gap-3 w-full max-w-md">
                    <div className="bg-safechat-gold/20 p-1.5 rounded-full flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-safechat-gold">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium">שולח התראות להורים בזמן אמת כשמזוהה הודעה בעייתית</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
