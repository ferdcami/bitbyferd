// Anime.js is loaded globally via CDN in index.html
// Declare the global anime object for TypeScript
declare global {
  interface Window {
    anime: {
      (config: Record<string, unknown>): unknown;
      stagger(value: number): number;
    };
  }
}

const anime = window.anime;

/**
 * Animate hero headline with character reveal effect
 */
export const animateHeadlineReveal = (selector: string): void => {
  anime({
    targets: `${selector} span`,
    translateY: ['-1em', '0em'],
    opacity: [0, 1],
    delay: anime.stagger(50),
    easing: 'easeOutExpo',
    duration: 600,
  });
};

/**
 * Animate background pulse effect
 */
export const animateBackgroundPulse = (selector: string): void => {
  anime({
    targets: `${selector} .dot`,
    scale: [0.8, 1.05],
    duration: 2000,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine',
  });
};

/**
 * Animate card hover lift effect
 */
export const animateCardHover = (element: HTMLElement, isEntering: boolean): void => {
  if (!element) return;

  anime({
    targets: element,
    translateY: isEntering ? -10 : 0,
    duration: 200,
    easing: 'easeOutCubic',
  });
};

/**
 * Animate staggered fade-in for multiple elements
 */
export const animateStaggerFadeIn = (
  selector: string,
  staggerDelay: number,
  duration: number
): void => {
  anime({
    targets: selector,
    opacity: [0, 1],
    translateY: [20, 0],
    delay: anime.stagger(staggerDelay),
    duration,
    easing: 'easeOutExpo',
  });
};

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Safe animation wrapper that respects prefers-reduced-motion
 */
export const safeAnimate = (config: Record<string, unknown>): void => {
  if (prefersReducedMotion()) {
    // Skip animation, just set final state
    const targets = config.targets as HTMLElement | HTMLElement[] | string;
    if (typeof targets === 'string') {
      document.querySelectorAll(targets).forEach((el) => {
        Object.assign((el as HTMLElement).style, {
          opacity: 1,
          transform: 'none',
        });
      });
    } else if (targets instanceof HTMLElement) {
      Object.assign(targets.style, {
        opacity: 1,
        transform: 'none',
      });
    }
    return;
  }

  anime(config);
};