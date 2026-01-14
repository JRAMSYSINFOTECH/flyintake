// Import React and its hooks for state management.
import React, { useState } from "react";
import { Link } from "react-router-dom";
// Import the corresponding CSS file for styling.
import "./Uranking.css";

// A static list of universities. In a real application, this would likely come from an API.
const universitiesList = [
  { name: "Massachusetts Institute of Technology (MIT)", country: "United States", website: "https://web.mit.edu/" },
  { name: "Imperial College London", country: "United Kingdom", website: "https://www.imperial.ac.uk/" },
  { name: "University of Oxford", country: "United Kingdom", website: "https://www.ox.ac.uk/" },
  { name: "Harvard University", country: "United States", website: "https://www.harvard.edu/" },
  { name: "University of Cambridge", country: "United Kingdom", website: "https://www.cam.ac.uk/" },
  { name: "Stanford University", country: "United States", website: "https://www.stanford.edu/" },
  { name: "ETH Zurich", country: "Switzerland", website: "https://ethz.ch/en.html" },
  { name: "National University of Singapore (NUS)", country: "Singapore", website: "https://www.nus.edu.sg/" },
  { name: "UCL (University College London)", country: "United Kingdom", website: "https://www.ucl.ac.uk/" },
  { name: "University of California, Berkeley (UCB)", country: "United States", website: "https://www.berkeley.edu/" },
  { name: "University of Manchester", country: "United Kingdom", website: "https://www.manchester.ac.uk/" },
  { name: "Cornell University", country: "United States", website: "https://www.cornell.edu/" },
  { name: "The University of Melbourne", country: "Australia", website: "https://www.unimelb.edu.au/" },
  { name: "Peking University", country: "China", website: "https://www.pku.edu.cn/en/" },
  { name: "Nanyang Technological University, Singapore (NTU)", country: "Singapore", website: "https://www.ntu.edu.sg/" },
  { name: "The University of Hong Kong", country: "Hong Kong SAR", website: "https://www.hku.hk/" },
  { name: "The University of Sydney", country: "Australia", website: "https://www.sydney.edu.au/" },
  { name: "Johns Hopkins University", country: "United States", website: "https://www.jhu.edu/" },
  { name: "University of Pennsylvania", country: "United States", website: "https://www.upenn.edu/" },
  { name: "University of Toronto", country: "Canada", website: "https://www.utoronto.ca/" },
  { name: "Tsinghua University", country: "China", website: "https://www.tsinghua.edu.cn/en/" },
  { name: "The University of Edinburgh", country: "United Kingdom", website: "https://www.ed.ac.uk/" },
  { name: "Columbia University", country: "United States", website: "https://www.columbia.edu/" },
  { name: "Université PSL", country: "France", website: "https://psl.eu/en" },
  { name: "McGill University", country: "Canada", website: "https://www.mcgill.ca/" },
  { name: "The Australian National University", country: "Australia", website: "https://www.anu.edu.au/" },
  { name: "University of Tokyo", country: "Japan", website: "https://www.u-tokyo.ac.jp/en/" },
  { name: "New York University (NYU)", country: "United States", website: "https://www.nyu.edu/" },
  { name: "University of Michigan-Ann Arbor", country: "United States", website: "https://umich.edu/" },
  { name: "University of British Columbia", country: "Canada", website: "https://www.ubc.ca/" },
  { name: "The University of Auckland", country: "New Zealand", website: "https://www.auckland.ac.nz/en.html" },
  { name: "Delft University of Technology", country: "Netherlands", website: "https://www.tudelft.nl/en/" }
];

// This is the main component for the THE University Rankings page.
export default function Uranking() {
  // State to hold the search term for university names.
  const [uniSearch, setUniSearch] = useState('');
  // State to hold the search term for study destinations.
  const [destSearch, setDestSearch] = useState('');
  // State to hold the list of universities to be displayed after filtering.
  const [displayedUniversities, setDisplayedUniversities] = useState(universitiesList);
  // State to manage the current page for pagination.
  const [currentPage, setCurrentPage] = useState(1);

  // Number of items to display per page.
  const itemsPerPage = 8;

  // Function to handle the search functionality.
  const handleSearch = () => {
    let filtered = [...universitiesList];

    // Filter by university name if a search term is provided.
    if (uniSearch.trim()) {
      filtered = filtered.filter(uni =>
        uni.name.toLowerCase().includes(uniSearch.trim().toLowerCase())
      );
    }

    // Filter by country if a search term is provided.
    if (destSearch.trim()) {
      filtered = filtered.filter(uni =>
        uni.country.toLowerCase().includes(destSearch.trim().toLowerCase())
      );
    }

    setDisplayedUniversities(filtered);
    setCurrentPage(1); // Reset to the first page after a search.
  };

  // Function to open the university's website in a new tab.
  const handleViewDetails = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Pagination logic
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
        {/* This is the main banner section for the page. */}
        <div className="Uranking">
            {/* Breadcrumb navigation. */}
            <Link to="/"><p className="p1">INTAKE/University Ranking/THE</p></Link>{/* Removed padding-right */}
            {/* Main heading and description. */}
            <h1 className="h1">THE University Rankings for 2025</h1>{/* Removed padding-right */}
            <p className="p2">Discover the world's top-ranking universities according to Times Higher Education University Rankings 2025. Search globally or by country and explore the courses and experience they offer.</p>{/* Removed padding-right and text-align */}
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
                placeholder="Study destinations" 
                className="input"
                value={destSearch} 
                onChange={(e) => setDestSearch(e.target.value)} // Update state on input change.
              />
            </div>
            {/* Button to trigger the search. */}
            <button className="search-btn" onClick={handleSearch}>Search</button>
        </div>
        {/* New mobile link to Qsworld.jsx, visible only on small screens */}
        <div className="mobile-qs-link-container">
            <Link to="/pages/Qsworld" className="mobile-qs-link">
                View QS World University Rankings
            </Link>
        </div>
        {/* Displays the count of found universities. */}
        <div className="nua"> 
          <p className="line">{displayedUniversities.length} Universities found</p>
        </div>
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
              {/* Displays the university's name and country. */}
              <div className="rank-info">
                <h3 className="uni-name">{u.name}</h3>
                <p className="uni-country">{u.country}</p>
              </div>
              <div className="rank-actions">
                {/* Button to view more details about the university. */}
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