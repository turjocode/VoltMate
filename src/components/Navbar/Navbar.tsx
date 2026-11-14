import { useEffect, useState } from "react";
import "./Navbar.css";

type Theme = "light" | "dark";

const THEME_KEY = "voltmate-theme";

function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem(THEME_KEY);

  if (savedTheme === "light" || savedTheme === "dark") {
    document.documentElement.dataset.theme = savedTheme;
    return savedTheme;
  }

  const systemTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches
    ? "dark"
    : "light";

  document.documentElement.dataset.theme = systemTheme;
  return systemTheme;
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Apply the selected theme globally.
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  // Follow the operating system until the user chooses manually.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      if (!localStorage.getItem(THEME_KEY)) {
        setTheme(event.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    localStorage.setItem(THEME_KEY, newTheme);
    setTheme(newTheme);
  };

  const closeMenu = () => setMenuOpen(false);

  const themeButton = (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <i
        className={`fa-solid ${
          theme === "light" ? "fa-moon" : "fa-sun"
        }`}
        aria-hidden="true"
      ></i>
      <span>{theme === "light" ? "Dark" : "Light"}</span>
    </button>
  );

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">

        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon">V</span>
          <span>
            Volt<span className="logo-highlight">Mate</span>
          </span>
        </a>

        <nav
          id="mobile-navigation"
          className={`navbar-links ${menuOpen ? "menu-open" : ""}`}
        >
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#how-it-works" onClick={closeMenu}>How It Works</a>
          <a href="#for-seekers" onClick={closeMenu}>For Seekers</a>
          <a href="#for-providers" onClick={closeMenu}>For Providers</a>
          <a href="#safety" onClick={closeMenu}>Safety</a>

          <div className="mobile-auth">
            {themeButton}
            <a href="/login" onClick={closeMenu}>Login</a>
            <a
              href="/signup"
              className="mobile-signup"
              onClick={closeMenu}
            >
              Sign Up
            </a>
          </div>
        </nav>

        <div className="navbar-actions">
          {themeButton}
          <a href="/login" className="login-button">Login</a>
          <a href="/signup" className="signup-button">Sign Up</a>
        </div>

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
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