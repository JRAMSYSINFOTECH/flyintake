// Import React hooks, Link for navigation, and FontAwesome for icons.
import React, { useState, useMemo } from "react";
import "./Sabroad.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// A static list of all available subjects.
const allSubjects = [
    { letter: 'A', name: 'Agriculture Sciences' },
    { letter: 'A', name: 'Agriculture, Environmental & Related Studies' },
    { letter: 'A', name: 'All Accounting' },
    { letter: 'A', name: 'All Pharmacy' },
    { letter: 'A', name: 'Architecture and Planning' },
    { letter: 'A', name: 'Art and Design' },
    { letter: 'A', name: 'Arts, Humanities And Social Sciences' },
    { letter: 'B', name: 'Biological and Biomedical Sciences' },
    { letter: 'B', name: 'Biological and Life Sciences' },
    { letter: 'B', name: 'Building and Architecture' },
    { letter: 'B', name: 'Business' },
    { letter: 'B', name: 'Business, Commerce And Management Studies' },
    { letter: 'C', name: 'Communication and Journalism' },
    { letter: 'C', name: 'Computer and Information Sciences' },
    { letter: 'C', name: 'Computing and IT' },
    { letter: 'E', name: 'Economics' },
    { letter: 'E', name: 'Education' },
    { letter: 'E', name: 'Engineering' },
    { letter: 'E', name: 'English Language and Literature Studies' },
    { letter: 'E', name: 'Environmental Science' },
    { letter: 'F', name: 'Family and Consumer Sciences' },
    { letter: 'F', name: 'Food, Hospitality and Personal Services' },
    { letter: 'G', name: 'General Primary And Secondary Education Studies' },
    { letter: 'H', name: 'Health and Medical Sciences' },
    { letter: 'H', name: 'Health Professions and Clinical Sciences' },
    { letter: 'H', name: 'Health, Medicine And Veterinary Science' },
    { letter: 'H', name: 'History' },
    { letter: 'H', name: 'Hospitality, Leisure, Sport and Tourism' },
    { letter: 'L', name: 'Language and Culture' },
    { letter: 'L', name: 'Law and Legal Studies' },
    { letter: 'M', name: 'Marketing, Media and Communication' },
    { letter: 'N', name: 'Natural and Physical Sciences' },
    { letter: 'N', name: 'Natural Resources and Conservation' },
    { letter: 'P', name: 'Personal and Culinary Services' },
    { letter: 'P', name: 'Philosophy and Religious Studies' }, 
    { letter: 'P', name: 'Physical Sciences' },
    { letter: 'P', name: 'Psychology' },
    { letter: 'P', name: 'Political and Social Sciences' },
    { letter: 'S', name: 'Social Sciences' },
    { letter: 'T', name: 'Teaching and Education' },
].map(subject => ({
    // For each subject, add a URL that points to a Google search for that subject.
    ...subject,
    url: `https://www.google.com/search?q=${encodeURIComponent(subject.name)}`
}));

// This is the main component for the "Study Abroad Subjects" page.
export default function Sabroad() {
    // State to hold the current search term entered by the user.
    const [searchTerm, setSearchTerm] = useState("");

    // useMemo is used to optimize performance by only re-calculating the filtered list when the search term changes.
    const filteredSubjects = useMemo(() => {
        // If there's no search term, return all subjects.
        if (!searchTerm) {
            return allSubjects;
        }
        // Otherwise, filter subjects based on the search term.
        return allSubjects.filter(subject =>
            subject.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    // Group the filtered subjects by their starting letter.
    const groupedSubjects = useMemo(() => {
        return filteredSubjects.reduce((acc, subject) => {
            const { letter } = subject;
            if (!acc[letter]) {
                acc[letter] = [];
            }
            acc[letter].push(subject);
            return acc;
        }, {});
    }, [filteredSubjects]);

    // Get the sorted list of letters to render the groups in alphabetical order.
    const sortedLetters = Object.keys(groupedSubjects).sort();

    return (
        <div>
            {/* This is the main banner section for the page. */}
            <div className="Sabroad-container"> 
                {/* Breadcrumb navigation. */}
                <Link to="/"><p className="Sabroad-description">INTAKE/Study Abroad Subjects</p></Link>
                {/* Main heading and description. */}
                <h1 className="Sabroad-title">Explore subjects</h1>
                <h3 className="Sabroad-p">
                    With so many courses and universities to choose from, deciding where and what to study abroad can be a daunting task. Don't worry, we are here to guide you during the entire process.
                </h3>
            </div>
            {/* This container holds the "Browse Subjects" title and the search bar. */}
            <div className="Sabroad-card-container">
                <h1 className="sabroad-aa"><span className="Sabroad-l">B</span>rowse Subjects</h1>
                <div className="search-bar-container">
                    {/* Input field for searching subjects. */}
                    <input
                        type="text"
                        placeholder="Search subjects by Keywords"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                    <FontAwesomeIcon icon={faSearch} className="FindC-search-icon" />
                </div>
            </div>
            {/* This is a side panel with a call-to-action to find a course. */}
            <div className="Sabroad-in">
                <h1 className="side">Want to find a suitable course?</h1>
                <p className="sabroad-line">
                    Sign in to get personalised content for you or get in touch with one of our counsellors for free consultation.
                </p>
                {/* Link to the "Find a Course" page. */}
                <Link to="/pages/FindC" className="Sabroad-bt">
                    <button>Find a course</button>
                </Link> 
            </div>            
            {/* This is the main content area where the list of subjects is displayed. */}
            <div className="Sabroad-mat">
                {/* Check if there are any subjects to display. */}
                {sortedLetters.length > 0 ? (
                    // Map over the sorted letters to create a section for each letter group.
                    sortedLetters.map(letter => (
                        <div key={letter}>
                            <h1 className="Sabroad-mat-title">{letter}</h1>
                            <div className="subject-list">
                                {/* Map over the subjects in the current letter group. */}
                                {groupedSubjects[letter].map(subject => (
                                    <div className="subject-row" key={subject.name}>
                                        <span className="subject-text">{subject.name}</span>
                                        <a href={subject.url} target="_blank" rel="noopener noreferrer" className="subject-plus-link">
                                            <span className="subject-plus">+</span>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    // Display a message if no subjects match the search.
                    <p className="no-subjects-found">No subjects found matching your search.</p>
                )}
            </div>
        </div>
    );
}
