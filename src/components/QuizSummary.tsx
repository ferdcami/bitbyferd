interface QuizSummaryProps {
  totalQuestions: number;
  correctAnswers: number;
  onRestart: () => void;
  onBackToStudy: () => void;
}

function QuizSummary({
  totalQuestions,
  correctAnswers,
  onRestart,
  onBackToStudy,
}: QuizSummaryProps) {
  const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

  const getGrade = (): { emoji: string; message: string; color: string } => {
    if (accuracy >= 90) return { emoji: '🌟', message: 'Outstanding!', color: 'text-yellow-400' };
    if (accuracy >= 75) return { emoji: '🎉', message: 'Great Job!', color: 'text-green-400' };
    if (accuracy >= 60) return { emoji: '👍', message: 'Good Work!', color: 'text-brand-primary' };
    if (accuracy >= 40)
      return { emoji: '📚', message: 'Keep Practicing!', color: 'text-brand-secondary' };
    return { emoji: '💪', message: 'Keep Going!', color: 'text-red-400' };
  };

  const grade = getGrade();

  return (
    <div className="max-w-2xl mx-auto">
      <div className="card text-center">
        {/* Emoji */}
        <div className="text-8xl mb-6">{grade.emoji}</div>

        {/* Title */}
        <h2 className={`text-4xl font-bold mb-4 ${grade.color}`}>{grade.message}</h2>

        {/* Score */}
        <div className="mb-8">
          <div className="text-6xl font-bold text-brand-heading mb-2">{accuracy}%</div>
          <div className="text-brand-text">
            {correctAnswers} out of {totalQuestions} correct
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto">
          <div className="card bg-brand-bg">
            <div className="text-2xl font-bold text-brand-primary">{totalQuestions}</div>
            <div className="text-xs text-brand-text/70">Questions</div>
          </div>
          <div className="card bg-brand-bg">
            <div className="text-2xl font-bold text-green-500">{correctAnswers}</div>
            <div className="text-xs text-brand-text/70">Correct</div>
          </div>
          <div className="card bg-brand-bg">
            <div className="text-2xl font-bold text-red-500">{totalQuestions - correctAnswers}</div>
            <div className="text-xs text-brand-text/70">Incorrect</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={onRestart} className="btn-primary">
            Try Again
          </button>
          <button onClick={onBackToStudy} className="btn-secondary">
            Back to Study Mode
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizSummary;
