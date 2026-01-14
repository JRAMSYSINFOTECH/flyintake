import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Related_Articles from '../../../Related_Articles/Related_Articles';
import '../StudentEss.css';
import styles from './Student_banking.module.css';


const Student_banking = () => {
  const [destination, setDestination] = useState("All destinations");
  const navigate = useNavigate();
  return (
    <div className="essentials-container">
      <div className="essentials-hero">
        
        {/* Breadcrumb */}
        <p className="breadcrumb-text">
          Study Abroad, Overseas Education... / Student Essentials / Student Banking
        </p>

        {/* Heading */}
        <h1 className="hero-heading">
          Student Banking services for International Students
        </h1>
        <p className="hero-subtext">
          Open a student bank account before you fly.
        </p>
       
      </div>

      {/* Top Banner */}
      <section className={styles.insuranceBanner}>
        <h1>Student Banking for International Students</h1>
        <p>
          Ensure peace of mind while studying abroad. Get coverage for doctor visits,
          hospital stays, emergency ambulance services, and prescription medicine.
        </p>
        <button
          className={styles.ctaBtn}
          onClick={() => navigate("/student-essentials/StudentBanking/apply")}
        >
          Apply for Student Visa Student Banking
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
            onClick={() => navigate("/student-essentials/StudentBanking/details")}
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
            onClick={() => navigate("/student-essentials/StudentBanking/apply")}
          >
            Apply Now
          </button>
        </div>
      </section>
      <Related_Articles/>
    </div>
  )
}

export default Student_banking;
