import type { ProgressMap, UserPrefs, CardType } from './types';

// LocalStorage keys
const PROGRESS_KEY = 'bbf_progress_v1';
const PREFS_KEY = 'bbf_prefs_v1';

// Progress tracking functions
export const readProgress = (): ProgressMap => {
  try {
    const stored = localStorage.getItem(PROGRESS_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error('Error reading progress:', error);
    return {};
  }
};

export const writeProgress = (progressMap: ProgressMap): void => {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progressMap));
  } catch (error) {
    console.error('Error writing progress:', error);
  }
};

export const clearProgress = (): void => {
  try {
    localStorage.removeItem(PROGRESS_KEY);
  } catch (error) {
    console.error('Error clearing progress:', error);
  }
};

// User preferences functions
export const readPrefs = (): UserPrefs => {
  try {
    const stored = localStorage.getItem(PREFS_KEY);
    return stored ? JSON.parse(stored) : getDefaultPrefs();
  } catch (error) {
    console.error('Error reading preferences:', error);
    return getDefaultPrefs();
  }
};

export const writePrefs = (prefs: UserPrefs): void => {
  try {
    localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
  } catch (error) {
    console.error('Error writing preferences:', error);
  }
};

export const getDefaultPrefs = (): UserPrefs => {
  return {
    activeDecks: ['verb', 'number', 'noun'] as CardType[],
    quizMode: 'mcq',
  };
};
