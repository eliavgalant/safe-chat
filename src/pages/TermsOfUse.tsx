
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Link to="/" className="inline-flex items-center text-safechat-gold hover:text-safechat-gold-dark transition-colors rtl-text gap-2">
                <ArrowRight className="w-4 h-4" />
                חזרה לדף הבית
              </Link>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6 rtl-text">תנאי שימוש</h1>
            <p className="text-gray-500 mb-8 rtl-text">עודכן לאחרונה: 27 באוקטובר 2024</p>
            
            <div className="prose max-w-none rtl-text space-y-6">
              <p className="text-lg">
                ברוכים הבאים ל-ChatSafe! על ידי השימוש באפליקציה ובשירות מבוסס ה-WhatsApp שלנו, אתם מסכימים לתנאי השימוש האלה ("התנאים"). אנא קראו אותם בעיון, שכן הם מגדירים את השימוש שלכם ב-ChatSafe ואת הכללים שאתם חייבים לעמוד בהם.
              </p>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">1. קבלת התנאים</h2>
                <p>
                  על ידי גישה או שימוש ב-ChatSafe, אתם מאשרים שאתם מקבלים ומסכימים לעמוד בתנאים אלה. אם אינכם מסכימים עם חלק כלשהו מהתנאים, אנא הפסיקו את השימוש בשירותים שלנו מיד.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">2. חשבונות משתמש</h2>
                <ul className="list-disc mr-6 space-y-2">
                  <li>
                    <strong>זכאות:</strong> עליכם להיות בני 18 לפחות כדי להשתמש ב-ChatSafe. על ידי השימוש בשירות, אתם מאשרים שאתם עומדים בדרישה זו.
                  </li>
                  <li>
                    <strong>פרטי חשבון:</strong> אתם אחראים לדיוק ולשמירה על בטיחות המידע שאתם מספקים בתהליך ההרשמה ולעדכן את הפרטים שלכם במידת הצורך.
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">3. שימוש ב-ChatSafe</h2>
                <p>
                  ChatSafe מספקת פתרונות ניטור והגנה לצ'אטים של קבוצות ילדים באמצעות WhatsApp. השירות כולל זיהוי תכנים פוגעניים ודיווח להורים. חשוב לדעת כי השירות אינו תחליף לייעוץ מקצועי או לפיקוח הורי מלא.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">4. התנהגות אסורה</h2>
                <p>בעת שימוש ב-ChatSafe, אתם מסכימים:</p>
                <ul className="list-disc mr-6 space-y-2">
                  <li>להימנע מכל פעילות בלתי חוקית, פוגענית או מעליבה.</li>
                  <li>לא לשתף מידע כוזב או מטעה עם השירות.</li>
                  <li>לא לנסות לשבש או לפגוע באבטחה או בשלמות השירות.</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">5. תנאי תשלום</h2>
                <p>
                  השימוש ב-ChatSafe מתבצע על בסיס מנוי חודשי או שנתי בתשלום. על ידי הרשמה לשירות, אתם מסכימים לתנאי התשלום שלנו. לא יינתנו החזרים כספיים בגין מנויים ששולמו מראש.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">6. קניין רוחני</h2>
                <p>
                  כל התכנים, החומרים והקניין הרוחני הזמינים ב-ChatSafe, כולל לוגו, גרפיקה ותוכנה, הם בבעלות ChatSafe או ברישיון שלה. אתם מקבלים זכות מוגבלת, לא בלעדית, להשתמש ב-ChatSafe לצרכים אישיים בלבד.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">7. הגבלת אחריות</h2>
                <p>
                  ChatSafe מספקת את שירותיה "כפי שהם" וללא אחריות מכל סוג שהוא. אנו לא מבטיחים את דיוק, אמינות או שלמות המידע המוצע על ידי השירות ואיננו נושאים באחריות לכל נזק עקיף או תוצאתי.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfUse;
