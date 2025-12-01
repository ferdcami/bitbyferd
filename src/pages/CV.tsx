function CV() {
  return (
    <div className="min-h-screen py-16">
      <div className="content-narrow">
        <h1 className="text-headline mb-8 text-brand-heading">Curriculum Vitae</h1>

        <div className="space-y-12">
          {/* Professional Summary */}
          <section>
            <h2 className="text-title mb-4 text-brand-primary">Professional Summary</h2>
            <p className="text-body-large text-brand-text">
              Technology executive specializing in legal tech, cloud hosting, and AI-enabled
              workflows.
            </p>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-title mb-6 text-brand-primary">Experience</h2>
            <div className="card space-y-4">
              <div>
                <h3 className="text-xl font-bold text-brand-heading mb-2">
                  Vice President, Global Hosted Services
                </h3>
                <p className="text-brand-secondary font-semibold mb-1">KLDiscovery</p>
                <p className="text-brand-text text-sm mb-4">2020 – Present</p>
              </div>
              <ul className="space-y-3 text-brand-text">
                <li className="flex gap-3">
                  <span className="text-brand-primary mt-1">•</span>
                  <span>
                    Oversaw 2 PB of active hosting infrastructure with focus on reliability and cost
                    efficiency
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-primary mt-1">•</span>
                  <span>
                    Led migrations from Relativity Server to RelativityOne using ARM technology
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-primary mt-1">•</span>
                  <span>
                    Improved reliability metrics and operational efficiency across global operations
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-title mb-6 text-brand-primary">Education</h2>
            <div className="card">
              <h3 className="text-xl font-bold text-brand-heading mb-2">
                B.S., Information Assurance & Security Engineering
              </h3>
              <p className="text-brand-secondary font-semibold">DePaul University</p>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-title mb-6 text-brand-primary">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {[
                'Leadership',
                'Cloud Hosting',
                'Relativity/ARM',
                'AI/Automation',
                'Security',
                'Infrastructure',
              ].map(skill => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-brand-secondary/20 border border-brand-secondary text-brand-secondary rounded-lg font-semibold text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Download Button */}
          <div className="pt-4">
            <button className="btn-primary">Download PDF</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV;
