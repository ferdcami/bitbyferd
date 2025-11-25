import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import CV from './pages/CV';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        {/* Navigation Bar */}
        <nav className="bg-brand-muted border-b border-brand-text/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link
                to="/"
                className="text-2xl font-extrabold text-brand-heading hover:text-brand-primary transition-colors"
              >
                BitByFerd
              </Link>
              <div className="flex space-x-8">
                <Link
                  to="/"
                  className="text-brand-text hover:text-brand-primary transition-colors font-semibold"
                >
                  Home
                </Link>
                <Link
                  to="/cv"
                  className="text-brand-text hover:text-brand-primary transition-colors font-semibold"
                >
                  CV
                </Link>
                <Link
                  to="/projects"
                  className="text-brand-text hover:text-brand-primary transition-colors font-semibold"
                >
                  Projects
                </Link>
                <Link
                  to="/contact"
                  className="text-brand-text hover:text-brand-primary transition-colors font-semibold"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-brand-muted border-t border-brand-text/10 py-8">
          <div className="max-w-7xl mx-auto px-4 text-center text-brand-text">
            <p>&copy; 2025 BitByFerd. Where code meets clarity.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

// 404 Not Found Component
function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold mb-4 text-brand-heading">404</h1>
        <p className="text-2xl text-brand-text mb-8">Page not found</p>
        <Link
          to="/"
          className="px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-opacity-90 transition-all executive-shadow font-semibold inline-block"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default App;
