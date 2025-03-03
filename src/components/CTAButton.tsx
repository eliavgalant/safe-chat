
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  size?: "default" | "lg";
}

const CTAButton = ({ 
  onClick, 
  className, 
  children,
  size = "default" 
}: CTAButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "bg-safechat-gold hover:bg-safechat-gold-dark text-safechat-dark font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg",
        size === "lg" && "text-lg py-6 px-8",
        className
      )}
    >
      {children}
    </Button>
  );
};

export default CTAButton;
