import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Related_Articles from "../../../Related_Articles/Related_Articles";
import "../StudentEss.css";
import styles from "./Health_Insurance.module.css";

const Health_Insurance = () => {
  const [destination, setDestination] = useState("All destinations");
  const navigate = useNavigate();

  return (
    <div className="essentials-container">
      <div className="essentials-hero">
        
        {/* Breadcrumb */}
        <p className="breadcrumb-text">
          Study Abroad, Overseas Education... / Student Essentials / Health Insurance
        </p>

        {/* Heading */}
        <h1 className="hero-heading">
          Health Insurance services for International Students
        </h1>

        <p className="hero-subtext">
          Stay protected with the right health cover for your study destination.
        </p>
      

       
       
       
       
      </div>

      {/* Top Banner */}
      <section className={styles.insuranceBanner}>
        <h1>Health Insurance for International Students</h1>
        <p>
          Ensure peace of mind while studying abroad. Get coverage for doctor visits,
          hospital stays, emergency ambulance services, and prescription medicine.
        </p>
        <button
          className={styles.ctaBtn}
          onClick={() => navigate("/student-essentials/HealthInsurance/apply")}
        >
          Apply for Student Visa Money Transfer
        </button>
      </section>

      {/* Options Section */}
      <section className={styles.insuranceOptions}>
        <div className={styles.optionCard}>
          <h2>Compare and choose what’s right for you</h2>
          <p>
            Explore plans from trusted providers that meet the strict conditions of
            registered health funds. Find the coverage that fits your needs.
          </p>
          <button
            className={styles.optionBtn}
            onClick={() => navigate("/student-essentials/HealthInsurance/details")}
          >
            Compare Plans
          </button>
        </div>

        <div className={styles.optionCard}>
          <h2>Apply online for a quick turnaround</h2>
          <p>
            Get insured fast with our streamlined online application. No paperwork,
            no hassle—just protection when you need it most.
          </p>
          <button
            className={styles.optionBtn}
            onClick={() => navigate("/student-essentials/HealthInsurance/apply")}
          >
            Apply Now
          </button>
        </div>
      </section>
      <Related_Articles/>
    </div>
  );
};

export default Health_Insurance;
