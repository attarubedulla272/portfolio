import './Header.css';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { href: '#home', label: 'Home', type: 'hash' },
  { href: '/projects', label: 'Projects', type: 'route' },
  { href: '/contact', label: 'Contact', type: 'route' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/projects') {
      setActive('projects');
      return;
    }
    if (location.pathname === '/contact') {
      setActive('contact');
      return;
    }
    const handleScroll = () => {
      const sectionIds = ['home', 'projects'];
      let current = 'home';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) {
            current = id;
          }
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar" aria-label="Main Navigation">
      <div className="navbar-container">
        <Link to="/" className="logo-area" onClick={handleNavClick} aria-label="Go to home">
          <div className="logo-circle">AU</div>
          <span className="logo-text">Attar Ubedulla</span>
        </Link>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="hamburger"></span>
        </button>
        <nav className={`nav-links${menuOpen ? ' open' : ''}`}>
          {navLinks.map((link) =>
            link.type === 'route' ? (
              <Link
                key={link.href}
                to={link.href}
                className={active === link.label.toLowerCase() ? 'active' : ''}
                onClick={handleNavClick}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className={active === link.href.slice(1) ? 'active' : ''}
                onClick={handleNavClick}
              >
                {link.label}
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
