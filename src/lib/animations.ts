// Anime.js is loaded globally via CDN in index.html
// Declare the global anime object for TypeScript
declare global {
  interface Window {
    anime: any;
  }
}

const anime = window.anime;

/**
 * Animate hero headline with character reveal effect
 */
export const animateHeadlineReveal = (selector: string) => {
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
 * Animate background pulse nodes
 */
export const animateBackgroundPulse = (selector: string) => {
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
 * Project card hover lift animation
 */
export const animateCardHover = (element: HTMLElement, isEntering: boolean) => {
  anime({
    targets: element,
    scale: isEntering ? 1.02 : 1,
    duration: 200,
    easing: 'easeOutCubic',
  });
};

/**
 * Card flip animation timeline
 */
export const animateCardFlip = (cardElement: HTMLElement) => {
  return anime.timeline().add(
    {
      targets: cardElement,
      rotateY: 90,
      duration: 150,
      easing: 'easeInQuad',
    },
    0
  );
};

export const completeCardFlip = (cardElement: HTMLElement) => {
  anime({
    targets: cardElement,
    rotateY: 0,
    duration: 150,
    easing: 'easeOutQuad',
  });
};

/**
 * Respect prefers-reduced-motion setting
 */
export const shouldReduceMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Wrapper to conditionally apply animations based on user preference
 */
export const animateIfAllowed = (animationFn: () => void) => {
  if (!shouldReduceMotion()) {
    animationFn();
  }
};

/**
 * Stagger fade-in animation for multiple elements
 * @param selector CSS selector for elements to animate
 * @param staggerDelay Delay between each element (ms)
 * @param initialDelay Initial delay before animation starts (ms)
 */
export const animateStaggerFadeIn = (
  selector: string,
  staggerDelay: number = 100,
  initialDelay: number = 0
) => {
  anime({
    targets: selector,
    opacity: [0, 1],
    translateY: [20, 0],
    delay: (_el: any, i: number) => initialDelay + i * staggerDelay,
    duration: 600,
    easing: 'easeOutExpo',
  });
};

/**
 * Fade in and up animation
 */
export const animateFadeInUp = (selector: string, delay: number = 0) => {
  anime({
    targets: selector,
    opacity: [0, 1],
    translateY: [20, 0],
    delay: delay,
    duration: 600,
    easing: 'easeOutExpo',
  });
};