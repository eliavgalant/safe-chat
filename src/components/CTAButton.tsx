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
  return <Button onClick={handleClick} className="bg-yellow-500 hover:bg-yellow-400 rounded-full font-semibold text-base px-[50px] text-center ">
      {children}
    </Button>;
};
export default CTAButton;