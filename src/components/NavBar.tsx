import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Skip to main content link (for accessibility) */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only absolute top-0 left-0 bg-brand-primary text-white px-4 py-2 m-2 rounded"
      >
        Skip to main content
      </a>

      <nav 
        aria-label="Main navigation"
        className="bg-brand-dark border-b border-brand-muted sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo/Brand */}
          <Link 
            to="/" 
            className="text-2xl font-black text-white hover:text-brand-primary transition-colors focus:outline-none"
            aria-label="BitByFerd Home"
          >
            BitByFerd
          </Link>

          {/* Nav Links */}
          <ul className="flex gap-8 list-none m-0 p-0">
            <li>
              <Link
                to="/"
                className={`font-semibold transition-colors focus:outline-none ${
                  isActive('/') ? 'text-brand-primary' : 'text-gray-300 hover:text-white'
                }`}
                aria-current={isActive('/') ? 'page' : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/cv"
                className={`font-semibold transition-colors focus:outline-none ${
                  isActive('/cv') ? 'text-brand-primary' : 'text-gray-300 hover:text-white'
                }`}
                aria-current={isActive('/cv') ? 'page' : undefined}
              >
                CV
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={`font-semibold transition-colors focus:outline-none ${
                  isActive('/projects') ? 'text-brand-primary' : 'text-gray-300 hover:text-white'
                }`}
                aria-current={isActive('/projects') ? 'page' : undefined}
              >
                Vibe Coding Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`font-semibold transition-colors focus:outline-none ${
                  isActive('/contact') ? 'text-brand-primary' : 'text-gray-300 hover:text-white'
                }`}
                aria-current={isActive('/contact') ? 'page' : undefined}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;