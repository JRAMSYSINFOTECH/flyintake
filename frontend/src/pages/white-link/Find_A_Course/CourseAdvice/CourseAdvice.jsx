// Import React and the Link component for navigation.
import React from "react";
import { Link } from "react-router-dom";
// Import the corresponding CSS file for styling.
import "./CourseAdvice.css";

// This is the main component for the "Course Advice" page.
export default function CourseAdvice() {
  return (
    <div>
      {/* This is the main banner section for the page. */}
      <section className="course-banner">
        <div className="course-banner-content">
          {/* Breadcrumb navigation. */}
          <Link to="/"><p className="ula" href="/">INTAKE/Course Advice for students....</p></Link>
          {/* Main heading and description. */}
          <h1>Course Advice For Students Planning To
            Study Abroad</h1>
          <p>From navigating language barriers to understanding credit transfers, here's some course advice to make the most of your international education journey.</p>
          {/* A button that links to the "Find a Course" page. */}
          <Link to="/pages/FindC">
            <button className="course-banner-button">Find Course</button>
          </Link>
        </div>
      </section>
      {/* This container holds the main text content of the page. */}
      <div className="course-banner-text">
        <p className="course-banner-para">
          Every course is a distinct blend of various elements, ranging from the subjects covered and campus location to the eventual career path. Whether you're exploring potential courses, deliberating between fields of study, or unsure about your desired career, your JRAMSYS OVERSEASE counselor is here to assist. They'll guide you in discovering the ideal course and managing your university application process.
          <br />
          You can also explore various universities and monitor your application progress using the JRAMSYS OVERSEASE Live app.
        </p>
        <h1><span className="course-banner-line">F</span>inding the best fit</h1>
        <p className="para">Our team is supported by a sophisticated knowledge matching system that includes the latest information on our partner institutions, such as schools, English language colleges, vocational colleges, and universities.
        <br />Some of the key considerations covered in our consultations are:</p>
        <ul className="course-banner-list">
          <li>
            <h3>Subject Matter</h3>
            <p>While it might appear evident, your education, experiences, and areas of interest constitute the initial phase in discovering your ideal course. Your JRAMSYS OVERSEASE counselor will collaborate with you to outline a shortlist and delve deeply into course handbooks and subject options.</p>
          </li>
          <li>
            <h3>Timelines and Budgets</h3>
            <p>Understanding the cost of a course and your budget for education are pivotal considerations in selecting a study destination. Your JRAMSYS OVERSEASE counselor will also guide you through application deadlines and course commencement dates across various locations.</p>
          </li>
          <li>
            <h3>Career Goals</h3>
            <p>Your selected course should set you on a trajectory toward a profession you'll cherish. Your JRAMSYS OVERSEASE counselor can offer guidance on the courses that align with your desired career path.</p>
          </li>
          <li>
            <h3>Course Experience and Campus Life</h3>
            <p>The university's ambiance and social atmosphere significantly influence your contentment in your chosen course. Individual preferences vary – some flourish in bustling city campuses, while others lean towards smaller, rural settings. Cultural diversity or vibrant clubs might be your focus. Rest assured, we consider all these aspects when assisting you in making your decision.</p>
          </li>
        </ul>
        <h1 ><span className="course-banner-line">Y</span>ou may also Like</h1>
        {/* A link box that navigates to the "Find a Course" page. */}
        <Link to="/pages/FindC"><p className="course-banner-box">Find a Course</p></Link>
      </div>
    </div>
  );
}