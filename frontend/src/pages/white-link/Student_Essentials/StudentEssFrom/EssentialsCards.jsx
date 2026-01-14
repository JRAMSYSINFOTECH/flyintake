import React from "react";
import "./Essentials_Cards.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faMoneyBillTransfer,
  faHeartPulse,
  faUniversity,
  faHouse,
  faSimCard,
  faUserShield,
  faCreditCard,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";

const EssentialsCards = () => {
  const essentials = [
    {
      title: "Education loan",
      icon: faGraduationCap,
      path: "/student-essentials/EducationLoan",
      desc: "Easy access to finances so you don’t delay your dreams.",
    },
    {
      title: "Money transfer",
      icon: faMoneyBillTransfer,
      path: "/student-essentials/Money_Transfer",
      desc: "Safe, secure and fast payments to your institution and other key services.",
    },
    {
      title: "Health Insurance",
      icon: faHeartPulse,
      path: "/student-essentials/HealthInsurance",
      desc: "Your choice, your health cover, your peace of mind abroad.",
    },
    {
      title: "Student banking",
      icon: faUniversity,
      path: "/student-essentials/StudentBanking",
      desc: "Open a bank account before you arrive.",
    },
    {
      title: "Accommodation",
      icon: faHouse,
      path: "/student-essentials/Accommodation",
      desc: "Student apartment or homestay, the choice is yours.",
    },
    {
      title: "Sim cards",
      icon: faSimCard,
      path: "/student-essentials/InternationalSimCards",
      desc: "No SIM? No problem – We’ve got it covered.",
    },
    {
      title: "Guardianship",
      icon: faUserShield,
      path: "/student-essentials/Guardian-Ship",
      desc: "If you’re under 18, we’ll find you a guardian.",
    },
    {
      title: "Forex",
      icon: faCreditCard,
      path: "/student-essentials/ForexCards",
      desc: "Unlock the world with a hassle-free Forex Card – Your Perfect Travel Companion.",
    },
    {
      title: "Student Identity Card",
      icon: faIdCard,
      path: "/student-essentials/ISIC",
      desc: "Start enjoying global student discounts on food, fashion, travel, and more.",
    },
  ];

  return (
    <div className="essential-section">
      <div className="essential-container">
        <h1 className="essential-title ">Student Essentials Cards</h1>

        <div className="essential-grid">
          {essentials.map((item, index) => (
            <Link to={item.path} key={index} className="card4-link">
              <div className="essential-card">
                <div className="essential-icon">
                  <FontAwesomeIcon icon={item.icon} />
                </div>

                <div className="essential-content">
                  <h3 className="essential-text">{item.title}</h3>
                  <p className="essential-desc">{item.desc}</p>

                  <button
                    className="essential-link"
                    style={{ border: "none", background: "none", padding: 0 }}
                  >
                    Learn more <span className="essential-chevron">→</span>
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EssentialsCards;
