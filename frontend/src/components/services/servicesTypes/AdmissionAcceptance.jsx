import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdmissionAcceptance.css";

const AdmissionAcceptance = () => {
  const navigate = useNavigate();

  // Dummy data for Intake Overview
  const intakeOverview = {
    intake: "Fall 2025",
    programLevel: "UG / PG",
    countryType: "Global / Specific",
    applicationStatus: "In Progress",
  };

  // Dummy data for Key Improvement Suggestions
  const improvementSuggestions = [
    {
      title: "Academic Profile",
      icon: "📚", // Placeholder icon
      points: [
        "Improve GPA with latest transcripts",
        "Upload consolidated marks memo",
      ],
    },
    {
      title: "Statement of Purpose (SOP)",
      icon: "📝", // Placeholder icon
      points: [
        "Add intake-specific goals",
        "Mention university curriculum alignment",
      ],
    },
    {
      title: "Test Scores",
      icon: "📊", // Placeholder icon
      points: [
        "Improve IELTS / TOEFL score (if below requirement)",
        "Add pending test booking proof",
      ],
    },
    {
      title: "Experience / Projects",
      icon: "💼", // Placeholder icon
      points: [
        "Add relevant internships",
        "Highlight domain-related projects",
      ],
    },
    {
      title: "Documentation",
      icon: "📁", // Placeholder icon
      points: [
        "Ensure LORs are signed and recent",
        "Avoid scanned screenshots",
      ],
    },
  ];

  // Dummy data for Priority Actions
  const priorityActions = [ // Changed to objects for text and description
    {
      text: "Update SOP for this intake",
      description: "Ensure your Statement of Purpose is tailored to the specific intake and highlights your recent achievements and goals.",
    },
    {
      text: "Re-upload transcripts",
      description: "Provide the most current and complete academic transcripts to reflect your latest grades and qualifications.",
    },
    {
      text: "Add test score proof",
      description: "Submit official scores for any required language proficiency tests (e.g., IELTS, TOEFL) or standardized tests (e.g., GRE, GMAT).",
    },
    {
      text: "Verify documents",
      description: "Double-check all submitted documents for accuracy, completeness, and proper formatting to avoid delays. This includes checking for proper signatures, dates, and clear scans.",
    },
    {
      text: "Secure Financial Proof",
      description: "Gather and prepare all necessary financial documents to demonstrate your ability to cover tuition and living expenses for your studies.",
    },
  ];

  // Dummy data for Intake-Based Tips
  const intakeTips = [
    "Apply early in this intake",
    "Choose 1–2 safe universities",
    "Match course prerequisites carefully",
  ];

  return (
    <section className="admission-acceptance-page">
      {/* ===== Page Header ===== */}
      <header className="admission-acceptance-header">
        <h1>Admission Acceptance Support – {intakeOverview.intake} Intake</h1>
        <p>Smart recommendations to improve your admission approval chances.</p>
      </header>

      {/* ===== Intake Overview (Small Info Card) ===== */}
      <div className="intake-overview-card">
        <h3>Intake Overview</h3>
        <ul>
          <li>📅 Intake: <span>{intakeOverview.intake}</span></li>
          <li>🎓 Program Level: <span>{intakeOverview.programLevel}</span></li>
          <li>🌍 Country / University Type: <span>{intakeOverview.countryType}</span></li>
          <li>📌 Application Status: <span>{intakeOverview.applicationStatus}</span></li>
        </ul>
      </div>

      {/* ===== Key Improvement Suggestions ===== */}
      <div className="improvement-suggestions-section">
        <h2>Key Improvement Suggestions</h2>
        <div className="improvement-suggestions-grid">
          {improvementSuggestions.map((suggestion, index) => (
            <div className="suggestion-card" key={index}>
              <span className="suggestion-icon">{suggestion.icon}</span>
              <h3>{suggestion.title}</h3>
              <ul>
                {suggestion.points.map((point, pIndex) => (
                  <li key={pIndex}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Priority Actions ===== */}
      <div className="priority-actions-section">
        <h2>Your Priority Actions</h2> {/* Slightly rephrased title */}
        <ul className="priority-actions-list"> {/* Changed class name */}
          {priorityActions.map((action, index) => (
            <li key={index}>
              <h3>{action.text}</h3>
              <p>{action.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* ===== Intake-Based Tips ===== */}
      <div className="intake-tips-box">
        <h2>Intake-Based Tips</h2>
        <ul>
          {intakeTips.map((tip, index) => (
            <li key={index}>✔ {tip}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AdmissionAcceptance;
