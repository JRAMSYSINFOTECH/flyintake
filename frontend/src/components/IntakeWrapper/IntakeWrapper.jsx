import React, { useState } from "react";
import App from "../../App";
import styles from "./IntakeWrapper.module.css";

const IntakeWrapper = () => {
  const [showApp, setShowApp] = useState(false);

  return (
    <div className={styles.idpContainer}>
      <nav className={styles.navbar}>
        <h2 className={styles.title}>INTAKE</h2>


        {/* Toggle Button */}
        <button
          onClick={() => setShowApp(prev => !prev)}
          className={styles.loadButton}
        >
          {showApp ? "Hide Study Abroad Section" : "Show Study Abroad Section"}
        </button>
      </nav>

      <main>
        {showApp ? (
          <App />
        ) : (
          <>
            <p className="line11">Click the button to load the full application...</p>
            <img
              src="/assets/INTAKE1.png"
              alt="INTAKE Logo"
              style={{ maxWidth: "400px", display: "block", margin: "20px auto",  }}
            />
          </>
        )}
      </main>
    </div>
  );
};

export default IntakeWrapper;
