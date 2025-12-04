import type { CardType, StudyMode } from '../lib/types';

interface DeckControlsProps {
  activeTypes: CardType[];
  onToggleType: (type: CardType) => void;
  studyMode: StudyMode;
  onChangeMode: (mode: StudyMode) => void;
  redoCount?: number;
}

function DeckControls({
  activeTypes,
  onToggleType,
  studyMode,
  onChangeMode,
  redoCount = 0,
}: DeckControlsProps) {
  const cardTypes: { type: CardType; label: string; icon: string }[] = [
    { type: 'verb', label: 'Verbs', icon: '📚' },
    { type: 'number', label: 'Numbers', icon: '🔢' },
    { type: 'noun', label: 'Nouns', icon: '🏠' },
  ];

  const modes: { mode: StudyMode; label: string; description: string }[] = [
    { mode: 'study', label: 'Study', description: 'Learn all cards' },
    { mode: 'redo', label: 'Redo', description: `Review ${redoCount} weak cards` },
    { mode: 'quiz', label: 'Quiz', description: 'Multiple choice test' },
  ];

  return (
    <div className="space-y-6">
      {/* Deck Filters */}
      <div>
        <h3 className="text-lg font-bold text-brand-heading mb-3">Select Decks</h3>
        <div className="flex flex-wrap gap-3">
          {cardTypes.map(({ type, label, icon }) => (
            <button
              key={type}
              onClick={() => onToggleType(type)}
              className={`px-5 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                activeTypes.includes(type)
                  ? 'bg-brand-primary text-white executive-shadow'
                  : 'bg-brand-muted text-brand-text/50 hover:text-brand-text'
              }`}
            >
              <span className="text-2xl">{icon}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Study Mode Selector */}
      <div>
        <h3 className="text-lg font-bold text-brand-heading mb-3">Study Mode</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {modes.map(({ mode, label, description }) => (
            <button
              key={mode}
              onClick={() => onChangeMode(mode)}
              className={`p-4 rounded-lg text-left transition-all ${
                studyMode === mode
                  ? 'bg-brand-secondary text-white executive-shadow'
                  : 'bg-brand-muted text-brand-text hover:bg-brand-muted/80'
              }`}
            >
              <div className="font-bold mb-1">{label}</div>
              <div className="text-sm opacity-80">{description}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DeckControls;
