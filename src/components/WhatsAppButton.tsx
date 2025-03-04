
import { WhatsApp } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "972503218785"; // Israeli format without leading 0, with country code
  const message = "היי, אשמח לשמוע פרטים נוספים על SafeChat";
  
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };
  
  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      aria-label="פתיחת צ'אט בוואטסאפ"
    >
      <WhatsApp size={24} className="animate-subtle-bounce" />
    </button>
  );
};

export default WhatsAppButton;
