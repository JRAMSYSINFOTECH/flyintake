// Import React and the Link component from react-router-dom for navigation.
import React from 'react';
import { Link } from 'react-router-dom';
// Import the corresponding CSS file for styling.
import "./Scholar.css";

// An array of study level categories.
const categories = [
  "School",
  "Pre-Degree & Vocational",
  "Foundation",
  "Undergraduate",
  "Postgraduate",
  "Doctorate",
  "VET",
];

// An array of study destination countries.
const destinations = [
    "Australia",
    "Canada",
    "New Zealand",
    "United Kingdom",
    "United States of America",
    "Ireland",
];

// An array of objects representing popular scholarship cards for the carousel.
const scholarshipCards = [
  {
    title: "Vice Chancellor's International Excellence Scholarship for India",
    university: "The University of Waikato",
    location: "New Zealand",
    studyLevel: "Postgraduate",
    deadline: "31 Dec 2025",
    fee: "Fee waiver/discount"
  },
  {
    title: "India Undergraduate Scholarships",
    university: "Trinity College Dublin, the University of Dublin",
    location: "Ireland",
    studyLevel: "Undergraduate",
    deadline: null,
    fee: "Fee waiver/discount"
  },
  {
    title: "University of Auckland India High Achievers Scholarship",
    university: "The University of Auckland",
    location: "New Zealand",
    studyLevel: "Postgraduate",
    deadline: "23 Oct 2025",
    fee: "Fee waiver/discount"
  },
  {
    title: "Indian Students Scholarship",
    university: "University of Limerick",
    location: "Ireland",
    studyLevel: "Postgraduate",
    fee: "Fee waiver/discount"
  },
  {
    title: "AUT international Scholarship South Asia",
    university: "Auckland University of Technology",
    location: "New Zealand",
    studyLevel: "Undergraduate",
    fee: "Fee waiver/discount"
  },
  {
    title: "Deakin india Merit Scholarship 25%",
    university: "Deakin University",
    location: "Australia",
    studyLevel: "Undergraduate",
    fee: "Fee waiver/discount"
  },
  {
    title: "Deakin india Postgraduate Bursary 20%",
    university: "Deakin University",
    location: "Australia",
    studyLevel: "Postgraduate",
    fee: "Fee waiver/discount"
  },
   {
    title: "Global Scholarship",
    university: "The University of Otago",
    location: "New Zealand",
    studyLevel: "Undergraduate",
    fee: "Fee waiver/discount"
  },
   {
    title: "Deakin Vice-Chancellor's Meritorious Scholarship 100%",
    university: "Deakin University",
    location: "Australia",
    studyLevel: "Undergraduate",
    fee: "Fee products/services"
  }
];

// The main component for the scholarship landing page.
export default function Scholar() {
    // Function to scroll the scholarship carousel to the left.
    const scrollLeft = () => {
        const container = document.querySelector('.scholarship-cards-wrapper');
        container.scrollBy({ left: -690, behavior: 'smooth' }); // Use smooth scrolling.
    };
    
    // Function to scroll the scholarship carousel to the right.
    const scrollRight = () => {
        const container = document.querySelector('.scholarship-cards-wrapper');
        container.scrollBy({ left: 690, behavior: 'smooth' }); // Use smooth scrolling.
    };
    
    return (
        <div>
        {/* This is the main banner section of the page. */}
        <div className="Scholar-container">
           <Link to="/"> <p className="l1np1">INTAKE/Find a Scholarship</p></Link>
            <h1 className="Scholar-head">Scholarships for international students studying abroad</h1>
            {/* This button links to the dedicated scholarship search page. */}
            <Link to="/pages/FindScholar" className="find-scholar-btn">
                Find Scholarships
            </Link>
        </div>
        {/* This section contains introductory text about scholarships. */}
        <div className="Scholar-matter">
            <p className="l2">Looking for a scholarship to fund your overseas studies? Most universities these days offer a variety of different scholarship options to international students. Merit-based scholarships are awarded to students who demonstrate outstanding academic performance or potential in a field of study. They may also be awarded for excellence in sports or extracurricular activities. Some universities may also offer need-based scholarships to students who require financial assistance. It's always worth checking with the institution before committing to funding your studies through family or a loan.</p>
            </div>
        {/* This section is for browsing scholarships by different criteria. */}
        <div className="Scholar-browse">
            <h2 className="head2"><span className="ul ">B</span>rowse scholarships</h2>
            <p className="l3">By study levels</p>
        </div>
        {/* This container displays scholarship categories by study level. */}
        <div className="container">
      {categories.map((category, i) => {
        const searchQuery = `Indian government scholarships for ${category} study abroad`;
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
        return (
          <a href={googleSearchUrl} target="_blank" rel="noopener noreferrer" key={i} className="category-link">
            <div className="card">
              <span>{category}</span>
              <span className="arrow">›</span>
            </div>
          </a>
        );
      })}
    </div>
    {/* This section allows browsing by study destination. */}
    <p className="l4">By study destinations</p>
     <div className="container">
      {/* Map over the destinations array to create a card for each country. */}
      {destinations.map((destination, i) => {
        // Create a URL-friendly slug for the destination.
        const destinationUrl = `/study-destinations/${destination.toLowerCase().replace(/ /g, '-')}`; 

        return (
          <Link to={destinationUrl} key={i} className="category-link">
            <div className="card">
              <span>{destination}</span>
              <span className="arrow">›</span>
            </div>
          </Link>
        );
      })}
    </div>
    {/* A general link to view all scholarships on Google. */}
    <a href="https://www.google.com/search?q=scholarships+for+international+students" target="_blank" rel="noopener noreferrer" className="link">
      View all scholarships<span className="arrow1">›</span>
    </a>
    {/* This section displays a carousel of popular scholarships. */}
    <div className="bg">
        <h2 className="head3"><span className="ul ">P</span>opular scholarships</h2>
        <div className="scholarship-cards-container">
            {/* This wrapper contains the horizontally scrollable scholarship cards. */}
            <div className="scholarship-cards-wrapper">
                {/* Map over the scholarshipCards array to render each card. */}
                {scholarshipCards.map((card, index) => (
                    <div key={index} className="scholarship-card">
                        <h3 className="card-title">{card.title}</h3>
                        <p className="card-university">{card.university}</p>
                        <div className="card-divider"></div>
                        <div className="card-details">
                            <div className="detail-item">
                                <span className="detail-icon">📍</span>
                                <span>{card.location}</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-icon">🎓</span>
                                <span>{card.studyLevel}</span>
                            </div>
                            {card.deadline && (
                                <div className="detail-item">
                                    <span className="detail-icon">📅</span>
                                    <span>{card.deadline}</span>
                                </div>
                            )}
                            <div className="detail-item">
                                <span className="detail-icon">💰</span>
                                <span>{card.fee}</span>
                            </div>
                        </div>
                        {/* This link opens a Google search for the specific scholarship. */}
                        <a
                            href={`https://www.google.com/search?q=${encodeURIComponent(card.title + ' ' + card.university)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="view-more-link"
                        >
                            View more info ›
                        </a>
                    </div>
                ))}
            </div>
            {/* Navigation arrows for the carousel. */}
            <div className="card-navigation">
                <button className="nav-arrow" onClick={scrollLeft}>←</button>
                <button className="nav-arrow" onClick={scrollRight}>→</button>
            </div>
        </div>
    </div>


        </div>
    );
}