import { useEffect, useState } from 'react';
import cvData from '../data/cv.json';
import MetaTags from '../components/MetaTags';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

interface Education {
  institution: string;
  degree: string;
  year: string;
  location: string;
}

interface Skill {
  category: string;
  items: string[];
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
}

interface CVData {
  name: string;
  title: string;
  summary: string;
  contact: {
    location: string;
    phone?: string;
    linkedin: string;
    github?: string;
    email: string;
  };
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  certifications: Certification[];
  languages?: string[];
}

function CV() {
  const [cv] = useState<CVData>(cvData as CVData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
        <>
      {/* ← ADD THIS SECTION */}
      <MetaTags
        title="CV | Ferdinand Cami"
        description="Professional CV of Ferdinand Cami - VP Global Legal Hosted Services at KLDiscovery. 18+ years in eDiscovery, legal tech, and cloud hosting. Leadership, technical expertise, and proven track record."
        canonical="https://bitbyferd.com/cv"
        ogImage="https://bitbyferd.com/og-cv.png"
      />
    <main id="main-content" className="min-h-screen py-16 px-6 md:px-12">
    <div className="min-h-screen py-16">
      <div className="content-narrow">
        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1 min-w-0">
              <h1 className="text-headline mb-2 text-brand-heading">{cv.name}</h1>
              <p className="text-xl text-brand-primary font-semibold mb-4">{cv.title}</p>
              <div className="flex flex-wrap gap-4 text-brand-text/70 text-sm">
                {cv.contact.phone && (
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    {cv.contact.phone}
                  </span>
                )}
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {cv.contact.location}
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {cv.contact.email}
                </span>
              </div>
            </div>

            {/* Avatar */}
            <div className="flex-shrink-0">
              <img
                src="/images/avatar.png"
                alt="Ferd Cami"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full executive-shadow object-cover border-4 border-brand-primary"
              />
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {/* Professional Summary */}
          <section>
            <h2 className="text-title mb-4 text-brand-primary flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Professional Summary
            </h2>
            <p className="text-body text-brand-text leading-relaxed">{cv.summary}</p>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-title mb-6 text-brand-primary flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Professional Experience
            </h2>
            <div className="space-y-8">
              {cv.experience.map((exp, index) => (
                <div key={index} className="card">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-brand-heading mb-1">{exp.role}</h3>
                    <p className="text-brand-secondary font-semibold mb-1">{exp.company}</p>
                    <div className="flex flex-wrap gap-3 text-sm text-brand-text/70">
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                        </svg>
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-3 text-brand-text text-sm leading-relaxed">
                        <span className="text-brand-primary mt-1.5 flex-shrink-0">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-title mb-6 text-brand-primary flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
              </svg>
              Education
            </h2>
            <div className="space-y-4">
              {cv.education.map((edu, index) => (
                <div key={index} className="card">
                  <h3 className="text-xl font-bold text-brand-heading mb-2">{edu.degree}</h3>
                  <p className="text-brand-secondary font-semibold mb-1">{edu.institution}</p>
                  <p className="text-sm text-brand-text/70">{edu.location}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-title mb-6 text-brand-primary flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              Skills
            </h2>
            <div className="space-y-6">
              {cv.skills.map((skillGroup, index) => (
                <div key={index}>
                  <h3 className="text-lg font-bold text-brand-heading mb-3">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-brand-secondary/20 border border-brand-secondary/50 text-brand-secondary rounded-lg font-semibold text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          {cv.certifications && cv.certifications.length > 0 && (
            <section>
              <h2 className="text-title mb-6 text-brand-primary flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Certifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cv.certifications.map((cert, index) => (
                  <div key={index} className="card">
                    <h3 className="font-bold text-brand-heading mb-1">{cert.name}</h3>
                    <p className="text-sm text-brand-text/70">
                      {cert.issuer}
                      {cert.year && ` • ${cert.year}`}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Languages */}
          {cv.languages && cv.languages.length > 0 && (
            <section>
              <h2 className="text-title mb-6 text-brand-primary flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
                Languages
              </h2>
              <div className="flex flex-wrap gap-2">
                {cv.languages.map((language, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-brand-primary/20 border border-brand-primary/50 text-brand-primary rounded-lg font-semibold"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Download Button */}
          <div className="pt-8 flex justify-center">
            <button
              className="btn-primary inline-flex items-center gap-2"
              onClick={() => alert('PDF download will be implemented in a future phase!')}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
    </main>
    </>
  );
}

export default CV;
