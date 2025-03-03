
import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "SafeChat עזר לי לגלות שהבן שלי היה קורבן לבריונות בקבוצת הכיתה. הצלחתי להתערב בזמן לפני שהמצב הידרדר.",
    author: "מיטל כ.",
    role: "אמא לילד בן 12"
  },
  {
    quote: "הרגשתי בטוחה יותר לתת לילדה שלי טלפון חכם לאחר שהתקנתי את SafeChat. אני מקבלת התראות בזמן אמת וזה נותן לי שקט נפשי.",
    author: "רונית ל.",
    role: "אמא לילדה בת 10"
  },
  {
    quote: "המערכת זיהתה תוכן לא ראוי שנשלח לבן שלי בקבוצת וואטסאפ. יכולתי לדבר איתו על זה מיד ולחסוך אי נעימות בעתיד.",
    author: "יעקב מ.",
    role: "אבא לילד בן 13"
  },
  {
    quote: "החלטנו לרכוש את SafeChat לאחר שהילדים שלנו קיבלו את הטלפונים הראשונים שלהם. זה עוזר לנו לפקח על הפעילות שלהם מבלי לחדור לפרטיות שלהם יותר מדי.",
    author: "דנה ש.",
    role: "אמא לילדים בני 11 ו-13"
  },
  {
    quote: "השירות הלקוחות של SafeChat היה מעולה. הם עזרו לי להגדיר הכל בתוך דקות ספורות והמערכת עובדת בצורה מושלמת מאז.",
    author: "אילן ב.",
    role: "אבא לילד בן 12"
  },
  {
    quote: "אנחנו מרגישים הרבה יותר בטוחים עכשיו שילדינו גולשים ברשת עם SafeChat. המערכת זיהתה וחסמה מספר אינטראקציות בעייתיות.",
    author: "שירה כ.",
    role: "אמא לילדים בני 9 ו-12"
  }
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
          }
        });
      },
      { threshold: 0.1 }
    );

    const childElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    childElements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      childElements?.forEach((el) => {
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
            // Move the first 3 testimonials to the end
            sliderRef.current.classList.add('animate-fade-in');
            const firstThree = Array.from(sliderRef.current.children).slice(0, 3);
            firstThree.forEach(child => {
              sliderRef.current?.appendChild(child);
            });
          } else {
            // Move the last 3 testimonials to the beginning
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

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="container-padding relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-safechat-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-safechat-gold/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="animate-on-scroll heading-lg gold-gradient-text mb-4 shadow-text">המלצות</h2>
          <p className="animate-on-scroll rtl-text text-xl text-gray-600 shadow-text-light">
            מה הורים אחרים אומרים על השירות שלנו
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div ref={sliderRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="animate-on-scroll glass-card p-6 rounded-2xl relative h-full flex flex-col"
              >
                <div className="absolute top-4 right-4 text-safechat-gold opacity-30">
                  <Quote className="w-8 h-8" />
                </div>
                
                <div className="rtl-text relative z-10 flex-1 flex flex-col">
                  <p className="text-base lg:text-lg mb-4 font-medium italic flex-1">
                    {testimonial.quote}
                  </p>
                  
                  <div className="flex items-center justify-end mt-auto">
                    <div>
                      <p className="font-bold">{testimonial.author}</p>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={() => handleScroll('prev')}
              className="p-2 rounded-full bg-white shadow-md hover:bg-safechat-gold hover:text-white transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            
            <button 
              onClick={() => handleScroll('next')}
              className="p-2 rounded-full bg-white shadow-md hover:bg-safechat-gold hover:text-white transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
