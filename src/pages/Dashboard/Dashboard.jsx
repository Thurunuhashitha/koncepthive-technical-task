import { useState, useEffect } from "react";
import "../../global/style.css";

import NavBar from "../../components/NavBar/NavBar"; 
import Home from "../Home/Home"; 
import About from "../About/About";
import Services from "../Services/Services";
import Trainers from "../Trainers/Trainers";
import Plans from "../Plans/Plans";
import Testimonials from "../Testimonials/Testimonials"

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Dashboard() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem("fitnesssc-theme") || "dark"; }
    catch { return "dark"; }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("fitnesssc-theme", theme); } catch {}
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  useScrollReveal();

  return (
    <div>
      <NavBar theme={theme} toggleTheme={toggleTheme} />
      <Home /> 
      <About/>
      <Services />
      <Trainers/>
      <Plans/>
      <Testimonials/>
    </div>
  );
}
