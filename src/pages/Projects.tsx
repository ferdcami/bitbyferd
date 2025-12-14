import { useEffect } from 'react';
import { animateStaggerFadeIn, animateCardHover } from '../lib/animations';
import MetaTags from '../components/MetaTags';

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  icon?: string;
  link: string;
  featured?: boolean;
  tags?: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Albanian Flashcards',
    description: 'A comprehensive language learning tool with 60+ flashcards, multiple study modes, and progress tracking. Features include flip animations, quiz modes (MCQ & fill-in-the-blank), and persistent LocalStorage.',
    icon: '📚',
    link: '/projects/flashcards',
    featured: true,
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Language Learning'],
  },
  {
    id: 2,
    title: 'Portfolio Site',
    description: 'This site! A modern, responsive personal website built with React, Vite, and TailwindCSS. Showcasing executive-modern design with smooth animations and semantic HTML.',
    icon: '🌐',
    link: '/',
    featured: false,
    tags: ['React', 'Vite', 'TailwindCSS', 'Animation'],
  },
  {
    id: 3,
    title: 'Coming Soon',
    description: 'Future projects in development. Stay tuned for updates on new learning tools, technical explorations, and innovative solutions.',
    icon: '🚀',
    link: '#',
    featured: false,
    tags: ['Upcoming'],
  },
];

function Projects() {
  useEffect(() => {
    // Animate project cards on page load
    animateStaggerFadeIn('.project-card', 150, 300);
  }, []);

  return (
    <>
      <MetaTags
        title="Projects | BitByFerd"
        description="Explore projects showcasing modern web development practices. Featured: Albanian language learning app with interactive flashcards, progress tracking, and multiple study modes."
        canonical="https://bitbyferd.com/projects"
        ogImage="https://bitbyferd.com/og-projects.png"
        ogType="article"
      />
    <main id="main-content" className="min-h-screen py-16 px-6 md:px-12">
    <div className="min-h-screen py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            Vibe Coding Projects
          </h1>
          <p className="text-xl text-gray-400">
            A collection of projects showcasing modern web development practices, innovative solutions, and continuous learning.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
              <div
                key={project.id}
                className="project-card group relative bg-brand-muted rounded-lg p-8 executive-shadow hover:executive-glow transition-all cursor-pointer flex flex-col h-full"
                style={{ opacity: 0 }}
                onMouseEnter={(e) => animateCardHover(e.currentTarget, true)}
                onMouseLeave={(e) => animateCardHover(e.currentTarget, false)}
                role="article"
                aria-label={`${project.title} project`}
              >
              {/* Icon */}
              {project.icon && (
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
              )}

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tags */}
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-brand-primary/20 text-brand-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* CTA Button */}
              {project.link !== '#' && (
                <a
                  href={project.link}
                  className="inline-block px-6 py-2 bg-brand-primary text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors w-fit focus:outline-none"
                  aria-label={`Explore ${project.title}`}
                >
                  Explore →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </main>
    </>
  );
}

export default Projects;