import { useState, useEffect } from "react";
import gymIcon from "../../assets/icon.jpg";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#features" },
  { label: "Trainers", href: "#trainers" },
  { label: "Plans", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="container nav__inner">
          <a className="nav__logo" href="#home" onClick={(e) => handleNavClick(e, "#home")}>
            <img
              className="nav__logo-img"
              src={gymIcon}
              alt="Fitness Sports Center"
            />
            <div className="nav__logo-text">
              <div className="nav__logo-main">
                FITNESS<span>SC</span>
              </div>
              <div className="nav__logo-sub">Sports Center · Est. 2026</div>
            </div>
          </a>

          <ul className="nav__links">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  className="nav__link"
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l.href)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav__actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <a
              href="#contact"
              className="btn-primary"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              Join Now
            </a>
            <button
              className={`nav__hamburger${menuOpen ? " active" : ""}`}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Open menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`nav__mobile-menu${menuOpen ? " open" : ""}`}>
        <ul className="nav__mobile-links">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a
                className="nav__mobile-link"
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="btn-primary"
          onClick={(e) => handleNavClick(e, "#contact")}
        >
          Join Now →
        </a>
      </div>
    </>
  );
}
