import React from "react";
import "./ServiceSection.css";

const ServicesSection = () => {
  const services1 = [
    {
      icon: "📋",
      title: "Wide range of services",
      desc: "Our diverse range of services removes the stress to let you start your study abroad journey with peace of mind.",
    },
    {
      icon: "✨",
      title: "One-stop solution",
      desc: "No need to search elsewhere. At INTAKE, we provide all of the essential study abroad services you need under one roof.",
    },
    {
      icon: "👥",
      title: "Personalised support",
      desc: "Receive individualised guidance and support to help you choose the right services tailored to your needs.",
    },
  ];

  return (
    <section className="m-services">
      {services1.map((service, index) => (
        <div key={index} className="m-service-card">
          <div className="m-service-icon">{service.icon}</div>
          <h3 className="m-service-title">{service.title}</h3>
          <p className="m-service-desc">{service.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default ServicesSection;
