import { useState } from 'react';
import type { Flashcard } from '../lib/types';
import { buildMCQ } from '../lib/quizHelpers';

interface QuizMCQProps {
  card: Flashcard;
  allCards: Flashcard[];
  onAnswer: (isCorrect: boolean) => void;
}

function QuizMCQ({ card, allCards, onAnswer }: QuizMCQProps) {
  const [options] = useState<string[]>(() => buildMCQ(card, allCards));
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleSelectAnswer = (answer: string) => {
    if (hasAnswered) return;

    setSelectedAnswer(answer);
    setHasAnswered(true);

    const isCorrect = answer === card.english;

    // Show feedback briefly before calling onAnswer
    setTimeout(() => {
      onAnswer(isCorrect);
    }, 1000);
  };

  const getOptionStyle = (option: string): string => {
    if (!hasAnswered) {
      return 'bg-brand-muted text-brand-text hover:bg-brand-primary/20 hover:border-brand-primary cursor-pointer';
    }

    // After answering
    if (option === card.english) {
      // Correct answer - always green
      return 'bg-green-500/20 border-green-500 text-green-400 border-2';
    }

    if (option === selectedAnswer) {
      // Selected wrong answer - red
      return 'bg-red-500/20 border-red-500 text-red-400 border-2';
    }

    // Other options - muted
    return 'bg-brand-muted text-brand-text/30';
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Question Card */}
      <div className="card mb-8 text-center">
        <div className="text-sm uppercase tracking-wider text-brand-text/70 mb-4">
          Albanian Word
        </div>
        <div className="text-5xl md:text-6xl font-bold text-brand-heading mb-4">
          {card.albanian}
        </div>
        <div className="text-brand-text">What does this mean in English?</div>
      </div>

      {/* Answer Options */}
      <div className="space-y-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelectAnswer(option)}
            disabled={hasAnswered}
            className={`w-full p-4 rounded-lg font-semibold text-left transition-all border-2 border-transparent ${getOptionStyle(
              option
            )}`}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-bg flex items-center justify-center font-bold">
                {String.fromCharCode(65 + index)}
              </div>
              <div className="text-lg">{option}</div>
              {hasAnswered && option === card.english && (
                <svg
                  className="w-6 h-6 ml-auto text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
              {hasAnswered && option === selectedAnswer && option !== card.english && (
                <svg
                  className="w-6 h-6 ml-auto text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Hint */}
      {!hasAnswered && (
        <div className="text-center mt-6 text-brand-text/50 text-sm">Click an option to answer</div>
      )}
    </div>
  );
}

export default QuizMCQ;
