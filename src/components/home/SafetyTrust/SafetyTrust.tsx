import "./SafetyTrust.css";

const safeguards = [
  {
    number: "01",
    icon: "◎",
    title: "Know who you're connecting with",
    description:
      "Provider profiles are designed to support identity checks and give seekers useful information before they make a booking.",
  },
  {
    number: "02",
    icon: "⌖",
    title: "Location privacy comes first",
    description:
      "Public discovery can use approximate locations. A provider's precise location should only be shared at the appropriate stage of a confirmed booking.",
  },
  {
    number: "03",
    icon: "৳",
    title: "Clear terms before you book",
    description:
      "View charging details, compatible connectors, availability, and pricing before sending a booking request.",
  },
  {
    number: "04",
    icon: "◇",
    title: "Accountability after every session",
    description:
      "Booking records, post-session reviews, and reporting tools are planned to help users address problems and build trust.",
  },
];

function SafetyTrust() {
  return (
    <section className="safety-section" id="safety">
      <div className="safety-container">
        <div className="safety-heading">
          <span className="section-eyebrow">SAFETY & TRUST</span>

          <h2>
            A better connection
            <br />
            starts with <span>trust.</span>
          </h2>

          <p>
            Sharing access to power should feel straightforward. VoltMate is
            being designed with transparency, privacy, and accountability at
            its core.
          </p>
        </div>

        <div className="safety-content">
          <div className="safety-visual">
            <div className="safety-visual-glow" />

            <div className="trust-card">
              <div className="trust-card-top">
                <span className="trust-icon">◇</span>
                <span className="trust-status">TRUST BY DESIGN</span>
              </div>

              <div className="trust-card-main">
                <div className="trust-shield">
                  <span>✓</span>
                </div>

                <h3>Designed around your peace of mind.</h3>

                <p>
                  Clear information. Thoughtful privacy. Accountable
                  connections.
                </p>
              </div>

              <div className="trust-card-footer">
                <span className="trust-footer-dot" />
                <span>Built for a more transparent experience</span>
              </div>
            </div>

            <div className="safety-floating-label safety-label-top">
              <span>01</span>
              Privacy matters
            </div>

            <div className="safety-floating-label safety-label-bottom">
              <span>02</span>
              Transparency first
            </div>
          </div>

          <div className="safety-list">
            {safeguards.map((item) => (
              <article className="safety-item" key={item.number}>
                <div className="safety-item-icon">{item.icon}</div>

                <div className="safety-item-text">
                  <div className="safety-item-number">{item.number}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <span className="safety-item-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>

        <div className="safety-bottom">
          <span className="safety-bottom-line" />
          <p>
            Trust isn't an extra feature. It's part of how the platform should
            work.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SafetyTrust;