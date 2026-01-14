import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./StudyAbNavbar.css";

function StudyAbNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="blue-nav">
      <ul
        className="blue-nav__links"
        style={{ display: open ? "flex" : undefined }}
      >
        <li className="blue-nav__link">
          <Link to="/study-abroad/why-study-abroad">Why Study Abroad</Link>
        </li>

        <li className="blue-nav__link">
          <Link to="/study-abroad/where-to-study">
            Where & What to Study
          </Link>
        </li>

        <li className="blue-nav__link">
          <Link to="/study-abroad/how-to-apply">How do I apply</Link>
        </li>

        <li className="blue-nav__link">
          <Link to="/study-abroad/after-offer">
            After receiving an offer
          </Link>
        </li>

        <li className="blue-nav__link">
          <Link to="/study-abroad/prepare-to-depart">
            Prepare to depart
          </Link>
        </li>

        <li className="blue-nav__link">
          <Link to="/study-abroad/arrive-and-thrive">
            Arrive and thrive
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default StudyAbNavbar;
