import React from "react";
import { useNavigate } from "react-router-dom";
import "./EnglishBtn.css";

const programs = [
  {
    name: "General English",
    level: "Beginner – Advanced",
    duration: "3–6 months",
    mode: "Online / Offline",
    focus: "Speaking, listening, reading, writing for everyday life.",
    tag: "Most Popular",
  },
  {
    name: "IELTS Preparation Course",
    level: "Intermediate+",
    duration: "6–12 weeks",
    mode: "Online Live Classes",
    focus: "Academic + General Training, mock tests, band score strategy.",
    tag: "Ideal for Study Abroad",
  },
  {
    name: "TOEFL Preparation Course",
    level: "Intermediate+",
    duration: "6–10 weeks",
    mode: "Online Self-paced + Live Doubts",
    focus: "Integrated tasks, test strategies, real exam-style practice.",
  },
  {
    name: "Business English Communication",
    level: "Upper-Intermediate+",
    duration: "8–12 weeks",
    mode: "Weekend Batches",
    focus: "Meetings, presentations, emails, client communication.",
    tag: "For Working Professionals",
  },
  {
    name: "Spoken English with Native Trainer",
    level: "Intermediate+",
    duration: "Flexible",
    mode: "1:1 Online",
    focus: "Accent, fluency, confidence building, real-life conversations.",
  },
];

const EnglishPrograms = () => {
  const navigate = useNavigate();

  const handleRegister = (programName) => {
    navigate(`/register?program=${encodeURIComponent(programName)}`);
  };

  return (
    <div className="ep-container">
      {/* Header Section */}
      <header className="ep-hero">
        <h1 className="ep-title">English Programs</h1>
        <p className="ep-subtitle">
          Choose from our specialized English programs designed for students,
          professionals, and aspirants planning to study or work abroad.
        </p>
      </header>

      {/* Info Banner */}
      <section className="ep-banner">
        <p>
          All programs include{" "}
          <span>progress tracking, feedback sessions, and practice materials</span>.
          You can pick fully online, offline (center-based), or hybrid options.
        </p>
      </section>

      {/* Program Cards */}
      <section className="ep-grid">
        {programs.map((program) => (
          <div key={program.name} className="ep-card">
            {program.tag && <span className="ep-tag">{program.tag}</span>}

            <h2 className="ep-card-title">{program.name}</h2>

            <ul className="ep-meta">
              <li>
                <strong>Level:</strong> {program.level}
              </li>
              <li>
                <strong>Duration:</strong> {program.duration}
              </li>
              <li>
                <strong>Mode:</strong> {program.mode}
              </li>
            </ul>

            <p className="ep-focus">{program.focus}</p>

            <div className="ep-actions">
              <button
                className="ep-btn-outline"
                onClick={() =>
                  alert(`More details about: ${program.name} (demo only)`)
                }
              >
                View Details
              </button>

              <button
                className="ep-btn-primary"
                onClick={() => handleRegister(program.name)}
              >
                Register Interest
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Bottom Note */}
      <section className="ep-footer-note">
        <p>
          Not sure which course is right for you?{" "}
          <span>Contact our counseling team</span> for a free level assessment
          and personalized course recommendation.
        </p>
      </section>
    </div>
  );
};

export default EnglishPrograms;
