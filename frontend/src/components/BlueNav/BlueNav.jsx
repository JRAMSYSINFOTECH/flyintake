import React, { useState } from 'react'
import './BlueNav.css'
import { Link } from 'react-router-dom';

const BlueNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="blue-nav">


      {/* Down arrow for mobile */}
      <button
        className="blue-nav__arrow"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        ▼
      </button>
      <ul className={`blue-nav__links${open ? ' open' : ''}`}>
        <li className="blue-nav__link"><Link to="/study-abroad/why-study-abroad">Why-study-abroad</Link><span>&gt;&gt;</span></li>
        <li className="blue-nav__link"><Link to="/study-abroad/where-to-study">Where and What to study</Link><span>&gt;&gt;</span> </li>
        <li className="blue-nav__link"><Link to="/study-abroad/how-to-apply">How do I apply</Link><span>&gt;&gt;</span></li>
        <li className="blue-nav__link"><Link to="/study-abroad/after-offer">After receiving an offer</Link><span>&gt;&gt;</span></li>
        <li className="blue-nav__link"><Link to="/study-abroad/prepare-to-depart">Prepare to depart</Link><span>&gt;&gt;</span></li>
        <li className="blue-nav__link"><Link to="/study-abroad/arrive-and-thrive">Arrive and thrive</Link><span>&gt;&gt;</span></li>
      </ul>
    </nav>
  )
}

export default BlueNav