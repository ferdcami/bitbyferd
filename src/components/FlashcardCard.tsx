import type { Flashcard } from '../lib/types';

interface FlashcardCardProps {
  card: Flashcard;
  isFlipped: boolean;
  onFlip: () => void;
  onMarkCorrect?: () => void;
  onMarkIncorrect?: () => void;
}

function FlashcardCard({
  card,
  isFlipped,
  onFlip,
  onMarkCorrect,
  onMarkIncorrect,
}: FlashcardCardProps) {
  return (
    <div className="perspective-1000 w-full max-w-2xl mx-auto">
      <div
        className={`relative h-80 transition-transform duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of card (Albanian) */}
        <div
          onClick={onFlip}
          className={`absolute inset-0 backface-hidden rounded-2xl executive-shadow cursor-pointer ${
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
            <div className="px-4 py-2 bg-white/20 rounded-lg text-white text-sm mb-6">
              {card.type}
            </div>

            {/* Action buttons - only visible when flipped */}
            {isFlipped && (
              <div className="flex gap-4 mt-4">
                <button
                  onClick={e => {
                    e.stopPropagation();
                    onMarkIncorrect?.();
                  }}
                  className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-all executive-shadow flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Got it Wrong
                </button>
                <button
                  onClick={e => {
                    e.stopPropagation();
                    onMarkCorrect?.();
                  }}
                  className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-all executive-shadow flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Got it Right
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Flip hint */}
      <div className="text-center mt-6 text-brand-text/50 text-sm">
        {isFlipped ? 'Mark your answer above' : 'Click to see translation'}
      </div>
    </div>
  );
}

export default FlashcardCard;
