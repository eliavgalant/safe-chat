
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  size?: "default" | "lg";
  target?: string;
}

const CTAButton = ({ 
  onClick, 
  className, 
  children,
  size = "default",
  target
}: CTAButtonProps) => {
  
  const handleClick = () => {
    if (target) {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    if (onClick) {
      onClick();
    }
  };
  
  return (
    <Button
      onClick={handleClick}
      className={cn(
        "bg-safechat-gold hover:bg-safechat-gold-dark text-safechat-dark font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-xs sm:text-sm md:text-base",
        size === "lg" && "py-4 sm:py-5 md:py-6 px-4 sm:px-6 md:px-8",
        className
      )}
    >
      {children}
    </Button>
  );
};

export default CTAButton;
