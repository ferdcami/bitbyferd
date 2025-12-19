import { describe, it, expect, beforeEach } from 'vitest';
import { 
  readProgress, 
  writeProgress, 
  markAnswer, 
  getCardProgress,
  calculateStats,
  getRedoDeck 
} from '../progressHelpers';
import type { Flashcard, ProgressMap } from '../types';

describe('progressHelpers', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  describe('markAnswer', () => {
    it('should mark a card as correct', () => {
      markAnswer('verb-001', true);
      const progress = readProgress();
      expect(progress['verb-001'].correct).toBe(1);
      expect(progress['verb-001'].incorrect).toBe(0);
    });

    it('should mark a card as incorrect', () => {
      markAnswer('verb-001', false);
      const progress = readProgress();
      expect(progress['verb-001'].correct).toBe(0);
      expect(progress['verb-001'].incorrect).toBe(1);
    });

    it('should increment counters on multiple marks', () => {
      markAnswer('verb-001', true);
      markAnswer('verb-001', true);
      markAnswer('verb-001', false);
      
      const progress = readProgress();
      expect(progress['verb-001'].correct).toBe(2);
      expect(progress['verb-001'].incorrect).toBe(1);
    });
  });

  describe('getCardProgress', () => {
    it('should return null for unstudied card', () => {
      const progress = getCardProgress('verb-001');
      expect(progress).toBeNull();
    });

    it('should return progress for studied card', () => {
      markAnswer('verb-001', true);
      markAnswer('verb-001', true);
      markAnswer('verb-001', false);
      
      const progress = getCardProgress('verb-001');
      expect(progress?.correct).toBe(2);
      expect(progress?.incorrect).toBe(1);
    });
  });

  describe('calculateStats', () => {
    it('should calculate stats correctly', () => {
      const cards: Flashcard[] = [
        { id: 'verb-001', albanian: 'shkoj', english: 'to go', type: 'verb' },
        { id: 'verb-002', albanian: 'pi', english: 'to drink', type: 'verb' },
        { id: 'num-001', albanian: 'një', english: 'one', type: 'number' },
      ];

      markAnswer('verb-001', true);
      markAnswer('verb-001', true);
      markAnswer('verb-002', false);

      const stats = calculateStats(cards);
      expect(stats.studiedCards).toBe(2);
      expect(stats.totalCorrect).toBe(2);
      expect(stats.totalIncorrect).toBe(1);
      expect(stats.accuracy).toBe(67);
    });

    it('should handle empty stats', () => {
      const cards: Flashcard[] = [];
      const stats = calculateStats(cards);
      expect(stats.accuracy).toBe(0);
      expect(stats.totalCorrect).toBe(0);
    });
  });

  describe('getRedoDeck', () => {
    it('should return cards with more incorrect than correct', () => {
      const cards: Flashcard[] = [
        { id: 'verb-001', albanian: 'shkoj', english: 'to go', type: 'verb' },
        { id: 'verb-002', albanian: 'pi', english: 'to drink', type: 'verb' },
      ];

      markAnswer('verb-001', true);
      markAnswer('verb-001', true);
      markAnswer('verb-002', false);
      markAnswer('verb-002', false);

      const redoDeck = getRedoDeck(cards);
      expect(redoDeck).toHaveLength(1);
      expect(redoDeck[0].id).toBe('verb-002');
    });

    it('should return empty array when no weak cards', () => {
      const cards: Flashcard[] = [
        { id: 'verb-001', albanian: 'shkoj', english: 'to go', type: 'verb' },
      ];

      markAnswer('verb-001', true);
      markAnswer('verb-001', true);

      const redoDeck = getRedoDeck(cards);
      expect(redoDeck).toHaveLength(0);
    });
  });
});