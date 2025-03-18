
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
  const features = ["שבועיים התנסות חינם", "ללא התחייבות - בטל בכל עת", "תמיכה טכנית 24/7 כלולה במחיר"];
  return <section id="pricing" ref={sectionRef} className="container-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="animate-on-scroll heading-lg text-black mb-3 md:mb-4 rtl-text text-center">מחיר וחבילות</h2>
          <p className="animate-on-scroll rtl-text text-lg md:text-xl text-gray-600 text-center">
            תוכנית פשוטה וברורה:
          </p>
        </div>

        <div className="max-w-sm md:max-w-lg mx-auto">
          <div className="animate-on-scroll relative">
            <div className="absolute -top-4 md:-top-5 left-1/2 transform -translate-x-1/2 bg-safechat-gold text-safechat-dark font-bold px-4 md:px-6 py-1 md:py-2 rounded-full z-10 text-center w-auto shadow-md text-sm md:text-base">
              שבועיים התנסות חינם
            </div>
            <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-xl">
              <div className="absolute -top-24 -right-24 w-40 h-40 bg-safechat-gold rounded-full opacity-20"></div>
              <div className="absolute -bottom-24 -left-24 w-40 h-40 bg-safechat-gold rounded-full opacity-20"></div>
              
              <div className="glass-card border-2 border-safechat-gold p-5 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-white to-gray-50">
                <div className="text-center mb-6 md:mb-8 pt-3 md:pt-4">
                  <h3 className="rtl-text text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-safechat-dark">חבילה חודשית</h3>
                  <div className="flex items-center justify-center rtl-text flex-wrap">
                    <span className="text-4xl md:text-5xl font-bold text-safechat-dark">₪49</span>
                    <span className="text-gray-500 mr-2">/חודש</span>
                  </div>
                </div>
  
                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {features.map((feature, index) => <div key={index} className="flex items-center rtl-text gap-2 md:gap-3">
                      <div className="flex-shrink-0 bg-safechat-gold rounded-full p-1 shadow-sm">
                        <Check className="w-3 h-3 md:w-4 md:h-4 text-safechat-dark" />
                      </div>
                      <span className="font-medium text-sm md:text-base">{feature}</span>
                    </div>)}
                </div>
  
                <CTAButton className="w-full justify-center rtl-text text-base md:text-lg shadow-lg hover:shadow-xl" target="contact">
                  התחילו עכשיו - שבועיים חינם
                </CTAButton>
              </div>
            </div>
          </div>
          
          <p className="rtl-text text-center text-gray-600 mt-6 md:mt-8 animate-on-scroll text-sm md:font-medium md:text-base">
            עדיין יש לכם שאלות? <a href="#contact" className="text-safechat-gold hover:text-safechat-gold-dark font-bold hover:underline transition-colors">צרו קשר עם צוות התמיכה שלנו</a>
          </p>
        </div>
      </div>
    </section>;
};
export default Pricing;
