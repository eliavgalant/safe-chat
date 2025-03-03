import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    parentPhone: '',
    childPhone: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const webhookUrl = "https://safechat.free.beeceptor.com";
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        toast({
          title: "הודעה נשלחה בהצלחה",
          description: "נציג יצור איתך קשר בהקדם"
        });
        setFormData({
          name: '',
          parentPhone: '',
          childPhone: '',
          notes: ''
        });
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      toast({
        title: "שגיאה בשליחת ההודעה",
        description: "אנא נסה שנית מאוחר יותר",
        variant: "destructive"
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return <section id="contact" className="bg-safechat-dark-light text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-lg rtl-text mb-4 text-center">צור קשר</h2>
          <p className="rtl-text text-lg text-gray-300 max-w-2xl mx-auto text-center">להרשמה מיידית ללא התחייבת מלאו את הפרטים</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="glass-card bg-black/40 p-6 sm:p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="rtl-text text-white block">שם</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="הכנס את שמך המלא" className="rtl-text bg-black/20 border-gray-700 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-safechat-gold/50 focus:border-safechat-gold w-full" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="parentPhone" className="rtl-text text-white block">טלפון של ההורה</Label>
                <Input id="parentPhone" name="parentPhone" type="tel" value={formData.parentPhone} onChange={handleChange} placeholder="הכנס את מספר הטלפון של ההורה" className="rtl-text bg-black/20 border-gray-700 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-safechat-gold/50 focus:border-safechat-gold w-full" required />
              </div>
            </div>
            
            <div className="space-y-2 mb-6">
              <Label htmlFor="childPhone" className="rtl-text text-white block">טלפון של הילד</Label>
              <Input id="childPhone" name="childPhone" type="tel" value={formData.childPhone} onChange={handleChange} placeholder="הכנס את מספר הטלפון של הילד" className="rtl-text bg-black/20 border-gray-700 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-safechat-gold/50 focus:border-safechat-gold w-full" required />
            </div>
            
            <div className="space-y-2 mb-8">
              <Label htmlFor="notes" className="rtl-text text-white block">הערות</Label>
              <textarea id="notes" name="notes" value={formData.notes} onChange={handleChange} placeholder="כתוב את ההערות שלך כאן" className="rtl-text w-full h-24 sm:h-32 bg-black/20 border border-gray-700 rounded-md px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-safechat-gold/50 focus:border-safechat-gold transition-all duration-200" />
            </div>
            
            <div className="text-center">
              <Button type="submit" disabled={isSubmitting} className="bg-safechat-gold hover:bg-safechat-gold-dark text-safechat-dark font-medium text-lg py-4 sm:py-6 px-6 sm:px-8 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg rtl-text min-w-36 sm:min-w-40">
                {isSubmitting ? "שולח..." : "שלח הודעה"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>;
};

export default Contact;
