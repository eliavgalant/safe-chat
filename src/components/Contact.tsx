
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    parentPhone: '',
    childPhone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [urlParam, setUrlParam] = useState<string | null>(null);
  const [phoneErrors, setPhoneErrors] = useState({
    parentPhone: '',
    childPhone: ''
  });
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  // Extract URL parameter when component mounts
  useEffect(() => {
    const extractUrlParameter = () => {
      const url = window.location.href;
      // Check if there's a parameter after "?"
      const paramIndex = url.indexOf('?');
      if (paramIndex !== -1) {
        // Get everything after the "?" character
        const param = url.substring(paramIndex + 1);
        setUrlParam(param);
      }
    };

    extractUrlParameter();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user types in phone fields
    if (name === 'parentPhone' || name === 'childPhone') {
      setPhoneErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validatePhoneNumber = (phone: string, fieldName: 'parentPhone' | 'childPhone'): boolean => {
    // Israeli phone number format: 05X-XXXXXXX or 05XXXXXXXX
    const israeliPhonePattern = /^(05\d)[-]?(\d{7})$/;
    
    if (!israeliPhonePattern.test(phone)) {
      setPhoneErrors(prev => ({
        ...prev,
        [fieldName]: 'מספר טלפון לא תקין'
      }));
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone numbers
    const isParentPhoneValid = validatePhoneNumber(formData.parentPhone, 'parentPhone');
    const isChildPhoneValid = validatePhoneNumber(formData.childPhone, 'childPhone');
    
    if (!isParentPhoneValid || !isChildPhoneValid) {
      return;
    }
    
    setIsSubmitting(true);
    try {
      const webhookUrl = "https://hook.eu2.make.com/dc67buci793zutacrfiu8caht4ftu6s4";

      // Transform the data to match the required format
      const formattedData = {
        firstName: formData.name,
        email: formData.email,
        phone: formData.parentPhone,
        childPhone: formData.childPhone,
        // Include the URL parameter if it exists
        urlParam: urlParam || ""
      };
      
      console.log("Sending data to webhook:", formattedData);
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formattedData)
      });
      if (response.ok) {
        // Show success dialog instead of toast
        setShowSuccessDialog(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          parentPhone: '',
          childPhone: ''
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
          <p className="rtl-text text-lg text-gray-300 max-w-2xl mx-auto text-center">לשאלות נוספות או להרשמה</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="glass-card bg-black/40 p-6 sm:p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="rtl-text text-white block">שם</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="הכנס את שמך המלא" className="rtl-text bg-black/20 border-gray-700 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-safechat-gold/50 focus:border-safechat-gold w-full" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="rtl-text text-white block">כתובת מייל</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="הכנס את כתובת המייל שלך" 
                  className="rtl-text bg-black/20 border-gray-700 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-safechat-gold/50 focus:border-safechat-gold w-full" 
                  required 
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div className="space-y-2">
                <Label htmlFor="parentPhone" className="rtl-text text-white block">טלפון של ההורה</Label>
                <Input 
                  id="parentPhone" 
                  name="parentPhone" 
                  type="tel" 
                  value={formData.parentPhone} 
                  onChange={handleChange} 
                  placeholder="הכנס את מספר הטלפון של ההורה" 
                  className={`rtl-text bg-black/20 border-gray-700 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-safechat-gold/50 focus:border-safechat-gold w-full ${phoneErrors.parentPhone ? 'border-red-500' : ''}`} 
                  required 
                />
                {phoneErrors.parentPhone && (
                  <p className="text-red-500 text-sm mt-1 rtl-text">{phoneErrors.parentPhone}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="childPhone" className="rtl-text text-white block">טלפון של הילד</Label>
                <Input 
                  id="childPhone" 
                  name="childPhone" 
                  type="tel" 
                  value={formData.childPhone} 
                  onChange={handleChange} 
                  placeholder="הכנס את מספר הטלפון של הילד" 
                  className={`rtl-text bg-black/20 border-gray-700 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-safechat-gold/50 focus:border-safechat-gold w-full ${phoneErrors.childPhone ? 'border-red-500' : ''}`} 
                  required 
                />
                {phoneErrors.childPhone && (
                  <p className="text-red-500 text-sm mt-1 rtl-text">{phoneErrors.childPhone}</p>
                )}
              </div>
            </div>
            
            <div className="text-center">
              <Button type="submit" disabled={isSubmitting} className="bg-safechat-gold hover:bg-safechat-gold-dark text-safechat-dark font-medium text-xs sm:text-sm md:text-lg py-3 sm:py-4 md:py-6 px-4 sm:px-6 md:px-8 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg rtl-text min-w-28 sm:min-w-36 md:min-w-40">
                {isSubmitting ? "שולח..." : "שלח הודעה"}
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center rtl-text text-xl">תודה על ההרשמה</DialogTitle>
            <DialogDescription className="text-center rtl-text">
              קיבלת כעת הודעת ווטסאפ להמשך התהליך
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center">
            <Button 
              type="button" 
              onClick={() => setShowSuccessDialog(false)}
              className="bg-safechat-gold hover:bg-safechat-gold-dark text-safechat-dark font-medium rtl-text"
            >
              סגור
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>;
};

export default Contact;
