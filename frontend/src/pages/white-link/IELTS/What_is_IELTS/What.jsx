// Import React and the Link component from react-router-dom for navigation.
import React from "react";
import './What.css';
import { Link } from "react-router-dom";

// This is the main component for the "What is IELTS?" page.
export default function What() {
    return(
        // Main container for the entire page.
        <div>
        {/* This section is the main banner of the page. */}
        <div className="what-container">
        {/* Breadcrumb navigation link. */}
        <Link to="/"><p className="wp">INTAKE/What is IELTS?</p></Link>
        {/* Main heading and introductory text. */}
        <h1 className="wh">What is IELTS?</h1>
        <p className="wr">The world’s leading test of English for international higher education and migration.</p>
        {/* An external link to book an IELTS test. */}
        
        </div>
        {/* This section contains the main informational content about IELTS. */}
        <div className="mm">
        <div className="matter">
            <p>
                1.The International English Language Testing System (IELTS) is the world's most popular high-stakes English language proficiency test.
            </p>
            <p>
               2. IELTS is applicable for study, work and migration, with more than 3.5 million tests taken in the past year.
            </p>
            <p>
               3. The IELTS results are recognised by more than 12,000 organisations, including educational institutions, employers, professional associations and governments, in 150 countries around the world and test centres available in 140 countries.
            </p>
            <p>
               4. The IELTS test content is developed by an international team of experts and undergoes extensive research to ensure the test remains fair and unbiased.
            </p>
            <p>
               5. This promises every candidate a fair chance, regardless of factors like nationality, background, gender, lifestyle or location. You can take IELTS Academic or IELTS General Training, depending on the organisation you are applying to and your plans for the future.
            </p>
        </div>
        </div>
    <div>
        {/* A subheading for the "Learn more" section. */}
        <h1 className="h2"><span className="ul">L</span>earn more</h1>
        {/* This container holds navigation boxes to other pages. */}
        <div className="box-container">
        {/* A navigation link to the "Why take IELTS with INTAKE?" page. */}
        <Link to="https://takeielts.britishcouncil.org/take-ielts/prepare/free-ielts-english-practice-tests" style={{ textDecoration: 'none' }}>
          <p className="box">Sample Online test</p>
        </Link>
        {/* A navigation link to the "How to Prepare for IELTS" page. */}
        <Link to="/pages/Prep" style={{ textDecoration: 'none' }}>
          <p className="box">How to Prepare for IELTS</p>
        </Link>
        {/* An external link to book an IELTS test. */}
        <a href="https://takeielts.britishcouncil.org/take-ielts/prepare/courses" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <p className="box">IELTS courses</p>
        </a>
        </div>

       
    </div>

        </div>
    );
}