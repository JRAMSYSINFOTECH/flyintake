import React from "react";
import "./FooterPage.css";

export default function TermsOfUse() {
  return (
    <section className="footer-page-sec">
      <div className="footer-page-wrap">
        <h1>Terms of Use</h1>
        <p>
          Please read these terms of use carefully before using our website and services. By accessing or using 
          our services, you agree to be bound by these terms.
        </p>
        <div className="footer-page-content">
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and provision 
            of this agreement.
          </p>
          <h2>Use License</h2>
          <p>
            Permission is granted to temporarily access the materials on INTAKE Education's website for personal, 
            non-commercial transitory viewing only.
          </p>
          <h2>Disclaimer</h2>
          <p>
            The materials on INTAKE Education's website are provided on an 'as is' basis. INTAKE Education makes no 
            warranties, expressed or implied, and hereby disclaims and negates all other warranties.
          </p>
          <h2>Limitations</h2>
          <p>
            In no event shall INTAKE Education or its suppliers be liable for any damages arising out of the use 
            or inability to use the materials on INTAKE Education's website.
          </p>
        </div>
      </div>
    </section>
  );
}

