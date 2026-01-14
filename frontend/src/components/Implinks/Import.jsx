import React from "react";
import { Link } from "react-router-dom";
import "./import.css";


const Import = () => {
  const links = [
    {
      title: "Course Subjects",
      desc: "Explore different course subjects that align to your study objectives",
      path: "/pages/Sabroad", // Redirect to Study Abroad courses page
    },
    {
      title: "Scholarships",
      desc: "Search more than 5,000 scholarships offered by over 370 institutions across the world",
      path: "/pages/Scholar", // Redirect to Scholarships page
    },
    {
      title: "Find a Course",
      desc: "Discover courses that match your academic goals and career aspirations.",
      path: "/pages/FindC", // Redirect to Find a Course page
    },
    {
      title: "IELTS",
      desc: "Prepare for the International English Language Testing System.",
      path: "/pages/IELTSPage", // Redirect to IELTS page
    },
    {
      title: "TOEFL",
      desc: "Get ready for the Test of English as a Foreign Language.",
      path: "/pages/Toefl", // Redirect to TOEFL page
    },
    {
      title: "Duolingo English Test",
      desc: "Take the convenient and accessible Duolingo English Test.",
      path: "/pages/Duolingo", // Redirect to Duolingo page
    },
  ];

  return (
    <div className="implik-section">
      <div className="implik-container">
        <h2 className="implik-title ">
          <span className="underline-green ">I</span>mportant Links{" "}
        </h2>

        <div className="implik-grid">
          {links.map((link, index) => (
            <div key={index} className="implik-card">
              <div className="implik-content">
                <div className="implik-text">{link.title}</div>
                <p className="implik-desc">{link.desc}</p>
                <Link to={link.path} className="implik-link">
                  Learn More <span className="implik-chevron">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Import;
