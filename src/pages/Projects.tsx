function Projects() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-4 text-brand-heading text-center">
          Vibe Coding Projects
        </h1>
        <p className="text-xl text-brand-text text-center mb-12">
          Explore my portfolio of innovative tools and applications
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Albanian Flashcards Project */}
          <div className="bg-brand-muted p-6 rounded-lg hover:executive-glow transition-all cursor-pointer">
            <div className="text-4xl mb-4">🇦🇱</div>
            <h3 className="text-2xl font-bold text-brand-heading mb-3">Albanian Flashcards</h3>
            <p className="text-brand-text mb-4">
              Interactive language learning tool with verbs, numbers, and nouns. Features quiz modes
              and progress tracking.
            </p>
            <span className="text-brand-primary font-semibold">Coming Soon →</span>
          </div>

          {/* Placeholder Project 2 */}
          <div className="bg-brand-muted p-6 rounded-lg hover:executive-glow transition-all cursor-pointer opacity-60">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-brand-heading mb-3">Project Two</h3>
            <p className="text-brand-text mb-4">
              Another exciting project in development. Stay tuned for updates!
            </p>
            <span className="text-brand-secondary font-semibold">In Development</span>
          </div>

          {/* Placeholder Project 3 */}
          <div className="bg-brand-muted p-6 rounded-lg hover:executive-glow transition-all cursor-pointer opacity-60">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-2xl font-bold text-brand-heading mb-3">Project Three</h3>
            <p className="text-brand-text mb-4">
              More innovation coming soon. Check back for updates!
            </p>
            <span className="text-brand-secondary font-semibold">Planning</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
