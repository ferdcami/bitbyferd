import type { Flashcard } from './types';

// Shuffle array using Fisher-Yates algorithm
export const shuffle = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Build MCQ options: 1 correct + 3 distractors
export const buildMCQ = (
  targetCard: Flashcard,
  allCards: Flashcard[],
  optionsCount = 4
): string[] => {
  // Get cards of the same type (excluding the target)
  const sameTypeCards = allCards.filter(
    card => card.type === targetCard.type && card.id !== targetCard.id
  );

  // If not enough cards of same type, use any cards
  const candidatePool =
    sameTypeCards.length >= optionsCount - 1
      ? sameTypeCards
      : allCards.filter(card => card.id !== targetCard.id);

  // Shuffle and take the number of distractors we need
  const shuffledCandidates = shuffle(candidatePool);
  const distractors = shuffledCandidates.slice(0, optionsCount - 1).map(card => card.english);

  // Combine correct answer with distractors and shuffle
  const allOptions = [targetCard.english, ...distractors];
  return shuffle(allOptions);
};

// Check if answer is correct
export const checkAnswer = (selectedAnswer: string, correctAnswer: string): boolean => {
  return selectedAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
};
