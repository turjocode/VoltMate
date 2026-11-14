import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Volt<span>Mate</span>
              <span className="footer-logo-dot">.</span>
            </a>

            <p>
              Power when you need it. Wherever you are.
              Connecting people through a smarter way to share power.
            </p>

            <div className="footer-status">
              <span></span>
              Powering connections, together.
            </div>
          </div>

          {/* Explore */}
          <div className="footer-column">
            <h3>Explore</h3>
            <a href="#home">Home</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#for-seekers">For Seekers</a>
            <a href="#for-providers">For Providers</a>
            <a href="#safety">Safety & Trust</a>
          </div>

          {/* Get Started */}
          <div className="footer-column">
            <h3>Get Started</h3>
            <a href="/find-charging">Find Charging</a>
            <a href="/become-provider">Become a Provider</a>
            <a href="/login">Log In</a>
            <a href="/signup">Create Account</a>
          </div>

          {/* Platform */}
          <div className="footer-column">
            <h3>VoltMate</h3>
            <a href="#why-voltmate">Why VoltMate</a>
            <a href="#safety">Our Commitment</a>
            <a href="mailto:">Contact</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} VoltMate. All rights reserved.
          </p>

          <p className="footer-bottom-tagline">
            Built around community. Powered by connection.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;