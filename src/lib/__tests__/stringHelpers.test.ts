import { describe, it, expect } from 'vitest';
import { normalizeString, removeDiacritics } from '../stringHelpers';

describe('stringHelpers', () => {
  describe('removeDiacritics', () => {
    it('should remove Albanian diacritics', () => {
      expect(removeDiacritics('një')).toBe('nje');
      expect(removeDiacritics('dhjete')).toBe('dhjete');
      expect(removeDiacritics('çare')).toBe('care');
    });

    it('should handle mixed case', () => {
      expect(removeDiacritics('NJË')).toBe('NJE');
      expect(removeDiacritics('Një')).toBe('Nje');
    });
  });

  describe('normalizeString', () => {
    it('should normalize for comparison', () => {
      expect(normalizeString('Një')).toBe('nje');
      expect(normalizeString('  SHKOJ  ')).toBe('shkoj');
      expect(normalizeString('Ç-are')).toBe('c-are');
    });

    it('should handle edge cases', () => {
      expect(normalizeString('')).toBe('');
      expect(normalizeString('   ')).toBe('');
      expect(normalizeString('123')).toBe('123');
    });
  });
});