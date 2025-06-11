
import { useCallback } from 'react';

export const useSmoothScroll = () => {
  const scrollToElement = useCallback((selector: string, offset: number = 0) => {
    const element = document.querySelector(selector);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return { scrollToElement, scrollToTop };
};
