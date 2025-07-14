import { useEffect, useRef } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  animationClass?: string;
  delay?: number;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const {
      threshold = 0.1,
      rootMargin = '0px 0px -50px 0px',
      triggerOnce = false,
      animationClass = 'animate-fade-in-up',
      delay = 0
    } = options;

    // Check if Intersection Observer is supported
    if (!('IntersectionObserver' in window)) {
      // Fallback: immediately show element
      element.classList.add('animate-fade-in-up');
      return;
    }

    // Set initial state
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is entering viewport
            setTimeout(() => {
              entry.target.classList.add(animationClass);
              (entry.target as HTMLElement).style.opacity = '1';
              (entry.target as HTMLElement).style.transform = 'translateY(0)';
            }, delay);

            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            // Element is leaving viewport (only if not triggerOnce)
            entry.target.classList.remove(animationClass);
            (entry.target as HTMLElement).style.opacity = '0';
            (entry.target as HTMLElement).style.transform = 'translateY(30px)';
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return elementRef;
};

// Hook for multiple elements
export const useScrollAnimationGroup = (options: ScrollAnimationOptions = {}) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const {
      threshold = 0.1,
      rootMargin = '0px 0px -50px 0px',
      triggerOnce = true,
      animationClass = 'animate-fade-in-up'
    } = options;

    // Check if Intersection Observer is supported
    if (!('IntersectionObserver' in window)) {
      // Fallback: immediately show all elements
      const elements = container.querySelectorAll('[data-scroll-animate]');
      elements.forEach((el) => {
        el.classList.add(animationClass);
      });
      return;
    }

    const elements = container.querySelectorAll('[data-scroll-animate]');
    
    elements.forEach((element, index) => {
      const htmlElement = element as HTMLElement;
      
      // Set initial state
      htmlElement.style.opacity = '0';
      htmlElement.style.transform = 'translateY(30px)';
      htmlElement.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const htmlElement = entry.target as HTMLElement;
            const delay = parseInt(htmlElement.dataset.delay || '0');
            
            setTimeout(() => {
              entry.target.classList.add(animationClass);
              htmlElement.style.opacity = '1';
              htmlElement.style.transform = 'translateY(0)';
            }, delay);

            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            const htmlElement = entry.target as HTMLElement;
            entry.target.classList.remove(animationClass);
            htmlElement.style.opacity = '0';
            htmlElement.style.transform = 'translateY(30px)';
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return containerRef;
};