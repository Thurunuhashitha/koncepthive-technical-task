import gymIcon from "../../assets/icon.jpg";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#features" },
  { label: "Trainers", href: "#trainers" },
  { label: "Plans", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__logo-wrap">
              <img className="footer__logo-img" src={gymIcon} alt="Fitness Sports Center" />
              <div>
                <div className="footer__logo">FITNESS<span>SC</span></div>
                <div className="footer__logo-tagline">Sports Center</div>
              </div>
            </div>
            <p className="footer__desc">
              Colombo's premier performance gym. Built for those who refuse to settle.
            </p>
            <div className="footer__socials-label">Follow Us</div>
            <div className="footer__socials">
              {["𝕏", "📸", "▶", "in"].map((icon, i) => (
                <a key={i} className="footer__social" href="#">{icon}</a>
              ))}
            </div>
          </div>

          <div>
            <div className="footer__col-title">Navigate</div>
            <ul className="footer__links">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <a className="footer__link" href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer__col-title">Services</div>
            <ul className="footer__links">
              {["Strength Training", "HIIT & Cardio", "Combat Sports", "Yoga & Recovery", "Personal Training", "Nutrition"].map((s) => (
                <li key={s}><a className="footer__link" href="#features">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer__col-title">Hours</div>
            <ul className="footer__links">
              <li><span className="footer__link">Mon – Fri: 5AM – 11PM</span></li>
              <li><span className="footer__link">Sat: 6AM – 10PM</span></li>
              <li><span className="footer__link">Sun: 7AM – 8PM</span></li>
              <li style={{ marginTop: "1rem" }}><span className="footer__link">📍 45 Galle Rd, Colombo 03</span></li>
              <li><span className="footer__link">📞 +94 11 234 5678</span></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">© 2026 Fitness Sports Center. All rights reserved.</p>
          <div className="footer__socials">
            {["𝕏", "📸", "▶", "in"].map((icon, i) => (
              <a key={i} className="footer__social" href="#">{icon}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
