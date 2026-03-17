const PLANS = [
  {
    name: "Starter",
    price: "29",
    desc: "Perfect for beginners building their fitness foundation.",
    featured: false,
    features: [
      "Gym floor access",
      "Locker room access",
      "2 group classes / month",
      "Fitness assessment",
      "Mobile app access",
    ],
  },
  {
    name: "Pro",
    price: "59",
    desc: "Our most popular plan — everything you need, nothing you don't.",
    featured: true,
    features: [
      "Unlimited gym access",
      "Unlimited group classes",
      "1 PT session / month",
      "Nutrition consultation",
      "Priority booking",
      "Guest passes (2/mo)",
    ],
  },
  {
    name: "Elite",
    price: "99",
    desc: "Maximum performance with dedicated coaching and perks.",
    featured: false,
    features: [
      "Everything in Pro",
      "4 PT sessions / month",
      "Dedicated locker",
      "Recovery suite access",
      "Monthly body comp scan",
      "VIP events access",
    ],
  },
];

export default function Plans() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="pricing__header">
          <p className="section-label reveal" style={{ justifyContent: "center" }}>
            Membership Plans
          </p>
          <h2 className="pricing__heading reveal reveal-delay-1">
            Choose Your <span className="accent-text">Weapon.</span>
          </h2>
        </div>

        <div className="pricing__grid">
          {PLANS.map((plan, i) => (
            <div
              key={plan.name}
              className={`plan-card reveal reveal-delay-${i + 1}${plan.featured ? " plan-card--featured" : ""}`}
            >
              {plan.featured && (
                <span className="plan-card__popular">Most Popular</span>
              )}
              <div className="plan-card__name">{plan.name}</div>
              <div className="plan-card__price">
                <span className="plan-card__currency">$</span>
                <span className="plan-card__amount">{plan.price}</span>
                <span className="plan-card__period">/ mo</span>
              </div>
              <p className="plan-card__desc">{plan.desc}</p>
              <div className="plan-card__divider" />
              <ul className="plan-card__features">
                {plan.features.map((f) => (
                  <li key={f} className="plan-card__feature">
                    <span className="plan-card__feature-icon">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Started →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
