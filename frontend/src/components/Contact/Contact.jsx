import React, { useState, useRef, useEffect } from "react";
import "./Contact.css";
import contactImg from "/public/assets/prep1.jpg";

/*
  Uses "flag-icons" library (MIT license) — real SVG country flags.
  Add this to your index.html <head>:
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.0.0/css/flag-icons.min.css"/>

  Usage: <span className="fi fi-gb" /> renders the UK flag, fi-us = USA, etc.
*/

// Full country list with real iso2 codes for flag-icons
const COUNTRIES = [
  { code: "af", dial: "+93",   label: "Afghanistan" },
  { code: "al", dial: "+355",  label: "Albania" },
  { code: "dz", dial: "+213",  label: "Algeria" },
  { code: "ad", dial: "+376",  label: "Andorra" },
  { code: "ao", dial: "+244",  label: "Angola" },
  { code: "ar", dial: "+54",   label: "Argentina" },
  { code: "am", dial: "+374",  label: "Armenia" },
  { code: "au", dial: "+61",   label: "Australia" },
  { code: "at", dial: "+43",   label: "Austria" },
  { code: "az", dial: "+994",  label: "Azerbaijan" },
  { code: "bh", dial: "+973",  label: "Bahrain" },
  { code: "bd", dial: "+880",  label: "Bangladesh" },
  { code: "by", dial: "+375",  label: "Belarus" },
  { code: "be", dial: "+32",   label: "Belgium" },
  { code: "bz", dial: "+501",  label: "Belize" },
  { code: "bj", dial: "+229",  label: "Benin" },
  { code: "bt", dial: "+975",  label: "Bhutan" },
  { code: "bo", dial: "+591",  label: "Bolivia" },
  { code: "ba", dial: "+387",  label: "Bosnia & Herzegovina" },
  { code: "bw", dial: "+267",  label: "Botswana" },
  { code: "br", dial: "+55",   label: "Brazil" },
  { code: "bn", dial: "+673",  label: "Brunei" },
  { code: "bg", dial: "+359",  label: "Bulgaria" },
  { code: "bf", dial: "+226",  label: "Burkina Faso" },
  { code: "bi", dial: "+257",  label: "Burundi" },
  { code: "kh", dial: "+855",  label: "Cambodia" },
  { code: "cm", dial: "+237",  label: "Cameroon" },
  { code: "ca", dial: "+1",    label: "Canada" },
  { code: "cv", dial: "+238",  label: "Cape Verde" },
  { code: "cf", dial: "+236",  label: "Central African Republic" },
  { code: "td", dial: "+235",  label: "Chad" },
  { code: "cl", dial: "+56",   label: "Chile" },
  { code: "cn", dial: "+86",   label: "China" },
  { code: "co", dial: "+57",   label: "Colombia" },
  { code: "km", dial: "+269",  label: "Comoros" },
  { code: "cr", dial: "+506",  label: "Costa Rica" },
  { code: "hr", dial: "+385",  label: "Croatia" },
  { code: "cu", dial: "+53",   label: "Cuba" },
  { code: "cy", dial: "+357",  label: "Cyprus" },
  { code: "cz", dial: "+420",  label: "Czech Republic" },
  { code: "cd", dial: "+243",  label: "DR Congo" },
  { code: "dk", dial: "+45",   label: "Denmark" },
  { code: "dj", dial: "+253",  label: "Djibouti" },
  { code: "dm", dial: "+1767", label: "Dominica" },
  { code: "do", dial: "+1809", label: "Dominican Republic" },
  { code: "ec", dial: "+593",  label: "Ecuador" },
  { code: "eg", dial: "+20",   label: "Egypt" },
  { code: "sv", dial: "+503",  label: "El Salvador" },
  { code: "er", dial: "+291",  label: "Eritrea" },
  { code: "ee", dial: "+372",  label: "Estonia" },
  { code: "et", dial: "+251",  label: "Ethiopia" },
  { code: "fj", dial: "+679",  label: "Fiji" },
  { code: "fi", dial: "+358",  label: "Finland" },
  { code: "fr", dial: "+33",   label: "France" },
  { code: "ga", dial: "+241",  label: "Gabon" },
  { code: "gm", dial: "+220",  label: "Gambia" },
  { code: "ge", dial: "+995",  label: "Georgia" },
  { code: "de", dial: "+49",   label: "Germany" },
  { code: "gh", dial: "+233",  label: "Ghana" },
  { code: "gr", dial: "+30",   label: "Greece" },
  { code: "gd", dial: "+1473", label: "Grenada" },
  { code: "gt", dial: "+502",  label: "Guatemala" },
  { code: "gn", dial: "+224",  label: "Guinea" },
  { code: "gw", dial: "+245",  label: "Guinea-Bissau" },
  { code: "gy", dial: "+592",  label: "Guyana" },
  { code: "ht", dial: "+509",  label: "Haiti" },
  { code: "hn", dial: "+504",  label: "Honduras" },
  { code: "hk", dial: "+852",  label: "Hong Kong" },
  { code: "hu", dial: "+36",   label: "Hungary" },
  { code: "is", dial: "+354",  label: "Iceland" },
  { code: "in", dial: "+91",   label: "India" },
  { code: "id", dial: "+62",   label: "Indonesia" },
  { code: "ir", dial: "+98",   label: "Iran" },
  { code: "iq", dial: "+964",  label: "Iraq" },
  { code: "ie", dial: "+353",  label: "Ireland" },
  { code: "il", dial: "+972",  label: "Israel" },
  { code: "it", dial: "+39",   label: "Italy" },
  { code: "jm", dial: "+1876", label: "Jamaica" },
  { code: "jp", dial: "+81",   label: "Japan" },
  { code: "jo", dial: "+962",  label: "Jordan" },
  { code: "kz", dial: "+7",    label: "Kazakhstan" },
  { code: "ke", dial: "+254",  label: "Kenya" },
  { code: "ki", dial: "+686",  label: "Kiribati" },
  { code: "kw", dial: "+965",  label: "Kuwait" },
  { code: "kg", dial: "+996",  label: "Kyrgyzstan" },
  { code: "la", dial: "+856",  label: "Laos" },
  { code: "lv", dial: "+371",  label: "Latvia" },
  { code: "lb", dial: "+961",  label: "Lebanon" },
  { code: "ls", dial: "+266",  label: "Lesotho" },
  { code: "lr", dial: "+231",  label: "Liberia" },
  { code: "ly", dial: "+218",  label: "Libya" },
  { code: "li", dial: "+423",  label: "Liechtenstein" },
  { code: "lt", dial: "+370",  label: "Lithuania" },
  { code: "lu", dial: "+352",  label: "Luxembourg" },
  { code: "mo", dial: "+853",  label: "Macau" },
  { code: "mg", dial: "+261",  label: "Madagascar" },
  { code: "mw", dial: "+265",  label: "Malawi" },
  { code: "my", dial: "+60",   label: "Malaysia" },
  { code: "mv", dial: "+960",  label: "Maldives" },
  { code: "ml", dial: "+223",  label: "Mali" },
  { code: "mt", dial: "+356",  label: "Malta" },
  { code: "mh", dial: "+692",  label: "Marshall Islands" },
  { code: "mr", dial: "+222",  label: "Mauritania" },
  { code: "mu", dial: "+230",  label: "Mauritius" },
  { code: "mx", dial: "+52",   label: "Mexico" },
  { code: "fm", dial: "+691",  label: "Micronesia" },
  { code: "md", dial: "+373",  label: "Moldova" },
  { code: "mc", dial: "+377",  label: "Monaco" },
  { code: "mn", dial: "+976",  label: "Mongolia" },
  { code: "me", dial: "+382",  label: "Montenegro" },
  { code: "ma", dial: "+212",  label: "Morocco" },
  { code: "mz", dial: "+258",  label: "Mozambique" },
  { code: "mm", dial: "+95",   label: "Myanmar" },
  { code: "na", dial: "+264",  label: "Namibia" },
  { code: "nr", dial: "+674",  label: "Nauru" },
  { code: "np", dial: "+977",  label: "Nepal" },
  { code: "nl", dial: "+31",   label: "Netherlands" },
  { code: "nz", dial: "+64",   label: "New Zealand" },
  { code: "ni", dial: "+505",  label: "Nicaragua" },
  { code: "ne", dial: "+227",  label: "Niger" },
  { code: "ng", dial: "+234",  label: "Nigeria" },
  { code: "kp", dial: "+850",  label: "North Korea" },
  { code: "mk", dial: "+389",  label: "North Macedonia" },
  { code: "no", dial: "+47",   label: "Norway" },
  { code: "om", dial: "+968",  label: "Oman" },
  { code: "pk", dial: "+92",   label: "Pakistan" },
  { code: "pw", dial: "+680",  label: "Palau" },
  { code: "ps", dial: "+970",  label: "Palestine" },
  { code: "pa", dial: "+507",  label: "Panama" },
  { code: "pg", dial: "+675",  label: "Papua New Guinea" },
  { code: "py", dial: "+595",  label: "Paraguay" },
  { code: "pe", dial: "+51",   label: "Peru" },
  { code: "ph", dial: "+63",   label: "Philippines" },
  { code: "pl", dial: "+48",   label: "Poland" },
  { code: "pt", dial: "+351",  label: "Portugal" },
  { code: "pr", dial: "+1787", label: "Puerto Rico" },
  { code: "qa", dial: "+974",  label: "Qatar" },
  { code: "cg", dial: "+242",  label: "Republic of Congo" },
  { code: "ro", dial: "+40",   label: "Romania" },
  { code: "ru", dial: "+7",    label: "Russia" },
  { code: "rw", dial: "+250",  label: "Rwanda" },
  { code: "kn", dial: "+1869", label: "Saint Kitts & Nevis" },
  { code: "lc", dial: "+1758", label: "Saint Lucia" },
  { code: "vc", dial: "+1784", label: "Saint Vincent" },
  { code: "ws", dial: "+685",  label: "Samoa" },
  { code: "sa", dial: "+966",  label: "Saudi Arabia" },
  { code: "sn", dial: "+221",  label: "Senegal" },
  { code: "rs", dial: "+381",  label: "Serbia" },
  { code: "sc", dial: "+248",  label: "Seychelles" },
  { code: "sl", dial: "+232",  label: "Sierra Leone" },
  { code: "sg", dial: "+65",   label: "Singapore" },
  { code: "sk", dial: "+421",  label: "Slovakia" },
  { code: "si", dial: "+386",  label: "Slovenia" },
  { code: "sb", dial: "+677",  label: "Solomon Islands" },
  { code: "so", dial: "+252",  label: "Somalia" },
  { code: "za", dial: "+27",   label: "South Africa" },
  { code: "kr", dial: "+82",   label: "South Korea" },
  { code: "ss", dial: "+211",  label: "South Sudan" },
  { code: "es", dial: "+34",   label: "Spain" },
  { code: "lk", dial: "+94",   label: "Sri Lanka" },
  { code: "sd", dial: "+249",  label: "Sudan" },
  { code: "sr", dial: "+597",  label: "Suriname" },
  { code: "sz", dial: "+268",  label: "Eswatini" },
  { code: "se", dial: "+46",   label: "Sweden" },
  { code: "ch", dial: "+41",   label: "Switzerland" },
  { code: "sy", dial: "+963",  label: "Syria" },
  { code: "tw", dial: "+886",  label: "Taiwan" },
  { code: "tj", dial: "+992",  label: "Tajikistan" },
  { code: "tz", dial: "+255",  label: "Tanzania" },
  { code: "th", dial: "+66",   label: "Thailand" },
  { code: "tg", dial: "+228",  label: "Togo" },
  { code: "to", dial: "+676",  label: "Tonga" },
  { code: "tt", dial: "+1868", label: "Trinidad & Tobago" },
  { code: "tn", dial: "+216",  label: "Tunisia" },
  { code: "tr", dial: "+90",   label: "Turkey" },
  { code: "tm", dial: "+993",  label: "Turkmenistan" },
  { code: "tv", dial: "+688",  label: "Tuvalu" },
  { code: "ug", dial: "+256",  label: "Uganda" },
  { code: "ua", dial: "+380",  label: "Ukraine" },
  { code: "ae", dial: "+971",  label: "United Arab Emirates" },
  { code: "gb", dial: "+44",   label: "United Kingdom" },
  { code: "us", dial: "+1",    label: "United States" },
  { code: "uy", dial: "+598",  label: "Uruguay" },
  { code: "uz", dial: "+998",  label: "Uzbekistan" },
  { code: "vu", dial: "+678",  label: "Vanuatu" },
  { code: "va", dial: "+379",  label: "Vatican City" },
  { code: "ve", dial: "+58",   label: "Venezuela" },
  { code: "vn", dial: "+84",   label: "Vietnam" },
  { code: "ye", dial: "+967",  label: "Yemen" },
  { code: "zm", dial: "+260",  label: "Zambia" },
  { code: "zw", dial: "+263",  label: "Zimbabwe" },
];

// ── PhoneField component with real flags + searchable dropdown ──
function PhoneField({ value, onChange }) {
  const [selected, setSelected] = useState(COUNTRIES.find(c => c.code === "gb") || COUNTRIES[0]);
  const [open, setOpen]         = useState(false);
  const [search, setSearch]     = useState("");
  const [number, setNumber]     = useState("");
  const wrapperRef              = useRef(null);
  const searchInputRef          = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Auto-focus search on open
  useEffect(() => {
    if (open && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
  }, [open]);

  // Filter by name or dial code
  const filtered = COUNTRIES.filter((c) =>
    c.label.toLowerCase().includes(search.toLowerCase()) ||
    c.dial.includes(search)
  );

  const handleSelect = (country) => {
    setSelected(country);
    setOpen(false);
    setSearch("");
    onChange(country.dial + number);
  };

  const handleNumberChange = (e) => {
    const val = e.target.value.replace(/[^\d\s\-().]/g, "");
    setNumber(val);
    onChange(selected.dial + val);
  };

  return (
    <div className="phone-field" ref={wrapperRef}>

      {/* ── Trigger: real flag + dial code ── */}
      <button
        type="button"
        className="phone-flag-btn"
        onClick={() => { setOpen((o) => !o); setSearch(""); }}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {/* Real flag via flag-icons library */}
        <span className={`fi fi-${selected.code} phone-flag-icon`}></span>
        <span className="phone-dial-code">{selected.dial}</span>
        <span className="phone-chevron">{open ? "▲" : "▼"}</span>
      </button>

      {/* Number input */}
      <input
        className="phone-number-input"
        type="tel"
        placeholder="123 456 7890"
        value={number}
        onChange={handleNumberChange}
        required
      />

      {/* ── Dropdown with search bar ── */}
      {open && (
        <div className="phone-dropdown" role="listbox">

          {/* Search input */}
          <div className="phone-search-wrap">
            <svg className="phone-search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              ref={searchInputRef}
              className="phone-search-input"
              type="text"
              placeholder="Search country or code..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button
                type="button"
                className="phone-search-clear"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >×</button>
            )}
          </div>

          {/* Country list */}
          <ul className="phone-country-list">
            {filtered.length === 0 && (
              <li className="phone-no-result">No countries found</li>
            )}
            {filtered.map((c) => (
              <li
                key={c.code}
                className={`phone-country-item${c.code === selected.code ? " active" : ""}`}
                onClick={() => handleSelect(c)}
                role="option"
                aria-selected={c.code === selected.code}
              >
                {/* Real flag via flag-icons */}
                <span className={`fi fi-${c.code} phone-flag-icon`}></span>
                <span className="phone-country-name">{c.label}</span>
                <span className="phone-country-dial">{c.dial}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    destination: "",
    startTime: "",
    studyLevel: "",
    funding: "",
    agreeTerms: false,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch("/api/counselling/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Something went wrong");
      setMessage("✅ Counselling request submitted successfully!");
      setFormData({
        firstName: "", lastName: "", email: "", mobile: "",
        destination: "", startTime: "", studyLevel: "", funding: "", agreeTerms: false,
      });
    } catch (error) {
      setMessage("❌ Failed to submit. Please try again later.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">

        {/* LEFT — Form */}
        <div className="contact-left">
          <div className="contact-header">
            <h1><span className="g-accent">G</span>et FREE Counselling Today!</h1>
            <p className="contact-subtitle">
              Enter your details and our expert will reach out to you to discuss
              your plans. By the way, all our services are free!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">

            {/* Row 1 — Name */}
            <div className="form-row">
              <div className="form-field">
                <label>First name*</label>
                <input type="text" name="firstName" value={formData.firstName}
                  onChange={handleInputChange} required />
              </div>
              <div className="form-field">
                <label>Last name*</label>
                <input type="text" name="lastName" value={formData.lastName}
                  onChange={handleInputChange} required />
              </div>
            </div>

            {/* Row 2 — Email */}
            <div className="form-row">
              <div className="form-field full-width">
                <label>Email address*</label>
                <input type="email" name="email" value={formData.email}
                  onChange={handleInputChange} required />
              </div>
            </div>

            {/* Row 3 — Mobile with real flag picker */}
            <div className="form-row">
              <div className="form-field full-width">
                <label>Mobile number*</label>
                <PhoneField
                  value={formData.mobile}
                  onChange={(val) => setFormData((p) => ({ ...p, mobile: val }))}
                />
              </div>
            </div>

            {/* Row 4 — Destination + Start */}
            <div className="form-row">
              <div className="form-field">
                <label>Preferred study destination*</label>
                <select name="destination" value={formData.destination}
                  onChange={handleInputChange} required>
                  <option value="">Select</option>
                  <option value="uk">United Kingdom</option>
                  <option value="usa">United States</option>
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="europe">Europe</option>
                  <option value="ireland">Ireland</option>
                  <option value="germany">Germany</option>
                </select>
              </div>
              <div className="form-field">
                <label>When would you like to start?*</label>
                <select name="startTime" value={formData.startTime}
                  onChange={handleInputChange} required>
                  <option value="">Select</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                </select>
              </div>
            </div>

            {/* Row 5 — Level + Funding */}
            <div className="form-row">
              <div className="form-field">
                <label>Preferred study level*</label>
                <select name="studyLevel" value={formData.studyLevel}
                  onChange={handleInputChange} required>
                  <option value="">Select</option>
                  <option value="bachelor">Bachelor&apos;s</option>
                  <option value="master">Master&apos;s</option>
                  <option value="phd">PhD</option>
                  <option value="diploma">Diploma</option>
                </select>
              </div>
              <div className="form-field">
                <label>How would you fund your education?*</label>
                <select name="funding" value={formData.funding}
                  onChange={handleInputChange} required>
                  <option value="">Select</option>
                  <option value="self-funded">Self-funded</option>
                  <option value="scholarship">Scholarship</option>
                  <option value="education-loan">Education Loan</option>
                  <option value="family-support">Family Support</option>
                </select>
              </div>
            </div>

            {/* Terms */}
            <div className="form-checkbox">
              <label className="checkbox-label">
                <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms}
                  onChange={handleInputChange} required />
                I agree to Jramsys{" "}
                <span className="terms-text">Terms &amp; Privacy Policy</span>
              </label>
            </div>

            {message && (
              <p className={`message ${message.startsWith("✅") ? "success" : "error"}`}>
                {message}
              </p>
            )}

            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? "Submitting..." : "Avail FREE Counselling"}
            </button>

          </form>
        </div>

        {/* RIGHT — Image */}
        <div className="contact-right">
          <div className="image-container">
            <div className="background-shapes">
              <div className="shape-green"></div>
              <div className="shape-orange"></div>
              <div className="shape-blue"></div>
            </div>
            <img src={contactImg} alt="Contact Representative" className="contact-image" />
          </div>
        </div>

      </div>
    </div>
  );
}