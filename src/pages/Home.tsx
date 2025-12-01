import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background container - ready for future animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-bg via-brand-bg to-brand-muted">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center content-narrow py-16">
        {/* Main headline */}
        <div className="mb-8">
          <h1 className="text-display mb-4 text-brand-heading">BitByFerd</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto rounded-full"></div>
        </div>

        {/* Tagline */}
        <p className="text-title text-brand-primary mb-6 animate-fade-in">
          Where code meets clarity
        </p>

        {/* Description */}
        <p className="text-body-large text-brand-text/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          A personal hub for innovative projects, continuous learning, and exploring the
          intersection of technology and practical solutions.
        </p>

        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/cv" className="btn-primary w-full sm:w-auto text-center group">
            <span className="flex items-center justify-center gap-2">
              View CV
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </Link>
          <Link to="/projects" className="btn-secondary w-full sm:w-auto text-center group">
            <span className="flex items-center justify-center gap-2">
              Explore Projects
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </Link>
        </div>

        {/* Quick stats or highlights */}
        <div className="mt-20 pt-12 border-t border-brand-text/10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary mb-2">10+</div>
              <div className="text-sm text-brand-text/70 uppercase tracking-wide">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-secondary mb-2">2 PB</div>
              <div className="text-sm text-brand-text/70 uppercase tracking-wide">Data Managed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary mb-2">∞</div>
              <div className="text-sm text-brand-text/70 uppercase tracking-wide">
                Learning Journey
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-brand-text/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
}

export default Home;
