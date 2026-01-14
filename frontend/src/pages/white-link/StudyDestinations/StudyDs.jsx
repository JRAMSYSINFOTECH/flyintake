import React from 'react'
import { Link } from 'react-router-dom';
import "./StudyDs.css"

const StudyDs = () => {
  return (
    <div>
    <div className="stdy-dest-bg">
      <div className="stdy-dest-content">
        <h1>study abroad</h1>
        <h2>Intake india</h2>
        <div className="stdy-dest-breadcrumb">/ Study Abroad</div>
        <h3>Study Abroad Programs - Apply For 2025 Intake | Free Counselling</h3>
        <p>Learn more about exciting places where you can study abroad</p>
        <Link to="/enquiry" className="stdy-dest-btn">Get Free Expert Advice</Link>
      </div>
      </div>

      <div className='stdy-dest-info'><strong>Six Dream Destinations to Study Abroad</strong><br />
Start your study abroad journey in these welcoming study locations! Our expert counsellors will guide you through choosing the perfect study abroad universities & colleges program.

With so many courses and universities to choose from, deciding where and what to study abroad can be a daunting task. Don’t worry, we are here to guide you during the entire process. Our experienced counsellors work with you to understand your goals and aspirations to help find study abroad program that perfectly fits for you. You can reach out to your nearest INTAKE office for a free counselling session anytime!</div>
    </div>
  )
}

export default StudyDs