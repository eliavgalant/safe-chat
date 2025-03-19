
import { useEffect, useRef } from 'react';
import { ShieldCheck, Lock, Zap, AlertCircle, Clock, BarChart } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Benefits = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains('reveal-left')) {
            entry.target.classList.add('animate-slide-right');
          } else if (entry.target.classList.contains('reveal-right')) {
            entry.target.classList.add('animate-slide-left');
          } else {
            entry.target.classList.add('animate-fade-in-up');
          }
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
  
  const benefits = [
    {
      icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />,
      title: "הגנה מלאה",
      description: "זיהוי בריונות, התנהגות פוגענית ותכנים לא ראויים בקבוצות וואטסאפ"
    }, 
    {
      icon: <Lock className="w-5 h-5 md:w-6 md:h-6" />,
      title: "פרטיות מוחלטת",
      description: "המידע שלכם נשאר פרטי לחלוטין, ללא גישה של צדדים שלישיים"
    }, 
    {
      icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />,
      title: "התקנה מהירה",
      description: "התחברות פשוטה וקלה, ללא צורך בהתקנת אפליקציות נוספות"
    }, 
    {
      icon: <AlertCircle className="w-5 h-5 md:w-6 md:h-6" />,
      title: "התראות בזמן אמת",
      description: "קבלת התראות מיידיות כאשר מזוהה תוכן בעייתי"
    }, 
    {
      icon: <Clock className="w-5 h-5 md:w-6 md:h-6" />,
      title: "תמיכה 24/7",
      description: "צוות תמיכה זמין 24 שעות ביממה, 7 ימים בשבוע"
    }, 
    {
      icon: <BarChart className="w-5 h-5 md:w-6 md:h-6" />,
      title: "דוחות שבועיים",
      description: "קבלו דוחות מפורטים על פעילות הילדים ברשתות החברתיות"
    }
  ];
  
  return (
    <section id="benefits" ref={sectionRef} className="container-padding bg-gray-50 py-10 md:py-16">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="animate-on-scroll heading-lg text-black mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl pulse-glow">יתרונות השירות</h2>
          <p className="animate-on-scroll rtl-text text-base md:text-xl text-gray-600 text-center">
            היתרונות המרכזיים של השימוש ב-SafeChat להגנה על ילדיכם
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="animate-on-scroll bg-white rounded-xl p-4 md:p-6 shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1" 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-start gap-3 md:gap-4 rtl-text">
                <div className="mt-1 bg-safechat-gold/10 p-2 md:p-3 rounded-full text-safechat-gold animate-float">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 animate-fade-in-up">{benefit.title}</h3>
                  <p className="text-sm md:text-base text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
