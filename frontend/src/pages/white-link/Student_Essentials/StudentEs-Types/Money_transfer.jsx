import React, { useState } from 'react';
import Related_Articles from '../../../Related_Articles/Related_Articles';
import { useNavigate } from 'react-router-dom';
import '../StudentEss.css';
import styles from './Money_transfer.module.css';




const destinations = [
  'All destinations',
  'USA',
  'UK',
  'Canada',
  'Australia',
  'Germany',
  'Japan',
];

const Money_transfer = () => {
  const [destination, setDestination] = useState('All destinations');
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/paymentgateway');
  };

  return (
    <div className="essentials-container">
      <div className="essentials-hero">
        
        {/* Breadcrumb */}
        <p className="breadcrumb-text">
          Study Abroad, Overseas Education... / Student Essentials / Money Transfer
        </p>

        {/* Heading */}
        <h1 className="hero-heading">
          Money Transfer services for International Students
        </h1>
        <p className="hero-subtext">
          A safe, fast and convenient way to pay tuition fees and manage your money.
        </p>
        




      </div>

      {/* Top Banner */}
      <section className={styles.insuranceBanner}>
        <h1>Money Transfer for International Students</h1>
        <p>
          Securely transfer funds for tuition fees and living expenses. Our fast and reliable service ensures your money reaches its destination safely.
        </p>
        <button className={styles.ctaBtn} onClick={handleApplyClick}>
          Transfer Money Now
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
            onClick={() => navigate("/student-essentials/Money_Transfer/details")}
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
            onClick={() => navigate("/student-essentials/Money_Transfer/apply")}
          >
            Apply Now
          </button>
        </div>
      </section>
      <Related_Articles />
    </div>
  );
};

export default Money_transfer;