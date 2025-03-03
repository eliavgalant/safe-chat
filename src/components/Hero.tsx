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
  return <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 z-0"></div>
      
      {/* Animated background circles */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-safechat-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-safechat-gold/10 rounded-full blur-3xl"></div>
      
      <div ref={heroRef} className="container mx-auto px-4 z-10 opacity-0 transition-opacity duration-1000 ease-out">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
          <div className="flex-1 space-y-6 text-center max-w-2xl mx-auto">
            <div className="flex justify-center">
              <div className="w-32 h-32 rounded-full p-3">
                <img alt="SafeChat Logo" className="w-full h-full object-contain animate-subtle-bounce" src="/lovable-uploads/b40aa161-67d2-4633-b913-fdac7ef3b172.png" />
              </div>
            </div>
            
            <h1 className="rtl-text heading-xl text-center">
              <span className="gold-text">SafeChat</span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-gradient shadow-text">
                שומרים על הילדים שלכם בווטסאפ
              </span>
            </h1>
            
            <p className="rtl-text text-lg md:text-xl text-gray-700 max-w-3xl text-center shadow-text-light">
              זיהוי אוטומטי של בריונות והתנהגות פוגענית בקבוצות הווטסאפ של ילדיכם - בזמן אמת
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <CTAButton size="lg" onClick={() => scrollToSection('pricing')}>
                התחילו להגן על ילדיכם - רק 49 ₪ לחודש
              </CTAButton>
            </div>
            
            <p className="rtl-text text-base text-amber-400 font-semibold text-center mt-2">
              מחיר השקה מיוחד במקום 150 ₪ <span className="text-gray-500">| ללא התחייבות</span>
            </p>

            <div className="mt-12 space-y-6 text-center pt-20 mb-12">
              <h2 className="rtl-text text-2xl md:text-3xl font-bold text-gradient shadow-text text-center">
                הילדים שלכם מוגנים?
              </h2>
              
              <p className="rtl-text text-xl font-semibold text-gray-800 shadow-text-light text-center">
                76% מההורים לא יודעים מה באמת קורה בקבוצות הווטסאפ של ילדיהם
              </p>
              
              <p className="rtl-text text-lg text-gray-700 shadow-text-light max-w-3xl mx-auto text-center">
                ילדיכם מעבירים שעות בקבוצות ווטסאפ מחוץ להשגחתכם. סקרים מראים ש-1 מכל 3 ילדים נחשף לבריונות ברשת, ורובם אינם מספרים להוריהם על כך.
              </p>
              
              <div className="bg-white/80 p-6 rounded-xl shadow-md text-right">
                <h3 className="rtl-text text-xl font-bold text-safechat-gold mb-4 text-right">הפתרון: SafeChat</h3>
                <ul className="rtl-text space-y-3 text-gray-700 text-right">
                  <li className="flex items-center justify-start gap-2 order-1">
                    <span>מנטר באופן אוטומטי את תוכן ההודעות בקבוצות</span>
                    <div className="bg-safechat-gold/20 p-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-safechat-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </li>
                  <li className="flex items-center justify-start gap-2">
                    <span>מזהה תכנים פוגעניים באמצעות בינה מלאכותית מתקדמת</span>
                    <div className="bg-safechat-gold/20 p-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-safechat-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </li>
                  <li className="flex items-center justify-start gap-2">
                    <span>שולח התראות להורים בזמן אמת כשמזוהה הודעה בעייתית</span>
                    <div className="bg-safechat-gold/20 p-1 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-safechat-gold">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;