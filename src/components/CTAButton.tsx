
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
        "text-[0.8rem] xs:text-sm sm:text-base md:text-lg lg:text-xl",
        "py-2.5 xs:py-3 sm:py-3.5 md:py-4.5 px-4 xs:px-5 sm:px-7 md:px-9",
        size === "lg" && "py-3 xs:py-3.5 sm:py-4.5 md:py-5.5 px-5 xs:px-7 sm:px-9 md:px-11 text-[0.85rem] xs:text-base sm:text-lg md:text-xl lg:text-2xl",
        className
      )}
    >
      {children}{size === "lg" ? "!" : ""}
    </Button>
  );
};

export default CTAButton;
