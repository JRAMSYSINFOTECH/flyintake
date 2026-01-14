import React, { useState } from "react";
import Related_Articles from "../../../Related_Articles/Related_Articles";
import "../StudentEss.css";
import styles from "./International_SIM_Cards.module.css";

const International_SIM_Cards = () => {
  const [destination, setDestination] = useState("All destinations");

  return (
    <div className="essentials-container">
      <div className="essentials-hero">
        {/* Breadcrumb */}
        <p className="breadcrumb-text">
          Study Abroad, Overseas Education... / Student Essentials / International SIM Cards
        </p>

        {/* Heading */}
        <h1 className="hero-heading">
          International SIM Cards Services for International Students
        </h1>
        <p className="hero-subtext">
          Arrive and connect instantly with a local or international SIM card.
        </p>
      </div>

      {/* Hero / info banner */}
      <section className={styles.infoBanner}>
        <h1>Stay connected from the moment you land</h1>
        <p>
          Choose from trusted international SIM providers with student‑friendly data, call and
          roaming packs. Set up everything before you travel so you can message family and access
          maps as soon as you arrive.
        </p>
        <button
          className={styles.infoBtn}
          onClick={() => (window.location.hash = "/student-essentials/how-it-works")}
        >
          See how Student Essentials works
        </button>
      </section>

      {/* SIM options */}
      <section className={styles.simOptions}>
        <div className={styles.simCard}>
          <h2>Prepaid student SIM</h2>
          <p>
            Flexible prepaid plans with generous data and local calls so you can budget your usage
            while you settle in.
          </p>
          <button
            className={styles.simBtn}
            onClick={() => (window.location.hash = "/student-essentials/how-it-works")}
          >
            Learn how it works
          </button>
        </div>

        <div className={styles.simCard}>
          <h2>Arrival‑ready eSIM</h2>
          <p>
            Activate an eSIM before departure and go online instantly on arrival without swapping
            physical cards.
          </p>
          <button
            className={styles.simBtn}
            onClick={() => (window.location.hash = "/student-essentials/how-it-works")}
          >
            Learn how it works
          </button>
        </div>
      </section>

      <Related_Articles />
    </div>
  );
};

export default International_SIM_Cards;
