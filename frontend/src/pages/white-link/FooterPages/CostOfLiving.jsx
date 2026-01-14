import React from "react";
import "./FooterPage.css";

export default function CostOfLiving() {
  return (
    <section className="footer-page-sec">
      <div className="footer-page-wrap">
        <h1>Cost of Living Calculator</h1>
        <p>
          Estimate how much you will need to cover your expenses as an international student. 
          Our cost of living calculator helps you plan your budget for tuition fees, accommodation, 
          food, transportation, and other essential expenses.
        </p>
        <div className="footer-page-content">
          <h2>Calculate Your Expenses</h2>
          <p>Use our comprehensive calculator to estimate costs for:</p>
          <ul>
            <li>Tuition fees</li>
            <li>Accommodation (on-campus and off-campus)</li>
            <li>Food and groceries</li>
            <li>Transportation</li>
            <li>Health insurance</li>
            <li>Personal expenses</li>
          </ul>
          <button className="footer-page-btn">Calculate Now</button>
        </div>
      </div>
    </section>
  );
}

