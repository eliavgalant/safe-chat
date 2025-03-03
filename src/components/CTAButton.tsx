
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
        "text-[0.7rem] xs:text-xs sm:text-sm md:text-base lg:text-lg",
        "py-2 xs:py-2.5 sm:py-3 md:py-4 px-3 xs:px-4 sm:px-6 md:px-8",
        size === "lg" && "py-2.5 xs:py-3 sm:py-4 md:py-5 px-4 xs:px-6 sm:px-8 md:px-10 text-[0.75rem] xs:text-sm sm:text-base md:text-lg lg:text-xl",
        className
      )}
    >
      {children}
    </Button>
  );
};

export default CTAButton;
