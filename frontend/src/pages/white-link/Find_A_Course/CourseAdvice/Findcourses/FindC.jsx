// Import React hooks for state management, and Link for navigation.
import React, { useState, useEffect, useRef } from "react";
import "./FindC.css";
import { Link } from "react-router-dom";

// A static list of all available courses. In a real application, this would come from an API.
const allCoursesRaw = [
    {
        university: "THE UNIVERSITY OF MELBOURNE",
        program: "Bachelor of Commerce",
        ranking: 39,
        degree: "Bachelor Degree",
        location: "Parkville, Australia",
        countryIcon: "🇦🇺",
        intake: "02.03.2026",
        score: "IELTS 6.5",
        fee: "AUD52360 (2025)",
        website: "https://www.unimelb.edu.au/",
    },
    {
        university: "THE UNIVERSITY OF MELBOURNE",
        program: "Bachelor of Science",
        ranking: 39,
        degree: "Bachelor Degree",
        location: "Parkville, Australia",
        countryIcon: "🇦🇺",
        intake: "02.03.2026",
        score: "IELTS 6.5",
        fee: "USD52944 (2025)",
        website: "https://www.unimelb.edu.au/",
    },
    {
        university: "RIVIER UNIVERSITY",
        program: "Master of Science in Computer Science",
        degree: "Masters Degree",
        location: "Nashua, United States",
        countryIcon: "🇺🇸",
        intake: "23.10.2025",
        score: "IELTS 5.5",
        fee: "USD12618 (2025)",
        website: "https://www.rivier.edu/",
    },
    {
        university: "RIVIER UNIVERSITY",
        program: "Master of Business Administration in Cybersecurity Leadership",
        degree: "Masters Degree",
        location: "Nashua, United States",
        countryIcon: "🇺🇸",
        intake: "23.10.2025",
        score: "IELTS 5.5",
        fee: "USD24876 (2025)",
        website: "https://www.rivier.edu/",
    },
    {
        university: "THE UNIVERSITY OF SYDNEY",
        program: "Master of Professional Accounting",
        ranking: 61,
        degree: "Masters Degree (Coursework)",
        location: "Darlington, Australia",
        countryIcon: "🇦🇺",
        intake: "09.02.2026",
        score: "IELTS 7.0",
        fee: "AUD58800 (2025)",
        website: "https://www.sydney.edu.au/",
    },
    {
        university: "THE UNIVERSITY OF SYDNEY",
        program: "Master of Professional Accounting and Business Performance",
        ranking: 61,
        degree: "Masters Degree (Coursework)",
        location: "Darlington, Australia",
        countryIcon: "🇦🇺",
        intake: "09.02.2026",
        score: "IELTS 7.0",
        fee: "AUD56500 (2025)",
        website: "https://www.sydney.edu.au/",
    },
    {
        university: "VALPARAISO UNIVERSITY",
        program: "Master of Science in Information Technology",
        degree: "Masters Degree",
        location: "Valparaiso, United States",
        countryIcon: "🇺🇸",
        intake: "10.01.2026",
        score: "IELTS 6.0",
        fee: "USD13061 (2025)",
        website: "https://www.valpo.edu/",
    },
    {
        university: "VICTORIAN GOVERNMENT SCHOOLS",
        program: "Secondary - Junior Secondary (Year 7-10)",
        degree: "Secondary School",
        location: "Ballarat, Australia",
        countryIcon: "🇦🇺",
        intake: "06.10.2025",
        fee: "AUD18488 (2025)",
        website: "https://www.study.vic.gov.au/",
    },
    {
        university: "THE UNIVERSITY OF MELBOURNE",
        program: "Bachelor of Design",
        ranking: 39,
        degree: "Bachelor Degree",
        location: "Parkville, Australia",
        countryIcon: "🇦🇺",
        intake: "02.03.2026",
        score: "IELTS 6.5",
        fee: "AUD45848 (2025)",
        website: "https://www.unimelb.edu.au/",
    },
    // Page 2
    {
        university: "UNIVERSITY OF TORONTO",
        program: "Bachelor of Arts in Economics",
        ranking: 21,
        degree: "Bachelor Degree",
        location: "Toronto, Canada",
        countryIcon: "🇨🇦",
        intake: "01.09.2025",
        score: "IELTS 7.0",
        fee: "CAD60510 (2025)",
        website: "https://www.utoronto.ca/",
    },
    {
        university: "UNIVERSITY OF BRITISH COLUMBIA",
        program: "Bachelor of Applied Science",
        ranking: 34,
        degree: "Bachelor Degree",
        location: "Vancouver, Canada",
        countryIcon: "🇨🇦",
        intake: "05.09.2025",
        score: "IELTS 6.5",
        fee: "CAD58934 (2025)",
        website: "https://www.ubc.ca/",
    },
    {
        university: "KING'S COLLEGE LONDON",
        program: "LLB Bachelor of Laws",
        ranking: 40,
        degree: "Bachelor Degree",
        location: "London, United Kingdom",
        countryIcon: "🇬🇧",
        intake: "23.09.2025",
        score: "IELTS 7.5",
        fee: "GBP33456 (2025)",
        website: "https://www.kcl.ac.uk/",
    },
    {
        university: "NEW YORK UNIVERSITY",
        program: "BFA in Film & Television",
        ranking: 38,
        degree: "Bachelor Degree",
        location: "New York, United States",
        countryIcon: "🇺🇸",
        intake: "02.09.2025",
        score: "IELTS 7.5",
        fee: "USD66388 (2025)",
        website: "https://www.nyu.edu/",
    },
    {
        university: "UNIVERSITY OF AMSTERDAM",
        program: "MSc in Communication Science",
        ranking: 53,
        degree: "Masters Degree",
        location: "Amsterdam, Netherlands",
        countryIcon: "🇳🇱",
        intake: "01.09.2025",
        score: "IELTS 7.0",
        fee: "EUR18750 (2025)",
        website: "https://www.uva.nl/en",
    },
    {
        university: "UNIVERSITY OF QUEENSLAND",
        program: "Master of Business Analytics",
        ranking: 43,
        degree: "Masters Degree",
        location: "Brisbane, Australia",
        countryIcon: "🇦🇺",
        intake: "28.07.2025",
        score: "IELTS 6.5",
        fee: "AUD51200 (2025)",
        website: "https://www.uq.edu.au/",
    },
    {
        university: "TECHNICAL UNIVERSITY OF MUNICH",
        program: "MSc in Data Engineering and Analytics",
        ranking: 30,
        degree: "Masters Degree",
        location: "Munich, Germany",
        countryIcon: "🇩🇪",
        intake: "15.10.2025",
        score: "IELTS 6.5",
        fee: "EUR6000 (2025)",
        website: "https://www.tum.de/en/",
    },
    {
        university: "ETH ZURICH",
        program: "MSc in Robotics, Systems and Control",
        ranking: 7,
        degree: "Masters Degree",
        location: "Zurich, Switzerland",
        countryIcon: "🇨🇭",
        intake: "17.09.2025",
        score: "IELTS 7.0",
        fee: "CHF1460 (2025)",
        website: "https://ethz.ch/en.html",
    },
    {
        university: "NATIONAL UNIVERSITY OF SINGAPORE",
        program: "Master of Computing",
        ranking: 8,
        degree: "Masters Degree",
        location: "Singapore",
        countryIcon: "🇸🇬",
        intake: "04.08.2025",
        score: "IELTS 6.5",
        fee: "SGD58000 (2025)",
        website: "https://www.nus.edu.sg/",
    },
    // Page 3
    {
        university: "UNIVERSITY OF AUCKLAND",
        program: "Master of Engineering Studies",
        ranking: 68,
        degree: "Masters Degree",
        location: "Auckland, New Zealand",
        countryIcon: "🇳🇿",
        intake: "24.02.2026",
        score: "IELTS 6.5",
        fee: "NZD50280 (2025)",
        website: "https://www.auckland.ac.nz/",
    },
    {
        university: "TRINITY COLLEGE DUBLIN",
        program: "BA in Computer Science",
        ranking: 81,
        degree: "Bachelor Degree",
        location: "Dublin, Ireland",
        countryIcon: "🇮🇪",
        intake: "10.09.2025",
        score: "IELTS 6.5",
        fee: "EUR28000 (2025)",
        website: "https://www.tcd.ie/",
    },
    {
        university: "MONASH UNIVERSITY",
        program: "Bachelor of Pharmacy",
        ranking: 42,
        degree: "Bachelor Degree",
        location: "Melbourne, Australia",
        countryIcon: "🇦🇺",
        intake: "03.03.2026",
        score: "IELTS 7.0",
        fee: "AUD49500 (2025)",
        website: "https://www.monash.edu/",
    },
    {
        university: "UNIVERSITY OF HELSINKI",
        program: "Master's in Data Science",
        ranking: 110,
        degree: "Masters Degree",
        location: "Helsinki, Finland",
        countryIcon: "🇫🇮",
        intake: "01.09.2025",
        score: "IELTS 6.5",
        fee: "EUR15000 (2025)",
        website: "https://www.helsinki.fi/en",
    },
    {
        university: "UNIVERSITY OF WESTERN AUSTRALIA",
        program: "Doctor of Medicine",
        ranking: 72,
        degree: "Doctorate Degree",
        location: "Perth, Australia",
        countryIcon: "🇦🇺",
        intake: "27.01.2026",
        score: "IELTS 7.0",
        fee: "AUD87600 (2025)",
        website: "https://www.uwa.edu.au/",
    },
    {
        university: "LUND UNIVERSITY",
        program: "MSc in Finance",
        ranking: 78,
        degree: "Masters Degree",
        location: "Lund, Sweden",
        countryIcon: "🇸🇪",
        intake: "25.08.2025",
        score: "IELTS 6.5",
        fee: "SEK145000 (2025)",
        website: "https://www.lunduniversity.lu.se/",
    },
    {
        university: "UNIVERSITY OF COPENHAGEN",
        program: "BSc in Global Health",
        ranking: 82,
        degree: "Bachelor Degree",
        location: "Copenhagen, Denmark",
        countryIcon: "🇩🇰",
        intake: "01.09.2025",
        score: "IELTS 6.5",
        fee: "EUR10500 (2025)",
        website: "https://www.ku.dk/english/",
    },
    {
        university: "MCGILL UNIVERSITY",
        program: "Bachelor of Engineering (Mechanical)",
        ranking: 30,
        degree: "Bachelor Degree",
        location: "Montreal, Canada",
        countryIcon: "🇨🇦",
        intake: "01.09.2025",
        score: "IELTS 6.5",
        fee: "CAD56820 (2025)",
        website: "https://www.mcgill.ca/",
    },
];

// Remove duplicates based on university + program combination
const allCourses = allCoursesRaw.filter((course, index, self) =>
    index === self.findIndex(c => c.university === course.university && c.program === course.program)
);

// Defines the number of course cards to display per page.
const COURSES_PER_PAGE = 9;

// This is the main component for the "Find a Course" page.
export default function FindC() {
    // State to manage the current page for pagination.
    const [currentPage, setCurrentPage] = useState(1);
    // State to hold the currently active filters.
    const [filters, setFilters] = useState({ degree: "All", country: "All" });
    // State to hold filters selected in the dropdowns before they are applied.
    const [pendingFilters, setPendingFilters] = useState({ degree: "All", country: "All" });
    // State to hold the list of courses to be displayed after filtering.
    const [filteredCourses, setFilteredCourses] = useState(allCourses);
    // State to manage the visibility of the course-matching quiz modal.
    const [isQuizOpen, setIsQuizOpen] = useState(false);
    // State to track the current step in the quiz.
    const [quizStep, setQuizStep] = useState(0);
    // State to determine if the courses are being filtered by the quiz results.
    const [isQuizFilterActive, setIsQuizFilterActive] = useState(false);
    // State to store the user's answers to the quiz questions.
    const [quizAnswers, setQuizAnswers] = useState({});
    // State to track which courses are favorited. Uses a unique identifier for each course.
    const [favoritedCourses, setFavoritedCourses] = useState({});

    // A ref to the course cards container to scroll to it after the quiz.
    const coursesContainerRef = useRef(null);

    const uniqueDegreesForQuiz = ["Bachelor Degree", "Masters Degree", "Secondary School"];
    const uniqueCountriesForQuiz = ["Australia", "Canada", "United Kingdom", "United States", "Any"];

    // An array of questions for the course-matching quiz.
    const quizQuestions = [
        {
            question: "What study level are you interested in?",
            key: "degree",
            options: uniqueDegreesForQuiz,
        },
        {
            question: "Which country are you planning to study in?",
            key: "country",
            options: uniqueCountriesForQuiz,
        },
        {
            question: "What's your preferred subject area?",
            key: "subject",
            options: ["Business", "Engineering", "Computer Science", "Health", "Sciences", "Arts & Humanities"],

        },
        {
            question: "How important is a top university ranking to you?",
            key: "ranking",
            options: ["Top 50 is a must", "Top 100 is preferred", "Not a priority"],
        },
    ];

    // Function to handle the user's answer to a quiz question.
    const handleQuizAnswer = (key, value) => {
        const newAnswers = { ...quizAnswers, [key]: value };
        setQuizAnswers(newAnswers);
        if (quizStep < quizQuestions.length - 1) {
            setQuizStep(quizStep + 1);
        } else {
            handleShowMatches(newAnswers);
        }
    };


    // Get unique degree and country options for the filter dropdowns.
    const uniqueDegrees = ["All", ...new Set(allCourses.map(course => course.degree).filter(degree => degree !== "Doctorate Degree"))];
    const uniqueCountries = ["All", ...new Set(allCourses.map(course => {
        const parts = course.location.split(', ');
        return parts.length > 1 ? parts[1] : parts[0];
    }))];

    // This effect runs when the filters or quiz status change to update the displayed courses.
    useEffect(() => {
        if (!isQuizFilterActive) {
            let result = allCourses;

            if (filters.degree !== "All") {
                result = result.filter(course => course.degree === filters.degree);
            }

            if (filters.country !== "All") {
                result = result.filter(course => {
                    const country = course.location.split(', ')[1];
                    return country === filters.country;
                });
            }

            setFilteredCourses(result);
            setCurrentPage(1);
        }
    }, [filters, isQuizFilterActive]);

    // Initialize favorited courses from API
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
                    setFavoritedCourses(favoritesMap);
                }
            } catch (err) {
                console.error("Error fetching favorites:", err);
            }
        };

        fetchUserFavorites();
    }, []);

    // Function to update the pending filters when a dropdown value changes.
    const handlePendingFilterChange = (e) => {
        const { name, value } = e.target;
        setPendingFilters(prev => ({ ...prev, [name]: value }));
    };

    // Function to apply the selected filters from the dropdowns.
    const applyFilters = () => {
        setIsQuizFilterActive(false); // User is now using dropdowns, so deactivate quiz filter
        setFilters(pendingFilters);
    };

    // Function to reset all filters to their initial state.
    const resetFilters = () => {
        const initialFilters = { degree: "All", country: "All" };
        setFilters(initialFilters);
        setPendingFilters(initialFilters);
        setIsQuizFilterActive(false);
    };

    // Function to filter courses based on quiz answers and show the results.
    const handleShowMatches = (answers) => {
        setIsQuizFilterActive(true); // Mark that the quiz filter is now in control
        let result = allCourses;

        // Filter by degree
        if (answers.degree) {
            result = result.filter(c => c.degree.startsWith(answers.degree));
        }
        // Filter by country
        if (answers.country && answers.country !== "Any") {
            result = result.filter(c => c.location.includes(answers.country));
        }
        // Filter by subject
        if (answers.subject) {
            const subjectPattern = new RegExp(answers.subject, 'i');
            result = result.filter(c => subjectPattern.test(c.program));
        }
        // Filter by ranking
        if (answers.ranking) {
            if (answers.ranking === "Top 50 is a must") {
                result = result.filter(c => c.ranking && c.ranking <= 50);
            } else if (answers.ranking === "Top 100 is preferred") {
                result = result.filter(c => c.ranking && c.ranking <= 100);
            }
        }

        setFilteredCourses(result);
        setCurrentPage(1);
        setIsQuizOpen(false);
        setQuizStep(0);
        setQuizAnswers({});
        // Scroll to the course results section.
        if (coursesContainerRef.current) {
            coursesContainerRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Function to handle clicking the heart icon, toggling its favorited status.
    const handleHeartClick = async (courseIdentifier) => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("Please login to add favorites");
            return;
        }

        const course = allCourses.find(c => (c.university + c.program) === courseIdentifier);
        if (!course) return;

        // Extract country from location (e.g., "Parkville, Australia" -> "Australia")
        const country = course.location.split(', ').pop();

        const isFav = favoritedCourses[courseIdentifier];

        try {
            if (isFav) {
                // REMOVE from favorites
                await fetch(`/api/Favorite/${courseIdentifier}`, {
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
                        name: courseIdentifier,
                        country: country,
                    })
                });
            }

            // Dispatch event to update navbar
            window.dispatchEvent(new Event('favoritesUpdated'));

            // Update UI state
            setFavoritedCourses((prev) => ({
                ...prev,
                [courseIdentifier]: !isFav,
            }));
        } catch (error) {
            console.error("Favorite error:", error);
        }
    };

    const totalPages = Math.ceil(filteredCourses.length / COURSES_PER_PAGE);
    const startIndex = (currentPage - 1) * COURSES_PER_PAGE;
    const currentCourses = filteredCourses.slice(startIndex, startIndex + COURSES_PER_PAGE);

    // Function to open the course's website in a new tab.
    const handleViewDetails = (url) => {
        if (url) {
            window.open(url, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <div>
            {/* This is the main banner section for the page. */}
            <div className="FindC-1">
                {/* Breadcrumb navigation. */}
                <Link to="/"> <p className="FindC-div">INTAKE/Find a course</p></Link>
                {/* Main heading and description. */}
                <h1 className="FindC-a">Find courses to study abroad</h1>
                <p className="FindC-d">Discover courses from top universities below. Use the filters to refine by study level, destination and more.</p>
            </div>
            {/* New mobile navigation links for "Find a Course" dropdown items */}
            <div className="mobile-find-course-nav">
                <Link to="/pages/CourseA">Course Advice</Link>
                <Link to="/pages/Courseof">Courses with Instant Offer</Link>
                <Link to="/pages/FindScholar">Find Scholarships</Link>
                <Link to="/pages/FindU">Find Universities</Link>
                <Link to="/pages/Uranking">University Ranking</Link>
                <Link to="/pages/Cug">Complete University Guide (CUG)</Link>
            </div>

            {/* This section contains the filter dropdowns and buttons. */}
            <div className="filter-section-findc">
                <div className="filter-group-findc">
                    <label htmlFor="degree">Filter by Study Level:</label>
                    <select name="degree" id="degree" onChange={handlePendingFilterChange} value={pendingFilters.degree}>
                        {uniqueDegrees.map(degree => <option key={degree} value={degree}>{degree}</option>)}
                    </select>
                </div>
                <div className="filter-group-findc">
                    <label htmlFor="country">Filter by Country:</label>
                    <select name="country" id="country" onChange={handlePendingFilterChange} value={pendingFilters.country}>
                        {uniqueCountries.map(country => <option key={country} value={country}>{country}</option>)}
                    </select>
                </div>
                <div className="filter-group-findc">
                    <button className="apply-filter-btn" onClick={applyFilters}>Filter</button>
                </div>
                <div className="filter-group-findc">
                    <button className="reset-filter-btn" onClick={resetFilters}>Reset</button>
                </div>
            </div>

            {/* A small promotional section for "Instant Offer". */}
            <div className="FindC-h3">
                <h3 className="FindC-get">Get Instant Offer</h3>
                <p className="FindC-div">Get instant offer for FastLane labelled courses within minutes!  How Does It Work?</p>
            </div>
            <div className="FindC-b1">
                {/* This section promotes the course-matching quiz. */}
                <h3 className="aa">Not seeing the perfect Course?</h3>
                <p className="see">Complete 4 easy questions to unlock course matches designed just for you!</p>
                <button className="FindC-button1" onClick={() => setIsQuizOpen(true)}>
                    See my matches
                </button>
            </div>
            <div className="FindC-img">
                <img src="/assets/Guideimg.png" alt="Student" />
            </div>


            {/* This container holds the course cards and the quiz modal. */}
            <div className="course-cards-container" ref={coursesContainerRef}>
                {/* The quiz modal, which is displayed when isQuizOpen is true. */}
                {isQuizOpen && (
                    <div className="quiz-modal-overlay">
                        <div className="quiz-modal">
                            <button className="quiz-close-btn" onClick={() => setIsQuizOpen(false)}>×</button>
                            <h3>{quizQuestions[quizStep].question}</h3>
                            <div className="quiz-options">
                                {/* Map over the options for the current quiz question. */}
                                {quizQuestions[quizStep].options.map(option => (
                                    <button key={option} onClick={() => handleQuizAnswer(quizQuestions[quizStep].key, option)}>
                                        {option}
                                    </button>
                                ))}
                            </div>
                            {quizStep > 0 && (
                                // Show a "Back" button if not on the first question.
                                <button className="quiz-back-btn" onClick={() => setQuizStep(quizStep - 1)}>
                                    &larr; Back
                                </button>
                            )}
                        </div>
                    </div>
                )}
                {/* Display a message if no courses match the current filters. */}
                {currentCourses.length === 0 && (
                    <p style={{ textAlign: "center", gridColumn: "1 / -1", marginTop: "40px", fontSize: "18px" }}>
                        No courses match the current filters.
                    </p>
                )}
                {/* This container holds the grid of course cards. */}
                <div className="FindC-boxes">
                    {currentCourses.map((course, index) => (
                        // Each card represents a single course.
                        <div className="FindC-box1" key={`${course.university}-${course.program}`}>
                            <div className="FindC-card-header">
                                <div
                                    className={`FindC-heart-icon ${favoritedCourses[course.university + course.program] ? 'active' : ''}`}
                                    onClick={() => handleHeartClick(course.university + course.program)}
                                >
                                    {favoritedCourses[course.university + course.program] ? '❤️' : '♡'} {/* Change emoji based on favorited state */}
                                </div>
                            </div>
                            <div className="FindC-university-logo">
                                <div className="FindC-logo-melbourne">{course.university}</div>
                            </div>
                            <h1 className="FindC-program-title">{course.program}</h1>
                            <p className="FindC-university-name">{course.university}</p>

                            {/* This section displays the details of the course. */}
                            <div className="FindC-program-details">
                                {course.ranking && (
                                    <div className="FindC-detail-item">
                                        <span className="FindC-detail-icon">📊</span>
                                        <span>THE World Ranking: {course.ranking}</span>
                                    </div>
                                )}
                                <div className="FindC-detail-item">
                                    <span className="FindC-detail-icon">🎓</span>
                                    <span>{course.degree}</span>
                                </div>
                                <div className="FindC-detail-item">
                                    <span className="FindC-detail-icon">{course.countryIcon}</span>
                                    <span>{course.location}</span>
                                </div>
                                <div className="FindC-detail-item">
                                    <span className="FindC-detail-icon">📅</span>
                                    <span>Next intake: {course.intake}</span>
                                </div>
                                {course.score && (
                                    <div className="FindC-detail-item">
                                        <span className="FindC-detail-icon">✓</span>
                                        <span>Entry Score: {course.score}</span>
                                    </div>
                                )}
                                <div className="FindC-detail-item">
                                    <span className="FindC-detail-icon">$</span>
                                    <span>{course.fee}</span>
                                </div>
                            </div>

                            {/* Button to view more details about the course. */}
                            <div className="FindC-action-buttons">
                                <button className="FindC-secondary-btn" onClick={() => handleViewDetails(course.website)}>
                                    View details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
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

            {/* This container holds additional text content and related searches. */}
            <div className="text-content-container">
                <div className="FindC-more">
                    <p>With so many courses and universities to choose from, deciding where and what to study abroad can be a daunting task. With comprehensive course data from leading colleges and universities across the world, we are here to guide you through the entire process. Our experienced counsellors work with you to understand your goals and aspirations to help find a study abroad program that perfectly fits for you. Our course finder helps you discover thousands of courses from leading institutions across Australia, Canada, Ireland, New Zealand, the United Kingdom and the United States.</p>
                </div>
                {/* This section displays related search categories. */}
                <div className="FindC-bg">
                    <div className="FindC-related">
                        <span className="related">R</span>elated Searches
                    </div>
                    <div className="FindC-points">
                        <span className="points">📖 By course subject</span>
                        <div className="FindC-line">Health and Medicine
                            <br />Business
                            <br />Engineering
                            <br />Language and Culture
                            <br />Political and Social Sciences
                            <br />Computing and IT
                            <br />Teaching and Education</div>
                        <span className="points">🎓 By study level</span>
                        <div className="FindC-line">Doctorate Courses
                            <br />Foundation Courses
                            <br />Postgraduate Courses
                            <br />Pre-Degree & Vocational Courses
                            <br />School Courses
                            <br />Undergraduate Courses
                            <br />University Preparation Courses
                            <br />Vocational VET Courses </div>
                        <span className="points">🌎 By overseas country</span>
                        <div className="FindC-line">Courses In Australia
                            <br />Courses In Canada
                            <br />Courses In Ireland
                            <br />Courses In New Zealand
                            <br />Courses In United Kingdom
                            <br />Courses In United States
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}