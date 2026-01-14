import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Personalized Profile Assessment",
      desc:
        "We start by understanding your unique profile and requirements, so we can help find the best destination, course, and institution that match your eligibility, interests, and aspirations",
      path: "/Pro",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
    },
    {
      title: "Applying to Institutions",
      desc:
        "We handhold you through the entire application process from preparation to submission, including identifying scholarship opportunities for you",
      path: "/pages/FindU",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      ),
    },
    {
      title: "Admission Letter Acceptance",
      desc:
        "Our experts help you evaluate offers, make the right choice, and guide you with tuition fee payments, accommodation, and more",
      path: "/Adm",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 15l4-4 4 4" />
          <path d="M12 12V8" />
        </svg>
      ),
    },
    {
      title: "Education Loan",
      desc:
        "We help you get education loans at the best interest rates through our trusted partners",
      path: "/student-essentials/EducationLoan",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 1v22" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      title: "Visa Preparation",
      desc:
        "We assist you with documentation, checks, mock interviews, and visa filing with a high success rate",
      path: "/Visa",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="2" width="18" height="20" rx="2" />
          <path d="M7 6h10" />
          <path d="M7 10h10" />
          <circle cx="12" cy="16" r="2" />
        </svg>
      ),
    },
    {
      title: "Pre-departure Briefing",
      desc:
        "From SIM cards to banking and forex, we prepare you for a smooth transition abroad",
      path: "/PreD",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M17.5 19.5L9.5 12l8-7.5" />
          <path d="M2 12h7.5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">
          <span className="underline-green">S</span>ervices
        </h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              onClick={() => navigate(service.path)}
            >
              <div className="service-icon">{service.icon}</div>

              <div className="service-content">
                <h3 className="service-text">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </div>

              {/* Arrow */}
              <svg
                className="service-chevron"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
