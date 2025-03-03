
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    try {
      // Replace with your actual webhook URL
      const webhookUrl = "https://your-webhook-url.com";
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        toast({
          title: "הודעה נשלחה בהצלחה",
          description: "נציג יצור איתך קשר בהקדם",
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      toast({
        title: "שגיאה בשליחת ההודעה",
        description: "אנא נסה שנית מאוחר יותר",
        variant: "destructive",
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-safechat-dark-light text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-lg rtl-text mb-4">צור קשר</h2>
          <p className="rtl-text text-lg text-gray-300 max-w-2xl mx-auto">
            יש לכם שאלות? רוצים לדעת עוד על איך SafeChat יכול לעזור לכם? מלאו את הטופס ונחזור אליכם בהקדם
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="glass-card bg-black/40 p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="rtl-text text-white block">שם מלא</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="הכנס את שמך המלא"
                  className="rtl-text bg-black/20 border-gray-700 text-white placeholder:text-gray-500"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="rtl-text text-white block">אימייל</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="הכנס את כתובת האימייל שלך"
                  className="rtl-text bg-black/20 border-gray-700 text-white placeholder:text-gray-500"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2 mb-6">
              <Label htmlFor="phone" className="rtl-text text-white block">מספר טלפון</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="הכנס את מספר הטלפון שלך"
                className="rtl-text bg-black/20 border-gray-700 text-white placeholder:text-gray-500"
                required
              />
            </div>
            
            <div className="space-y-2 mb-8">
              <Label htmlFor="message" className="rtl-text text-white block">הודעה</Label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="כתוב את ההודעה שלך כאן"
                className="rtl-text w-full h-32 bg-black/20 border border-gray-700 rounded-md px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-safechat-gold"
                required
              />
            </div>
            
            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-safechat-gold hover:bg-safechat-gold-dark text-safechat-dark font-medium text-lg py-6 px-8 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg rtl-text min-w-40"
              >
                {isSubmitting ? "שולח..." : "שלח הודעה"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
