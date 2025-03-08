
import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "האם SafeChat קורא את כל ההודעות של הילד שלי?",
    answer: "לא, SafeChat סורק רק את קבוצות הווטסאפ שבחרת לנטר, ומתריע רק במקרה של תוכן בעייתי. אנחנו לא שומרים או חושפים הודעות רגילות."
  },
  {
    question: "האם המידע שלי נשאר פרטי?",
    answer: "לחלוטין! SafeChat לא משתף מידע עם אף גורם חיצוני, וכל הנתונים מוצפנים ומאובטחים."
  },
  {
    question: "האם אפשר לבחור אילו קבוצות לנטר?",
    answer: "כן! אתה מחליט אילו קבוצות הווטסאפ של הילד ינוטרו, וניתן לעדכן את הבחירה בכל רגע."
  },
  {
    question: "איך מתקינים את SafeChat?",
    answer: "פשוט וקל – תהליך ההתקנה לוקח 5 דקות בלבד וללא צורך באפליקציות נוספות."
  },
  {
    question: "האם אפשר לנטר כמה ילדים בחשבון אחד?",
    answer: "כן! אפשר לנטר מספר טלפונים של ילדים תחת אותו חשבון הורה."
  },
  {
    question: "איך SafeChat מזהה הודעות בעייתיות?",
    answer: "המערכת משתמשת בבינה מלאכותית מתקדמת שמזהה בריונות, איומים, תוכן לא הולם ועוד."
  },
  {
    question: "מה אם המערכת תשלח התראה לא נכונה?",
    answer: "אם קיבלת התראה שגויה, תוכל לדווח עליה דרך הממשק, והמערכת תלמד ותשתפר בהתאם."
  },
  {
    question: "האם SafeChat מבין גם סלנג, קיצורים ואמוג'ים?",
    answer: "בהחלט! הבינה המלאכותית שלנו מתעדכנת כל הזמן כדי להבין שפה מדוברת, סלנג ואפילו אמוג'ים עם משמעות בעייתית."
  },
  {
    question: "האם יש התחייבות לטווח ארוך?",
    answer: "לא, ניתן לבטל את המנוי בכל רגע ללא התחייבות."
  },
  {
    question: "מה קורה אם אני נתקל בבעיה טכנית?",
    answer: "צוות התמיכה שלנו זמין 24/7 לעזור לך בכל שאלה."
  },
  {
    question: "מה אם אני לא מרוצה מהשירות?",
    answer: "ניתן לבטל בכל עת, אבל אנחנו בטוחים שתהיה מרוצה!"
  },
  {
    question: "האם SafeChat מתאים גם להורים שאינם מבינים בטכנולוגיה?",
    answer: "כן! ההתקנה קלה במיוחד, ואין צורך בידע טכני."
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
