import { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">

        <a href="#" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon">V</span>
          <span>Volt<span className="logo-highlight">Mate</span></span>
        </a>

        <nav id="mobile-navigation" className={`navbar-links ${menuOpen ? 'menu-open' : ''}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#how-it-works" onClick={closeMenu}>How It Works</a>
          <a href="#for-seekers" onClick={closeMenu}>For Seekers</a>
          <a href="#for-providers" onClick={closeMenu}>For Providers</a>
          <a href="#safety" onClick={closeMenu}>Safety</a>

          <div className="mobile-auth">
            <a href="/login" onClick={closeMenu}>Login</a>
            <a href="/signup" className="mobile-signup" onClick={closeMenu}>
              Sign Up
            </a>
          </div>
        </nav>

        <div className="navbar-actions">
          <a href="/login" className="login-button">Login</a>
          <a href="/signup" className="signup-button">Sign Up</a>
        </div>

        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;