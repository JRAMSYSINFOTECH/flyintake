import React from "react";
import { useNavigate } from "react-router-dom";
import "./PageHero.css";

const PageHero = ({ title, subtitle }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/contact"); // change route if needed
  };

  return (
    <section className="page-hero">
      <div className="page-hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>

        <button
          className="page-hero-btn"
          onClick={handleNavigate}
        >
          Book Free Counselling
        </button>
      </div>
    </section>
  );
};

export default PageHero;
