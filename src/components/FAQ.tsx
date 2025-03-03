
import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "האם הילדים יודעים שאני מנטר את השיחות שלהם?",
    answer: "לא, השירות פועל באופן דיסקרטי לחלוטין והילדים לא מודעים לניטור. אנו ממליצים, עם זאת, לקיים שיחה פתוחה עם הילדים על בטיחות ברשת."
  },
  {
    question: "האם פרטיות המידע שלנו מוגנת?",
    answer: "כן, אנו מקפידים על אבטחת מידע ברמה הגבוהה ביותר. המידע שלכם מוצפן ואיננו משתפים אותו עם צדדים שלישיים בשום מקרה."
  },
  {
    question: "כיצד מזהה המערכת תוכן בעייתי?",
    answer: "המערכת משתמשת בבינה מלאכותית מתקדמת שהוכשרה לזהות תוכן פוגעני, בריונות, איומים ותכנים לא ראויים. המערכת לומדת ומשתפרת כל הזמן."
  },
  {
    question: "מה קורה אם יש התראת שווא?",
    answer: "המערכת שלנו מדויקת מאוד, אך ייתכנו התראות שווא. במקרה כזה, תוכלו לסמן את ההתראה כשגויה והמערכת תלמד מכך לשיפור בעתיד."
  },
  {
    question: "האם ניתן לנטר מספר טלפונים במקביל?",
    answer: "כן, ניתן להוסיף מספר טלפונים לחשבון אחד בתשלום נוסף. פנו אלינו לקבלת מידע על חבילות משפחתיות."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      ref={sectionRef}
      className="container-padding bg-gray-50"
    >
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="animate-on-scroll heading-lg gold-text mb-4">שאלות נפוצות</h2>
          <p className="animate-on-scroll rtl-text text-xl text-gray-600">
            תשובות לשאלות נפוצות על השירות שלנו
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="animate-on-scroll mb-4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className={`w-full rtl-text bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center text-left transition-all
                ${openIndex === index ? 'bg-safechat-gold/5 border-safechat-gold/30' : 'hover:bg-gray-50'}`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`} 
                />
              </button>
              
              {openIndex === index && (
                <div className="rtl-text bg-white p-6 rounded-b-xl border-x border-b border-gray-100 shadow-sm animate-accordion-down">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
