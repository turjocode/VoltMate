import "./ForSeekers.css";

const benefits = [
  {
    number: "01",
    title: "Find power nearby",
    description:
      "Discover charging providers around your current location instead of searching for a power outlet.",
  },
  {
    number: "02",
    title: "The right connection",
    description:
      "Check available connectors and power compatibility before requesting a charging session.",
  },
  {
    number: "03",
    title: "Know the price upfront",
    description:
      "Compare provider pricing before making a request. No unexpected charging costs.",
  },
  {
    number: "04",
    title: "Choose with confidence",
    description:
      "Explore provider profiles, availability, and community ratings before connecting.",
  },
];

function ForSeekers() {
  return (
    <section className="for-seekers" id="for-seekers">
      <div className="seekers-container">
        <div className="seekers-visual">
          <div className="seekers-visual-glow" />

          <div className="seekers-device-card">
            <div className="device-card-header">
              <span className="device-status-dot" />
              <span>POWER NEAR YOU</span>
              <span className="device-card-menu">•••</span>
            </div>

            <div className="device-map">
              <div className="map-grid" />

              <div className="map-route map-route-one" />
              <div className="map-route map-route-two" />

              <div className="map-user-marker">
                <span />
              </div>

              <div className="map-provider-marker marker-one">
                <span>ϟ</span>
              </div>

              <div className="map-provider-marker marker-two">
                <span>ϟ</span>
              </div>

              <div className="map-provider-marker marker-three">
                <span>ϟ</span>
              </div>
            </div>

            <div className="device-provider-info">
              <div>
                <span className="provider-label">NEAREST PROVIDER</span>
                <h3>Charging available</h3>
                <p>Compatible ports nearby</p>
              </div>

              <span className="provider-distance">0.4 km</span>
            </div>

            <div className="device-card-footer">
              <span>● Available</span>
              <span>View providers ↗</span>
            </div>
          </div>

          <div className="seekers-floating-badge badge-compatible">
            <span className="badge-check">✓</span>
            Device compatible
          </div>

          <div className="seekers-floating-badge badge-price">
            <span className="badge-price-icon">৳</span>
            Transparent pricing
          </div>
        </div>

        <div className="seekers-content">
          <span className="section-eyebrow">FOR POWER SEEKERS</span>

          <h2>
            Don't let a
            <span> low battery </span>
            slow you down.
          </h2>

          <p className="seekers-intro">
            Whether you're travelling, studying, working, or exploring the
            city, VoltMate helps you find a nearby charging connection when
            you need one.
          </p>

          <div className="seekers-benefits">
            {benefits.map((benefit) => (
              <article className="seeker-benefit" key={benefit.number}>
                <span className="benefit-number">{benefit.number}</span>

                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </article>
            ))}
          </div>

          <a className="seekers-cta" href="/find-charging">
            Find charging near you <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ForSeekers;