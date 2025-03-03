
import { useEffect, useRef, useState } from 'react';
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
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  
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

  const nextSlide = () => {
    if (slideRef.current) {
      slideRef.current.classList.remove('animate-fade-in');
      setTimeout(() => {
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        if (slideRef.current) {
          slideRef.current.classList.add('animate-fade-in');
        }
      }, 300);
    }
  };

  const prevSlide = () => {
    if (slideRef.current) {
      slideRef.current.classList.remove('animate-fade-in');
      setTimeout(() => {
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
        if (slideRef.current) {
          slideRef.current.classList.add('animate-fade-in');
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
          <h2 className="animate-on-scroll heading-lg gold-text mb-4">המלצות</h2>
          <p className="animate-on-scroll rtl-text text-xl text-gray-600">
            מה הורים אחרים אומרים על השירות שלנו
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div 
            ref={slideRef}
            className="animate-on-scroll glass-card p-8 md:p-12 rounded-2xl relative animate-fade-in"
          >
            <div className="absolute top-6 right-8 text-safechat-gold opacity-30">
              <Quote className="w-16 h-16" />
            </div>
            
            <div className="rtl-text relative z-10">
              <p className="text-xl md:text-2xl mb-8 font-medium italic">
                {testimonials[activeIndex].quote}
              </p>
              
              <div className="flex items-center justify-end">
                <div>
                  <p className="font-bold text-lg">{testimonials[activeIndex].author}</p>
                  <p className="text-gray-500">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-md hover:bg-safechat-gold hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-safechat-gold' : 'bg-gray-300'
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-md hover:bg-safechat-gold hover:text-white transition-colors"
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
