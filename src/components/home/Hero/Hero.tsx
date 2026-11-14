import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* LEFT: Hero Content */}
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

        {/* RIGHT: Network Visualization */}
        <div className="hero-visual">

          <div className="visual-glow"></div>

          <div className="network-label">
            <span></span>
            CHARGING NETWORK
          </div>

          <div className="network-map">

            <div className="network-grid"></div>

            {/* Connection Lines */}
            <svg className="network-lines" viewBox="0 0 500 450">
              <line x1="250" y1="220" x2="110" y2="100" />
              <line x1="250" y1="220" x2="390" y2="110" />
              <line x1="250" y1="220" x2="370" y2="350" />
              <line x1="250" y1="220" x2="100" y2="340" />
            </svg>

            {/* Central User Location */}
            <div className="user-location">
              <div className="user-location-pulse"></div>
              <div className="user-location-dot"></div>
              <span>You are here</span>
            </div>

            {/* Provider Nodes */}
            <div className="provider-node node-one">
              <span>⚡</span>
            </div>

            <div className="provider-node node-two">
              <span>⚡</span>
            </div>

            <div className="provider-node node-three">
              <span>⚡</span>
            </div>

            <div className="provider-node node-four">
              <span>⚡</span>
            </div>

            {/* Floating Provider Cards */}
            <div className="provider-card card-one">
              <div className="provider-icon">⚡</div>
              <div>
                <strong>Nearby Power</strong>
                <span>0.3 km away</span>
              </div>
              <div className="provider-status"></div>
            </div>

            <div className="provider-card card-two">
              <div className="provider-icon">⚡</div>
              <div>
                <strong>Charging Available</strong>
                <span>0.7 km away</span>
              </div>
              <div className="provider-status"></div>
            </div>

          </div>

          <div className="visual-caption">
            <span className="caption-indicator"></span>
            Discover power around you
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
