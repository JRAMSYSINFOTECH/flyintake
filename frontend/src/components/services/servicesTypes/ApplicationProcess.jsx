import React from "react";
import { useNavigate } from "react-router-dom";
import "./ApplicationProcess.css";

const steps = [
  {
    step: "01",
    title: "Profile Assessment",
    desc: "We evaluate your academic background, test scores, and career goals to identify the best-fit universities.",
    icon: "🎯",
  },
  {
    step: "02",
    title: "Course & University Shortlisting",
    desc: "Personalised shortlisting based on rankings, budget, intake availability, and visa success rate.",
    icon: "🏫",
  },
  {
    step: "03",
    title: "Document Preparation",
    desc: "Guidance on SOP, LOR, resume, transcripts, and financial documents to ensure accuracy.",
    icon: "📑",
  },
  {
    step: "04",
    title: "Application Submission",
    desc: "End-to-end application filing with deadline tracking and quality checks.",
    icon: "🚀",
  },
  {
    step: "05",
    title: "Offer Tracking",
    desc: "Continuous follow-ups with universities until decisions are released.",
    icon: "📬",
  },
];

const ApplicationProcess = () => {
  const navigate = useNavigate();

  return (
    <section className="application-wrapper">
      {/* ===== HEADER ===== */}
      <header className="application-header">
        <h1>Application Process</h1>
        <p>
          Our structured and transparent application process ensures your study
          abroad journey is smooth, efficient, and successful.
        </p>
      </header>

      {/* ===== PROCESS STEPS ===== */}
      <div className="application-steps">
        {steps.map((item, index) => (
          <div className="application-card" key={index}>
            <div className="step-badge">{item.step}</div>
            <div className="step-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* ===== CTA ===== */}
      <div className="application-cta">
        <h2>Start Your Application Today</h2>
        <p>
          Get expert guidance from profile evaluation to offer letter — all in
          one place.
        </p>
        <button onClick={() => navigate("/contact")}>
          Apply with Expert Support
        </button>
      </div>
    </section>
  );
};

export default ApplicationProcess;
