
import { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'zoom' | 'bounce';
  delay?: number;
  threshold?: number;
}

const ScrollReveal = ({ 
  children, 
  className = '', 
  animation = 'fade', 
  delay = 0,
  threshold = 0.1 
}: ScrollRevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small timeout for the delay if needed
          setTimeout(() => {
            if (elementRef.current) {
              elementRef.current.classList.add('opacity-100');
              elementRef.current.classList.remove('translate-y-8', 'translate-y-[-50px]', 'translate-x-[-50px]', 'translate-x-[50px]', 'scale-75');
              elementRef.current.classList.add('translate-y-0', 'translate-x-0', 'scale-100');
            }
          }, delay);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, threshold]);

  const getAnimationClasses = () => {
    switch (animation) {
      case 'fade':
        return 'opacity-0';
      case 'slide-up':
        return 'opacity-0 translate-y-8';
      case 'slide-down':
        return 'opacity-0 translate-y-[-50px]';
      case 'slide-left':
        return 'opacity-0 translate-x-[-50px]';
      case 'slide-right':
        return 'opacity-0 translate-x-[50px]';
      case 'zoom':
        return 'opacity-0 scale-75';
      case 'bounce':
        return 'opacity-0 translate-y-8';
      default:
        return 'opacity-0';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
