const FEATURES = [
  {
    number: "01",
    icon: "🏋️",
    title: "Strength Training",
    desc: "State-of-the-art free weights, power racks, and resistance machines engineered for maximum performance.",
    tag: "Most Popular",
    large: false,
  },
  {
    number: "02",
    icon: "⚡",
    title: "HIIT & Cardio",
    desc: "High-intensity interval training zones equipped with the latest cardio tech to push your limits.",
    tag: "High Demand",
    large: false,
  },
  {
    number: "03",
    icon: "🥊",
    title: "Combat Sports",
    desc: "Full boxing ring, heavy bags, and MMA mats. Train like a fighter — think, move, and strike with precision.",
    tag: "New",
    large: true,
  },
  {
    number: "04",
    icon: "🧘",
    title: "Recovery & Yoga",
    desc: "Dedicated recovery floor with yoga studio, foam rolling zones, and guided stretching classes.",
    tag: "Essential",
    large: false,
  },
  {
    number: "05",
    icon: "🚴",
    title: "Cycling Studio",
    desc: "Immersive cycling studio with 40 bikes, live leaderboards, and instructor-led rides.",
    tag: "Group Class",
    large: false,
  },
];

export default function Services() {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="features__header">
          <div>
            <p className="section-label reveal">What We Offer</p>
            <h2 className="features__heading reveal reveal-delay-1">
              Train Every<br />
              <span className="accent-text">Discipline.</span>
            </h2>
          </div>
          <p className="features__tagline reveal">
            Six world-class training zones. One membership. Zero compromises.
          </p>
        </div>

        <div className="features__grid">
          {FEATURES.map((f, i) =>
            f.large ? (
              <div
                key={f.title}
                className={`feature-card feature-card--large reveal reveal-delay-${(i % 3) + 1}`}
              >
                {/* Real divs — no pseudo-element pointer-event issues */}
                <div className="feature-card--large-bg" />
                <div className="feature-card--large-overlay" />
                <div className="feature-card__content">
                  <div className="feature-card__title">{f.title}</div>
                  <div className="feature-card__desc">{f.desc}</div>
                </div>
              </div>
            ) : (
              <div
                key={f.title}
                className={`feature-card reveal reveal-delay-${(i % 3) + 1}`}
              >
                <div className="feature-card__number">{f.number}</div>
                <span className="feature-card__icon">{f.icon}</span>
                <div className="feature-card__title">{f.title}</div>
                <div className="feature-card__desc">{f.desc}</div>
                <span className="feature-card__tag">{f.tag}</span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
