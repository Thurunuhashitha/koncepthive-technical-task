const TESTIMONIALS = [
  {
    text: "Joining this gym was the best decision of my life. The trainers push you past what you think is possible, and the gold-standard equipment makes every session count.",
    name: "Ashan Perera",
    plan: "Elite Member",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&q=80&fit=crop&crop=face",
  },
  {
    text: "The combat sports zone is absolutely world-class. As a competitive boxer, I have never trained anywhere with this level of dedication to the craft.",
    name: "Nadeesha Silva",
    plan: "Pro Member",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&q=80&fit=crop&crop=face",
  },
  {
    text: "From the recovery suite to the cycling studio, every inch of this facility has been thought through. The coaches care deeply about your progress.",
    name: "Rohan Fernando",
    plan: "Pro Member",
    stars: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&q=80&fit=crop&crop=face",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <p className="section-label reveal" style={{ justifyContent: "center" }}>
            Member Stories
          </p>
          <h2 className="testimonials__heading reveal reveal-delay-1">
            Real Results. <span className="accent-text">Real People.</span>
          </h2>
        </div>
        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} className={`testimonial-card reveal reveal-delay-${i + 1}`}>
              <div className="testimonial-card__quote">"</div>
              <div className="testimonial-card__stars">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="testimonial-card__star">★</span>
                ))}
              </div>
              <p className="testimonial-card__text">{t.text}</p>
              <div className="testimonial-card__author">
                <img className="testimonial-card__avatar" src={t.avatar} alt={t.name} loading="lazy" />
                <div>
                  <div className="testimonial-card__name">{t.name}</div>
                  <div className="testimonial-card__plan">{t.plan}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
