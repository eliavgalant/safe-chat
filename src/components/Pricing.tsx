
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
  const features = ["ללא התחייבות - בטל בכל עת", "תמיכה טכנית 24/7 כלולה במחיר"];
  return <section id="pricing" ref={sectionRef} className="container-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="animate-on-scroll heading-lg text-black mb-4 rtl-text text-center">מחיר וחבילות</h2>
          <p className="animate-on-scroll rtl-text text-xl text-gray-600 text-center">
            תוכנית פשוטה וברורה:
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="animate-on-scroll relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-safechat-gold text-safechat-dark font-bold px-6 py-2 rounded-full z-10 text-center w-auto shadow-md">
              מחיר השקה מיוחד
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <div className="absolute -top-24 -right-24 w-40 h-40 bg-safechat-gold rounded-full opacity-20"></div>
              <div className="absolute -bottom-24 -left-24 w-40 h-40 bg-safechat-gold rounded-full opacity-20"></div>
              
              <div className="glass-card border-2 border-safechat-gold p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50">
                <div className="text-center mb-8 pt-4">
                  <h3 className="rtl-text text-2xl font-bold mb-6 text-center text-safechat-dark">חבילה חודשית</h3>
                  <div className="flex items-center justify-center rtl-text">
                    <span className="text-5xl font-bold text-safechat-dark">₪49</span>
                    <span className="text-gray-500 mr-2">/חודש</span>
                    <span className="text-gray-400 line-through mr-2">(במקום 150 ₪)</span>
                  </div>
                </div>
  
                <div className="space-y-4 mb-8">
                  {features.map((feature, index) => <div key={index} className="flex items-center rtl-text gap-3">
                      <div className="flex-shrink-0 bg-safechat-gold rounded-full p-1 shadow-sm">
                        <Check className="w-4 h-4 text-safechat-dark" />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </div>)}
                </div>
  
                <CTAButton className="w-full justify-center rtl-text text-lg shadow-lg hover:shadow-xl" target="contact">
                  התחילו עכשיו - רק 49 ₪ לחודש
                </CTAButton>
              </div>
            </div>
          </div>
          
          <p className="rtl-text text-center text-gray-600 mt-8 animate-on-scroll font-medium">
            עדיין יש לכם שאלות? <a href="#contact" className="text-safechat-gold hover:text-safechat-gold-dark font-bold hover:underline transition-colors">צרו קשר עם צוות התמיכה שלנו</a>
          </p>
        </div>
      </div>
    </section>;
};
export default Pricing;
