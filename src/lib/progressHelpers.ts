import type { Flashcard, ProgressMap, ProgressEntry } from './types';
import { readProgress, writeProgress } from './storage';

export const markAnswer = (cardId: string, isCorrect: boolean): void => {
  const progressMap = readProgress();

  const entry: ProgressEntry = progressMap[cardId] ?? {
    correct: 0,
    incorrect: 0,
    lastAnsweredAt: '',
    lastResult: undefined,
  };

  if (isCorrect) {
    entry.correct += 1;
  } else {
    entry.incorrect += 1;
  }

  entry.lastAnsweredAt = new Date().toISOString();
  entry.lastResult = isCorrect ? 'correct' : 'incorrect';

  progressMap[cardId] = entry;
  writeProgress(progressMap);
};

export const getCardProgress = (cardId: string): ProgressEntry | null => {
  const progressMap = readProgress();
  return progressMap[cardId] || null;
};

export const getRedoDeck = (allCards: Flashcard[]): Flashcard[] => {
  const progressMap = readProgress();

  return allCards.filter(card => {
    const progress = progressMap[card.id];
    if (!progress) return false;

    // Card needs redo if incorrect count > correct count
    return progress.incorrect > progress.correct;
  });
};

export const calculateStats = (allCards: Flashcard[]) => {
  const progressMap = readProgress();

  let totalCorrect = 0;
  let totalIncorrect = 0;
  let studiedCards = 0;

  allCards.forEach(card => {
    const progress = progressMap[card.id];
    if (progress && (progress.correct > 0 || progress.incorrect > 0)) {
      studiedCards += 1;
      totalCorrect += progress.correct;
      totalIncorrect += progress.incorrect;
    }
  });

  const totalAttempts = totalCorrect + totalIncorrect;
  const accuracy = totalAttempts > 0 ? (totalCorrect / totalAttempts) * 100 : 0;

  return {
    studiedCards,
    totalCorrect,
    totalIncorrect,
    totalAttempts,
    accuracy: Math.round(accuracy),
  };
};
