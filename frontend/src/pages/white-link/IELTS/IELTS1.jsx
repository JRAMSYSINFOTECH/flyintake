// Import React and the Link component from react-router-dom for navigation.
import React from 'react';
import './IELTS1.css';
import { Link } from 'react-router-dom';

// This is the main component for the IELTS landing page.
export default function IELTSPage() {
    return (
        // Main container for the entire page.
        <div>
            {/* This section is the main banner of the page. */}
            <div className='ma'>
                {/* Breadcrumb navigation link. */}
               <Link to="/"><p className='pa'>INTAKE/IELTS - one test, countless...</p></Link> 
                {/* Main heading and introductory text. */}
                <h1 className='laa'>IELTS - one test, countless opportunities</h1>
                <p className='aa'>IELTS is trusted by over 12,000 organisations as a true indicator of one's real-world English communication capabilities</p>
                
            </div>
            {/* This section contains a detailed paragraph explaining what IELTS is. */}
            <div className='mattt'>The International English Language Testing System (IELTS) is a vital English proficiency test required globally for individuals seeking international education, professional registration, or migration. The test is designed to measure proficiency across all four core skills: Listening, Reading, Writing, and Speaking. While the Listening and Speaking sections are the same for everyone, the Reading and Writing content differs based on the chosen module: Academic or General Training. The Academic module presents complex, university-level texts and requires the description of graphs or data in the Writing section, preparing test-takers for higher education. In contrast, the General Training module features texts related to everyday social and workplace survival and includes letter writing in the Writing section, making it suitable for work or immigration purposes. Regardless of the module, the final result is presented on a comprehensive 9-Band Scale, offering a clear and accepted measure of a candidate's readiness for life in an English-speaking country.</div>
           {/* This container holds a table with key details about the IELTS test. */}
           <div className="ielts_container">
      <h2 className="ielts_heading">IELTS – International English Language Testing System </h2>

      <div className="ielts_table_wrapper">
        {/* The table provides a quick overview of IELTS features. */}
        <table className="ielts_table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Full Form</td>
              <td>International English Language Testing System</td>
            </tr>
            <tr>
              <td>Purpose</td>
              <td>To assess English language proficiency for education, migration, or work abroad.</td>
            </tr>
            <tr>
              <td>Accepted By</td>
              <td>10,000+ organizations including universities, governments, and employers.</td>
            </tr>
            <tr>
              <td>Mode of Test</td>
              <td>Computer-based and Paper-based</td>
            </tr>
            <tr>
              <td>Skills Tested</td>
              <td>Listening, Reading, Writing, and Speaking</td>
            </tr>
            <tr>
              <td>Duration</td>
              <td>2 hours 45 minutes</td>
            </tr>
            <tr>
              <td>Score Range</td>
              <td>Band scale from 1 (lowest) to 9 (highest)</td>
            </tr>
            <tr>
              <td>Test Frequency</td>
              <td>Available up to 4 times a month worldwide</td>
            </tr>
            <tr>
              <td>Results Validity</td>
              <td>2 years</td>
            </tr>
            <tr>
              <td>Official Website</td>
              {/* An external link to the official IELTS website. */}
              <td>
                <a
                  href="https://www.ielts.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit IELTS Official Site
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

        {/* This section provides links to learn more about IELTS. */}
        <div className='lr'>
               {/* A subheading for the "Learn more" section. */}
               <h1 className="h2"><span className="ul">L</span>earn more</h1>
        {/* This container holds navigation boxes to other pages. */}
        <div className="box-container">
       {/* Each Link component navigates to a different page or external site. */}
       <Link to="https://r.search.yahoo.com/_ylt=Awr1UUrSbz9p_QEArDq7HAx.;_ylu=Y29sbwNzZzMEcG9zAzIEdnRpZAMEc2VjA3Ny/RV=2/RE=1766974674/RO=10/RU=https%3a%2f%2ftakeielts.britishcouncil.org%2fblog%2fbenefits-ielts-why-take-test/RK=2/RS=EqFgHy55sBlz0FdUtDqcQqh0Fhs-"><p className="box">Why take IELTS?</p></Link>
       <Link to="/pages/Prep"><p className="box">How to Prepare for IELTS</p></Link>
      <Link to="/pages/What"><p className="box">What is IELTS</p></Link>
    </div>
         
            </div>  </div>
    );
}