// Import React hooks for state management and Link for navigation.
import React, { useState, useEffect } from "react";
import "./Courseof.css";
import { Link, useNavigate } from "react-router-dom";

// A static list of all available universities with their details.
// Remove duplicates based on university name
const allUniversities = [
  { name: "Massachusetts Institute of Technology", country: "USA", ranking: 1, students: "3,700+", website: "https://www.mit.edu/", courses: ["Engineering", "Computer Science", "Physics"] },
  { name: "Imperial College London", country: "UK", ranking: 2, students: "9,000+", website: "https://www.imperial.ac.uk/", courses: ["Medicine", "Engineering", "Business"] },
  { name: "University of Oxford", country: "UK", ranking: 3, students: "11,500+", website: "https://www.ox.ac.uk/", courses: ["Law", "Humanities", "Medicine"] },
  { name: "Harvard University", country: "USA", ranking: 4, students: "5,200+", website: "https://www.harvard.edu/", courses: ["Law", "Business", "Government"] },
  { name: "University of Cambridge", country: "UK", ranking: 5, students: "9,000+", website: "https://www.cam.ac.uk/", courses: ["Natural Sciences", "Mathematics", "Engineering"] },
  { name: "Stanford University", country: "USA", ranking: 6, students: "3,800+", website: "https://www.stanford.edu/", courses: ["Computer Science", "Business", "Engineering"] },
  { name: "ETH Zurich", country: "Switzerland", ranking: 7, students: "8,000+", website: "https://ethz.ch/en.html", courses: ["Architecture", "Engineering", "Computer Science"] },
  { name: "National University of Singapore", country: "Singapore", ranking: 8, students: "10,000+", website: "https://www.nus.edu.sg/", courses: ["Business", "Engineering", "Computer Science"] },
  { name: "University of Toronto", country: "Canada", ranking: 21, students: "27,000+", website: "https://www.utoronto.ca/", courses: ["Life Sciences", "Commerce", "Humanities"] },
  { name: "The University of Melbourne", country: "Australia", ranking: 13, students: "22,000+", website: "https://www.unimelb.edu.au/", courses: ["Arts", "Biomedicine", "Commerce"] },
  { name: "University of California, Berkeley", country: "USA", ranking: 12, students: "6,500+", website: "https://www.berkeley.edu/", courses: ["Computer Science", "Economics", "Political Science"] },
  { name: "The University of Sydney", country: "Australia", ranking: 18, students: "20,000+", website: "https://www.sydney.edu.au/", courses: ["Business", "Arts", "Health"] },
  { name: "University of British Columbia", country: "Canada", ranking: 34, students: "18,000+", website: "https://www.ubc.ca/", courses: ["Business", "Science", "Engineering"] },
  { name: "King's College London", country: "UK", ranking: 40, students: "13,000+", website: "https://www.kcl.ac.uk/", courses: ["Law", "Humanities", "Business"] },
  { name: "New York University", country: "USA", ranking: 38, students: "21,000+", website: "https://www.nyu.edu/", courses: ["Arts", "Business", "Film"] },
  { name: "University of Queensland", country: "Australia", ranking: 43, students: "18,000+", website: "https://www.uq.edu.au/", courses: ["Health", "Science", "Engineering"] },
  { name: "University of Amsterdam", country: "Netherlands", ranking: 53, students: "7,000+", website: "https://www.uva.nl/en", courses: ["Social Sciences", "Economics", "Media"] },
  { name: "Technical University of Munich", country: "Germany", ranking: 30, students: "13,000+", website: "https://www.tum.de/en/", courses: ["Engineering", "Computer Science", "Architecture"] },
].filter((uni, index, self) =>
  index === self.findIndex(u => u.name === uni.name)
);

// Defines the number of university cards to display per page.
const COURSES_PER_PAGE = 6;

// This is the main component for the "Course Offers" page.
export default function Courseof() {
  // State to hold filters selected in the dropdowns before they are applied.
  const [selectedFilters, setSelectedFilters] = useState({ country: "All", course: "All" });
  // State to hold the currently active filters.
  const [filters, setFilters] = useState({ country: "All", course: "All" });
  // State to hold the list of universities to be displayed after filtering.
  const [filteredUniversities, setFilteredUniversities] = useState(allUniversities);
  // State to manage the current page for pagination.
  const [currentPage, setCurrentPage] = useState(1);
  // State to track which universities are favorited. Uses university name as key.
  const [favoritedUniversities, setFavoritedUniversities] = useState({});


  // This effect runs when the filters change to update the displayed universities.
  useEffect(() => {
    let result = allUniversities;

    // Filter by country if a country is selected.
    if (filters.country !== "All") {
      result = result.filter(uni => uni.country === filters.country);
    }

    // Filter by course type if a course is selected.
    if (filters.course !== "All") {
      result = result.filter(uni => uni.courses.includes(filters.course));
    }

    // Sort by ranking
    result.sort((a, b) => a.ranking - b.ranking);

    setFilteredUniversities(result);
    setCurrentPage(1); // Reset to first page on filter change
  }, [filters]);

  // Initialize favorited universities from API
  useEffect(() => {
    const fetchUserFavorites = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await fetch("/api/Favorite", {
          headers: { "Authorization": `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          const favoritesMap = {};
          data.data.forEach(fav => {
            favoritesMap[fav.name] = true;
          });
          setFavoritedUniversities(favoritesMap);
        }
      } catch (err) {
        console.error("Error fetching favorites:", err);
      }
    };

    fetchUserFavorites();
  }, []);

  // Function to open the university's website in a new tab.
  const handleViewDetails = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Pagination logic
  const totalPages = Math.ceil(filteredUniversities.length / COURSES_PER_PAGE);
  const startIndex = (currentPage - 1) * COURSES_PER_PAGE;
  const currentUniversities = filteredUniversities.slice(startIndex, startIndex + COURSES_PER_PAGE);

  // Get unique country and course options for the filter dropdowns.
  const uniqueCountries = ["All", ...new Set(allUniversities.map(uni => uni.country))];
  const uniqueCourses = ["All", ...new Set(allUniversities.flatMap(uni => uni.courses))];

  // Function to update the selected filters when a dropdown value changes.
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setSelectedFilters(prev => ({ ...prev, [name]: value }));
  };

  // Function to apply the selected filters.
  const handleFilterApply = () => {
    setFilters(selectedFilters);
  };

  // Function to reset all filters to their initial state.
  const handleResetFilters = () => {
    const initialFilters = { country: "All", course: "All" };
    setSelectedFilters(initialFilters);
    setFilters(initialFilters);
  };

  // Function to handle clicking the heart icon, toggling its favorited status.
  const handleHeartClick = async (universityName) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to add favorites");
      return;
    }

    const university = allUniversities.find(u => u.name === universityName);
    if (!university) return;

    const isFav = favoritedUniversities[universityName];

    try {
      if (isFav) {
        // REMOVE from favorites
        await fetch(`/api/Favorite/${universityName}`, {
          method: 'DELETE',
          headers: { "Authorization": `Bearer ${token}` }
        });
      } else {
        // ADD to favorites
        await fetch("/api/Favorite/submit", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({
            name: universityName,
            country: university.country,
          })
        });
      }

      // Dispatch event to update navbar
      window.dispatchEvent(new Event('favoritesUpdated'));

      // Update UI state
      setFavoritedUniversities((prev) => ({
        ...prev,
        [universityName]: !isFav,
      }));
    } catch (error) {
      console.error("Favorite error:", error);
    }
  };

  return (
    <div className="courseof-page-container">
      {/* 
        It's recommended to move these styles to your Courseof.css file.
        This is added here to demonstrate the alignment fix.
      */}
      <style>
        {`
          .courseof-content-wrapper {
            max-width: 1280px; /* Standard max-width for large screens */
            margin-left: auto;
            margin-right: auto;
            padding: 0 1rem; /* Adds some space on the sides */
          }
          .filter-section {
            justify-content: center; /* Centers the filter controls */
          }
        `}
      </style>

      {/* This is the main banner section for the page. */}
      <div className="Courseof-container">
        {/* Breadcrumb navigation. */}
        <Link to="/"><p className="Courseof-h">INTAKE/Find a University</p></Link>
        {/* Main heading. */}
        <h1 className="Courseof-t">
          Get Instant Offer: List of Universities and Colleges
        </h1>
      </div>

      <main className="courseof-content-wrapper">
        {/* This section contains the filter dropdowns and buttons. */}
        <div className="filter-section">
          <div className="filter-group">
            <label htmlFor="country">Filter by Country:</label>
            <select name="country" id="country" onChange={handleFilterChange} value={selectedFilters.country}>
              {uniqueCountries.map(country => <option key={country} value={country}>{country}</option>)}
            </select>
          </div>
          <div className="filter-group">
            <label htmlFor="course">Filter by Course Type:</label>
            <select name="course" id="course" onChange={handleFilterChange} value={selectedFilters.course}>
              {uniqueCourses.map(course => <option key={course} value={course}>{course}</option>)}
            </select>
          </div>
          <div className="Courseof-filter-buttons">
            <button className="Courseof-button" onClick={handleFilterApply}>Filter</button>
            <button className="Courseof-reset-button" onClick={handleResetFilters}>Reset Filters</button>
          </div>
        </div>

        {/* This container holds the grid of university cards. */}
        <div className="Courseof-boxes">
          {/* Display a message if no universities match the current filters. */}
          {currentUniversities.length === 0 ? (
            <p style={{ textAlign: "center", gridColumn: "1 / -1", marginTop: "40px" }}>
              No universities match the current filters.
            </p>
          ) : (
            // Map over the paginated universities and render a card for each one.
            currentUniversities.map((u, idx) => (
              <div key={u.name} className="Courseof-box1">
                <div className="Courseof-card-header">
                  <div
                    className={`Courseof-heart-icon ${favoritedUniversities[u.name] ? 'favorited' : ''}`}
                    onClick={() => handleHeartClick(u.name)}
                  >
                    {favoritedUniversities[u.name] ? '❤️' : '♡'} {/* Change emoji based on favorited state */}
                  </div>
                </div>

                <div className="Courseof-university-logo">
                  <div className="Courseof-logo-m">{u.name ?? "Unknown University"}</div>
                </div>

                <p className="Courseof-university-name">{u.country ?? "Country"}</p>

                {/* This section displays the details of the university. */}
                <div className="Courseof-program-details">
                  <div className="Courseof-detail-item">
                    {/* keep existing link for "View All Courses" */}
                    <Link to="/pages/FindC" className="Courseof-detail">View All Courses</Link>
                  </div>

                  {u.ranking !== undefined && (
                    <div className="Courseof-detail-item">
                      <span className="Courseof-detail-icon">🎓</span>
                      <span>THE World Ranking: {u.ranking}</span>
                    </div>
                  )}

                  <div className="Courseof-detail-item">
                    <span className="Courseof-detail-icon">👤</span>
                    <span>International students: {u.students ?? "N/A"}</span>
                  </div>

                  <div className="Courseof-detail-item">
                    <span className="Courseof-detail-icon">✓</span>
                    <span>English Courses available</span>
                  </div>
                </div>

                {/* Button to view more details about the university. */}
                <div className="Courseof-action-buttons">
                  <button
                    className="Courseof-btn"
                    onClick={() => handleViewDetails(u.website)}
                  >
                    View details
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* This section renders the pagination controls if there is more than one page. */}
        {totalPages > 1 && (
          <div className="pagination-container">
            <button
              onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
            >
              &larr;
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button
              onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              &rarr;
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
