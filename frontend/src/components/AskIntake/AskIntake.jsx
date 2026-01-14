import React from "react";
import { Link } from "react-router-dom";
import "./Askidp.css";

const Askidp = () => {
  return (
    <section className="askidp-section">
      <div className="askidp-container">
        <div className="askidp-content">
          <h2 className="askidp-title">Ask INTAKE: We're Here to Help You</h2>
          <p className="askidp-desc">
            Need guidance on studying abroad, universities, or scholarships?
            Our experts are ready to answer all your questions and guide you
            toward your dream university.
          </p>

          <div className="askidp-buttons">
            <Link to="/contact" className="askidp-btn askidp-btn-primary">
              Talk to a Counsellor
            </Link>
            <Link to="/about" className="askidp-btn askidp-btn-outline">
              Learn More About Jramsys
            </Link>
          </div>
        </div>

        <div className="askidp-image">
          <img
            src="https://www.idp.com/medias/Ask-IDP-Banner.png?context=bWFzdGVyfHJvb3R8NTY3MjJ8aW1hZ2UvcG5nfGg5My9oMDkvMTAyMDAzOTMyOTg0NDYucG5nfDU2ZDkyZmEyNmNjMmExYjAzNTY2MTBlNmIxNWE4ZmI2M2Q2ZjE0MjBlN2E5Y2U3NjJhZTcwNmQ0YzEwNTJiODQ"
            alt="Ask Jramsys- Talk to an expert"
          />
        </div>
      </div>
    </section>
  );
};

export default Askidp;
