import "./ForProviders.css";

const benefits = [
  {
    number: "01",
    title: "Turn available power into income",
    description:
      "Offer access to your charging ports and earn from charging sessions without needing to run a dedicated charging station.",
  },
  {
    number: "02",
    title: "Set your own terms",
    description:
      "Choose your pricing, supported connectors, operating hours, and when your ports are available.",
  },
  {
    number: "03",
    title: "Stay in control",
    description:
      "Review incoming requests, accept or decline bookings, and manage your charging sessions.",
  },
  {
    number: "04",
    title: "Build your reputation",
    description:
      "Create a provider profile, share accurate information, and build trust through customer feedback.",
  },
];

function ForProviders() {
  return (
    <section className="for-providers" id="for-providers">
      <div className="providers-container">
        <div className="providers-content">
          <span className="section-eyebrow">FOR POWER PROVIDERS</span>

          <h2>
            Your power.
            <span> Your terms. </span>
            Your earnings.
          </h2>

          <p className="providers-intro">
            Make your available charging ports useful to people nearby.
            Set your own terms, manage requests, and earn by sharing power.
          </p>

          <div className="providers-benefits">
            {benefits.map((benefit) => (
              <article className="provider-benefit" key={benefit.number}>
                <span className="provider-benefit-number">
                  {benefit.number}
                </span>

                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </article>
            ))}
          </div>

          <a className="providers-cta" href="/become-provider">
            Become a provider <span>↗</span>
          </a>
        </div>

        <div className="providers-visual">
          <div className="providers-visual-glow" />

          <div className="earnings-card">
            <div className="earnings-card-header">
              <div>
                <span className="earnings-label">PROVIDER OVERVIEW</span>
                <h3>Your charging activity</h3>
              </div>

              <span className="earnings-menu">•••</span>
            </div>

            <div className="earnings-summary">
              <div>
                <span className="earnings-muted">Illustrative earnings</span>
                <strong>৳ 2,450</strong>
              </div>

              <span className="earnings-period">THIS MONTH</span>
            </div>

            <div className="earnings-chart">
              <div className="chart-grid">
                <span />
                <span />
                <span />
              </div>

              <div className="chart-bars">
                <div style={{ height: "35%" }} />
                <div style={{ height: "55%" }} />
                <div style={{ height: "42%" }} />
                <div style={{ height: "72%" }} />
                <div style={{ height: "50%" }} />
                <div style={{ height: "85%" }} />
                <div style={{ height: "65%" }} />
                <div style={{ height: "95%" }} />
              </div>
            </div>

            <div className="earnings-chart-labels">
              <span>W1</span>
              <span>W2</span>
              <span>W3</span>
              <span>W4</span>
            </div>

            <div className="provider-activity">
              <div className="activity-icon">ϟ</div>

              <div>
                <strong>Charging port</strong>
                <span>Available for requests</span>
              </div>

              <span className="activity-status">ACTIVE</span>
            </div>
          </div>

          <div className="provider-floating-badge">
            <span>↗</span>
            You set the price
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForProviders;