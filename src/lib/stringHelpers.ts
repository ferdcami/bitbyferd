/**
 * Remove diacritical marks from Albanian text
 * Example: "një" -> "nje", "çare" -> "care"
 */
export const removeDiacritics = (text: string): string => {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

/**
 * Normalize string for comparison (lowercase, trim, remove diacritics)
 * Example: "  Një  " -> "nje"
 */
export const normalizeString = (text: string): string => {
  return removeDiacritics(text).toLowerCase().trim();
};

/**
 * Check if two strings match after normalization
 */
export const stringsMatch = (a: string, b: string): boolean => {
  return normalizeString(a) === normalizeString(b);
};