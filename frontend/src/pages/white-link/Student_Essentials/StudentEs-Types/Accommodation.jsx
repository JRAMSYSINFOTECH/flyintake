import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Related_Articles from "../../../Related_Articles/Related_Articles";
import "../StudentEss.css";
import styles from "./Accommodation.module.css";

const Accommodation = () => {
  const [destination, setDestination] = useState("All destinations");
  const navigate = useNavigate();

  return (
    <div className="essentials-container">

      {/* HERO SECTION */}
      <div className="essentials-hero">
        <p className="breadcrumb-text">
          Study Abroad, Overseas Education... / Student Essentials / Student Accommodation
        </p>
        <h1 className="hero-heading">Accommodation Services for International Students</h1>
        <p className="hero-subtext">
          Find the best, safe, and budget-friendly accommodation options to make your study abroad journey smooth.
        </p>
      </div>

      {/* TOP BANNER */}
      <section className={styles.banner}>
        <h1 className={styles.bannerHeading}>Health Insurance for International Students</h1>
        <p className={styles.bannerText}>
          Ensure peace of mind while studying abroad. Get coverage for doctor visits,
          hospital stays, emergency ambulance services, and prescription medicine.
        </p>
        <button
          className={styles.bannerBtn}
          onClick={() => navigate("/student-essentials/Accommodation/apply")}
        >
          Apply for Student Visa Health Insurance
        </button>
      </section>

      {/* OPTIONS SECTION */}
      <section id="options" className={styles.optionsSection}>
        <div className={styles.optionCard}>
          <h2 className={styles.optionTitle}>Compare and choose what’s right for you</h2>
          <p className={styles.optionDesc}>
            Explore plans from trusted providers that meet the strict conditions of
            registered health funds. Find the coverage that fits your needs.
          </p>
          <button
            className={styles.optionBtn}
            onClick={() => navigate("/student-essentials/Accommodation/details")}
          >
            Compare Plans
          </button>
        </div>

        <div className={styles.optionCard}>
          <h2 className={styles.optionTitle}>Apply online for a quick turnaround</h2>
          <p className={styles.optionDesc}>
            Get insured fast with our streamlined online application. No paperwork,
            no hassle—just protection when you need it most.
          </p>
          <button
            className={styles.optionBtn}
            onClick={() => navigate("/student-essentials/Accommodation/apply")}
          >
            Apply Now
          </button>
        </div>
      </section>

      {/* ARTICLES */}
      <Related_Articles />
    </div>
  );
};

export default Accommodation;

