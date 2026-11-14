import "./FinalCTA.css";

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-cta-glow"></div>

      <div className="final-cta-content">
        <span className="final-cta-eyebrow">
          YOUR POWER. YOUR COMMUNITY.
        </span>

        <h2>
          Never let a low battery
          <br />
          <span>hold you back.</span>
        </h2>

        <p>
          Whether you need power or have power to share,
          there's a place for you in the VoltMate community.
        </p>

        <div className="final-cta-actions">
          <a href="/find-charging" className="final-cta-primary">
            Find Charging <span>↗</span>
          </a>

          <a href="/become-provider" className="final-cta-secondary">
            Become a Provider
          </a>
        </div>

        <div className="final-cta-note">
          <span></span>
          Powering connections, together.
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;