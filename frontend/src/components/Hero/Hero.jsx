import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

// Hero data for auto-sliding text and button
const heroData = [
  {
    heading: "Your Study Abroad Journey Begins Here",
    subheading:
      "1,13,000+ students achieved their study abroad dreams with INTAKE in one year",
    button: { label: "Avail FREE counselling", link: "/contact" },
  },
  {
    heading:
      "INTAKE Guided 28,000+ students to the UK in just one year. Your future starts here!",
    subheading: "Attend INTAKE’s Biggest Study Abroad Expo in your city",
    button: { label: "Login", link: "/login" },
  },
  {
    heading:
      "60+ Universities, up to 100% Scholarships – Attend INTAKE’s Biggest Education Fair",
    subheading: "Australia | New Zealand",
    button: { label: "SignUp", link: "/signup" },
  },
];

const AUTO_SLIDE_INTERVAL = 5000; // 5 seconds

export default function Hero() {
  const [page, setPage] = useState(0);
  const intervalRef = useRef(null);

  // Auto slide effect
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setPage((prev) => (prev + 1) % heroData.length);
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(intervalRef.current);
  }, []);

  const goToPage = (idx) => {
    setPage(idx);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setPage((prev) => (prev + 1) % heroData.length);
    }, AUTO_SLIDE_INTERVAL);
  };

  const { heading, subheading, button } = heroData[page];

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(/assets/hero21.jpg)` }}
    >
      <div className="hero-overlay">
        <div key={page} className="hero-content fade-in">
          <h1>{heading}</h1>
          <p className="hero-subheading">{subheading}</p>

          <Link
            to={button.link}
            className="hero-btn"
          >
            {button.label}
          </Link>

          <div className="hero-dots">
            {heroData.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to hero slide ${idx + 1}`}
                className={`hero-dot ${page === idx ? "active" : ""}`}
                onClick={() => goToPage(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
