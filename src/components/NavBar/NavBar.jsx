import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Trainers", path: "/trainers" },
    { name: "Plans", path: "/plans" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">GYM<span>ADIT</span></a>
        </div>

        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          {navLinks.map((link, index) => (
            <a key={index} href={link.path} className="nav-item" onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          ))}
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
