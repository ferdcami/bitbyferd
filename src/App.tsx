import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const CV = lazy(() => import('./pages/CV'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Flashcards = lazy(() => import('./pages/Flashcards'));

// Loading fallback
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-brand-text">Loading...</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <NavBar />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/flashcards" element={<Flashcards />} />
          <Route path="/contact" element={<Contact />} />
          {/* Catch-all for 404 - redirect to home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;