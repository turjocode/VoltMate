import "./WhyVoltMate.css";

const features = [
  {
    number: "01",
    icon: "⌖",
    title: "Power around you",
    description:
      "Discover charging opportunities from nearby people and businesses instead of depending only on traditional charging stations.",
  },
  {
    number: "02",
    icon: "↔",
    title: "Flexible by nature",
    description:
      "Find different charging options for your phone, laptop, tablet, smartwatch, and other portable devices.",
  },
  {
    number: "03",
    icon: "৳",
    title: "Transparent pricing",
    description:
      "Review provider prices and available charging options before sending a request. Know what you're choosing.",
  },
  {
    number: "04",
    icon: "◇",
    title: "Built around community",
    description:
      "Connect people who need power with people willing to share it, supported by profiles, ratings, and platform safeguards.",
  },
];

function WhyVoltMate() {
  return (
    <section className="why-voltmate" id="why-voltmate">
      <div className="why-container">
        <div className="why-heading">
          <span className="section-eyebrow">WHY VOLTMATE</span>

          <h2>
            A smarter way to
            <span> stay powered.</span>
          </h2>

          <p>
            Charging shouldn't be limited to the places you already know.
            VoltMate makes nearby charging connections easier to discover
            and access.
          </p>
        </div>

        <div className="why-features">
          {features.map((feature) => (
            <article className="why-feature-card" key={feature.number}>
              <div className="why-feature-top">
                <span className="why-feature-number">
                  {feature.number}
                </span>

                <span className="why-feature-icon">
                  {feature.icon}
                </span>
              </div>

              <div className="why-feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>

              <span className="why-feature-arrow">↗</span>
            </article>
          ))}
        </div>

        <div className="why-bottom">
          <span className="why-bottom-line" />
          <p>
            One community. More ways to keep your devices powered.
          </p>
          <span className="why-bottom-line" />
        </div>
      </div>
    </section>
  );
}

export default WhyVoltMate;