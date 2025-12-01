function Projects() {
  const projects = [
    {
      id: 1,
      icon: '🇦🇱',
      title: 'Albanian Flashcards',
      description:
        'Interactive language learning tool featuring verbs, numbers, and nouns with multiple quiz modes, progress tracking, and statistics.',
      status: 'Coming Soon',
      statusColor: 'text-brand-primary',
      featured: true,
      tags: ['React', 'TypeScript', 'Education'],
    },
    {
      id: 2,
      icon: '🚀',
      title: 'Project Two',
      description:
        'Another exciting project in development. This space is reserved for the next innovative tool or application.',
      status: 'In Development',
      statusColor: 'text-brand-secondary',
      featured: false,
      tags: ['TBD'],
    },
    {
      id: 3,
      icon: '💡',
      title: 'Project Three',
      description:
        'More innovation coming soon. Future projects will be showcased here as they progress.',
      status: 'Planning',
      statusColor: 'text-brand-text/50',
      featured: false,
      tags: ['TBD'],
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="content-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-headline mb-4 text-brand-heading">Vibe Coding Projects</h1>
          <p className="text-body-large text-brand-text max-w-2xl mx-auto">
            Explore my portfolio of innovative tools and applications, from language learning to
            productivity enhancements.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div
              key={project.id}
              className={`group relative bg-brand-muted rounded-lg p-8 executive-shadow hover:executive-glow transition-all cursor-pointer flex flex-col ${
                project.featured ? '' : 'opacity-70 hover:opacity-100'
              }`}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  Featured
                </div>
              )}

              {/* Icon */}
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">
                {project.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-brand-heading mb-3">{project.title}</h3>

              {/* Description */}
              <p className="text-brand-text leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-brand-bg rounded-full text-brand-text/70 font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Status with Arrow */}
              <div className="flex items-center justify-between pt-4 border-t border-brand-text/10">
                <span className={`${project.statusColor} font-semibold text-sm`}>
                  {project.status}
                </span>
                <svg
                  className="w-5 h-5 text-brand-primary group-hover:translate-x-2 transition-transform"
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
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="card inline-block max-w-2xl">
            <h3 className="text-xl font-bold text-brand-heading mb-3">Have a Project Idea?</h3>
            <p className="text-brand-text mb-6">
              I'm always interested in collaborating on interesting projects or hearing about new
              ideas. Let's build something great together!
            </p>
            <a href="/contact" className="btn-primary inline-flex items-center gap-2">
              Get in Touch
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
