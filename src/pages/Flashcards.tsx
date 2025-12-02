import { useState, useEffect } from 'react';
import FlashcardCard from '../components/FlashcardCard';
import verbsData from '../data/flashcards/verbs.json';
import numbersData from '../data/flashcards/numbers.json';
import nounsData from '../data/flashcards/nouns.json';
import type { Flashcard } from '../lib/types';

function Flashcards() {
  const [allCards] = useState<Flashcard[]>([
    ...(verbsData as Flashcard[]),
    ...(numbersData as Flashcard[]),
    ...(nounsData as Flashcard[]),
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = allCards[currentIndex];
  const totalCards = allCards.length;

  // Handle next card
  const handleNext = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  // Handle previous card
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        setIsFlipped(prev => !prev);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex, totalCards]);

  if (!currentCard) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-brand-text text-xl">No flashcards available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <div className="content-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-headline mb-4 text-brand-heading">Albanian Flashcards</h1>
          <p className="text-body-large text-brand-text">Study Mode</p>
        </div>

        {/* Progress indicator */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-brand-text text-sm">
              Card {currentIndex + 1} of {totalCards}
            </span>
            <span className="text-brand-text/70 text-sm">
              {Math.round(((currentIndex + 1) / totalCards) * 100)}% Complete
            </span>
          </div>
          <div className="w-full bg-brand-muted rounded-full h-2">
            <div
              className="bg-brand-primary rounded-full h-2 transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / totalCards) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Flashcard */}
        <div className="mb-12">
          <FlashcardCard
            card={currentCard}
            isFlipped={isFlipped}
            onFlip={() => setIsFlipped(!isFlipped)}
          />
        </div>

        {/* Navigation controls */}
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center gap-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                currentIndex === 0
                  ? 'bg-brand-muted text-brand-text/30 cursor-not-allowed'
                  : 'btn-secondary'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Previous
            </button>

            <div className="text-center text-brand-text/70 text-sm">
              <div>Use arrow keys to navigate</div>
              <div>Press Space or Enter to flip</div>
            </div>

            <button
              onClick={handleNext}
              disabled={currentIndex === totalCards - 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                currentIndex === totalCards - 1
                  ? 'bg-brand-muted text-brand-text/30 cursor-not-allowed'
                  : 'btn-primary'
              }`}
            >
              Next
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Keyboard shortcuts help */}
        <div className="max-w-2xl mx-auto mt-12">
          <div className="card">
            <h3 className="text-lg font-bold text-brand-heading mb-3">Keyboard Shortcuts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-brand-bg rounded text-brand-primary font-mono">
                  Space
                </kbd>
                <span className="text-brand-text">Flip card</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-brand-bg rounded text-brand-primary font-mono">←</kbd>
                <span className="text-brand-text">Previous</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-brand-bg rounded text-brand-primary font-mono">→</kbd>
                <span className="text-brand-text">Next</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flashcards;
