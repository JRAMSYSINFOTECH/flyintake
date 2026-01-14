import React from "react";
import { Link } from "react-router-dom";
import "./StudySteps.css";

const STEPS = [
  {
    title: "Why study abroad?",
    path: "/study-abroad/why-study-abroad",
  },
  {
    title: "Where and what to study?",
    path: "/study-abroad/where-to-study",
  },
  {
    title: "How do I apply?",
    path: "/study-abroad/how-to-apply",
  },
  {
    title: "After receiving an offer",
    path: "/study-abroad/after-offer",
  },
  {
    title: "Prepare to depart",
    path: "/study-abroad/prepare-to-depart",
  },
  {
    title: "Arrive and thrive",
    path: "/study-abroad/arrive-and-thrive",
  },
];

export default function StudySteps() {

  return (
    <section className="study-steps-sec">
      <div className="study-steps-wrap">
        <h2 className="steps-title"><span className="color">Y</span>our study abroad steps</h2>

        <div className="steps-grid">
          <div className="steps-visual">
            <img
              src="/assets/Getty.jpg"
              alt="Smiling student holding books"
            />
          </div>

          <div className="steps-list" role="list">
            {STEPS.map((step, idx) => (
              <Link
                key={step.title}
                to={step.path}
                className="step-item"
              >
                <span>{step.title}</span>
                <svg
                  className="chev"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M8.12 9l3.88 3.88L15.88 9 17 10.12l-5 5-5-5L8.12 9z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
