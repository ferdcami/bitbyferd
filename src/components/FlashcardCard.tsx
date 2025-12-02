import type { Flashcard } from '../lib/types';

interface FlashcardCardProps {
  card: Flashcard;
  isFlipped: boolean;
  onFlip: () => void;
}

function FlashcardCard({ card, isFlipped, onFlip }: FlashcardCardProps) {
  return (
    <div className="perspective-1000 w-full max-w-2xl mx-auto">
      <div
        onClick={onFlip}
        className={`relative h-80 cursor-pointer transition-transform duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of card (Albanian) */}
        <div
          className={`absolute inset-0 backface-hidden rounded-2xl executive-shadow ${
            isFlipped ? 'invisible' : 'visible'
          }`}
        >
          <div className="h-full bg-gradient-to-br from-brand-primary to-brand-secondary p-8 rounded-2xl flex flex-col items-center justify-center">
            <div className="text-sm uppercase tracking-wider text-white/70 mb-4">Albanian</div>
            <div className="text-5xl md:text-6xl font-bold text-white text-center mb-6">
              {card.albanian}
            </div>
            <div className="text-white/80 text-sm">Click or press Space to flip</div>
          </div>
        </div>

        {/* Back of card (English) */}
        <div
          className={`absolute inset-0 backface-hidden rounded-2xl executive-shadow rotate-y-180 ${
            isFlipped ? 'visible' : 'invisible'
          }`}
        >
          <div className="h-full bg-gradient-to-br from-brand-secondary to-brand-primary p-8 rounded-2xl flex flex-col items-center justify-center">
            <div className="text-sm uppercase tracking-wider text-white/70 mb-4">English</div>
            <div className="text-5xl md:text-6xl font-bold text-white text-center mb-6">
              {card.english}
            </div>
            <div className="px-4 py-2 bg-white/20 rounded-lg text-white text-sm">{card.type}</div>
          </div>
        </div>
      </div>

      {/* Flip hint */}
      <div className="text-center mt-6 text-brand-text/50 text-sm">
        {isFlipped ? 'Click to flip back' : 'Click to see translation'}
      </div>
    </div>
  );
}

export default FlashcardCard;
