import React from "react";
import { Link } from "react-router-dom";
import "./Duolingo.css";
export default function Duolingo(){
    return(
        <div>
            <div className="Duolingo-bas">
           <Link to="/"> <p1 className="side-head">INTAKE/Duolingo....</p1></Link>
            <h1 className="Duolingo-head">Duolingo English Test</h1>
            <p className="Duolingo-mat">The Duolingo English Test is an affordable, convenient, and secure online English proficiency test accepted by thousands of institutions worldwide. It assesses reading, writing, speaking, and listening skills through interactive tasks.</p>
            </div>
        <div className="Duolingo-body">
            <h3 className="Duolingo-MH">“Prove your English skills anytime, anywhere with the Duolingo English Test.”</h3>
            <p className="Duolingo-b">The Duolingo English Test offers a flexible and accessible way to demonstrate your English proficiency for academic and professional purposes. 🌐
With its user-friendly online format, you can take the test from the comfort of your home, eliminating the need for travel to test centers.
Accepted by over 3,000 institutions globally.</p>
        </div>
        <div className="duolingo-container">
      <h2 className="duolingo-heading">Duolingo English Test – Simple, Fast, and Reliable 🎯</h2>

      <div className="duolingo-table-wrapper">
        <table className="duolingo-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Full Form</td>
              <td>Duolingo English Test (DET)</td>
            </tr>
            <tr>
              <td>Purpose</td>
              <td>To assess English language proficiency for study or immigration purposes.</td>
            </tr>
            <tr>
              <td>Accepted By</td>
              <td>4000+ universities and institutions worldwide.</td>
            </tr>
            <tr>
              <td>Mode of Test</td>
              <td>Completely online – can be taken from home.</td>
            </tr>
            <tr>
              <td>Skills Tested</td>
              <td>Reading, Writing, Listening, and Speaking.</td>
            </tr>
            <tr>
              <td>Duration</td>
              <td>About 1 hour.</td>
            </tr>
            <tr>
              <td>Score Range</td>
              <td>10 to 160.</td>
            </tr>
            <tr>
              <td>Test Frequency</td>
              <td>Can be taken anytime, up to twice per month.</td>
            </tr>
            <tr>
              <td>Results Validity</td>
              <td>2 years.</td>
            </tr>
            <tr>
              <td>Official Website</td>
              <td>
                <a
                  href="https://englishtest.duolingo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Duolingo Official Site
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