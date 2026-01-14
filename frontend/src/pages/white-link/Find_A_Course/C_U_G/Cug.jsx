// Import React and its hooks for state management.
import React, { useState } from "react";
import { Link } from "react-router-dom";
// Import the corresponding CSS file for styling.
import './Cug.css';

// A static list of universities with their details. In a real application, this would likely come from an API.
const universitiesList = [
    { name: "University of St Andrews", country: "United Kingdom", rank: "4", website: "https://www.st-andrews.ac.uk/" },
    { name: "University of Bath", country: "United Kingdom", rank: "5", website: "https://www.bath.ac.uk/" },
    { name: "Durham University", country: "United Kingdom", rank: "8", website: "https://www.dur.ac.uk/" },
    { name: "Lancaster University", country: "United Kingdom", rank: "10", website: "https://www.lancaster.ac.uk/" },
    { name: "The University of Edinburgh", country: "United Kingdom", rank: "12", website: "https://www.ed.ac.uk/" },
    { name: "University of Surrey", country: "United Kingdom", rank: "13", website: "https://www.surrey.ac.uk/" },
    { name: "University of Birmingham", country: "United Kingdom", rank: "14", website: "https://www.birmingham.ac.uk/index.aspx" },
    { name: "University of Exeter", country: "United Kingdom", rank: "15", website: "https://www.exeter.ac.uk/" },
    { name: "University of York", country: "United Kingdom", rank: "17", website: "https://www.york.ac.uk/" },
    { name: "University of Southampton", country: "United Kingdom", rank: "17", website: "https://www.southampton.ac.uk/" },
    { name: "University of Manchester", country: "United Kingdom", rank: "19", website: "https://www.manchester.ac.uk/" },
    { name: "University of Sheffield", country: "United Kingdom", rank: "20", website: "https://www.sheffield.ac.uk/" },
    { name: "Cardiff University", country: "United Kingdom", rank: "21", website: "https://www.cardiff.ac.uk/" },
    { name: "University of Leeds", country: "United Kingdom", rank: "22", website: "https://www.leeds.ac.uk/" },
    { name: "King's College London, University of London", country: "United Kingdom", rank: "24", website: "https://www.kcl.ac.uk/" },
    { name: "University of Liverpool", country: "United Kingdom", rank: "24", website: "https://www.liverpool.ac.uk/" },
    { name: "Queen's University Belfast", country: "United Kingdom", rank: "27", website: "https://www.qub.ac.uk/" },
    { name: "University of the Arts London", country: "United Kingdom", rank: "29", website: "https://www.arts.ac.uk/" },
    { name: "University of Strathclyde", country: "United Kingdom", rank: "31", website: "https://www.strath.ac.uk/" },
    { name: "University of Essex", country: "United Kingdom", rank: "32", website: "https://www.essex.ac.uk/" }
];

// This is the main component for the Complete University Guide (CUG) rankings page.
export default function Cug() {
    // State to hold the search term for university names.
    const [uniSearch, setUniSearch] = useState('');
    // State to hold the search term for university ranks.
    const [rankSearch, setRankSearch] = useState('');
    // State to hold the list of universities to be displayed after filtering.
    const [displayedUniversities, setDisplayedUniversities] = useState(universitiesList);
    // State to manage the current page for pagination.
    const [currentPage, setCurrentPage] = useState(1);

    // Number of items to display per page.
    const itemsPerPage = 10;

    // Function to handle the search functionality.
    const handleSearch = () => {
        let filtered = [...universitiesList];

        // Filter by university name if a search term is provided.
        if (uniSearch.trim()) {
            filtered = filtered.filter(uni =>
                uni.name.toLowerCase().includes(uniSearch.trim().toLowerCase())
            );
        }

        // Filter by rank if a search term is provided.
        if (rankSearch.trim()) {
            filtered = filtered.filter(uni =>
                uni.rank.includes(rankSearch.trim())
            );
        }

        setDisplayedUniversities(filtered);
        setCurrentPage(1); // Reset to the first page after a search.
    };

    // Function to open the university's website in a new tab.
    const handleViewDetails = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    // --- Pagination Logic ---
    // Calculate the total number of pages required.
    const totalPages = Math.ceil(displayedUniversities.length / itemsPerPage);
    // Slice the array to get only the universities for the current page.
    const paginatedUniversities = displayedUniversities.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // Function to change the current page.
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // Function to render the page number links for pagination.
    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(<span key={i} className={`FIndU-page-link ${currentPage === i ? 'FIndU-active' : ''}`} onClick={() => handlePageChange(i)}>{i}</span>);
        }
        return pageNumbers;
    };

    return (    
        <div>
        {/* This is the main banner section for the CUG rankings page. */}
        <div className="cug">
            {/* Breadcrumb navigation. */}
            <Link to="/"><p className="p21">INTAKE/University Ranking/CUG</p></Link>
            {/* Main heading and description. */}
            <h1 className="h21">CUG university rankings in United Kingdom for 2024</h1>
            <p className="p22">Discover UK's top-ranking universities according to the Complete University Guide (CUG) Rankings 2024. Search by subject or study level, and explore the courses and experience they offer.</p>
        </div>
        {/* This section contains the search bars for filtering universities. */}
        <div className="search-bars">
            <div className="field">
              <input 
                type="text" 
                placeholder="Search by university name" 
                className="input"
                value={uniSearch}
                onChange={(e) => setUniSearch(e.target.value)} // Update state on input change.
              />
            </div>
            <p className="or">or</p>
            <div className="field">
              <input 
                type="text" 
                placeholder="Search by rank" 
                className="input"
                value={rankSearch}
                onChange={(e) => setRankSearch(e.target.value)} // Update state on input change.
              />
            </div>
            {/* Button to trigger the search. */}
            <button className="search-btn" onClick={handleSearch}>Search</button>
        </div>
        {/* Displays the count of found universities. */}
        <p className="line">{displayedUniversities.length} Universities found</p>
        {/* This container holds the list of university ranking cards. */}
        <div className="rankings">
          {/* Check if there are any universities to display. */}
          {paginatedUniversities.length > 0 ? (
            // Map over the paginated universities and render a card for each.
            paginatedUniversities.map((u, idx) => (
            <div key={u.name} className="rank-card">
              <div className="rank-num-wrap">
                {/* Display the overall rank number in the list. */}
                <span className="rank-num">{universitiesList.findIndex(item => item.name === u.name) + 1}</span>
              </div>
              {/* Displays the university's name, country, and CUG rank. */}
              <div className="rank-info">
                <h3 className="uni-name">{u.name}</h3>
                <p className="uni-country">{u.country}</p>
                <h3 className="uni-rank">Rank:{u.rank}</h3>
              </div>
              <div className="rank-actions">
                <button className="details-btn" onClick={() => handleViewDetails(u.website)}>View details</button>
              </div>
            </div>
          ))
        ) : (
          // Display a message if no universities match the search criteria.
          <p className="no-results-message">No universities match your search criteria.</p>
        )}
        </div>
    {/* This section renders the pagination controls if there is more than one page. */}
    {totalPages > 1 && (
        <div className="FIndU-Arrs">
            {/* Buttons for navigating to the first, previous, next, and last pages. */}
            <span className={`FIndU-page-link sizes ${currentPage === 1 ? 'FIndU-disabled' : ''}`} onClick={() => handlePageChange(1)}>«</span>
            <span className={`FIndU-page-link sizes ${currentPage === 1 ? 'FIndU-disabled' : ''}`} onClick={() => handlePageChange(currentPage - 1)}>‹</span>
            {renderPageNumbers()}
            <span className={`FIndU-page-link sizes ${currentPage === totalPages ? 'FIndU-disabled' : ''}`} onClick={() => handlePageChange(currentPage + 1)}>›</span>
            <span className={`FIndU-page-link sizes ${currentPage === totalPages ? 'FIndU-disabled' : ''}`} onClick={() => handlePageChange(totalPages)}>»</span>
        </div>
    )}
        </div>
    );
}