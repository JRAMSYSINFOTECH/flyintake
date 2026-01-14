import React from "react";
import { useNavigate } from "react-router-dom";
import "./StdyUsahero.css";

function StdyUsahero() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/contact");
  };

  return (
    <div className="aush-hero-bg">
      <div className="aush-hero-content">
        <h1>Study in the USA From India</h1>
        <h3>
          Home to Top-Ranked Universities & a Diverse Range of Programs |
          Explore Your Future in the Land of Opportunity!
        </h3>

        <button onClick={handleSubmit}>
          Counselling in USA
        </button>
      </div>
    </div>
  );
}

export default StdyUsahero;
