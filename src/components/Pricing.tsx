
import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import CTAButton from './CTAButton';

const Pricing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
  
  const features = ["תמיכה טכנית 24/7 כלולה במחיר", "זיהוי אוטומטי של תוכן פוגעני", "התראות בזמן אמת", "ממשק ניהול ידידותי"];
  
  return (
    <section id="pricing" ref={sectionRef} className="container-padding bg-gradient-to-b from-white to-gray-50 py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-safechat-gold/5 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-safechat-gold/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="animate-on-scroll heading-lg text-black mb-4 rtl-text text-center">
            <span className="relative inline-block">
              <span className="relative z-10">מחיר וחבילות</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-safechat-gold/20 -z-10 transform -rotate-1"></span>
            </span>
          </h2>
          <p className="animate-on-scroll rtl-text text-xl text-gray-600 text-center">
            תוכנית פשוטה וברורה:
          </p>
        </div>

        <div className="max-w-md mx-auto relative">
          {/* Price card */}
          <div className="animate-on-scroll relative mt-14">
            {/* Floating badge */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-safechat-gold to-safechat-gold-light text-safechat-dark font-bold px-8 py-3 rounded-full z-10 text-center shadow-lg text-lg animate-subtle-bounce">
              ✨ שבועיים התנסות חינם! ✨
            </div>
            
            <div className="overflow-hidden rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl">
              {/* Card glow effects */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-safechat-gold rounded-full opacity-10"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-safechat-gold rounded-full opacity-10"></div>
              
              <div className="glass-card border-2 border-safechat-gold/60 p-8 rounded-2xl bg-gradient-to-br from-white via-white to-gray-50">
                <div className="text-center mb-8 pt-5">
                  <h3 className="rtl-text text-2xl font-bold mb-6 text-center text-safechat-dark">חבילה חודשית</h3>
                  <div className="flex items-center justify-center rtl-text flex-wrap">
                    <span className="text-5xl font-extrabold text-safechat-dark">₪49</span>
                    <span className="text-gray-500 mr-2">/חודש</span>
                  </div>
                </div>

                <div className="bg-safechat-gold/20 border border-safechat-gold/40 rounded-lg p-4 mb-8 text-center rtl-text transform transition-all duration-300 hover:bg-safechat-gold/30">
                  <p className="font-bold text-safechat-dark text-lg">ללא התחייבות - בטל בכל עת</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center rtl-text gap-3 bg-white/80 p-3 rounded-lg transition-all duration-200 hover:bg-white shadow-sm hover:shadow">
                      <div className="flex-shrink-0 bg-gradient-to-r from-safechat-gold to-safechat-gold-light rounded-full p-1.5 shadow-sm">
                        <Check className="w-4 h-4 text-safechat-dark" />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <CTAButton 
                  className="w-full justify-center rtl-text text-lg shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-[1.02]" 
                  target="contact"
                >
                  לשבועיים נסיון חינם ללא התחייבות
                </CTAButton>
                
                <p className="rtl-text text-center text-safechat-dark font-medium mt-4 text-lg">
                  ואז רק 49 ש"ח לחודש
                </p>
              </div>
            </div>
          </div>
          
          <p className="rtl-text text-center text-gray-600 mt-8 animate-on-scroll text-base md:font-medium">
            עדיין יש לכם שאלות? <a href="#contact" className="text-safechat-gold hover:text-safechat-gold-dark font-bold hover:underline transition-colors">צרו קשר עם צוות התמיכה שלנו</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
