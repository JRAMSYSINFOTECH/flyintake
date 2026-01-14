import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faAngleDown, faBars, faTimes, faUser, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";

// Black bar dropdown data
const balckDropworn = {
  "Find-us": {
    path: "/pages/black-link/Find",
    items: [
      { label: "INTAKE Australia", path: "/find-us/australia" },
      { label: "INTAKE Bahrain", path: "/find-us/bahrain" },
      { label: "INTAKE Bangladesh", path: "/find-us/bangladesh" },
      { label: "INTAKE Cambodia", path: "/find-us/cambodia" },
      { label: "INTAKE Canada", path: "/find-us/canada" },
      { label: "INTAKE China", path: "/find-us/china" },
      { label: "INTAKE Egypt", path: "/find-us/egypt" },
      { label: "INTAKE Ghana", path: "/find-us/ghana" },
      { label: "INTAKE Hong Kong", path: "/find-us/hong-kong" },
      { label: "INTAKE Indonesia", path: "/find-us/indonesia" },
      { label: "INTAKE Iran", path: "/find-us/iran" },
      { label: "INTAKE Jordan", path: "/find-us/jordan" },
      { label: "INTAKE Kenya", path: "/find-us/kenya" },
      { label: "INTAKE Korea", path: "/find-us/korea" },
      { label: "INTAKE Kuwait", path: "/find-us/kuwait" },
      { label: "INTAKE Lebanon", path: "/find-us/lebanon" },
      { label: "INTAKE Malaysia", path: "/find-us/malaysia" },
      { label: "INTAKE Mauritius", path: "/find-us/mauritius" },
      { label: "INTAKE Middle East", path: "/find-us/middle-east" },
      { label: "INTAKE Nepal", path: "/find-us/nepal" },
    ],
  },
};



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
    ],
  },

  "Find-a-course": {
    path: "/pages/FindC",
    items: [
      { label: "Course Advice", path: "/pages/CourseA" },
      { label: "Courses with Instant Offer", path: "/pages/Courseof" },
      { label: "Study Abroad cources", path: "/pages/Sabroad" },
      { label: "Find scholorships", path: "/pages/Scholar" },
      { label: "Find Universities", path: "/pages/FindU" },
      { label: "University Rankings - THE", path: "/pages/Uranking" },
      { label: "Complete University Guide (CUG)", path: "/pages/Cug" },
    ],
  },
  "English Tests": {
    path: "/pages/EnglishT",
    items: [
      { label: "Toefl", path: "/pages/Toefl" },
      { label: "duolingo", path: "/pages/Duolingo" },
      { label: "IELTS", path: "/pages/IELTSPage" },
    ],
  },

  "Student-essentials": {
    path: "/student-essentials",
    items: [
      { label: "Education Loan", path: "/student-essentials/EducationLoan" },
      { label: "Money Transfer", path: "/student-essentials/Money_Transfer" },
      { label: "Health Insurance", path: "/student-essentials/HealthInsurance" },
      { label: "Student Banking", path: "/student-essentials/StudentBanking" },
      { label: "Accommodation", path: "/student-essentials/Accommodation" },
      { label: "International SIM Cards", path: "/student-essentials/InternationalSimCards" },
      { label: "Guardian Ship", path: "/student-essentials/Guardian-Ship" },
      { label: "Forex Cards", path: "/student-essentials/ForexCards" },
      { label: "ISIC", path: "/student-essentials/ISIC" },
      { label: "Student Travel Support", path: "/student-essentials/Travel_Support" },
    ],
  },


};

const submenuData = {
  "University Rankings - THE": [
    { label: "QS World University Rankings", path: "/pages/Qsworld" }
  ],
  "IELTS": [
    { label: "What is IELTS?", path: "/pages/what" },
    { label: "IELTS Preparation", path: "/pages/Prep" }
  ],
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSecondLevel, setOpenSecondLevel] = useState(null);
  const [dropdownHeight, setDropdownHeight] = useState(null);
  const [user, setUser] = useState(null);
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null); // New state for mobile dropdowns
  const dropdownRef = React.useRef(null);

  const closeDropdown = () => {
    setOpenDropdown(null);
    setOpenSecondLevel(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    closeDropdown();
  };

  const fetchFavoritesCount = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
      const res = await fetch("/api/Favorite", {
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (res.ok) {
        const data = await res.json();
        setFavoritesCount(data.data.length);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (user) {
      fetchFavoritesCount();
    }
  }, [user]);

  const updateUser = () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    updateUser();

    const handleStorageChange = () => {
      updateUser();
    };

    const handleFocus = () => {
      updateUser();
    };

    const handleUserLogin = () => {
      updateUser();
    };

    const handleUserLogout = () => {
      updateUser();
    };

    const handleFavoritesUpdated = () => {
      fetchFavoritesCount();
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('userLogin', handleUserLogin);
    window.addEventListener('userLogout', handleUserLogout);
    window.addEventListener('favoritesUpdated', handleFavoritesUpdated);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('userLogin', handleUserLogin);
      window.removeEventListener('userLogout', handleUserLogout);
      window.removeEventListener('favoritesUpdated', handleFavoritesUpdated);
    };
  }, []);

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
    if (openDropdown && dropdownRef.current) {
      setDropdownHeight(dropdownRef.current.clientHeight);
    } else {
      setDropdownHeight(null);
    }
  }, [openDropdown]);
  return (
    <>
      <div className="black-container">
        <ul className="black-links">
          <li className="black-li">
            <Link to="/pages/NewAndA">News and articles</Link>
          </li>
          <li className="black-li">
            <Link to="/pages/Events">Events</Link>
          </li>

          {/* Find-us Dropdown */}
          <li
            className="black-li1 has-dropdown"
            onMouseEnter={() => setOpenDropdown("Find-us-black")}
            onMouseLeave={closeDropdown}
          >
            <button className="nav-button" onClick={() => setOpenDropdown(prev => prev === "Find-us-black" ? null : "Find-us-black")}>
              Find us <FontAwesomeIcon icon={faAngleDown} />
            </button>

            {openDropdown === "Find-us-black" && (
              <ul
                className="find-us-dropdown"
                onMouseEnter={() => setOpenDropdown("Find-us-black")}
                onMouseLeave={closeDropdown}
              >
                {/* Special Button on Top */}
                <li >
                  <Link to="/pages/black-link/Find/Find" style={{ textDecoration: "none" }}>
                    <button

                    >
                      Find nearest INTAKE Offices
                    </button>
                  </Link>
                </li>

                {/* Office Links */}
                {balckDropworn["Find-us"].items.map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.path} onClick={closeDropdown} style={{ color: "#fff", textDecoration: "none" }}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="black-li2">
            <Link to="/pages/English">
              <FontAwesomeIcon icon={faGlobe} /> English
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Navbar */}
      <nav className="main-navbar">
        <Link to="/">
          <img src="/assets/INTAKE1.png" alt="Logo" className="logo" />
        </Link>

        <div className="nav-links-wrapper">
          <ul className="nav-links">
            {Object.entries(dropdownData).map(([key, items]) => (
              <li
                key={key}
                className="nav-item"
                onMouseEnter={() => setOpenDropdown(key)}
                onMouseLeave={closeDropdown}
              >
                <Link
                  to={items.path}
                  className="nav-button"
                  aria-haspopup="true"
                  aria-expanded={openDropdown === key}
                >
                  {key
                    .split("-")
                    .map((w) => w[0].toUpperCase() + w.slice(1))
                    .join(" ")}
                </Link>

                {openDropdown === key && (
                  <ul className="dropdown-menu" ref={dropdownRef}>
                    {items.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="dropdown-item"
                        onMouseEnter={() => setOpenSecondLevel(item.label)}
                        onMouseLeave={() => setOpenSecondLevel(null)}
                      >
                        <Link
                          to={item.path}
                          onClick={closeDropdown}
                          className="dropdown-link"
                        >
                          {item.label}
                        </Link>

                        {submenuData[item.label] && openSecondLevel === item.label && (
                          <ul
                            className="second-level-menu"
                            style={{
                              height: dropdownHeight ? dropdownHeight : '100%',
                            }}
                          >
                            {submenuData[item.label].map((sub, sIdx) => (
                              <li key={sIdx} className="dropdown-item">
                                <Link
                                  to={sub.path}
                                  onClick={closeDropdown}
                                  className="dropdown-link"
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
            ))}
          </ul>
        </div>

        <div className="navbar-right">
          <div className="nav-buttons">
            <Link to="/pages/white-link/Avail">
              <button className="login-btn">Avail Free counselling</button>
            </Link>
            <Link to="/login">
              <button className="signup-btn">Login</button>
            </Link>
          </div>

          <div className="right-icons">
            <Link to="/ShortList" className="icon-btn heart">
              <FontAwesomeIcon icon={favoritesCount > 0 ? faHeart : faRegularHeart} />
              {favoritesCount > 0 && <span className="fav-count">{favoritesCount}</span>}
            </Link>
            {user ? (
              <Link to="/components/Profile" className="icon-btn-account">
                <img
                  src={user.image || "/assets/Profile.jpg"}
                  alt="Profile"
                />
              </Link>
            ) : (
              <Link to="/components/Profile" className="icon-btn-account">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            )}
            <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
              <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div className={`mobile-sidebar ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="mobile-links">
            {Object.entries(dropdownData).map(([key, data]) => ( 
              <li key={key} className="mobile-nav-item">
                <Link
                  to={data.path}
                  onClick={toggleMobileMenu}
                  className="mobile-nav-link-header"
                >
                  <span>
                  {key.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ")}
                  </span>
                </Link>
              </li>
            ))}
            <li>
              <Link to="/pages/white-link/Avail" onClick={toggleMobileMenu}>
                <button className="login-btn" onClick={toggleMobileMenu}>
                  Avail Free counselling
                </button>
              </Link>
            </li>
            <li>
              <Link to="/pages/white-link/SignIN">
                <button className="signup-btn" onClick={toggleMobileMenu}>
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>

        {isMobileMenuOpen && <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)} />}
      </nav>
    </>
  );
};

export default Navbar;
