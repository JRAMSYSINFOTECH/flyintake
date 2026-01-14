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
        <Link to="https://r.search.yahoo.com/_ylt=Awr1UUr0cj9p_QEAP6S7HAx.;_ylu=Y29sbwNzZzMEcG9zAzMEdnRpZAMEc2VjA3Ny/RV=2/RE=1766975476/RO=10/RU=https%3a%2f%2ftakeielts.britishcouncil.org%2ftake-ielts%2fprepare%2ffree-ielts-english-practice-tests/RK=2/RS=F6WbIT.5xDo_0P4igBJl6XheRI8-" style={{ textDecoration: 'none' }}>
          <p className="box">Sample Online test</p>
        </Link>
        {/* A navigation link to the "How to Prepare for IELTS" page. */}
        <Link to="/pages/Prep" style={{ textDecoration: 'none' }}>
          <p className="box">How to Prepare for IELTS</p>
        </Link>
        {/* An external link to book an IELTS test. */}
        <a href="https://r.search.yahoo.com/rdclks/dWU9M2ZoNmdnNWtqdXNuayZ1dD0xNzY1NzY1ODc2MTY5JnVvPTgyODA3MzQ3NDYyMTMzJmx0PTImcz0xJmVzPUNrQ3BNS1dmQ1ZVUC4xekQxSXBzcE14WFRDRDBHa3pkS3J4TjlGVWxoT0FBQXltSVlFVWlHSkdnTmxOMU9CSWVfRUtVOGVCLldyNGpONU0t/RV=2/RE=1768357876/RO=14/RU=https%3a%2f%2fwww.bing.com%2faclick%3fld%3de8Ea5g7lkR4xrwLmwzV5XzazVUCUwTWj-oRUwuMZsTeZTJTmfVl8GhigjGtL8m2VBDVPp_2fKCE3wqQWpjiqYWWT8ma2yxzxcEpbfVpHOON9KSw5fYUEUeVyNUB39cPWGS_HnyQjmzFHuN5YjhlIwbWM27azLj0eJABXWEhc4Nazh6XJ_lPlgNAJ6jSl5AcfJIIqdgiGO83gzdtsX9dmo5c2O2B4Y%26u%3daHR0cHMlM2ElMmYlMmZ3d3cudWRlbXkuY29tJTJmY291cnNlJTJmaWVsdHMtcHJlcGFyYXRpb24tY291cnNlJTJmJTNmdXRtX2NhbXBhaWduJTNkQkctU2VhcmNoX0tleXdvcmRfR2FtbWFfTm9uUF9sYS5FTl9jYy5JbmRpYSUyNnV0bV9zb3VyY2UlM2RiaW5nJTI2dXRtX21lZGl1bSUzZHBhaWQtc2VhcmNoJTI2cG9ydGZvbGlvJTNkQmluZy1JbmRpYSUyNnV0bV9hdWRpZW5jZSUzZG14JTI2dXRtX3RhY3RpYyUzZG5iJTI2dXRtX3Rlcm0lM2RpZWx0cyUyNTIwcHJlcGFyYXRpb24lMjUyMHRlc3QlMjZ1dG1fY29udGVudCUzZG8lMjZmdW5uZWwlM2QlMjZ0ZXN0JTNkJTI2bXNjbGtpZCUzZDk2NDBhZjNhYjQxMzE3YzkwMDk0YzYwNWM2ZTc2ODk0%26rlid%3d9640af3ab41317c90094c605c6e76894/RK=2/RS=STWTXG0BJgB3oYtNTPcc8G4lEEY-;_ylt=Awr1UUr0cj9p_QEAIKS7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA292LXRvcA--;_ylc=X3IDMgRydAMw?IG=0af5514ae5d14bb29411587c5dac5b63" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <p className="box">IELTS courses</p>
        </a>
        </div>
        {/* A subheading for the "Related articles" section. */}
        <h1 className="h2"><span className="ul">R</span>elated articles</h1>
        {/* This grid displays cards linking to related articles. */}
        <div className="cards-grid">
          {/* A card that links to a Google search for a related topic. */}
          <a 
            href="https://www.google.com/search?q=IELTS+vs+other+English+language+proficiency+tests" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card">
              <h3 className="card-title">IELTS vs other English language proficiency tests</h3>
              <p className="card-desc">Planning to take your English proficiency test? There are a number of factors you need to consider. Let’s look into them in detail.</p>
            </div>
          </a>
          {/* Another card that links to a Google search for a related topic. */}
          <a 
            href="https://www.google.com/search?q=Minimum+IELTS+score+requirements+for+UK+universities" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card">
              <h3 className="card-title">Minimum IELTS score requirements for UK universities</h3>
              <p className="card-desc">Minimum IELTS band score requirements for the UK. Check the required IELTS score for UK universities, courses, and student visa.</p>
            </div>
          </a>
        </div>
    </div>

        </div>
    );
}