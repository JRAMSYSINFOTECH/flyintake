import React from "react";
import { useNavigate } from "react-router-dom";
import "./PreDeparture.css";

const services = [
  {
    icon: "🧳",
    title: "Travel & Packing Guidance",
    desc: "Detailed checklist covering essentials, prohibited items, baggage limits, and airline policies.",
  },
  {
    icon: "🏠",
    title: "Accommodation Assistance",
    desc: "Support with on-campus housing, private rentals, temporary stays, and arrival arrangements.",
  },
  {
    icon: "✈️",
    title: "Flight Booking Support",
    desc: "Guidance on booking cost-effective flights aligned with university reporting dates.",
  },
  {
    icon: "📄",
    title: "Final Document Checklist",
    desc: "Visa, passport, offer letter, fee receipts, insurance, and emergency contacts.",
  },
  {
    icon: "🌍",
    title: "Cultural & Lifestyle Briefing",
    desc: "Insights on local culture, laws, climate, part-time work rules, and student life abroad.",
  },
  {
    icon: "🎓",
    title: "Pre-Departure Orientation",
    desc: "Live sessions to prepare students and parents for a confident international transition.",
  },
];

const PreDeparture = () => {
  const navigate = useNavigate();

  return (
    <section className="predep-wrapper">
      {/* ===== HEADER ===== */}
      <header className="predep-header">
        <h1>Pre-Departure Support by INTAKE</h1>
        <p>
          Ready to pack your bags and head off to your dream school? Our comprehensive pre-departure support ensures smooth planning and helps you prepare for your studies abroad.
        </p>
        <p>
          We're dedicated to providing unwavering support throughout your entire study abroad journey. Effective preparation for your overseas studies is essential for your success. We aim to equip you with the necessary tools to ensure an enriching study experience.
        </p>
      </header>

      {/* ===== Why Pre-Departure Support is Crucial ===== */}
      <section className="predep-section">
        <h2 className="predep-section-title">Why Pre-Departure Support is Crucial</h2>
        <p className="predep-paragraph">
          Our counselors are readily available to address your queries and calm your nerves. We conduct pre-departure briefings year-round to aid you in gearing up for life in your chosen destination.
        </p>
        <p className="predep-paragraph">
          These pre-departure orientation sessions are designed to help you navigate personal and cultural growth opportunities during your time abroad.
        </p>
      </section>

      {/* ===== Transitioning from Visiting to Belonging ===== */}
      <section className="predep-section light-bg">
        <h2 className="predep-section-title">Transitioning from Visiting to Belonging</h2>
        <div className="predep-insights-grid">
          <div className="predep-insight-card">
            <h3 className="predep-sub-title">You'll gain insights into:</h3>
            <ul className="predep-list">
              <li>
                <strong>Local culture:</strong> Acquiring knowledge about local customs and culture before arriving in your study country eases your transition and fosters effective interactions with classmates from various backgrounds.
              </li>
              <li>
                <strong>Student life in your new country:</strong> Adapting to diverse learning styles, classroom environments, and cultural norms is crucial for a successful study experience.
              </li>
              <li>
                <strong>Culture shock:</strong> Adjusting to a new culture may bring about culture shock. We'll help you recognize it and provide techniques to cope and thrive.
              </li>
              <li>
                <strong>Support and well-being:</strong> Access to academic assistance, English language support, visa guidance, and more is vital for international students.
              </li>
            </ul>
          </div>
          <div className="predep-insight-card">
            <h3 className="predep-sub-title">Practical insights on:</h3>
            <ul className="predep-list">
              <li>
                <strong>Banking and foreign exchange:</strong> Setting up a local bank account upon arrival ensures easy access to funds for tuition, accommodation, and living expenses.
              </li>
              <li>
                <strong>Working while studying and internship advice:</strong> Supplement your study experience with work opportunities. We'll guide you on adhering to student visa regulations and offer job-search tips.
              </li>
              <li>
                <strong>A network of advice:</strong> Connect with IDP alumni and fellow students to gather valuable insights and advice.
              </li>
            </ul>
          </div>
        </div>
        <p className="predep-paragraph text-center">
          We're committed to ensuring your seamless transition into a fulfilling study abroad experience.
        </p>
      </section>
    </section>
  );
};

export default PreDeparture;
