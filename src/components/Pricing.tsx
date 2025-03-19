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
    <section id="pricing" ref={sectionRef} className="container-padding bg-gradient-to-b from-white to-gray-50 py-8 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-safechat-gold/5 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-safechat-gold/5 blur-3xl"></div>
      
      <div className="container mx-auto px-2 md:px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-16">
          <h2 className="animate-on-scroll heading-lg text-black mb-2 md:mb-4 rtl-text text-center text-xl md:text-3xl lg:text-4xl">
            <span className="relative inline-block">
              <span className="relative z-10">מחיר וחבילות</span>
              <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-1 md:h-3 bg-safechat-gold/20 -z-10 transform -rotate-1"></span>
            </span>
          </h2>
          <p className="animate-on-scroll rtl-text text-sm md:text-xl text-gray-600 text-center">
            תוכנית פשוטה וברורה:
          </p>
        </div>

        <div className="max-w-[280px] sm:max-w-sm md:max-w-sm mx-auto relative">
          {/* Price card */}
          <div className="animate-on-scroll relative mt-6 md:mt-10">
            {/* Removed the floating badge */}
            
            <div className="overflow-hidden rounded-xl md:rounded-xl shadow-lg transform transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
              {/* Card glow effects */}
              <div className="absolute -top-12 md:-top-16 -right-12 md:-right-16 w-24 md:w-32 h-24 md:h-32 bg-safechat-gold rounded-full opacity-10"></div>
              <div className="absolute -bottom-12 md:-bottom-16 -left-12 md:-left-16 w-24 md:w-32 h-24 md:h-32 bg-safechat-gold rounded-full opacity-10"></div>
              
              <div className="glass-card border border-safechat-gold/40 md:border-2 md:border-safechat-gold/60 p-3 md:p-6 rounded-lg md:rounded-xl bg-gradient-to-br from-white via-white to-gray-50">
                <div className="text-center mb-4 md:mb-6 pt-2 md:pt-3">
                  <h3 className="rtl-text text-lg md:text-xl font-bold mb-3 md:mb-4 text-center text-safechat-dark">חבילה חודשית</h3>
                  <div className="flex items-center justify-center rtl-text flex-wrap">
                    <span className="text-3xl md:text-4xl font-extrabold text-safechat-dark">49<span className="text-2xl md:text-3xl">₪</span></span>
                    <span className="text-gray-400 mr-2 text-sm md:text-base">/חודש</span>
                  </div>
                </div>

                <div className="rounded-lg p-2 md:p-3 mb-4 md:mb-6 text-center rtl-text transform transition-all duration-300">
                  <p className="font-bold text-safechat-dark text-sm md:text-base">ללא התחייבות - בטל בכל עת</p>
                </div>
                
                <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center rtl-text gap-1.5 md:gap-2 bg-white/80 p-1.5 md:p-2 rounded-lg transition-all duration-200 hover:bg-white shadow-sm hover:shadow">
                      <div className="flex-shrink-0 bg-gradient-to-r from-safechat-gold to-safechat-gold-light rounded-full p-0.5 md:p-1 shadow-sm">
                        <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-safechat-dark" />
                      </div>
                      <span className="text-xs md:text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <CTAButton 
                  className="w-full justify-center rtl-text text-sm md:text-base shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-[1.02]" 
                  target="contact"
                >
                  לשבועיים נסיון חינם ללא התחייבות
                </CTAButton>
              </div>
            </div>
          </div>
          
          <p className="rtl-text text-center text-gray-600 mt-4 md:mt-6 animate-on-scroll text-xs md:text-sm md:font-medium">
            עדיין יש לכם שאלות? <a href="#contact" className="text-safechat-gold hover:text-safechat-gold-dark font-bold hover:underline transition-colors">צרו קשר עם צוות התמיכה שלנו</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
