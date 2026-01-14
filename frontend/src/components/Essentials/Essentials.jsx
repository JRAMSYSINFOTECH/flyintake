import React from "react";
import { Link } from "react-router-dom";
import "./Essentials.css";

const Essentials = () => {
  const essentials = [
    {
      title: "Education Loan",
      path: "/student-essentials/EducationLoan",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M12 1v22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>`,
    },
    {
      title: "Accommodation",
      path: "/student-essentials/Accommodation",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M3 12L12 3l9 9v9H3v-9Z" />
        <path d="M9 21v-6h6v6" />
      </svg>`,
    },
    {
      title: "Banking",
      path: "/student-essentials/StudentBanking",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M12 2 2 7l10 5 10-5-10-5Z" />
        <path d="M2 7v13h20V7" />
        <path d="M6 10v6M10 10v6M14 10v6M18 10v6" />
      </svg>`,
    },
    {
      title: "Health Insurance",
      path: "/student-essentials/HealthInsurance",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M12 21s8-4 8-10V5l-8-3-8 3v6c0 6 8 10 8 10Z" />
        <path d="M9 10h6M12 7v6" />
      </svg>`,
    },
    {
      title: "Money Transfer",
      path: "/student-essentials/Money_Transfer",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 8h10M7 12h10" />
        <circle cx="12" cy="16" r="2" />
      </svg>`,
    },
    {
      title: "International SIM Cards",
      path: "/student-essentials/InternationalSimCards",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M9 8h6v8H9z" />
      </svg>`,
    },
    {
      title: "Forex Cards",
      path: "/student-essentials/ForexCards",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
        <circle cx="8" cy="15" r="1" />
        <circle cx="16" cy="15" r="1" />
      </svg>`,
    },
    {
      title: "Guardian Ship",
      path: "/student-essentials/Guardian-Ship",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21a7 7 0 0 1 13 0Z" />
      </svg>`,
    },
    {
      title: "ISIC Card",
      path: "/student-essentials/ISIC",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 10h20" />
        <circle cx="8" cy="15" r="2" />
      </svg>`,
    },
    {
      title: "Student Travel Support",
      path: "/student-essentials/Travel_Support",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path d="M21 16v-2a3 3 0 0 0-3-3H9l-2-5H3v2h3l2 5H4v8h2v-3h12v3h2v-5h1z" />
      </svg>`,
    },
  ];

  return (
    <section className="essentials-section">
      <div className="essentials-container">
        <h2 className="essentials-title">Student Essentials Services</h2>
        <div className="essentials-grid">
          {essentials.map((essential, index) => (
            <Link
              to={essential.path}
              key={index}
              className="essential-card"
            >
              <div
                className="essential-icon"
                dangerouslySetInnerHTML={{ __html: essential.icon }}
              />
              <h3 className="essential-text">{essential.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Essentials;
