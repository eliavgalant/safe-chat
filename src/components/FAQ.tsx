
import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "האם SafeChat קורא את כל ההודעות של הילד שלי?",
    answer: "לא. SafeChat מנטר רק את קבוצות הווטסאפ שנבחרו ומזהה תוכן פוגעני, כמו בריונות, איומים או תוכן לא הולם. רק במקרה של תוכן בעייתי נשלחת התראה להורה, ללא חשיפת שיחות פרטיות."
  },
  {
    question: "האם המידע שלנו נשאר פרטי ומאובטח?",
    answer: "בהחלט. SafeChat משתמש בהצפנה מתקדמת, אינו משתף מידע עם צדדים שלישיים ואינו שומר נתונים מעבר לזמן הסריקה. פרטיותכם מוגנת לחלוטין."
  },
  {
    question: "האם אני יכול לבחור אילו קבוצות ינוטרו?",
    answer: "כן. בזמן ההתקנה תוכל לבחור אילו קבוצות ווטסאפ של ילדך ינוטרו, ולשנות את ההגדרות בכל עת דרך ממשק הניהול."
  },
  {
    question: "איך מתקינים את SafeChat?",
    answer: "ההתקנה פשוטה ואורכת כ-5 דקות, ללא צורך בהורדת אפליקציות נוספות. לאחר החיבור, SafeChat פועל באופן אוטומטי ושולח התראות בזמן אמת."
  },
  {
    question: "האם אפשר לנטר כמה ילדים בחשבון אחד?",
    answer: "כן. ניתן לחבר מספר מכשירים תחת אותו חשבון הורה ולנהל את כולם ממקום אחד."
  },
  {
    question: "איך SafeChat מזהה הודעות בעייתיות?",
    answer: "המערכת משתמשת בבינה מלאכותית מתקדמת לזיהוי מילים, ביטויים והקשרים שמעידים על בריונות, איומים או תוכן לא ראוי, ומתעדכנת כל הזמן לשיפור הדיוק."
  },
  {
    question: "מה אם מתקבלת התראה שגויה?",
    answer: "ניתן לדווח על התראה שגויה דרך ממשק הניהול, והמערכת תלמד להשתפר בהתאם כדי לדייק בזיהוי התוכן."
  },
  {
    question: "האם SafeChat מזהה גם סלנג ואמוג'ים?",
    answer: "כן. הבינה המלאכותית שלנו מבינה סלנג, קיצורים, שפה מדוברת ואמוג'ים בעלי משמעות פוגענית."
  },
  {
    question: "האם יש התחייבות לטווח ארוך?",
    answer: "לא. השירות גמיש לחלוטין, וניתן לבטל את המנוי בכל עת ללא התחייבות."
  },
  {
    question: "מה קורה אם אני נתקל בבעיה טכנית?",
    answer: "צוות התמיכה שלנו זמין 24/7 ומוכן לסייע בכל שאלה או תקלה."
  },
  {
    question: "מה אם אני לא מרוצה מהשירות?",
    answer: "ניתן לבטל את השירות בכל עת, אך רוב ההורים מוצאים בו פתרון יעיל להגנה על ילדיהם."
  },
  {
    question: "האם SafeChat מתאים גם להורים שאינם מבינים בטכנולוגיה?",
    answer: "כן. הממשק ידידותי ופשוט, ללא צורך בידע טכנולוגי מוקדם."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return <section id="faq" ref={sectionRef} className="container-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="animate-on-scroll heading-lg text-black mb-4">שאלות נפוצות</h2>
          <p className="animate-on-scroll rtl-text text-xl text-gray-600 text-center">
            תשובות לשאלות נפוצות על השירות שלנו
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => <div key={index} className="animate-on-scroll mb-4" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <button className={`w-full rtl-text bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center text-left transition-all
                ${openIndex === index ? 'bg-safechat-gold/5 border-safechat-gold/30' : 'hover:bg-gray-50'}`} onClick={() => toggleFAQ(index)}>
                <span className="font-bold text-lg text-right">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`} />
              </button>
              
              {openIndex === index && <div className="rtl-text bg-white p-6 rounded-b-xl border-x border-b border-gray-100 shadow-sm animate-accordion-down">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>}
            </div>)}
        </div>
      </div>
    </section>;
};

export default FAQ;
