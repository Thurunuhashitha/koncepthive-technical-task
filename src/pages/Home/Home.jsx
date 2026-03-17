export default function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero__bg" />
      <div className="container hero__content">
        <p className="hero__eyebrow">Est. 2026 · Colombo, Sri Lanka</p>

        <h1 className="hero__headline">
          <span className="line-outline">Forge</span>
          <span className="line-gold">Your</span>
          <span>Legacy.</span>
        </h1>

        <p className="hero__sub">
          Not just a gym. A proving ground. Where elite athletes and everyday
          warriors come to break limits, build strength, and reshape who they are.
        </p>

        <div className="hero__cta">
          <a
            href="#contact"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Start Free Trial →
          </a>
          <a
            href="#features"
            className="btn-outline"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore Services
          </a>
        </div>

        <div className="hero__stats">
          {[
            { num: "12K", unit: "+", label: "Active Members" },
            { num: "40", unit: "+", label: "Elite Trainers" },
            { num: "98", unit: "%", label: "Satisfaction Rate" },
            { num: "24", unit: "/7", label: "Always Open" },
          ].map((s) => (
            <div key={s.label}>
              <div className="hero__stat-num">
                {s.num}<span>{s.unit}</span>
              </div>
              <div className="hero__stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span className="hero__scroll-text">Scroll</span>
      </div>
    </section>
  );
}