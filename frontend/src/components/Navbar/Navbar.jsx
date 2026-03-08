import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBars, 
  faTimes,
  faPhone,
  faEnvelope,
  faChevronDown,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { 
  faFacebook,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

// menu structure now groups all study/abroad related items under a single "Abroad Services" dropdown.
// a second dropdown is added for the new Tech Services list.
const dropdownData = {
  "Abroad-services": {
    // path: "/abroad-services",
    items: [
      {
        label: "Study-abroad-steps",
        path: "/study-abroad/why-study-abroad",
        // original step items become second‑level submenu
        subItems: [
          { label: "Why study abroad?", path: "/study-abroad/why-study-abroad" },
          { label: "Where and what to study?", path: "/study-destinations/uk" },
          { label: "How do I apply?", path: "/study-abroad/how-to-apply" },
          { label: "After receiving an offer", path: "/study-abroad/after-offer" },
          { label: "Prepare to depart", path: "/study-abroad/prepare-to-depart" },
          { label: "Arrive and thrive", path: "/study-abroad/arrive-and-thrive" },
        ],
      },
      {
        label: "English-tests",
        path: "/pages/EnglishT",
        subItems: [
          { label: "Toefl", path: "/pages/Toefl" },
          { label: "Duolingo", path: "/pages/Duolingo" },
          { label: "IELTS", path: "/pages/IELTSPage" },
        ],
      },
      {
        label: "Study-destinations",
        path: "/study-destinations",
        subItems: [
          { label: "Study in UK", path: "/study-destinations/uk" },
          { label: "Study in USA", path: "/study-destinations/usa" },
          { label: "Study in Australia", path: "/study-destinations/australia" },
          { label: "Study in Canada", path: "/study-destinations/canada" },
          { label: "Study in Ireland", path: "/study-destinations/ireland" },
          { label: "Study in Germany", path: "/study-destinations/germany" },
          { label: "Study in Europe", path: "/study-destinations/europe" },
        ],
      },
    ],
  },
  "Tech-services": {
    items: [
      { label: "IT Consultancy", path: "/pages/ITConsultancy" },
      { label: "Website & Software Development", path: "/pages/WebsiteSoftwareDevelopment" },
      { label: "AI Solutions & Automation", path: "/pages/AISolutionsAutomation" },
      { label: "Cloud Infrastructure & Integration", path: "/pages/CloudInfrastructureIntegration" },
      { label: "Cybersecurity Consulting", path: "/pages/CybersecurityConsulting" },
      { label: "Data & Analytics Solutions", path: "/pages/DataAnalyticsSolutions" },
      { label: "Digital Transformation", path: "/pages/DigitalTransformation" },
      { label: "Technical Support & Managed Services", path: "/pages/TechnicalSupportManagedServices" },
      { label: "Technical Talent Acquisition", path: "/pages/TechnicalTalentAcquisition" },
      { label: "Technical Training & Workshops", path: "/pages/TechnicalTrainingWorkshops" },
    ],
  },
};

// submenuData is no longer needed since we embed subItems directly in dropdownData
const submenuData = {};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSecondLevel, setOpenSecondLevel] = useState(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
  const [mobileOpenSubmenu, setMobileOpenSubmenu] = useState(null);
  
  const closeTimeoutRef = React.useRef(null);

  // Clear any pending timeout
  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  // Close dropdown with delay
  const scheduleClose = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
      setOpenSecondLevel(null);
    }, 500); // Increased to 500ms for best stability
  };

  // Handle nav item hover (main menu)
  const handleNavItemEnter = (key) => {
    clearCloseTimeout();
    setOpenDropdown(key);
    setOpenSecondLevel(null);
  };

  const handleNavItemLeave = () => {
    scheduleClose();
  };

  // Handle dropdown menu hover (keep it open)
  const handleDropdownEnter = () => {
    clearCloseTimeout();
  };

  const handleDropdownLeave = () => {
    scheduleClose();
  };

  // Handle dropdown item hover (for second level). Accepts the full item object now.
  const handleDropdownItemEnter = (item) => {
    clearCloseTimeout();
    if (item && item.subItems) {
      setOpenSecondLevel(item.label);
    } else {
      setOpenSecondLevel(null);
    }
  };

  // Handle second level menu hover
  const handleSecondLevelEnter = () => {
    clearCloseTimeout();
  };

  const handleSecondLevelLeave = () => {
    scheduleClose();
  };

  // Close dropdown immediately on click
  const closeDropdown = () => {
    clearCloseTimeout();
    setOpenDropdown(null);
    setOpenSecondLevel(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setMobileOpenDropdown(null);
      setMobileOpenSubmenu(null);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileOpenDropdown(null);
    setMobileOpenSubmenu(null);
  };

  const toggleMobileDropdown = (key, e) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileOpenDropdown(mobileOpenDropdown === key ? null : key);
    setMobileOpenSubmenu(null);
  };

  const toggleMobileSubmenu = (label, e) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileOpenSubmenu(mobileOpenSubmenu === label ? null : label);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    return () => {
      clearCloseTimeout();
    };
  }, []);

  const formatMenuLabel = (key) => {
    return key
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  };

  return (
    <>
      {/* Top Blue Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="contact-info">
            <a href="tel:+44 7741020217" className="contact-item">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <span>+44 7741020217</span>
            </a>
            <a href="tel:+919121767948" className="contact-item">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <span>+91 9121767948</span>
            </a>
            <a href="mailto:office@flyintakegc.com" className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <span>office@flyintakegc.com</span>
            </a>
          </div>
          
          <div className="social-icons">
            <a href="https://www.facebook.com/share/1CBT99eDFS/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/flyintake_global_consulting?igsh=b3FrcHo3b3B3ZzY5" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/company/flyintake-global-consulting-private-limited/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="main-navbar">
        <div className="navbar-container">
          <Link to="/" className="logo-link">
            <img src="/assets/FLYINTAKE.svg" alt="FlyIntake Global Consulting" className="logo" />
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-center">
            <ul className="nav-links">
              {/* Trainings & Internships link (renamed from Tech Services) */}
              <li className="nav-item">
                <Link to="/pages/TechServices" className="nav-link">
                  Trainings & Internships
                </Link>
              </li>

              {/* Tech services dropdown */}
              <li
                key="Tech-services"
                className="nav-item has-dropdown"
                onMouseEnter={() => handleNavItemEnter("Tech-services")}
                onMouseLeave={handleNavItemLeave}
              >
                <Link
                  to="/pages/TechServices"
                  className="nav-link"
                  aria-haspopup="true"
                  aria-expanded={openDropdown === "Tech-services"}
                >
                  Tech Services
                  <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
                </Link>

                {openDropdown === "Tech-services" && (
                  <ul
                    className="dropdown-menu"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {dropdownData["Tech-services"].items.map((item, idx) => (
                      <li
                        key={idx}
                        className={`dropdown-item ${item.subItems ? 'has-submenu' : ''}`}
                        onMouseEnter={() => handleDropdownItemEnter(item)}
                      >
                        <Link
                          to={item.path}
                          onClick={closeDropdown}
                          className="dropdown-link"
                        >
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Abroad services dropdown containing the 3 categories */}
              <li
                key="Abroad-services"
                className="nav-item has-dropdown"
                onMouseEnter={() => handleNavItemEnter("Abroad-services")}
                onMouseLeave={handleNavItemLeave}
              >
                <Link
                  to={dropdownData["Abroad-services"].path}
                  className="nav-link"
                  aria-haspopup="true"
                  aria-expanded={openDropdown === "Abroad-services"}
                >
                  Abroad Services
                  <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
                </Link>

                {openDropdown === "Abroad-services" && (
                  <ul
                    className="dropdown-menu"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {dropdownData["Abroad-services"].items.map((item, idx) => (
                      <li
                        key={idx}
                        className={`dropdown-item ${item.subItems ? 'has-submenu' : ''}`}
                        onMouseEnter={() => handleDropdownItemEnter(item)}
                      >
                        <Link
                          to={item.path}
                          onClick={closeDropdown}
                          className="dropdown-link"
                        >
                          <span>{formatMenuLabel(item.label)}</span>
                          {item.subItems && (
                            <FontAwesomeIcon icon={faChevronRight} className="submenu-icon" />
                          )}
                        </Link>

                        {/* second level inside abroad services */}
                        {item.subItems && openSecondLevel === item.label && (
                          <ul
                            className="second-level-menu"
                            onMouseEnter={handleSecondLevelEnter}
                            onMouseLeave={handleSecondLevelLeave}
                          >
                            {item.subItems.map((sub, sIdx) => (
                              <li
                                key={sIdx}
                                className="dropdown-item"
                                onMouseEnter={handleSecondLevelEnter}
                              >
                                <Link
                                  to={sub.path}
                                  onClick={closeDropdown}
                                  className="dropdown-link"
                                >
                                  <span>{sub.label}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Careers link */}
              <li className="nav-item">
                <Link to="/careers" className="nav-link">
                  Careers
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/about-us" className="nav-link">
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/contact-us" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn" 
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`mobile-sidebar ${isMobileMenuOpen ? "open" : ""}`}>
        {/* Mobile Top Bar - Inside Sidebar */}
        <div className="mobile-top-bar">
          <div className="mobile-contact-info">
            <a href="tel:+44 7741020217" className="mobile-contact-item">
              <FontAwesomeIcon icon={faPhone} />
              <span>+44 7741020217</span>
            </a>
            <a href="tel:+919121767948" className="mobile-contact-item">
              <FontAwesomeIcon icon={faPhone} />
              <span>+91 9121767948</span>
            </a>
            <a href="mailto:office@flyintakegc.com" className="mobile-contact-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>office@flyintakegc.com</span>
            </a>
          </div>
          
          <div className="mobile-social-icons">
            <a href="https://www.facebook.com/share/1CBT99eDFS/" target="_blank" rel="noopener noreferrer" className="mobile-social-icon">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/flyintake_global_consulting?igsh=b3FrcHo3b3B3ZzY5" target="_blank" rel="noopener noreferrer" className="mobile-social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/company/flyintake-global-consulting-private-limited/" target="_blank" rel="noopener noreferrer" className="mobile-social-icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Content */}
        <div className="mobile-sidebar-content">
          <ul className="mobile-links">
            {/* Trainings & Internships link */}
            <li className="mobile-nav-item">
              <Link
                to="/pages/TechServices"
                className="mobile-nav-link"
                onClick={closeMobileMenu}
              >
                Trainings & Internships
              </Link>
            </li>

            {/* Tech Services mobile dropdown */}
            <li className="mobile-nav-item">
              <div className="mobile-nav-header">
                <span className="mobile-nav-link">Tech Services</span>
                <button
                  className="mobile-dropdown-toggle"
                  onClick={(e) => toggleMobileDropdown("Tech-services", e)}
                  aria-label="Toggle Tech Services menu"
                  aria-expanded={mobileOpenDropdown === "Tech-services"}
                >
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`mobile-chevron ${mobileOpenDropdown === "Tech-services" ? 'rotate' : ''}`}
                  />
                </button>
              </div>

              {mobileOpenDropdown === "Tech-services" && (
                <ul className="mobile-dropdown">
                  {dropdownData["Tech-services"].items.map((item, idx) => (
                    <li key={idx} className="mobile-dropdown-item">
                      <Link
                        to={item.path}
                        className="mobile-nav-link"
                        onClick={closeMobileMenu}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Abroad Services group */}
            <li className="mobile-nav-item">
              <div className="mobile-nav-header">
                <span className="mobile-nav-link">Abroad Services</span>
                <button
                  className="mobile-dropdown-toggle"
                  onClick={(e) => toggleMobileDropdown("Abroad-services", e)}
                  aria-label="Toggle Abroad Services menu"
                  aria-expanded={mobileOpenDropdown === "Abroad-services"}
                >
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`mobile-chevron ${mobileOpenDropdown === "Abroad-services" ? 'rotate' : ''}`}
                  />
                </button>
              </div>

              {mobileOpenDropdown === "Abroad-services" && (
                <ul className="mobile-dropdown">
                  {dropdownData["Abroad-services"].items.map((item, idx) => (
                    <li key={idx} className="mobile-dropdown-item">
                      <div className="mobile-dropdown-header">
                        <Link
                          to={item.path}
                          className="mobile-dropdown-link"
                          onClick={closeMobileMenu}
                        >
                          {formatMenuLabel(item.label)}
                        </Link>
                        {item.subItems && (
                          <button
                            className="mobile-submenu-toggle"
                            onClick={(e) => toggleMobileSubmenu(item.label, e)}
                            aria-label={`Toggle ${item.label} submenu`}
                            aria-expanded={mobileOpenSubmenu === item.label}
                          >
                            <FontAwesomeIcon
                              icon={faChevronDown}
                              className={`mobile-chevron ${mobileOpenSubmenu === item.label ? 'rotate' : ''}`}
                            />
                          </button>
                        )}
                      </div>

                      {item.subItems && mobileOpenSubmenu === item.label && (
                        <ul className="mobile-submenu">
                          {item.subItems.map((sub, sIdx) => (
                            <li key={sIdx} className="mobile-submenu-item">
                              <Link
                                to={sub.path}
                                className="mobile-submenu-link"
                                onClick={closeMobileMenu}
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Careers link */}
            <li className="mobile-nav-item">
              <Link
                to="/careers"
                className="mobile-nav-link"
                onClick={closeMobileMenu}
              >
                Careers
              </Link>
            </li>

            <li className="mobile-nav-item">
              <Link
                to="/about-us"
                className="mobile-nav-link"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>

            <li className="mobile-nav-item">
              <Link
                to="/contact-us"
                className="mobile-nav-link"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="mobile-menu-overlay" 
            onClick={closeMobileMenu}
            role="button"
            tabIndex={0}
            aria-label="Close menu"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                closeMobileMenu();
              }
            }}
          />
          
          {/* Close Button - Fixed in navbar area */}
          <button 
            className="mobile-close-btn-top" 
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </>
      )}
    </>
  );
};

export default Navbar;