import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function NavBar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper function to check if link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Navigation links data
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/cv', label: 'CV' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-brand-muted border-b border-brand-text/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-extrabold text-brand-heading hover:text-brand-primary transition-colors"
          >
            BitByFerd
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-semibold transition-colors relative ${
                  isActive(link.path)
                    ? 'text-brand-primary'
                    : 'text-brand-text hover:text-brand-primary'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-brand-primary"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-brand-text hover:text-brand-primary transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              // X icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg font-semibold transition-colors ${
                  isActive(link.path)
                    ? 'bg-brand-primary text-white'
                    : 'text-brand-text hover:bg-brand-bg hover:text-brand-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
