import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Related_Articles from "../../../Related_Articles/Related_Articles";
import "../StudentEss.css";
import styles from "./Education_loan.module.css";

const partners = [
  { name: "ICICI Bank iSMART Education Loans", logo: "/assets/ICICI_Bank_iSMART_logo.png", features: ["Tax Saving (ITR sec-80E)", "Covers tuition fee & more", "Track and apply online"], destinations: ["AU", "CA", "GB", "IE", "NZ", "US"] },
  { name: "Avanse", logo: "/assets/Avanse_logo_cropped.png", features: ["Covers tuition fee & more", "Track and apply online"], destinations: ["AU", "CA", "GB", "IE", "NZ", "US"] },
  { name: "Credila", logo: "/assets/Credila-Logo-Sept24.png", features: ["Tax Saving (ITR sec-80E)", "Covers tuition fee & more", "Track and apply online"], destinations: ["AU", "CA", "GB", "IE", "NZ", "US"] },
  { name: "Poonawalla Fincorp Limited", logo: "/assets/PFL-logo (1).jpeg", features: ["Tax Saving (ITR sec-80E)", "Covers tuition fee & more", "Track and apply online"], destinations: ["AU", "CA", "GB", "IE", "NZ", "US"] },
  { name: "Union Bank of India Services Limited", logo: "/assets/UBI_SL_Logo.jpeg", features: ["Tax Saving (ITR sec-80E)", "Covers tuition fees & more", "Track and apply online"], destinations: ["AU", "CA", "GB", "IE", "NZ", "US"] },
  { name: "State Bank of India (SBI)", logo: "/assets/SBI.png", features: ["Tax Saving (ITR sec-80E)", "Covers tuition fee & more", "Track and apply online"], destinations: ["AU", "CA", "GB", "IE", "NZ", "US"] },
];

const Education_loan = () => {
  const [destination, setDestination] = useState("All");
  const [selectedDestination, setSelectedDestination] = useState("All");
  const navigate = useNavigate();

  const filteredPartners =
    selectedDestination === "All"
      ? partners
      : partners.filter((p) => p.destinations.includes(selectedDestination));

  const handleHeroSelect = (e) => {
    const val = e.target.value;
    setSelectedDestination(val);
    // optional: scroll to partner list
    const el = document.querySelector(`.${styles.partnerGrid}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="essentials-container">
      <div className="essentials-hero">
        <p className="breadcrumb-text">Study Abroad, Overseas Education... / Student Essentials / Education_loan</p>
        <h1 className="hero-heading">Education Loan services for International Students</h1>
        <p className="hero-subtext">Everything you need to know about education loans for your study abroad journey.</p>
      </div>




      {/* Partners grid */}


      <div className={styles.partner}>
        <h1 >Education Loan Services for International Students - Partner Company</h1>
        <div className={styles.partnerGrid}>

        {filteredPartners.map((bank, i) => (
          <div key={i} className={styles.partnerCard}>
            <div>
              <div className={styles.partnerHeader}>
                <h3>{bank.name}</h3>
                <img src={bank.logo} alt={`${bank.name} logo`} className={styles.partnerLogo} />
              </div>

              <ul className={styles.featureList}>
                {bank.features.map((f, index) => (
                  <li key={index}>{f}</li>
                ))}
              </ul>

              <p className={styles.destinationText}>Available for: {bank.destinations.join(", ")}</p>
            </div>

            <div className={styles.buttonGroup}>
              <button
                className={styles.buttonPrimary}
                aria-label={`Enquire about ${bank.name}`}
                onClick={() => navigate("/student-essentials/EducationLoan/apply")}
              >
                Enquire now
              </button>
              <button
                className={styles.buttonSecondary}
                aria-label={`Learn more about ${bank.name}`}
                onClick={() => navigate("/student-essentials/EducationLoan/details")}
              >
                Learn more
              </button>
            </div>
          </div>
        ))}
        </div>
      </div>

      <Related_Articles />
    </div>
  );
};

export default Education_loan;
