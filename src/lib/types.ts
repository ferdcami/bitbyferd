// Flashcard types
export type CardType = 'verb' | 'number' | 'noun';

export interface Flashcard {
  id: string;
  albanian: string;
  english: string;
  type: CardType;
}

// Progress tracking types
export interface ProgressEntry {
  correct: number;
  incorrect: number;
  lastAnsweredAt: string;
  lastResult?: 'correct' | 'incorrect';
}

export type ProgressMap = Record<string, ProgressEntry>;

// User preferences
export interface UserPrefs {
  activeDecks: CardType[];
  quizMode: 'mcq' | 'fitb';
}

// Study mode types
export type StudyMode = 'study' | 'redo' | 'quiz';
export type QuizMode = 'mcq' | 'fitb';
