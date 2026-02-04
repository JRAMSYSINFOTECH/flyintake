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

const dropdownData = {
  "Study-abroad-steps": {
    path: "/study-abroad/why-study-abroad",
    items: [
      { label: "Why study abroad?", path: "/study-abroad/why-study-abroad" },
      { label: "Where and what to study?", path: "/study-abroad/where-to-study" },
      { label: "How do I apply?", path: "/study-abroad/how-to-apply" },
      { label: "After receiving an offer", path: "/study-abroad/after-offer" },
      { label: "Prepare to depart", path: "/study-abroad/prepare-to-depart" },
      { label: "Arrive and thrive", path: "/study-abroad/arrive-and-thrive" },
    ],
  },

  "Study-destinations": {
    path: "/study-destinations",
    items: [
      { label: "Study in Australia", path: "/study-destinations/australia" },
      { label: "Study in Canada", path: "/study-destinations/canada" },
      { label: "Study in Ireland", path: "/study-destinations/ireland" },
      { label: "Study in UK", path: "/study-destinations/uk" },
      { label: "Study in USA", path: "/study-destinations/usa" },
      { label: "Study in Germany", path: "/study-destinations/germany" },
      { label: "Study in Europe", path: "/study-destinations/europe" },
    ],
  },

  "English-tests": {
    path: "/pages/EnglishT",
    items: [
      { label: "Toefl", path: "/pages/Toefl" },
      { label: "Duolingo", path: "/pages/Duolingo" },
      { label: "IELTS", path: "/pages/IELTSPage" },
    ],
  },
};

const submenuData = {
  "IELTS": [
    { label: "What is IELTS?", path: "/pages/what" },
    { label: "IELTS Preparation", path: "/pages/Prep" }
  ],
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSecondLevel, setOpenSecondLevel] = useState(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
  const [mobileOpenSubmenu, setMobileOpenSubmenu] = useState(null);
  const dropdownRef = React.useRef(null);
  const closeTimeoutRef = React.useRef(null);

  const closeDropdown = () => {
    setOpenDropdown(null);
    setOpenSecondLevel(null);
  };

  const handleNavItemEnter = (key) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setOpenDropdown(key);
  };

  const handleNavItemLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      closeDropdown();
    }, 150);
  };

  const handleDropdownEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
  };

  const handleDropdownLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      closeDropdown();
    }, 150);
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
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
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
            <a href="tel:+919121767948" className="contact-item">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <span>+91 9121767948</span>
            </a>
            <a href="mailto:officeflyintake@gmail.com" className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <span>officeflyintake@gmail.com</span>
            </a>
          </div>
          
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="main-navbar">
        <div className="navbar-container">
          <Link to="/" className="logo-link">
            <img src="/assets/flyintake LOGO.jpeg" alt="FlyIntake Global Consulting" className="logo" />
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-center">
            <ul className="nav-links">
              {Object.entries(dropdownData).map(([key, items]) => (
                <li
                  key={key}
                  className="nav-item has-dropdown"
                  onMouseEnter={() => handleNavItemEnter(key)}
                  onMouseLeave={handleNavItemLeave}
                >
                  <Link
                    to={items.path}
                    className="nav-link"
                    aria-haspopup="true"
                    aria-expanded={openDropdown === key}
                  >
                    {formatMenuLabel(key)}
                    <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
                  </Link>

                  {openDropdown === key && (
                    <ul 
                      className="dropdown-menu" 
                      ref={dropdownRef}
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                    >
                      {items.items.map((item, idx) => (
                        <li
                          key={idx}
                          className={`dropdown-item ${submenuData[item.label] ? 'has-submenu' : ''}`}
                          onMouseEnter={() => setOpenSecondLevel(item.label)}
                          onMouseLeave={() => setOpenSecondLevel(null)}
                        >
                          <Link
                            to={item.path}
                            onClick={closeDropdown}
                            className="dropdown-link"
                          >
                            <span>{item.label}</span>
                            {submenuData[item.label] && (
                              <FontAwesomeIcon icon={faChevronRight} className="submenu-icon" />
                            )}
                          </Link>

                          {submenuData[item.label] && openSecondLevel === item.label && (
                            <ul className="second-level-menu">
                              {submenuData[item.label].map((sub, sIdx) => (
                                <li key={sIdx} className="dropdown-item">
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
              ))}

              <li className="nav-item">
                <Link to="/pages/Trainings" className="nav-link">
                  IT & Management Trainings
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
            <a href="tel:+919121767948" className="mobile-contact-item">
              <FontAwesomeIcon icon={faPhone} />
              <span>+91 9121767948</span>
            </a>
            <a href="mailto:officeflyintake@gmail.com" className="mobile-contact-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>officeflyintake@gmail.com</span>
            </a>
          </div>
          
          <div className="mobile-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mobile-social-icon">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mobile-social-icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="mobile-social-icon">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Content */}
        <div className="mobile-sidebar-content">
          <ul className="mobile-links">
            {Object.entries(dropdownData).map(([key, data]) => ( 
              <li key={key} className="mobile-nav-item">
                <div className="mobile-nav-header">
                  <Link
                    to={data.path}
                    className="mobile-nav-link"
                    onClick={closeMobileMenu}
                  >
                    {formatMenuLabel(key)}
                  </Link>
                  <button 
                    className="mobile-dropdown-toggle"
                    onClick={(e) => toggleMobileDropdown(key, e)}
                    aria-label={`Toggle ${formatMenuLabel(key)} menu`}
                    aria-expanded={mobileOpenDropdown === key}
                  >
                    <FontAwesomeIcon 
                      icon={faChevronDown} 
                      className={`mobile-chevron ${mobileOpenDropdown === key ? 'rotate' : ''}`}
                    />
                  </button>
                </div>

                {mobileOpenDropdown === key && (
                  <ul className="mobile-dropdown">
                    {data.items.map((item, idx) => (
                      <li key={idx} className="mobile-dropdown-item">
                        {submenuData[item.label] ? (
                          <>
                            <div className="mobile-dropdown-header">
                              <Link
                                to={item.path}
                                className="mobile-dropdown-link"
                                onClick={closeMobileMenu}
                              >
                                {item.label}
                              </Link>
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
                            </div>

                            {mobileOpenSubmenu === item.label && (
                              <ul className="mobile-submenu">
                                {submenuData[item.label].map((sub, sIdx) => (
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
                          </>
                        ) : (
                          <Link
                            to={item.path}
                            className="mobile-dropdown-link"
                            onClick={closeMobileMenu}
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            <li className="mobile-nav-item">
              <Link
                to="/pages/Trainings"
                className="mobile-nav-link" 
                onClick={closeMobileMenu}
              >
                IT & Management Trainings
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