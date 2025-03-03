
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
        element.scrollIntoView({
          behavior: 'smooth'
        });
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
        "bg-yellow-500 hover:bg-yellow-400 text-safechat-dark rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl",
        "text-xs sm:text-sm md:text-base",
        "py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8",
        size === "lg" && "py-3 sm:py-4 md:py-5 px-6 sm:px-8 md:px-10",
        className
      )}
    >
      {children}
    </Button>
  );
};

export default CTAButton;
