
import { useEffect, useRef } from 'react';
import { Shield, MessageSquare, Bell } from 'lucide-react';

const HowItWorks = () => {
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
  
  const steps = [{
    icon: <MessageSquare className="w-12 h-12 stroke-green-500" />,
    title: "התחברות קלה",
    description: "התחברות קלה ומהירה לשירות - 5 דקות ואתם מסודרים"
  }, {
    icon: <Shield className="w-12 h-12 stroke-red-500" />,
    title: "ניטור רציף",
    description: "המערכת מנטרת באופן אוטומטי את כל ההודעות בקבוצות ומזהה תכנים בעייתיים באמצעות אלגוריתם בינה מלאכותית מתקדם"
  }, {
    icon: <Bell className="w-12 h-12 stroke-blue-500" />,
    title: "התראות בזמן אמת",
    description: "קבלו התראות מיידיות כאשר מזוהה התנהגות חשודה או תוכן לא ראוי"
  }];
  
  return (
    <section 
      id="how-it-works" 
      ref={sectionRef} 
      className="container-padding bg-gradient-to-b from-gray-50 to-gray-100 py-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="animate-on-scroll heading-lg gold-gradient-text mb-4 relative inline-block">
            איך זה עובד?
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-safechat-gold rounded-full"></span>
          </h2>
          <p className="animate-on-scroll rtl-text text-xl text-gray-600 mt-8">
            שלושה צעדים פשוטים להתחלת השימוש ב-SafeChat והגנה על ילדיכם
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="animate-on-scroll flex flex-col items-center text-center glass-card rounded-xl p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden group" 
              style={{
                animationDelay: `${index * 0.2}s`,
                background: "linear-gradient(to bottom right, rgba(255,255,255,0.9), rgba(255,255,255,0.7))"
              }}
            >
              <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="shine-effect relative z-10 bg-white p-5 rounded-full shadow-lg mb-6 ring-2 ring-gray-100 group-hover:ring-safechat-gold/30 transition-all duration-300">
                {step.icon}
              </div>
              
              <h3 className="rtl-text text-xl font-bold mb-4 relative z-10">{step.title}</h3>
              
              <p className="rtl-text text-gray-600 relative z-10">{step.description}</p>
              
              {/* Subtle animated decorative element */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full bg-gradient-to-r from-safechat-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
