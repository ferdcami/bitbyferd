function CV() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-8 text-brand-heading">Curriculum Vitae</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4 text-brand-primary">Professional Summary</h2>
            <p className="text-brand-text text-lg leading-relaxed">
              Technology executive specializing in legal tech, cloud hosting, and AI-enabled
              workflows.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-brand-primary">Experience</h2>
            <div className="bg-brand-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-heading mb-2">
                Vice President, Global Hosted Services
              </h3>
              <p className="text-brand-secondary mb-2">KLDiscovery</p>
              <p className="text-brand-text mb-4">2020 – Present</p>
              <ul className="list-disc list-inside space-y-2 text-brand-text">
                <li>Oversaw 2 PB of active hosting infrastructure</li>
                <li>Led migrations from Relativity Server to RelativityOne using ARM</li>
                <li>Improved reliability and cost efficiency across global operations</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-brand-primary">Education</h2>
            <div className="bg-brand-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-heading mb-2">
                B.S., Information Assurance & Security Engineering
              </h3>
              <p className="text-brand-secondary">DePaul University</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-brand-primary">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {['Leadership', 'Cloud Hosting', 'Relativity/ARM', 'AI/Automation', 'Security'].map(
                skill => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-brand-secondary text-white rounded-lg font-semibold"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </section>

          <div className="pt-8">
            <button className="px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-opacity-90 transition-all executive-shadow font-semibold">
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV;
