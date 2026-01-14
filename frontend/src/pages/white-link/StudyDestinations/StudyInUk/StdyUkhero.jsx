import React from "react";
import { useNavigate } from "react-router-dom";
import "./StdyUkhero.css";

function StdyUkhero() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/contact");
  };

  return (
    <div className="aush-hero-bg">
      <div className="aush-hero-content">
        <h1>Study in the UK From India</h1>
        <h3>
          4 of the World’s Top 10 Universities | 50,000+ Courses | Globally
          Renowned Research | Shorter Degrees – Study in the UK: Where Excellence
          Meets Opportunity!
        </h3>

        <button onClick={handleSubmit}> Counselling in UK</button>
      </div>
    </div>
  );
}

export default StdyUkhero;
