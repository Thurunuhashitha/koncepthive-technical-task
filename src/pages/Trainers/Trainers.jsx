import marcusImg from "../../assets/Marcus.jpg";
import zaraImg from "../../assets/Zara.jpg";
import kaiImg from "../../assets/Kai.jpg";
import sofiaImg from "../../assets/Sofia.jpg";

const TRAINERS = [
  {
    name: "Marcus Reid",
    role: "Head Strength Coach",
    specialty: "Powerlifting",
    img: marcusImg,
    clients: 140,
    years: 9,
  },
  {
    name: "Zara Okafor",
    role: "HIIT Specialist",
    specialty: "HIIT & Cardio",
    img: zaraImg,
    clients: 210,
    years: 7,
  },
  {
    name: "Kai Tanaka",
    role: "Combat Coach",
    specialty: "MMA / Boxing",
    img: kaiImg,
    clients: 85,
    years: 12,
  },
  {
    name: "Sofia Mendes",
    role: "Wellness Coach",
    specialty: "Yoga & Recovery",
    img: sofiaImg,
    clients: 175,
    years: 6,
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="trainers">
      <div className="container">
        <div className="trainers__header">
          <p className="section-label reveal" style={{ justifyContent: "center" }}>
            Meet The Team
          </p>
          <h2 className="trainers__heading reveal reveal-delay-1">
            Coached By The <span className="accent-text">Best.</span>
          </h2>
        </div>

        <div className="trainers__grid">
          {TRAINERS.map((t, i) => (
            <div key={t.name} className={`trainer-card reveal reveal-delay-${i + 1}`}>
              <div className="trainer-card__img-wrap">
                <img
                  className="trainer-card__img"
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                />
                <div className="trainer-card__overlay" />
                <span className="trainer-card__specialty">{t.specialty}</span>
              </div>
              <div className="trainer-card__info">
                <div className="trainer-card__name">{t.name}</div>
                <div className="trainer-card__role">{t.role}</div>
                <div className="trainer-card__stats">
                  <div>
                    <div className="trainer-stat__num">{t.clients}+</div>
                    <div className="trainer-stat__label">Clients</div>
                  </div>
                  <div>
                    <div className="trainer-stat__num">{t.years}yr</div>
                    <div className="trainer-stat__label">Experience</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
