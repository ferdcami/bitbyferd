import { useState, useEffect } from 'react';
import MetaTags from '../components/MetaTags';
import { animateStaggerFadeIn } from '../lib/animations';

function CV() {
  const [cvData, setCvData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showMedia, setShowMedia] = useState<'infographic' | 'slideshow' | null>(null);

  useEffect(() => {
    const loadCV = async () => {
      try {
        const response = await fetch('/data/cv.json');
        if (!response.ok) throw new Error('Failed to load CV');
        const data = await response.json();
        setCvData(data);
      } catch (error) {
        console.error('Error loading CV:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCV();
  }, []);

  useEffect(() => {
    if (!loading && cvData) {
      animateStaggerFadeIn('.cv-section', 100, 400);
    }
  }, [loading, cvData]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-brand-text">Loading CV...</p>
      </div>
    );
  }

  if (!cvData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-brand-text">Error loading CV</p>
      </div>
    );
  }

  return (
    <>
      <MetaTags
        title="CV"
        description="Ferdinand Cami — Vice President, Global Legal Hosted Services. View my professional experience, education, and technical expertise."
      />

      <main id="main-content" className="min-h-screen py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 cv-section" style={{ opacity: 0 }}>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-2">
              {cvData.name}
            </h1>
            <p className="text-2xl text-brand-primary font-semibold mb-4">
              {cvData.title}
            </p>
            <p className="text-lg text-brand-text mb-6">
              {cvData.summary}
            </p>

            {/* Media Dropdown */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="relative">
                <button
                  onClick={() => setShowMedia(showMedia === 'infographic' ? null : 'infographic')}
                  className="px-6 py-3 bg-brand-primary text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors flex items-center gap-2"
                  aria-label="Toggle infographic"
                >
                  📊 Infographic
                  <span className="ml-2 text-sm">
                    {showMedia === 'infographic' ? '▼' : '▶'}
                  </span>
                </button>
              </div>

              <div className="relative">
                <button
                  onClick={() => setShowMedia(showMedia === 'slideshow' ? null : 'slideshow')}
                  className="px-6 py-3 bg-brand-secondary text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors flex items-center gap-2"
                  aria-label="Toggle slide show"
                >
                  📑 Slide Show
                  <span className="ml-2 text-sm">
                    {showMedia === 'slideshow' ? '▼' : '▶'}
                  </span>
                </button>
              </div>

              {/* Download CV Button */}
              <a
                href="https://drive.google.com/file/d/1uFinA8pqWUD9r3kH7nRFYHkz5uUAMXvh/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-brand-muted text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-2"
                aria-label="Download CV as PDF"
              >
                💾 Download CV
              </a>
            </div>

            {/* Infographic Display */}
            {showMedia === 'infographic' && (
              <div className="mb-12 bg-brand-muted rounded-lg p-6 animate-fadeIn">
                <h2 className="text-2xl font-bold text-white mb-4">Executive Profile</h2>
                <img
                  src="/media/executive-profile-infographic.png"
                  alt="Ferdinand Cami Executive Profile Infographic"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            )}

            {/* Slide Show Display */}
            {showMedia === 'slideshow' && (
              <div className="mb-12 bg-brand-muted rounded-lg p-6 animate-fadeIn">
                <h2 className="text-2xl font-bold text-white mb-4">Executive Presentation</h2>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg" style={{ aspectRatio: '16/9' }}>
                  <iframe
                    src="https://drive.google.com/file/d/1SbQP1zDH5X4xA_JVW1KcPXqdVyXtQOWd/preview"
                    title="Ferdinand Cami Executive Presentation"
                    className="w-full h-full"
                    style={{ minHeight: '600px' }}
                    allow="autoplay"
                  />
                </div>
                <p className="text-brand-text/70 text-sm mt-4">
                  💡 Tip: Use arrow keys or scroll to navigate the presentation
                </p>
              </div>
            )}
          </div>

          {/* Experience Section */}
          <section className="mb-12 cv-section" style={{ opacity: 0 }}>
            <h2 className="text-3xl font-bold text-white mb-6 border-b-2 border-brand-primary pb-3">
              Experience
            </h2>
            <div className="space-y-8">
              {cvData.experience?.map((job: any, idx: number) => (
                <div key={idx} className="border-l-4 border-brand-primary pl-6">
                  <h3 className="text-2xl font-bold text-brand-primary">
                    {job.role}
                  </h3>
                  <p className="text-lg text-brand-text font-semibold">
                    {job.company}
                  </p>
                  <p className="text-sm text-brand-text/70 mb-3">
                    {job.period} • {job.location}
                  </p>
                  <ul className="space-y-2">
                    {job.highlights?.map((highlight: string, hIdx: number) => (
                      <li
                        key={hIdx}
                        className="text-brand-text flex items-start gap-3"
                      >
                        <span className="text-brand-primary mt-1">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-12 cv-section" style={{ opacity: 0 }}>
            <h2 className="text-3xl font-bold text-white mb-6 border-b-2 border-brand-secondary pb-3">
              Education
            </h2>
            <div className="space-y-6">
              {cvData.education?.map((edu: any, idx: number) => (
                <div key={idx} className="border-l-4 border-brand-secondary pl-6">
                  <h3 className="text-xl font-bold text-brand-secondary">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-brand-text font-semibold">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-brand-text/70">
                    {edu.location}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-12 cv-section" style={{ opacity: 0 }}>
            <h2 className="text-3xl font-bold text-white mb-6 border-b-2 border-brand-primary pb-3">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cvData.skills?.map((skillGroup: any, idx: number) => (
                <div key={idx}>
                  <h3 className="text-lg font-bold text-brand-primary mb-3">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items?.map((skill: string, sIdx: number) => (
                      <span
                        key={sIdx}
                        className="px-4 py-2 bg-brand-primary/20 text-brand-primary rounded-full text-sm font-medium hover:bg-brand-primary/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          {cvData.certifications && cvData.certifications.length > 0 && (
            <section className="cv-section" style={{ opacity: 0 }}>
              <h2 className="text-3xl font-bold text-white mb-6 border-b-2 border-brand-secondary pb-3">
                Certifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cvData.certifications?.map((cert: any, idx: number) => (
                  <div
                    key={idx}
                    className="bg-brand-muted rounded-lg p-4 flex items-start gap-3"
                  >
                    <span className="text-2xl">🏆</span>
                    <div>
                      <h3 className="font-bold text-white">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-brand-text/70">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  );
}

export default CV;