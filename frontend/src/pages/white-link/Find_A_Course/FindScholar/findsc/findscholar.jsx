// Import React and its hooks for state management.
import React, { useState } from "react";
// Import the corresponding CSS file for styling.
import "./findscholar.css";

// Mock data for all available scholarships. In a real application, this would come from an API.
const allScholarships = [
  { title: "High School Scholarship", university: "Ozford Institute of Higher Education", location: "Australia", studyLevel: "School", fundingType: "Fee waiver/discount", value: "20% of fees" },
  { title: "2026 International Student Scholarship", university: "University Senior College", location: "Australia", studyLevel: "School", fundingType: "Fee waiver/discount", value: "10% of fees" },
  { title: "Global Excellence Scholarship", university: "University of Toronto", location: "Canada", studyLevel: "Undergraduate", fundingType: "Full tuition", value: "CAD 100,000" },
  { title: "Future Leaders Grant", university: "Imperial College London", location: "United Kingdom", studyLevel: "Postgraduate", fundingType: "Stipend", value: "£15,000" },
  { title: "Kiwa Scholarship for Māori", university: "University of Auckland", location: "New Zealand", studyLevel: "Doctorate", fundingType: "Full scholarship", value: "NZD 35,000 p.a." },
  { title: "Tech Innovators Award", university: "Stanford University", location: "United States of America", studyLevel: "Postgraduate", fundingType: "Fee waiver/discount", value: "50% of tuition" },
  { title: "Irish Government Scholarship", university: "Trinity College Dublin", location: "Ireland", studyLevel: "Undergraduate", fundingType: "Full tuition + stipend", value: "€10,000" },
  { title: "Aspire Scholarship", university: "University of Sydney", location: "Australia", studyLevel: "Undergraduate", fundingType: "Fee waiver/discount", value: "AUD 10,000" },
  { title: "Maple Leaf Scholarship", university: "McGill University", location: "Canada", studyLevel: "Postgraduate", fundingType: "Stipend", value: "CAD 20,000" },
  { title: "Commonwealth Scholarship", university: "University of Cambridge", location: "United Kingdom", studyLevel: "Doctorate", fundingType: "Full scholarship", value: "Full coverage" },
  { title: "Southern Cross Scholarship", university: "University of Canterbury", location: "New Zealand", studyLevel: "Undergraduate", fundingType: "Fee waiver/discount", value: "NZD 15,000" },
  { title: "Fulbright Scholarship", university: "Various Universities", location: "United States of America", studyLevel: "Postgraduate", fundingType: "Full scholarship", value: "Varies" },
  { title: "Celtic Scholarship", university: "University College Dublin", location: "Ireland", studyLevel: "Postgraduate", fundingType: "Fee waiver/discount", value: "50% of fees" },
  { title: "Down Under Grant", university: "Monash University", location: "Australia", studyLevel: "Postgraduate", fundingType: "Stipend", value: "AUD 28,000 p.a." },
  { title: "Northern Star Scholarship", university: "University of British Columbia", location: "Canada", studyLevel: "Undergraduate", fundingType: "Fee waiver/discount", value: "CAD 10,000" },
  { title: "Royal Society Fellowship", university: "University of Oxford", location: "United Kingdom", studyLevel: "Postgraduate", fundingType: "Research grant", value: "Varies" },
  { title: "Kiwi Excellence Grant", university: "Victoria University of Wellington", location: "New Zealand", studyLevel: "Postgraduate", fundingType: "Fee waiver/discount", value: "NZD 10,000" },
  { title: "American Dream Scholarship", university: "New York University", location: "United States of America", studyLevel: "Undergraduate", fundingType: "Need-based", value: "Up to full tuition" },
  { title: "Emerald Isle Award", university: "National University of Ireland, Galway", location: "Ireland", studyLevel: "Undergraduate", fundingType: "Fee waiver/discount", value: "€2,000" },
  { title: "Outback Achievers Award", university: "University of Queensland", location: "Australia", studyLevel: "Doctorate", fundingType: "Stipend", value: "AUD 30,000 p.a." },
  { title: "Canadian Experience Scholarship", university: "University of Waterloo", location: "Canada", studyLevel: "Postgraduate", fundingType: "Fee waiver/discount", value: "CAD 5,000" },
  { title: "UK Creative Arts Scholarship", university: "University of the Arts London", location: "United Kingdom", studyLevel: "Undergraduate", fundingType: "Fee waiver/discount", value: "£5,000" },
  { title: "Aotearoa Scholarship", university: "Massey University", location: "New Zealand", studyLevel: "Undergraduate", fundingType: "Fee waiver/discount", value: "NZD 5,000" },
  { title: "Golden Gate Scholarship", university: "University of California, Berkeley", location: "United States of America", studyLevel: "Postgraduate", fundingType: "Fee waiver/discount", value: "$10,000" },
  { title: "Shamrock Science Scholarship", university: "University College Cork", location: "Ireland", studyLevel: "Postgraduate", fundingType: "Stipend", value: "€5,000" },
  { title: "Great Barrier Reef Scholarship", university: "James Cook University", location: "Australia", studyLevel: "Postgraduate", fundingType: "Research grant", value: "AUD 15,000" },
  { title: "Rocky Mountains Scholarship", university: "University of Alberta", location: "Canada", studyLevel: "Undergraduate", fundingType: "Fee waiver/discount", value: "CAD 4,000" },
  { title: "Scottish Highland Scholarship", university: "University of Edinburgh", location: "United Kingdom", studyLevel: "Postgraduate", fundingType: "Fee waiver/discount", value: "£10,000" },
  { title: "Middle Earth Scholarship", university: "University of Otago", location: "New Zealand", studyLevel: "Doctorate", fundingType: "Stipend", value: "NZD 28,600 p.a." },
  { title: "Stars and Stripes Grant", university: "University of Chicago", location: "United States of America", studyLevel: "Undergraduate", fundingType: "Need-based", value: "Varies" },
];

// Define the number of scholarships to display per page for pagination.
const SCHOLARSHIPS_PER_PAGE = 10;

// The main component for the scholarship search page.
export default function FindScholar() {
  // State for the search input value.
  const [searchTerm, setSearchTerm] = useState("");
  // State for the selected country filter.
  const [countryFilter, setCountryFilter] = useState("");
  // State for the selected study level filter.
  const [levelFilter, setLevelFilter] = useState("");
  // State for the current page number in pagination.
  const [currentPage, setCurrentPage] = useState(1);

  // Filter the scholarships based on the search term and selected filters.
  const filteredScholarships = allScholarships.filter(
    (s) =>
      s.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (countryFilter === "" || s.location === countryFilter) &&
      (levelFilter === "" || s.studyLevel === levelFilter)
  );
  
  // Calculate the total number of pages needed for pagination.
  const totalPages = Math.ceil(filteredScholarships.length / SCHOLARSHIPS_PER_PAGE);
  // Get the scholarships for the current page.
  const paginatedScholarships = filteredScholarships.slice(
    (currentPage - 1) * SCHOLARSHIPS_PER_PAGE,
    currentPage * SCHOLARSHIPS_PER_PAGE
  );

  // Function to handle changing the page.
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const resultStart = (currentPage - 1) * SCHOLARSHIPS_PER_PAGE + 1;
  // Calculate the end index for the "Showing results" text.
  const resultEnd = Math.min(currentPage * SCHOLARSHIPS_PER_PAGE, filteredScholarships.length);

  return (
    <>
      {/* This is the main banner section of the page. */}
      <div className="find-scholar-banner">
        <h1>Find a Scholarship</h1>
        <p>
          Explore scholarships to help fund your studies abroad. Use the search
          filters to find scholarships that match your profile.
        </p>
      </div>

      {/* This container holds the main content of the page, including search, filters, and results. */}
      <div className="find-scholar-container">
        {/* This section contains the search bar and filter dropdowns. */}
        <div className="search-filter-container">
          <input
            type="text"
            placeholder="Search by keyword..."
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change.
          />
          <div className="filter-options">
            {/* Dropdown for filtering by country. */}
            <select value={countryFilter} onChange={(e) => setCountryFilter(e.target.value)}> 
              <option value="">All Countries</option>
              <option value="Australia">Australia</option>
              <option value="Canada">Canada</option>
              <option value="New Zealand">New Zealand</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States of America">United States</option>
              <option value="Ireland">Ireland</option>
            </select>
            {/* Dropdown for filtering by study level. */}
            <select value={levelFilter} onChange={(e) => setLevelFilter(e.target.value)}> 
              <option value="">All Study Levels</option>
              <option value="School">School</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Postgraduate">Postgraduate</option>
              <option value="Doctorate">Doctorate</option>
            </select>
          </div>
        </div>

        {/* This section displays the summary of the search results (e.g., "Showing results 1-10 of 30"). */}
        <div className="results-summary">
          <p>
            Showing results {filteredScholarships.length > 0 ? resultStart : 0}-{resultEnd} of {filteredScholarships.length}
          </p>
        </div>

        {/* This section displays the list of scholarship result cards. */}
        <div className="scholarship-results">
          {/* Map over the paginated scholarships and render a card for each one. */}
          {paginatedScholarships.map((scholarship, index) => (
            <div key={index} className="result-card"> {/* Each card represents a single scholarship. */}
              <div className="result-card-header">
                <h3>{scholarship.title}</h3>
                <p>{scholarship.university}</p>
              </div>
              <div className="result-card-body">
                <div className="result-detail">
                  <strong>Location:</strong> {scholarship.location}
                </div>
                <div className="result-detail">
                  <strong>Study Level:</strong> {scholarship.studyLevel}
                </div>
                <div className="result-detail">
                  <strong>Funding type:</strong> {scholarship.fundingType}
                </div>
                <div className="result-detail">
                  <strong>Value of award:</strong> {scholarship.value}
                </div>
              </div>
              <div className="result-card-footer">
                {/* This link redirects to a Google search for more details about the scholarship. */}
                <a
                  href={`https://www.google.com/search?q=${encodeURIComponent(scholarship.title + ' ' + scholarship.university)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-details-link"
                >
                  View details
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* This section contains the pagination buttons. It only appears if there is more than one page. */}
        {totalPages > 1 && (
          <div className="pagination-container">
            {/* Button to go to the previous page. */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &laquo; Previous
            </button>
            {/* Render a button for each page number. */}
            {[...Array(totalPages).keys()].map((num) => (
              <button
                key={num + 1}
                onClick={() => handlePageChange(num + 1)}
                className={currentPage === num + 1 ? "active" : ""} // Highlight the current page button.
              >
                {num + 1}
              </button>
            ))}
            {/* Button to go to the next page. */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next &raquo;
            </button>
          </div>
        )}
      </div>
    </>
  );
}