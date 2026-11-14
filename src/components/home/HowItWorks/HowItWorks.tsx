import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    title: "Find Power",
    description:
      "Discover nearby Power Providers and find a charging port that matches your device.",
    icon: "⌖",
  },
  {
    number: "02",
    title: "Connect & Request",
    description:
      "Choose a provider, check their availability and pricing, and send a charging request.",
    icon: "↗",
  },
  {
    number: "03",
    title: "Charge & Pay",
    description:
      "Once your request is accepted, charge your device and complete the payment.",
    icon: "ϟ",
  },
];

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-container">
        <div className="how-heading">
          <span className="section-eyebrow">SIMPLE BY DESIGN</span>

          <h2>
            Power in three
            <span> simple steps.</span>
          </h2>

          <p>
            Running low on battery shouldn't interrupt your day.
            Find power, connect with a provider, and keep moving.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <article className="step-card" key={step.number}>
              <div className="step-card-top">
                <span className="step-number">{step.number}</span>
                <span className="step-icon">{step.icon}</span>
              </div>

              <div className="step-card-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>

              <div className="step-card-line" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;