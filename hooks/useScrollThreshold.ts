import { useEffect, useState } from 'react';

type UseScrollThresholdTarget =
  | 'window'
  | { selector: string };

interface UseScrollThresholdOptions {
  target?: UseScrollThresholdTarget;
}

/**
 * Scroll threshold hook.
 * - Default: listens on window scrollY
 * - With selector: listens on the scrollTop of the matching element (e.g. main layout container)
 */
export const useScrollThreshold = (
  threshold: number,
  options?: UseScrollThresholdOptions,
): boolean => {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    const target = options?.target ?? 'window';

    const getScrollElement = (): HTMLElement | null => {
      if (target === 'window') return null;
      if (typeof target === 'object' && target.selector) {
        return document.querySelector<HTMLElement>(target.selector);
      }
      return null;
    };

    const el = getScrollElement();

    const handleScroll = () => {
      if (el) {
        setPassed(el.scrollTop > threshold);
      } else {
        setPassed(window.scrollY > threshold);
      }
    };

    handleScroll();

    if (el) {
      el.addEventListener('scroll', handleScroll);
      return () => el.removeEventListener('scroll', handleScroll);
    } else {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [threshold, options?.target]);

  return passed;
};

