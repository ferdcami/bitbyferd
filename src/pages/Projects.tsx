function Projects() {
  const projects = [
    {
      id: 1,
      icon: '🇦🇱',
      title: 'Albanian Flashcards',
      description:
        'Interactive language learning tool with verbs, numbers, and nouns. Features quiz modes and progress tracking.',
      status: 'Coming Soon',
      statusColor: 'text-brand-primary',
    },
    {
      id: 2,
      icon: '🚀',
      title: 'Project Two',
      description: 'Another exciting project in development. Stay tuned for updates!',
      status: 'In Development',
      statusColor: 'text-brand-secondary',
      opacity: 'opacity-60',
    },
    {
      id: 3,
      icon: '💡',
      title: 'Project Three',
      description: 'More innovation coming soon. Check back for updates!',
      status: 'Planning',
      statusColor: 'text-brand-secondary',
      opacity: 'opacity-60',
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="content-container">
        <div className="text-center mb-16">
          <h1 className="text-headline mb-4 text-brand-heading">Vibe Coding Projects</h1>
          <p className="text-body-large text-brand-text">
            Explore my portfolio of innovative tools and applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className={`card-hover ${project.opacity || ''}`}>
              <div className="text-5xl mb-4">{project.icon}</div>
              <h3 className="text-2xl font-bold text-brand-heading mb-3">{project.title}</h3>
              <p className="text-brand-text mb-6 leading-relaxed">{project.description}</p>
              <span className={`${project.statusColor} font-semibold`}>{project.status} →</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
