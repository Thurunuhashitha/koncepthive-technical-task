import aboutIcon from "../../assets/about.jpg";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__image-wrap reveal">
            <img
              className="about__image"
              src={aboutIcon}
              alt="Gym interior"
              loading="lazy"
            />
            <div className="about__badge">
              <div className="about__badge-num">10</div>
              <div className="about__badge-label">Years of Excellence</div>
            </div>
          </div>

          <div>
            <p className="section-label reveal">Our Story</p>
            <h2 className="about__heading reveal reveal-delay-1">
              Built By Athletes,<br />
              <span className="accent-text">For Athletes.</span>
            </h2>
            <p className="about__body reveal reveal-delay-2">
              Fitness Sports Center was born from a simple belief: everyone deserves
              access to world-class training. We've built a space where beginners
              find their footing and champions sharpen their edge — under one roof,
              driven by one relentless culture.
            </p>
            <p className="about__body reveal reveal-delay-2">
              Our 25,000 sq ft facility is designed with performance at every turn.
              No gimmicks. No shortcuts. Just iron, sweat, and results.
            </p>

            <div className="about__values reveal reveal-delay-3">
              {[
                { icon: "🔥", title: "Intensity", desc: "We train hard. Every session is an investment in your future self." },
                { icon: "🤝", title: "Community", desc: "Accountability, energy, and belonging — every single day." },
                { icon: "📈", title: "Progress", desc: "Data-driven programs that evolve as fast as you do." },
                { icon: "🏆", title: "Excellence", desc: "World-class facilities and coaching that sets the standard." },
              ].map((v) => (
                <div key={v.title} className="about__value">
                  <div className="about__value-icon">{v.icon}</div>
                  <div>
                    <div className="about__value-title">{v.title}</div>
                    <div className="about__value-desc">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal reveal-delay-4">
              <a
                href="#features"
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Services →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
