import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CV from './pages/CV';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <NavBar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
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
