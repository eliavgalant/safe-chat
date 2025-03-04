
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-safechat-dark text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-safechat-gold rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-safechat-dark" />
              </div>
              <span className="font-bold text-xl">SafeChat</span>
            </div>
            
            <p className="rtl-text text-gray-300 mb-6 max-w-sm">
              מגינים על הילדים שלכם בקבוצות וואטסאפ באמצעות טכנולוגיה מתקדמת לזיהוי תוכן פוגעני
            </p>
            
            <p className="text-sm text-gray-400">
              &copy; {currentYear} SafeChat. כל הזכויות שמורות.
            </p>
          </div>
          
          <div>
            <h3 className="rtl-text font-bold text-lg mb-4 text-safechat-gold">קישורים מהירים</h3>
            <ul className="rtl-text space-y-2">
              <li>
                <a href="#how-it-works" className="text-gray-300 hover:text-safechat-gold transition-colors">
                  איך זה עובד
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-300 hover:text-safechat-gold transition-colors">
                  יתרונות
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-300 hover:text-safechat-gold transition-colors">
                  מחירים
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-safechat-gold transition-colors">
                  שאלות נפוצות
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="rtl-text font-bold text-lg mb-4 text-safechat-gold">צרו קשר</h3>
            <ul className="rtl-text space-y-2">
              <li className="text-gray-300">
                support@safechat.com
              </li>
              <li className="text-gray-300">
                טלפון: 03-1234567
              </li>
              <li className="mt-4">
                <a href="#contact" className="text-white bg-safechat-gold/20 hover:bg-safechat-gold/30 px-4 py-2 rounded-md transition-colors inline-block">
                  צרו קשר
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="rtl-text text-sm text-gray-400 mb-4 md:mb-0">
            הפרטיות והאבטחה של המידע שלכם חשובים לנו מאוד.
          </p>
          
          <div className="flex gap-4">
            <Link to="/terms" className="text-sm text-gray-400 hover:text-safechat-gold transition-colors">
              תנאי שימוש
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
