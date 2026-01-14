import React from "react";
import {  useNavigate } from "react-router-dom";
import "./StdyIrlndhero.css";

function StdyIrlndhero() {

   const navigate = useNavigate();
 const  handlesubmit=()=>{
  navigate("/contact")
 }
  return (
    <div className="aush-hero-bg">
      <div className="aush-hero-content">
        <h1>Study in Ireland From India</h1>
        <h3>Discover a comprehensive guide tailored for international students considering studying in Ireland.
           Avail FREE Counselling</h3>
        <button onClick={handlesubmit}>Counselling in Ireland  </button>
      </div>
    </div>
  );
}

export default StdyIrlndhero;