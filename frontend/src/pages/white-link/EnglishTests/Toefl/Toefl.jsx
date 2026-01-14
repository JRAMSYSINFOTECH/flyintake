import React from "react";
import { Link } from "react-router-dom";
import "./Toefl.css";
export default function Toefl(){
    return(
        <div>
            <div className="Toefl-bas">
            <Link to="/"><p1 className="sas">INTAKE/Toefl....</p1></Link>
            <h1 className="Toefl-head">TOEFL-Test of English as a Foreign Language</h1>
            <p className="Toefl-mat">TOEFL focuses more on academic English used in universities. It is fully computer-based and measures integrated skills like reading, listening, speaking, and writing together.</p>
            </div>
        <div className="Toefl-body">
            <h3 className="Toefl-MH">“Show your English skills and study at top universities worldwide.”</h3>
            <p className="Toefl-b">Prove your global readiness with TOEFL — one of the world’s most trusted English proficiency exams. 🌍
It measures how well you can read, write, listen, and speak in real academic situations, preparing you for success at top international universities.
Accepted by 11,000+ institutions across 150+ countries, TOEFL gives you the edge to study, work, or migrate with confidence.
Fully computer-based and results-driven, it focuses on real communication skills that matter most in classrooms and careers abroad.</p>
        </div>
         <div className="Toefl-container">
      <h2 className="Toefl-heading">TOEFL – Your Gateway to Global Education 🌍</h2>

      <div className="Toefl-table-wrapper">
        <table className="Toefl-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Full Form</td>
              <td>Test of English as a Foreign Language</td>
            </tr>
            <tr>
              <td>Purpose</td>
              <td>To measure academic English proficiency for studying or working abroad.</td>
            </tr>
            <tr>
              <td>Accepted By</td>
              <td>11,000+ universities and institutions across 150+ countries.</td>
            </tr>
            <tr>
              <td>Mode of Test</td>
              <td>Computer-based (Internet-based Test – iBT)</td>
            </tr>
            <tr>
              <td>Skills Tested</td>
              <td>Reading, Listening, Speaking, and Writing</td>
            </tr>
            <tr>
              <td>Duration</td>
              <td>Approximately 2 hours</td>
            </tr>
            <tr>
              <td>Score Range</td>
              <td>0 to 120 (each section scored out of 30)</td>
            </tr>
            <tr>
              <td>Test Frequency</td>
              <td>Over 60 times a year at authorized test centers or online</td>
            </tr>
            <tr>
              <td>Results Validity</td>
              <td>2 years</td>
            </tr>
            <tr>
              <td>Official Website</td>
              <td>
                <a
                  href="https://www.ets.org/toefl"
                  target="_blank"
                  rel="TOEFL"
                >
                  Visit TOEFL Official Site
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

        </div>
    );
}
