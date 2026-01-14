import React from "react";
import "./PageContent.css";
import PageHero from "./PageHero";

const VisaAssistance = () => {
  return (
    <>
      <PageHero
        title="Visa Assistance"
        subtitle="Navigating the complexities of student visa applications can be daunting. Our expert visa assistance provides comprehensive guidance, from understanding requirements and preparing documents to mock interviews, ensuring a smooth and successful journey to your study abroad destination."
      />

      {/* ===== Visa Overview ===== */}
      <section className="page-content">
        <h2>Understanding Your Student Visa</h2>
        <p>
          A student visa is an official endorsement by the immigration authorities on your passport,
          indicating that you are permitted to enter and stay in a foreign country specifically for study
          purposes for a specified period. It's a crucial document for your international education journey.
        </p>

        <h3 className="visa-section-heading">When Should I Apply for My Student Visa?</h3>
        <p className="visa-info-paragraph">
          You can initiate your student visa application as soon as you receive confirmation of your
          enrollment (e.g., an offer letter or Confirmation of Acceptance for Studies - CAS) from your
          chosen university or institution. It is highly recommended to apply as early as possible,
          regardless of your program's start date, as visa processing times can vary significantly
          from country to country.
        </p>
        <p className="visa-info-paragraph">
          If you plan to seek financial aid, such as scholarships or education loans, it's even more
          critical to begin your visa application process early, as securing these can be time-consuming
          and often requires visa-related documentation.
        </p>

        <h3 className="visa-section-heading">Essential Visa Application Requirements</h3>
        <p className="visa-info-paragraph">
          While specific requirements vary by country, most student visa applications will require evidence of:
        </p>
        <ul className="visa-requirements-list">
          <li>
            <strong>Enrolment Confirmation:</strong> Proof of acceptance and enrollment in a recognized educational institution.
          </li>
          <li>
            <strong>Financial Capacity:</strong> Evidence of sufficient funds to cover your airfares,
            course tuition fees, and living costs for yourself (and any accompanying family members)
            for the duration of your stay.
          </li>
          <li>
            <strong>Valid Passport & Photos:</strong> A passport valid for at least six months beyond
            your intended period of stay, along with recent passport-sized photographs.
          </li>
          <li>
            <strong>Country-Specific Documents:</strong> Depending on the destination, you may need to
            provide evidence of English language proficiency (e.g., IELTS, TOEFL scores), undertake
            health examinations, and/or undergo police checks.
          </li>
        </ul>
      </section>

     
      
      {/* ===== How We Can Help You ===== */}
      <section className="page-content">
        <h2>How We Can Help You with Your Visa Application</h2>
        <p>
          If you're an international student with an offer letter from one of our partner institutions
          across major study destinations like Australia, Ireland, Canada, New Zealand, the UK, or the US,
          we provide comprehensive support throughout your visa application process.
        </p>
        <ul className="visa-help-list">
          <li>We advise you on the entire process, ensuring you are fully informed on the latest visa requirements and conditions.</li>
          <li>Our team helps you prepare and organize the right documents for submission, minimizing errors and delays.</li>
          <li>We direct you to official government websites and authorized immigration representatives for accurate forms and guidance.</li>
          <li>To reduce your hassle, we can also assist with certifying, translating, and couriering your essential documents.</li>
        </ul>
      </section>

      {/* ===== Countries Section ===== */}
      {/* Moved this section down to follow the detailed help */}
      <section className="page-content">
        <h2>Student Visa Support for Top Destinations</h2>
        <p>
          We provide expert visa guidance for leading study destinations
          worldwide.
        </p>

        <ul className="feature-list">
          <li>🇺🇸 USA – F1 Visa Assistance</li>
          <li>🇬🇧 UK – Student Route Visa</li>
          <li>🇨🇦 Canada – Study Permit</li>
          <li>🇦🇺 Australia – Subclass 500</li>
          <li>🇩🇪 Germany – Student Visa</li>
          <li>🇮🇪 Ireland & 🇫🇷 Europe Visas</li>
        </ul>
      </section>

      {/* ===== Step-by-Step Process ===== */}
      <section className="page-content light-bg">
        <h2>Our Step-by-Step Visa Process</h2>

        <ol className="process-list">
          <li>Profile Evaluation & Country Selection</li>
          <li>University Offer & CAS / I-20 Guidance</li>
          <li>Document Preparation & Verification</li>
          <li>Visa Application Submission</li>
          <li>Interview Training & Mock Sessions</li>
          <li>Visa Approval & Pre-Departure Support</li>
        </ol>
      </section>

      
    </>
  );
};

export default VisaAssistance;
