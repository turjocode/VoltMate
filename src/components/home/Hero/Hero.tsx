import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-content">

          <div className="hero-eyebrow">
            <span className="eyebrow-dot"></span>
            COMMUNITY-POWERED CHARGING
          </div>

          <h1>
            Power When You Need It.
            <br />
            <span>Wherever You Are.</span>
          </h1>

          <p className="hero-description">
            Find nearby charging ports or share yours with people
            who need power. VoltMate connects people through
            convenient, community-powered charging.
          </p>

          <div className="hero-buttons">
            <a href="/find-charging" className="hero-primary-button">
              Find Charging
              <span>→</span>
            </a>

            <a href="/become-provider" className="hero-secondary-button">
              Become a Provider
            </a>
          </div>

          <div className="hero-features">
            <div>
              <span className="feature-check">✓</span>
              Nearby Charging
            </div>

            <div>
              <span className="feature-check">✓</span>
              Flexible Access
            </div>

            <div>
              <span className="feature-check">✓</span>
              Community Powered
            </div>
          </div>

        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              src="/images/hero-charging.jpg"
              alt="A laptop on a modern desk with a charging station"
              className="hero-image"
              fetchPriority="high"
            />

            <div className="hero-image-caption">
              <span className="caption-line"></span>
              Power is closer than you think.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;