import { useState, useEffect } from 'react';
import FlashcardCard from '../components/FlashcardCard';
import DeckControls from '../components/DeckControls';
import verbsData from '../data/flashcards/verbs.json';
import numbersData from '../data/flashcards/numbers.json';
import nounsData from '../data/flashcards/nouns.json';
import type { Flashcard, CardType, StudyMode } from '../lib/types';
import { markAnswer, getCardProgress, calculateStats, getRedoDeck } from '../lib/progressHelpers';

function Flashcards() {
  const [allCards] = useState<Flashcard[]>([
    ...(verbsData as Flashcard[]),
    ...(numbersData as Flashcard[]),
    ...(nounsData as Flashcard[]),
  ]);

  const [activeTypes, setActiveTypes] = useState<CardType[]>(['verb', 'number', 'noun']);
  const [studyMode, setStudyMode] = useState<StudyMode>('study');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackType, setFeedbackType] = useState<'correct' | 'incorrect' | null>(null);
  const [showControls, setShowControls] = useState(true);

  // Filter cards based on active types and study mode
  const getFilteredCards = (): Flashcard[] => {
    let filtered = allCards.filter(card => activeTypes.includes(card.type));

    if (studyMode === 'redo') {
      filtered = getRedoDeck(filtered);
    }

    return filtered;
  };

  const filteredCards = getFilteredCards();
  const currentCard = filteredCards[currentIndex] || filteredCards[0];
  const totalCards = filteredCards.length;
  const cardProgress = currentCard ? getCardProgress(currentCard.id) : null;
  const stats = calculateStats(allCards);
  const redoCount = getRedoDeck(allCards).length;

  // Reset to first card when filters change
  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setShowFeedback(false);
    setFeedbackType(null);
  }, [activeTypes, studyMode]);

  // Handle type toggle
  const handleToggleType = (type: CardType) => {
    if (activeTypes.includes(type)) {
      // Don't allow removing all types
      if (activeTypes.length > 1) {
        setActiveTypes(activeTypes.filter(t => t !== type));
      }
    } else {
      setActiveTypes([...activeTypes, type]);
    }
  };

  // Handle mode change
  const handleChangeMode = (mode: StudyMode) => {
    if (mode !== 'quiz') {
      setStudyMode(mode);
    }
  };

  // Handle next card
  const handleNext = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
      setShowFeedback(false);
      setFeedbackType(null);
    }
  };

  // Handle previous card
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
      setShowFeedback(false);
      setFeedbackType(null);
    }
  };

  // Handle marking answer
  const handleMarkAnswer = (isCorrect: boolean) => {
    if (!currentCard) return;

    markAnswer(currentCard.id, isCorrect);

    // Show feedback
    setFeedbackType(isCorrect ? 'correct' : 'incorrect');
    setShowFeedback(true);

    // Auto advance after 1 second
    setTimeout(() => {
      handleNext();
    }, 1000);
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if (!showFeedback && !showControls) {
          setIsFlipped(prev => !prev);
        }
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (!showFeedback && !showControls) {
          handleNext();
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (!showFeedback && !showControls) {
          handlePrev();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex, totalCards, showFeedback, showControls]);

  return (
    <div className="min-h-screen py-16">
      <div className="content-container">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-headline mb-4 text-brand-heading">Albanian Flashcards</h1>
          <p className="text-body-large text-brand-text mb-4">Interactive Language Learning</p>

          {/* Toggle Controls Button */}
          <button onClick={() => setShowControls(!showControls)} className="btn-secondary text-sm">
            {showControls ? 'Hide' : 'Show'} Settings
          </button>
        </div>

        {/* Deck Controls */}
        {showControls && (
          <div className="max-w-4xl mx-auto mb-8">
            <div className="card">
              <DeckControls
                activeTypes={activeTypes}
                onToggleType={handleToggleType}
                studyMode={studyMode}
                onChangeMode={handleChangeMode}
                redoCount={redoCount}
              />
            </div>
          </div>
        )}

        {/* Empty State */}
        {totalCards === 0 ? (
          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="text-6xl mb-4">📭</div>
            <h2 className="text-2xl font-bold text-brand-heading mb-3">
              {studyMode === 'redo' ? 'No Cards Need Review!' : 'No Cards Available'}
            </h2>
            <p className="text-brand-text mb-6">
              {studyMode === 'redo'
                ? "Great job! You haven't marked any cards as incorrect yet. Keep studying in Study mode!"
                : 'Please select at least one deck type to begin studying.'}
            </p>
            {studyMode === 'redo' && (
              <button onClick={() => setStudyMode('study')} className="btn-primary">
                Switch to Study Mode
              </button>
            )}
          </div>
        ) : (
          <>
            {/* Stats Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="card">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-brand-primary">
                      {stats.studiedCards}/{allCards.length}
                    </div>
                    <div className="text-xs text-brand-text/70">Studied</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-500">{stats.totalCorrect}</div>
                    <div className="text-xs text-brand-text/70">Correct</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-500">{stats.totalIncorrect}</div>
                    <div className="text-xs text-brand-text/70">Incorrect</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-secondary">{stats.accuracy}%</div>
                    <div className="text-xs text-brand-text/70">Accuracy</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress indicator */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-brand-text text-sm">
                  Card {currentIndex + 1} of {totalCards}
                  {studyMode === 'redo' && (
                    <span className="text-brand-secondary ml-2">(Redo Mode)</span>
                  )}
                </span>
                <span className="text-brand-text/70 text-sm">
                  {cardProgress
                    ? `✓ ${cardProgress.correct} | ✗ ${cardProgress.incorrect}`
                    : 'Not studied yet'}
                </span>
              </div>
              <div className="w-full bg-brand-muted rounded-full h-2">
                <div
                  className="bg-brand-primary rounded-full h-2 transition-all duration-300"
                  style={{
                    width: `${Math.min(((currentIndex + 1) / totalCards) * 100, 100)}%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Feedback overlay */}
            {showFeedback && (
              <div className="max-w-2xl mx-auto mb-4">
                <div
                  className={`card text-center ${
                    feedbackType === 'correct'
                      ? 'bg-green-500/20 border-2 border-green-500'
                      : 'bg-red-500/20 border-2 border-red-500'
                  }`}
                >
                  <div className="text-2xl font-bold">
                    {feedbackType === 'correct' ? '✓ Correct!' : '✗ Keep Practicing!'}
                  </div>
                </div>
              </div>
            )}

            {/* Flashcard */}
            <div className="mb-12">
              <FlashcardCard
                card={currentCard}
                isFlipped={isFlipped}
                onFlip={() => !showFeedback && setIsFlipped(!isFlipped)}
                onMarkCorrect={() => handleMarkAnswer(true)}
                onMarkIncorrect={() => handleMarkAnswer(false)}
              />
            </div>

            {/* Navigation controls */}
            <div className="max-w-2xl mx-auto">
              <div className="flex justify-between items-center gap-4">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0 || showFeedback}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                    currentIndex === 0 || showFeedback
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
                  <div>Arrow keys to navigate</div>
                  <div>Space/Enter to flip</div>
                </div>

                <button
                  onClick={handleNext}
                  disabled={currentIndex === totalCards - 1 || showFeedback}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                    currentIndex === totalCards - 1 || showFeedback
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
          </>
        )}
      </div>
    </div>
  );
}

export default Flashcards;
