import React from "react";
import "./FooterPage.css";

export default function Disclaimer() {
  return (
    <section className="footer-page-sec">
      <div className="footer-page-wrap">
        <h1>Disclaimer</h1>
        <p>
          The information provided on this website is for general informational purposes only. While we strive 
          to keep the information up to date and correct, we make no representations or warranties of any kind.
        </p>
        <div className="footer-page-content">
          <h2>No Warranty</h2>
          <p>
            INTAKE Education makes no warranty, expressed or implied, regarding the accuracy, adequacy, completeness, 
            legality, reliability, or usefulness of any information on this website.
          </p>
          <h2>Limitation of Liability</h2>
          <p>
            In no event shall INTAKE Education be liable for any loss or damage including without limitation, 
            indirect or consequential loss or damage, arising from the use of this website.
          </p>
          <h2>External Links</h2>
          <p>
            Our website may contain links to external websites. We have no control over the nature, content, 
            and availability of those sites. The inclusion of any links does not necessarily imply a recommendation 
            or endorse the views expressed within them.
          </p>
          <h2>Professional Advice</h2>
          <p>
            The information on this website is not intended to replace professional advice. We recommend consulting 
            with our expert counsellors for personalized guidance on your study abroad journey.
          </p>
        </div>
      </div>
    </section>
  );
}

