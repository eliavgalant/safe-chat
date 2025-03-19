
import { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade' | 'slide-left' | 'slide-right' | 'slide-up' | 'zoom' | 'bounce';
  delay?: number;
}

const ScrollReveal = ({ 
  children, 
  className = '', 
  animation = 'fade',
  delay = 0 
}: ScrollRevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (animation === 'fade') {
            entry.target.classList.add('opacity-100');
            entry.target.classList.add('translate-y-0');
          } else if (animation === 'slide-left') {
            entry.target.classList.add('animate-slide-left');
          } else if (animation === 'slide-right') {
            entry.target.classList.add('animate-slide-right');
          } else if (animation === 'slide-up') {
            entry.target.classList.add('animate-fade-in-up');
          } else if (animation === 'zoom') {
            entry.target.classList.add('scale-100');
            entry.target.classList.add('opacity-100');
          } else if (animation === 'bounce') {
            entry.target.classList.add('animate-subtle-bounce');
            entry.target.classList.add('opacity-100');
          }
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animation]);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade':
        return 'transition-all duration-700 opacity-0 translate-y-8';
      case 'slide-left':
        return 'opacity-0';
      case 'slide-right':
        return 'opacity-0';
      case 'slide-up':
        return 'opacity-0';
      case 'zoom':
        return 'transition-all duration-700 scale-95 opacity-0';
      case 'bounce':
        return 'opacity-0';
      default:
        return 'transition-all duration-700 opacity-0 translate-y-8';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
