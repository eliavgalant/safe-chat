import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const testimonials = [{
  quote: "SafeChat עזר לי לגלות שהבן שלי היה קורבן לבריונות בקבוצת הכיתה. הצלחתי להתערב בזמן לפני שהמצב הידרדר.",
  author: "מיטל כ.",
  role: "אמא לילד בן 12"
}, {
  quote: "הרגשתי בטוחה יותר לתת לילדה שלי טלפון חכם לאחר שהתקנתי את SafeChat. אני מקבלת התראות בזמן אמת וזה נותן לי שקט נפשי.",
  author: "רונית ל.",
  role: "אמא לילדה בת 10"
}, {
  quote: "המערכת זיהתה תוכן לא ראוי שנשלח לבן שלי בקבוצת וואטסאפ. יכולתי לדבר איתו על זה מיד ולחסוך אי נעימות בעתיד.",
  author: "יעקב מ.",
  role: "אבא לילד בן 13"
}, {
  quote: "החלטנו לרכוש את SafeChat לאחר שהילדים שלנו קיבלו את הטלפונים הראשונים שלהם. זה עוזר לנו לפקח על הפעילות שלהם מבלי לחדור לפרטיות שלהם יותר מדי.",
  author: "דנה ש.",
  role: "אמא לילדים בני 11 ו-13"
}, {
  quote: "השירות הלקוחות של SafeChat היה מעולה. הם עזרו לי להגדיר הכל בתוך דקות ספורות והמערכת עובדת בצורה מושלמת מאז.",
  author: "אילן ב.",
  role: "אבא לילד בן 12"
}, {
  quote: "אנחנו מרגישים הרבה יותר בטוחים עכשיו שילדינו גולשים ברשת עם SafeChat. המערכת זיהתה וחסמה מספר אינטראקציות בעייתיות.",
  author: "שירה כ.",
  role: "אמא לילדים בני 9 ו-12"
}];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
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

  const handleScroll = (direction: 'next' | 'prev') => {
    if (sliderRef.current) {
      sliderRef.current.classList.remove('animate-fade-in');
      setTimeout(() => {
        if (sliderRef.current) {
          if (direction === 'next') {
            sliderRef.current.classList.add('animate-fade-in');
            const firstThree = Array.from(sliderRef.current.children).slice(0, 3);
            firstThree.forEach(child => {
              sliderRef.current?.appendChild(child);
            });
          } else {
            sliderRef.current.classList.add('animate-fade-in');
            const lastThree = Array.from(sliderRef.current.children).slice(-3);
            lastThree.reverse().forEach(child => {
              sliderRef.current?.prepend(child);
            });
          }
        }
      }, 300);
    }
  };

  return <section id="testimonials" ref={sectionRef} className="container-padding relative overflow-hidden py-10 md:py-24">
      <div className="absolute top-0 left-0 w-40 md:w-64 h-40 md:h-64 bg-safechat-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-40 md:w-80 h-40 md:h-80 bg-safechat-gold/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto relative z-10 px-3 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="animate-on-scroll heading-lg text-black mb-2 md:mb-4 shadow-text text-2xl md:text-3xl lg:text-4xl">המלצות</h2>
          <p className="animate-on-scroll rtl-text text-base md:text-xl text-gray-600 shadow-text-light text-center">מה ההורים אומרים על השירות שלנו?</p>
        </div>

        <div className="max-w-full md:max-w-6xl mx-auto">
          <div ref={sliderRef} className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 animate-fade-in">
            {testimonials.map((testimonial, index) => <div key={index} className="animate-on-scroll glass-card p-4 md:p-6 rounded-xl md:rounded-2xl relative h-full flex flex-col">
                <div className="absolute top-2 md:top-4 right-2 md:right-4 text-safechat-gold opacity-30">
                  <Quote className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                
                <div className="rtl-text relative z-10 flex-1 flex flex-col">
                  <p className="text-sm md:text-base lg:text-lg mb-3 md:mb-4 font-medium italic flex-1">
                    {testimonial.quote}
                  </p>
                  
                  <div className="flex items-center justify-end mt-auto">
                    <div>
                      <p className="font-bold text-sm md:text-base">{testimonial.author}</p>
                      <p className="text-gray-500 text-xs md:text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
          
          <div className="flex justify-center mt-4 md:mt-8 gap-3 md:gap-4">
            <button onClick={() => handleScroll('prev')} className="p-1.5 md:p-2 rounded-full bg-white shadow-md hover:bg-safechat-gold hover:text-white transition-colors" aria-label="Previous testimonials">
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            
            <button onClick={() => handleScroll('next')} className="p-1.5 md:p-2 rounded-full bg-white shadow-md hover:bg-safechat-gold hover:text-white transition-colors" aria-label="Next testimonials">
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>;
};

export default Testimonials;
