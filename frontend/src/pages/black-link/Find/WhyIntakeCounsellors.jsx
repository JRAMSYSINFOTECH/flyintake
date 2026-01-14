import React from "react";
import "./WhyIntakeCounsellors.css";
import { FaGlobe, FaGraduationCap, FaHeart, FaHandshake, FaTags, FaStar } from "react-icons/fa";

const WhyIntakeCounsellors = () => {
  const counsellorData = [
    {
      icon: <FaGlobe />,
      title: "Connect globally",
      desc: "Get one-to-one access to more than 1,000 expert education counsellors across 190 INTAKE offices in 35 countries.",
    },
    {
      icon: <FaGraduationCap />,
      title: "Experts in their field",
      desc: "Our counsellors are highly trained to support you to find and apply to courses matching your interest and aptitude.",
    },
    {
      icon: <FaHeart />,
      title: "An unbeatable track record",
      desc: "To-date, we have helped more than half a million students achieve their dream of studying abroad.",
    },
    {
      icon: <FaHandshake />,
      title: "Friendly and approachable",
      desc: "Many INTAKE counsellors were once international students too. You'll always find them ready to go the extra mile.",
    },
    {
      icon: <FaTags />,
      title: "Zero commission",
      desc: "INTAKE doesn’t charge you for its services. Many universities also waive their application fees when you apply through us.",
    },
    {
      icon: <FaStar />,
      title: "Putting you first",
      desc: "All our services are designed to enhance your experience and ensure that you achieve your study abroad goals.",
    },
  ];

  return (
    <section className="why-idp-section">
      <h2 className="why-idp-title">
        Why <span>INTAKE Counsellors?</span>
      </h2>

      <div className="why-idp-grid">
        {counsellorData.map((item, index) => (
          <div key={index} className="why-idp-card">
            <div className="why-idp-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyIntakeCounsellors;
