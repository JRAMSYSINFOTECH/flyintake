// Import React to build the component.
import React from 'react';
import { Link } from 'react-router-dom';
// Import the corresponding CSS file for styling.
import './Qsworld.css';

// This is the main component for the QS World University Rankings page.
export default function Qsworld() {
  return (
    <div>
        {/* This is the main banner section for the page. */}
        <div className='Qs-container'>
            {/* Breadcrumb navigation. */}
           <Link to="/"> <p className='p11'>INTAKE/QS World University Ranking...</p></Link>
            {/* Main heading. */}
            <h1 className='h11'>QS World University Rankings 2025: Top global universities</h1>            </div>
            <h1 className='mat'><span className='ul'>C</span>heck the ranking of your university on the world map</h1>
        {/* This container holds the main informational content about the QS rankings. */}
        <div className='Qs-container2'>
            <p>It can be quite challenging to decide which university or institution you want to study in. Given there are many factors you need to consider before deciding where you want to pursue your higher education, it’s a wise step to refer to the QS Rankings of your desired institution.</p>
            <h2>What is QS World University Rankings?</h2>            
            <p>Simply put, QS ranking is an annual publication of university rankings by Quacquarellu Symonds, a British organisation specialising in the education industry. It was first published in 2004 in collaboration with Times Higher Education and was known as the Times Higher Education – QS World University Rankings until 2009 when both decided to publish their own versions.</p>
            <h2>QS Ranking Indicators</h2>
            <p>The QS World University Rankings consider the university’s reputation among other universities (40%), employers (10%), student-teacher ratio (20%), citations-academic staff ratio (20%) and international outlook including students and staff (10%) for its compilation of top universities in the world.</p>
            <p>The QS system ranks these universities as per their global standing, and subject-wise (which includes 48 different subjects and five faculty areas) along with five regional tables.</p>
            <h2>QS World University Rankings 2025</h2>
            <p>The 20th edition of QS ranking includes 1,400+ world’s best institutions across the world and most of the institutions that took the top spots were from Europe, Asia, and North America. The next QS World University Ranking is expected to come out in June 2025.</p>
        </div>
            <h3 className='thead'>World's top 12 universities as per QS World University Rankings:</h3>
            {/* This table displays the top universities according to the QS rankings. */}
            <table className='qs-table'>
                <thead>
                    <tr>
                        <th>Institution Name</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1. Massachusetts Institute of Technology (MIT)</td>
                        <td>United States</td>
                    </tr>
                    <tr>
                        <td>2. University of Cambridge</td>
                        <td>United Kingdom</td>
                    </tr>
                    <tr>
                        <td>3. University of Oxford</td>
                        <td>United Kingdom</td>
                    </tr>
                    <tr>
                        <td>4. Harvard University</td>
                        <td>United States</td>
                    </tr>
                    <tr>
                        <td>5. Stanford University</td>
                        <td>United States</td>
                    </tr>
                    <tr>
                        <td>6. Imperial College London</td>
                        <td>United Kingdom</td>
                    </tr>
                    <tr>
                        <td>7. ETH Zurich</td>
                        <td>Switzerland</td>
                    </tr>
                    <tr>
                        <td>8. National University of Singapore (NUS)</td>
                        <td>Singapore</td>
                    </tr>
                    <tr>
                        <td>9. UCL (University College London)</td>
                        <td>United Kingdom</td>
                    </tr>
                    <tr>
                        <td>10. University of California, Berkeley (UCB)</td>
                        <td>United States</td>
                    </tr>
                </tbody>
            </table>
              </div>
  )
}