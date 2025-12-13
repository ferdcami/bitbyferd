import { useEffect } from 'react';
import { animateHeadlineReveal, animateBackgroundPulse } from '../lib/animations';
import { splitTextIntoChars } from '../lib/textSplitter';
import MetaTags from '../components/MetaTags';

function Home() {
  useEffect(() => {
    animateHeadlineReveal('.hero-headline');
    animateBackgroundPulse('.bg-pulse');
  }, []);

  return (
        <>
      <MetaTags
        title="Ferd Cami | VP Global Legal Services & Web Developer"
        description="Personal portfolio of Ferd Cami showcasing projects, learning tools, and innovative web solutions. Explore Albanian language learning app and modern web development work."
        canonical="https://bitbyferd.com"
        ogImage="https://bitbyferd.com/og-home.png"
      />

    <main id="main-content" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background animation container */}
      <div className="absolute inset-0 opacity-10 bg-pulse" aria-hidden="true">
        <div className="absolute top-20 left-20 w-72 h-72 bg-brand-primary rounded-full mix-blend-multiply filter blur-3xl dot"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-brand-secondary rounded-full mix-blend-multiply filter blur-3xl dot"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        {/* Main headline */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-black tracking-tight mb-4 text-white hero-headline">
            {splitTextIntoChars('BitByFerd')}
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto rounded-full" aria-hidden="true"></div>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-brand-primary mb-6 font-light">
          Where code meets clarity
        </p>

        {/* Description */}
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          A personal hub for innovative projects, continuous learning, and exploring the
          intersection of technology and practical solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/cv"
            className="px-8 py-3 bg-brand-primary text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors focus:outline-none"
            aria-label="View my CV"
          >
            View CV
          </a>
          <a
            href="/projects"
            className="px-8 py-3 bg-brand-secondary text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors focus:outline-none"
            aria-label="Explore my projects"
          >
            Explore Projects
          </a>
        </div>
      </div>
    </main>
    </>
  );
}

export default Home;