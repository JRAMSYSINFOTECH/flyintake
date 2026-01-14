import React from "react";
import "./EnglishT.css";
import { Link } from "react-router-dom";

export default function EnglishT() {
  return (
    <div>
      {/* Hero Section */}
      <div className="MK">
        <Link to="/"><p className="si">INTAKE/ ENGLISH Tests</p></Link>
        <p className="he">English Tests</p>
       
      </div>

      {/* Body Section */}
        <div className="bd">
          <p className="ee">
            Dreaming of studying or working abroad?...
            <br />
            Before you pack your bags, you must prove your English communication
            skills. International language tests help universities and employers
            understand your ability to succeed in English-speaking countries.
          </p>

          {/* TOEFL */}
          <Link to="/pages/Toefl"><p className="to"><span className="ul">T</span>OEFL (Test of English as a Foreign Language):</p></Link>
          <ul className="Li">
            <li>Internationally recognized English proficiency test</li>
            <li>Required for studying, working, or migrating abroad</li>
            <li>Focuses on academic and real-life English usage</li>
            <li>Evaluates Reading, Listening, Speaking, and Writing</li>
            <li>Accepted by 11,000+ universities worldwide</li>
            <li>Available in iBT & paper formats; 2-year validity</li>
          </ul>
          <Link to="/pages/Toefl"><button className="bu">Click for More</button></Link>

          {/* Duolingo */}
          <Link to="/pages/Duolingo"><span className="eng1"><p className="to"><span className="ul">D</span>uolingo English Test (DET):</p></span></Link>
          <ul className="Li">
            <li>Modern, convenient, and affordable online exam</li>
            <li>Taken anytime with computer, webcam, and internet</li>
            <li>Adaptive test evaluating all four language skills</li>
            <li>Completed in less than 1 hour; results in 48 hours</li>
            <li>Accepted by 5,000+ institutions worldwide</li>
          </ul>
          <Link to="/pages/Duolingo"><button className="bu">Click for More</button></Link>

          {/* IELTS */}
          <Link to="/pages/IELTSPage"><p className="to"><span className="ul">I</span>ELTS (International English Language Testing System):</p></Link>
          <ul className="Li">
            <li>One of the most popular English tests globally</li>
            <li>Evaluates Listening, Reading, Writing, and Speaking</li>
            <li>Managed by British Council, INTAKE, and Cambridge English</li>
            <li>Two types: Academic and General Training</li>
            <li>Scored on a band scale of 1 to 9</li>
            <li>Accepted by 11,000+ organizations worldwide</li>
          </ul>
          <Link to="/pages/IELTSPage"><button className="bu">Click for More</button></Link>
        </div>

        {/* Final Paragraph */}
        <div className="ml">
          Each of these tests — TOEFL, IELTS, and Duolingo — opens the door to
          global opportunities. Your choice depends on your goals, country, and
          convenience. A strong English score helps you succeed in international
          academic and professional environments.
        </div>
          </div>
        );
      }
