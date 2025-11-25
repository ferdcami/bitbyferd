function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-4xl px-4">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 text-brand-heading">BitByFerd</h1>
        <p className="text-2xl md:text-3xl text-brand-primary mb-4">Where code meets clarity</p>
        <p className="text-lg text-brand-text mb-12 max-w-2xl mx-auto">
          A hub for projects, learning, and innovation in technology and software development.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/cv"
            className="px-8 py-4 bg-brand-primary text-white rounded-lg hover:bg-opacity-90 transition-all executive-shadow font-semibold"
          >
            View CV
          </a>
          <a
            href="/projects"
            className="px-8 py-4 bg-brand-secondary text-white rounded-lg hover:bg-opacity-90 transition-all executive-shadow font-semibold"
          >
            Explore Projects
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
