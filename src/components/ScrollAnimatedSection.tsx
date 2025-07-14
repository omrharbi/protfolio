import React, { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ScrollAnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade-in' | 'scale-up';
  delay?: number;
  triggerOnce?: boolean;
  threshold?: number;
}

const ScrollAnimatedSection: React.FC<ScrollAnimatedSectionProps> = ({
  children,
  className = '',
  animationType = 'fade-up',
  delay = 0,
  triggerOnce = true,
  threshold = 0.1
}) => {
  const animationClass = `animate-${animationType}`;
  
  const ref = useScrollAnimation({
    animationClass,
    delay,
    triggerOnce,
    threshold
  });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ScrollAnimatedSection;