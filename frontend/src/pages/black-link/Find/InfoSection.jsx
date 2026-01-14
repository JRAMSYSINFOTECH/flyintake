import React from "react";
import { useNavigate } from "react-router-dom";
import "./InfoSection.css";

const InfoSection = () => {
  const navigate = useNavigate();

  return (
    <section className="info-section">
      <div className="info-container">
        <h2 className="info-title">Get Expert Guidance from INTAKE</h2>
        <p className="info-description">
          At INTAKE, our experienced counsellors are dedicated to helping you achieve your study abroad dreams.
          We provide personalized guidance, from choosing the right course and university to assisting with
          visa applications and pre-departure support.
        </p>

        <div className="info-grid">
          <div
            className="info-card"
            onClick={() => navigate("/contact")}
          >
            <img src="/assets/free-career.jpg" alt="Counselling" />
            <h3>Free Counselling</h3>
            <p>Get one-on-one sessions with certified counsellors who guide you every step of the way.</p>
          </div>

          <div
            className="info-card"
            onClick={() => navigate("/find-universities")}
          >
            <img src="/assets/us-news.jpg" alt="Universities" />
            <h3>Top Universities</h3>
            <p>Partnered with over 100 leading universities worldwide, ensuring you have the best options.</p>
          </div>

          <div
            className="info-card"
            onClick={() => navigate("/Visa")}
          >
            <img src="/assets/visa.jpg" alt="Visa Support" />
            <h3>Visa Assistance</h3>
            <p>Receive complete guidance for preparing and submitting your student visa applications smoothly.</p>
          </div>

          <div
            className="info-card"
            onClick={() => navigate("/Ongoing")}
          >
            <img src="/assets/Global.png" alt="Support" />
            <h3>Ongoing Support</h3>
            <p>Even after admission, we offer pre-departure briefings and settlement support.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
