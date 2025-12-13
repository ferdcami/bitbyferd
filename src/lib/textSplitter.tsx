import type { JSX } from 'react';

// Split text into spans for character-by-character animation
export const splitTextIntoChars = (text: string): JSX.Element[] => {
  return text.split('').map((char, index) => (
    <span key={index} className="char inline-block" style={{ opacity: 0 }}>
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));
};