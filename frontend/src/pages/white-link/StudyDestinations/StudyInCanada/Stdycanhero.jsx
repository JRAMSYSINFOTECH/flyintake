import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Stdycanhero.css";

function Stdycanhero() {
   const navigate = useNavigate();
 const  handlesubmit=()=>{
  navigate("/contact")
 }
  return (
    <div className="aush-hero-bg">
      <div className="aush-hero-content">
        <h1>Study in Canada From India</h1>
        <h3>Explore everything you need to know about pursuing your studies in Canada from top universities and programs to scholarships, visas, and career prospects.</h3>
     <button onClick={handlesubmit}>Counselling in Canada </button>
      </div>
    </div>
  );
}

export default Stdycanhero;