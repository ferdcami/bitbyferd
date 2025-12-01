import verbsData from '../data/flashcards/verbs.json';
import numbersData from '../data/flashcards/numbers.json';
import nounsData from '../data/flashcards/nouns.json';
import type { Flashcard } from '../lib/types';

function FlashcardsTest() {
  const verbs = verbsData as Flashcard[];
  const numbers = numbersData as Flashcard[];
  const nouns = nounsData as Flashcard[];

  const totalCards = verbs.length + numbers.length + nouns.length;

  return (
    <div className="min-h-screen py-16">
      <div className="content-narrow">
        <h1 className="text-headline mb-8 text-brand-heading">Flashcard Data Test</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="card text-center">
            <div className="text-4xl mb-2">📚</div>
            <div className="text-3xl font-bold text-brand-primary mb-2">{verbs.length}</div>
            <div className="text-brand-text">Verbs</div>
          </div>

          <div className="card text-center">
            <div className="text-4xl mb-2">🔢</div>
            <div className="text-3xl font-bold text-brand-secondary mb-2">{numbers.length}</div>
            <div className="text-brand-text">Numbers</div>
          </div>

          <div className="card text-center">
            <div className="text-4xl mb-2">🏠</div>
            <div className="text-3xl font-bold text-brand-primary mb-2">{nouns.length}</div>
            <div className="text-brand-text">Nouns</div>
          </div>
        </div>

        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-brand-heading mb-4">
            Total Flashcards: {totalCards}
          </h2>
          <p className="text-brand-text">All flashcard data files are loaded correctly! ✅</p>
        </div>

        <div className="space-y-6">
          {/* Sample Verbs */}
          <div>
            <h3 className="text-xl font-bold text-brand-heading mb-3">Sample Verbs (First 5)</h3>
            <div className="grid grid-cols-1 gap-3">
              {verbs.slice(0, 5).map(card => (
                <div key={card.id} className="card flex justify-between items-center">
                  <span className="text-brand-primary font-semibold">{card.albanian}</span>
                  <span className="text-brand-text">{card.english}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sample Numbers */}
          <div>
            <h3 className="text-xl font-bold text-brand-heading mb-3">Sample Numbers (First 5)</h3>
            <div className="grid grid-cols-1 gap-3">
              {numbers.slice(0, 5).map(card => (
                <div key={card.id} className="card flex justify-between items-center">
                  <span className="text-brand-secondary font-semibold">{card.albanian}</span>
                  <span className="text-brand-text">{card.english}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sample Nouns */}
          <div>
            <h3 className="text-xl font-bold text-brand-heading mb-3">Sample Nouns (First 5)</h3>
            <div className="grid grid-cols-1 gap-3">
              {nouns.slice(0, 5).map(card => (
                <div key={card.id} className="card flex justify-between items-center">
                  <span className="text-brand-primary font-semibold">{card.albanian}</span>
                  <span className="text-brand-text">{card.english}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlashcardsTest;
