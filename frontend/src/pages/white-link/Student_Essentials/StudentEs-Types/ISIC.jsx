import React, { useState } from "react";
import Related_Articles from "../../../Related_Articles/Related_Articles";
import "../StudentEss.css";
import styles from "./ISIC.module.css";

const ISIC = () => {
  const [destination, setDestination] = useState("All destinations");

  return (
    <div className="essentials-container">
      <div className="essentials-hero">
        {/* Breadcrumb */}
        <p className="breadcrumb-text">
          Study Abroad, Overseas Education... / Student Essentials / ISIC
        </p>

        {/* Heading */}
        <h1 className="hero-heading">ISIC Services for International Students</h1>
        <p className="hero-subtext">
          Your globally-recognised student identity card for discounts and offers.
        </p>
      </div>

      {/* Intro content */}
      <section className={styles.intro}>
        <p>
          The International Student Identity Card (ISIC) is your globally recognised proof of
          student status. With one simple card, you can access thousands of discounts on travel,
          food, entertainment, shopping and more in over 130 countries.
        </p>
        <p>
          Apply for your ISIC before you depart so you can start saving money from the day you
          arrive on campus.
        </p>
      </section>

      {/* Benefits grid */}
      <section>
        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Global student discounts</h3>
            <p>
              Enjoy special prices on flights, public transport, museums, attractions, cinemas and
              popular brands worldwide.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Trusted student proof</h3>
            <p>
              ISIC is recognised by universities, governments and organisations around the world as
              official proof of full‑time student status.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Easy to carry</h3>
            <p>
              Keep one card or a digital version on your phone instead of multiple documents when
              you need to verify that you are a student.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-action banner */}
      <section className={`${styles.banner} ${styles.center}`}>
        <h2>Ready to get your ISIC?</h2>
        <p className={styles.small}>
          Talk to our counsellors to understand eligibility, documents and how ISIC fits into your
          overall Student Essentials plan.
        </p>
        <button
          className="free-btn"
          style={{ marginTop: 16 }}
          onClick={() => (window.location.hash = "/student-essentials/ISIC/details")}
        >
          See ISIC details
        </button>
      </section>

      <Related_Articles />
    </div>
  );
};

export default ISIC;
