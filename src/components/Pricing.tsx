
import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import CTAButton from './CTAButton';
import { useIsMobile } from '@/hooks/use-mobile';

const Pricing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
        }
      });
    }, {
      threshold: 0.1
    });
    
    const childElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    childElements?.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      childElements?.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  const features = [
    "תמיכה טכנית 24/7 כלולה במחיר", 
    "זיהוי אוטומטי של תוכן פוגעני", 
    "התראות בזמן אמת", 
    "ממשק ניהול ידידותי",
    "אנליטיקס ודוחות חודשיים",
    "הגנה מתקדמת בכל קבוצות הווטסאפ"
  ];
  
  return (
    <section id="pricing" ref={sectionRef} className="container-padding bg-gradient-to-b from-white to-gray-50 py-6 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-safechat-gold/5 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-safechat-gold/5 blur-3xl"></div>
      
      <div className="container mx-auto px-2 md:px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-4 md:mb-16">
          <h2 className="animate-on-scroll heading-lg text-black mb-1 md:mb-4 rtl-text text-center text-lg md:text-3xl lg:text-4xl">
            <span className="relative inline-block">
              <span className="relative z-10">מחיר וחבילות</span>
              <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-1 md:h-3 bg-safechat-gold/20 -z-10 transform -rotate-1"></span>
            </span>
          </h2>
          <p className="animate-on-scroll rtl-text text-xs md:text-xl text-gray-600 text-center">
            תוכנית פשוטה וברורה:
          </p>
        </div>

        <div className="max-w-[240px] sm:max-w-sm md:max-w-md mx-auto relative">
          {/* Price card */}
          <div className="animate-on-scroll relative mt-3 md:mt-14">
            {/* Removed the floating badge */}
            
            <div className="overflow-hidden rounded-lg md:rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
              {/* Card glow effects */}
              <div className="absolute -top-8 md:-top-24 -right-8 md:-right-24 w-16 md:w-48 h-16 md:h-48 bg-safechat-gold rounded-full opacity-10"></div>
              <div className="absolute -bottom-8 md:-bottom-24 -left-8 md:-left-24 w-16 md:w-48 h-16 md:h-48 bg-safechat-gold rounded-full opacity-10"></div>
              
              <div className="glass-card border border-safechat-gold/40 md:border-2 md:border-safechat-gold/60 p-2 md:p-8 rounded-lg md:rounded-2xl bg-gradient-to-br from-white via-white to-gray-50">
                <div className="text-center mb-2 md:mb-8 pt-1 md:pt-5">
                  <h3 className="rtl-text text-base md:text-2xl font-bold mb-1 md:mb-6 text-center text-safechat-dark">חבילה חודשית</h3>
                  <div className="flex items-center justify-center rtl-text flex-wrap">
                    <span className="text-2xl md:text-5xl font-extrabold text-safechat-dark">49<span className="text-xl md:text-4xl">₪</span></span>
                    <span className="text-gray-400 mr-1 text-xs md:text-base">/חודש</span>
                  </div>
                </div>

                <div className="rounded-lg p-1 md:p-4 mb-2 md:mb-8 text-center rtl-text transform transition-all duration-300">
                  <p className="font-bold text-safechat-dark text-xs md:text-lg">ללא התחייבות - בטל בכל עת</p>
                </div>
                
                <div className="space-y-1 md:space-y-4 mb-2 md:mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center rtl-text gap-1 md:gap-3 bg-white/80 p-1 md:p-3 rounded-lg transition-all duration-200 hover:bg-white shadow-sm hover:shadow">
                      <div className="flex-shrink-0 bg-gradient-to-r from-safechat-gold to-safechat-gold-light rounded-full p-0.5 md:p-1.5 shadow-sm">
                        <Check className="w-2 h-2 md:w-4 md:h-4 text-safechat-dark" />
                      </div>
                      <span className="text-[10px] md:text-base font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <CTAButton 
                  className="w-full justify-center rtl-text text-xs md:text-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-[1.02]" 
                  target="contact"
                >
                  לשבועיים נסיון חינם ללא התחייבות
                </CTAButton>
                
                {/* Removed the pricing text "ואז רק 49₪ לחודש" */}
              </div>
            </div>
          </div>
          
          <p className="rtl-text text-center text-gray-600 mt-2 md:mt-8 animate-on-scroll text-[10px] md:text-base md:font-medium">
            עדיין יש לכם שאלות? <a href="#contact" className="text-safechat-gold hover:text-safechat-gold-dark font-bold hover:underline transition-colors">צרו קשר עם צוות התמיכה שלנו</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
