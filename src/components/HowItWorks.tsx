
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
  
  return <section id="how-it-works" ref={sectionRef} className="container-padding bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="animate-on-scroll heading-lg text-black mb-4 ">איך זה עובד?</h2>
          <p className="animate-on-scroll rtl-text text-xl text-gray-600 text-center">
            שלושה צעדים פשוטים להתחלת השימוש ב-SafeChat והגנה על ילדיכם
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => <div key={index} className="animate-on-scroll flex flex-col items-center text-center glass-card rounded-xl p-8 transition-transform duration-300 hover:scale-105" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              <div className="bg-white p-4 rounded-full shadow-md mb-6">
                {step.icon}
              </div>
              <h3 className="rtl-text text-xl font-bold mb-4">{step.title}</h3>
              <p className="rtl-text text-gray-600 text-center">{step.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};

export default HowItWorks;
