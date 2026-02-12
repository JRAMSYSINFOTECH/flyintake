import React from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, User, Shield, CheckCircle, Users, Globe, HeartHandshake, Briefcase } from "lucide-react";
import "./ContactUs.css";
import { Link } from "react-router-dom";


export default function ContactUs() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    countryCode: '+91',
    countryIso: 'in',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const pickerRef = React.useRef(null);
  const searchRef = React.useRef(null);

  /* Close on outside click */
  React.useEffect(() => {
    const handler = (e) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target)) {
        setShowDropdown(false);
        setSearchQuery('');
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  /* Auto-focus search when dropdown opens */
  React.useEffect(() => {
    if (showDropdown && searchRef.current) {
      setTimeout(() => searchRef.current?.focus(), 50);
    }
  }, [showDropdown]);

  const countryCodes = [
    { code: '+93',   iso2: 'af', country: 'Afghanistan' },
    { code: '+355',  iso2: 'al', country: 'Albania' },
    { code: '+213',  iso2: 'dz', country: 'Algeria' },
    { code: '+376',  iso2: 'ad', country: 'Andorra' },
    { code: '+244',  iso2: 'ao', country: 'Angola' },
    { code: '+54',   iso2: 'ar', country: 'Argentina' },
    { code: '+374',  iso2: 'am', country: 'Armenia' },
    { code: '+61',   iso2: 'au', country: 'Australia' },
    { code: '+43',   iso2: 'at', country: 'Austria' },
    { code: '+994',  iso2: 'az', country: 'Azerbaijan' },
    { code: '+973',  iso2: 'bh', country: 'Bahrain' },
    { code: '+880',  iso2: 'bd', country: 'Bangladesh' },
    { code: '+375',  iso2: 'by', country: 'Belarus' },
    { code: '+32',   iso2: 'be', country: 'Belgium' },
    { code: '+501',  iso2: 'bz', country: 'Belize' },
    { code: '+229',  iso2: 'bj', country: 'Benin' },
    { code: '+975',  iso2: 'bt', country: 'Bhutan' },
    { code: '+591',  iso2: 'bo', country: 'Bolivia' },
    { code: '+387',  iso2: 'ba', country: 'Bosnia & Herzegovina' },
    { code: '+267',  iso2: 'bw', country: 'Botswana' },
    { code: '+55',   iso2: 'br', country: 'Brazil' },
    { code: '+673',  iso2: 'bn', country: 'Brunei' },
    { code: '+359',  iso2: 'bg', country: 'Bulgaria' },
    { code: '+226',  iso2: 'bf', country: 'Burkina Faso' },
    { code: '+257',  iso2: 'bi', country: 'Burundi' },
    { code: '+855',  iso2: 'kh', country: 'Cambodia' },
    { code: '+237',  iso2: 'cm', country: 'Cameroon' },
    { code: '+1',    iso2: 'ca', country: 'Canada' },
    { code: '+238',  iso2: 'cv', country: 'Cape Verde' },
    { code: '+236',  iso2: 'cf', country: 'Central African Republic' },
    { code: '+235',  iso2: 'td', country: 'Chad' },
    { code: '+56',   iso2: 'cl', country: 'Chile' },
    { code: '+86',   iso2: 'cn', country: 'China' },
    { code: '+57',   iso2: 'co', country: 'Colombia' },
    { code: '+269',  iso2: 'km', country: 'Comoros' },
    { code: '+506',  iso2: 'cr', country: 'Costa Rica' },
    { code: '+385',  iso2: 'hr', country: 'Croatia' },
    { code: '+53',   iso2: 'cu', country: 'Cuba' },
    { code: '+357',  iso2: 'cy', country: 'Cyprus' },
    { code: '+420',  iso2: 'cz', country: 'Czech Republic' },
    { code: '+243',  iso2: 'cd', country: 'DR Congo' },
    { code: '+45',   iso2: 'dk', country: 'Denmark' },
    { code: '+253',  iso2: 'dj', country: 'Djibouti' },
    { code: '+1767', iso2: 'dm', country: 'Dominica' },
    { code: '+1809', iso2: 'do', country: 'Dominican Republic' },
    { code: '+593',  iso2: 'ec', country: 'Ecuador' },
    { code: '+20',   iso2: 'eg', country: 'Egypt' },
    { code: '+503',  iso2: 'sv', country: 'El Salvador' },
    { code: '+291',  iso2: 'er', country: 'Eritrea' },
    { code: '+372',  iso2: 'ee', country: 'Estonia' },
    { code: '+251',  iso2: 'et', country: 'Ethiopia' },
    { code: '+679',  iso2: 'fj', country: 'Fiji' },
    { code: '+358',  iso2: 'fi', country: 'Finland' },
    { code: '+33',   iso2: 'fr', country: 'France' },
    { code: '+241',  iso2: 'ga', country: 'Gabon' },
    { code: '+220',  iso2: 'gm', country: 'Gambia' },
    { code: '+995',  iso2: 'ge', country: 'Georgia' },
    { code: '+49',   iso2: 'de', country: 'Germany' },
    { code: '+233',  iso2: 'gh', country: 'Ghana' },
    { code: '+30',   iso2: 'gr', country: 'Greece' },
    { code: '+1473', iso2: 'gd', country: 'Grenada' },
    { code: '+502',  iso2: 'gt', country: 'Guatemala' },
    { code: '+224',  iso2: 'gn', country: 'Guinea' },
    { code: '+245',  iso2: 'gw', country: 'Guinea-Bissau' },
    { code: '+592',  iso2: 'gy', country: 'Guyana' },
    { code: '+509',  iso2: 'ht', country: 'Haiti' },
    { code: '+504',  iso2: 'hn', country: 'Honduras' },
    { code: '+852',  iso2: 'hk', country: 'Hong Kong' },
    { code: '+36',   iso2: 'hu', country: 'Hungary' },
    { code: '+354',  iso2: 'is', country: 'Iceland' },
    { code: '+91',   iso2: 'in', country: 'India' },
    { code: '+62',   iso2: 'id', country: 'Indonesia' },
    { code: '+98',   iso2: 'ir', country: 'Iran' },
    { code: '+964',  iso2: 'iq', country: 'Iraq' },
    { code: '+353',  iso2: 'ie', country: 'Ireland' },
    { code: '+972',  iso2: 'il', country: 'Israel' },
    { code: '+39',   iso2: 'it', country: 'Italy' },
    { code: '+1876', iso2: 'jm', country: 'Jamaica' },
    { code: '+81',   iso2: 'jp', country: 'Japan' },
    { code: '+962',  iso2: 'jo', country: 'Jordan' },
    { code: '+7',    iso2: 'kz', country: 'Kazakhstan' },
    { code: '+254',  iso2: 'ke', country: 'Kenya' },
    { code: '+686',  iso2: 'ki', country: 'Kiribati' },
    { code: '+965',  iso2: 'kw', country: 'Kuwait' },
    { code: '+996',  iso2: 'kg', country: 'Kyrgyzstan' },
    { code: '+856',  iso2: 'la', country: 'Laos' },
    { code: '+371',  iso2: 'lv', country: 'Latvia' },
    { code: '+961',  iso2: 'lb', country: 'Lebanon' },
    { code: '+266',  iso2: 'ls', country: 'Lesotho' },
    { code: '+231',  iso2: 'lr', country: 'Liberia' },
    { code: '+218',  iso2: 'ly', country: 'Libya' },
    { code: '+423',  iso2: 'li', country: 'Liechtenstein' },
    { code: '+370',  iso2: 'lt', country: 'Lithuania' },
    { code: '+352',  iso2: 'lu', country: 'Luxembourg' },
    { code: '+853',  iso2: 'mo', country: 'Macau' },
    { code: '+261',  iso2: 'mg', country: 'Madagascar' },
    { code: '+265',  iso2: 'mw', country: 'Malawi' },
    { code: '+60',   iso2: 'my', country: 'Malaysia' },
    { code: '+960',  iso2: 'mv', country: 'Maldives' },
    { code: '+223',  iso2: 'ml', country: 'Mali' },
    { code: '+356',  iso2: 'mt', country: 'Malta' },
    { code: '+692',  iso2: 'mh', country: 'Marshall Islands' },
    { code: '+222',  iso2: 'mr', country: 'Mauritania' },
    { code: '+230',  iso2: 'mu', country: 'Mauritius' },
    { code: '+52',   iso2: 'mx', country: 'Mexico' },
    { code: '+691',  iso2: 'fm', country: 'Micronesia' },
    { code: '+373',  iso2: 'md', country: 'Moldova' },
    { code: '+377',  iso2: 'mc', country: 'Monaco' },
    { code: '+976',  iso2: 'mn', country: 'Mongolia' },
    { code: '+382',  iso2: 'me', country: 'Montenegro' },
    { code: '+212',  iso2: 'ma', country: 'Morocco' },
    { code: '+258',  iso2: 'mz', country: 'Mozambique' },
    { code: '+95',   iso2: 'mm', country: 'Myanmar' },
    { code: '+264',  iso2: 'na', country: 'Namibia' },
    { code: '+674',  iso2: 'nr', country: 'Nauru' },
    { code: '+977',  iso2: 'np', country: 'Nepal' },
    { code: '+31',   iso2: 'nl', country: 'Netherlands' },
    { code: '+64',   iso2: 'nz', country: 'New Zealand' },
    { code: '+505',  iso2: 'ni', country: 'Nicaragua' },
    { code: '+227',  iso2: 'ne', country: 'Niger' },
    { code: '+234',  iso2: 'ng', country: 'Nigeria' },
    { code: '+850',  iso2: 'kp', country: 'North Korea' },
    { code: '+389',  iso2: 'mk', country: 'North Macedonia' },
    { code: '+47',   iso2: 'no', country: 'Norway' },
    { code: '+968',  iso2: 'om', country: 'Oman' },
    { code: '+92',   iso2: 'pk', country: 'Pakistan' },
    { code: '+680',  iso2: 'pw', country: 'Palau' },
    { code: '+970',  iso2: 'ps', country: 'Palestine' },
    { code: '+507',  iso2: 'pa', country: 'Panama' },
    { code: '+675',  iso2: 'pg', country: 'Papua New Guinea' },
    { code: '+595',  iso2: 'py', country: 'Paraguay' },
    { code: '+51',   iso2: 'pe', country: 'Peru' },
    { code: '+63',   iso2: 'ph', country: 'Philippines' },
    { code: '+48',   iso2: 'pl', country: 'Poland' },
    { code: '+351',  iso2: 'pt', country: 'Portugal' },
    { code: '+1787', iso2: 'pr', country: 'Puerto Rico' },
    { code: '+974',  iso2: 'qa', country: 'Qatar' },
    { code: '+242',  iso2: 'cg', country: 'Republic of Congo' },
    { code: '+40',   iso2: 'ro', country: 'Romania' },
    { code: '+7',    iso2: 'ru', country: 'Russia' },
    { code: '+250',  iso2: 'rw', country: 'Rwanda' },
    { code: '+1869', iso2: 'kn', country: 'Saint Kitts & Nevis' },
    { code: '+1758', iso2: 'lc', country: 'Saint Lucia' },
    { code: '+1784', iso2: 'vc', country: 'Saint Vincent' },
    { code: '+685',  iso2: 'ws', country: 'Samoa' },
    { code: '+966',  iso2: 'sa', country: 'Saudi Arabia' },
    { code: '+221',  iso2: 'sn', country: 'Senegal' },
    { code: '+381',  iso2: 'rs', country: 'Serbia' },
    { code: '+248',  iso2: 'sc', country: 'Seychelles' },
    { code: '+232',  iso2: 'sl', country: 'Sierra Leone' },
    { code: '+65',   iso2: 'sg', country: 'Singapore' },
    { code: '+421',  iso2: 'sk', country: 'Slovakia' },
    { code: '+386',  iso2: 'si', country: 'Slovenia' },
    { code: '+677',  iso2: 'sb', country: 'Solomon Islands' },
    { code: '+252',  iso2: 'so', country: 'Somalia' },
    { code: '+27',   iso2: 'za', country: 'South Africa' },
    { code: '+82',   iso2: 'kr', country: 'South Korea' },
    { code: '+211',  iso2: 'ss', country: 'South Sudan' },
    { code: '+34',   iso2: 'es', country: 'Spain' },
    { code: '+94',   iso2: 'lk', country: 'Sri Lanka' },
    { code: '+249',  iso2: 'sd', country: 'Sudan' },
    { code: '+597',  iso2: 'sr', country: 'Suriname' },
    { code: '+268',  iso2: 'sz', country: 'Eswatini' },
    { code: '+46',   iso2: 'se', country: 'Sweden' },
    { code: '+41',   iso2: 'ch', country: 'Switzerland' },
    { code: '+963',  iso2: 'sy', country: 'Syria' },
    { code: '+886',  iso2: 'tw', country: 'Taiwan' },
    { code: '+992',  iso2: 'tj', country: 'Tajikistan' },
    { code: '+255',  iso2: 'tz', country: 'Tanzania' },
    { code: '+66',   iso2: 'th', country: 'Thailand' },
    { code: '+228',  iso2: 'tg', country: 'Togo' },
    { code: '+676',  iso2: 'to', country: 'Tonga' },
    { code: '+1868', iso2: 'tt', country: 'Trinidad & Tobago' },
    { code: '+216',  iso2: 'tn', country: 'Tunisia' },
    { code: '+90',   iso2: 'tr', country: 'Turkey' },
    { code: '+993',  iso2: 'tm', country: 'Turkmenistan' },
    { code: '+688',  iso2: 'tv', country: 'Tuvalu' },
    { code: '+256',  iso2: 'ug', country: 'Uganda' },
    { code: '+380',  iso2: 'ua', country: 'Ukraine' },
    { code: '+971',  iso2: 'ae', country: 'United Arab Emirates' },
    { code: '+44',   iso2: 'gb', country: 'United Kingdom' },
    { code: '+1',    iso2: 'us', country: 'United States' },
    { code: '+598',  iso2: 'uy', country: 'Uruguay' },
    { code: '+998',  iso2: 'uz', country: 'Uzbekistan' },
    { code: '+678',  iso2: 'vu', country: 'Vanuatu' },
    { code: '+379',  iso2: 'va', country: 'Vatican City' },
    { code: '+58',   iso2: 've', country: 'Venezuela' },
    { code: '+84',   iso2: 'vn', country: 'Vietnam' },
    { code: '+967',  iso2: 'ye', country: 'Yemen' },
    { code: '+260',  iso2: 'zm', country: 'Zambia' },
    { code: '+263',  iso2: 'zw', country: 'Zimbabwe' },
  ];

  const filtered = searchQuery.trim() === ''
    ? countryCodes
    : countryCodes.filter(c =>
        c.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.code.includes(searchQuery)
      );

  const selected = countryCodes.find(c => c.code === formData.countryCode && c.iso2 === formData.countryIso)
    || countryCodes.find(c => c.code === '+91');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handlePhoneChange = (e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') });

  const handleSelect = (c) => {
    setFormData({ ...formData, countryCode: c.code, countryIso: c.iso2 });
    setShowDropdown(false);
    setSearchQuery('');
  };

  const toggleDropdown = () => {
    setShowDropdown(p => !p);
    if (showDropdown) setSearchQuery('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'officeflyintake@gmail.com',
          from: formData.email,
          subject: `Contact Form: ${formData.subject}`,
          message: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.countryCode} ${formData.phone}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
        }),
      });
      if (res.ok) {
        setFormData({ name: '', email: '', countryCode: '+91', countryIso: 'in', phone: '', subject: '', message: '' });
      }
      alert('Thank you for contacting us! We will get back to you within 24 hours.');
    } catch {
      alert('Message sent! We will contact you soon.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    { icon: Mail,   title: "Email Us",   subtitle: "Quick Response",        detail: "officeflyintake@gmail.com", link: "mailto:officeflyintake@gmail.com", description: "Get expert advice via email",         color: "" },
    { icon: Phone,  title: "Call Us",    subtitle: "Direct Support",        detail: "+91 9121767948",            link: "tel:+919121767948",                            color: "orange" },
    { icon: MapPin, title: "Visit Us",    detail: "Balanagar, Hyderabad, India",          link: null,                                           color: "" }
  ];

  const whyChooseUs = [
    { icon: Users,          title: "Personalized Guidance", description: "One-on-one counseling tailored to your academic goals and career aspirations" },
    { icon: Globe,          title: "Global Reach",          description: "Access to top universities worldwide with comprehensive application support" },
    { icon: HeartHandshake, title: "Dedicated Support",     description: "From initial consultation to successful enrollment - we're with you every step" },
    { icon: Briefcase,      title: "Career Focused",        description: "Helping you choose programs that align with your professional objectives" }
  ];

  const services = [
    "University Selection & Application",
    "Scholarship & Financial Aid Guidance",
    "Visa Documentation & Processing",
    "Test Preparation (IELTS, TOEFL, GRE)",
    "Pre-Departure Orientation",
    "Post-Landing Support Services"
  ];

  return (
    <div className="fi-page">

      {/* ── HERO ── */}
      <section className="fi-hero">
        <div className="fi-hero__pattern"></div>
        <div className="fi-hero__overlay"></div>
        <div className="fi-container">
          <div className="fi-hero__inner">
            <div className="fi-hero__badge">
              <span className="fi-hero__line"></span>
              <span>CONTACT FLYINTAKE</span>
              <span className="fi-hero__line"></span>
            </div>
            <h1 className="fi-hero__title">
              Your Journey to
              <span className="fi-hero__accent"> Global Education</span>
              <br />Starts Here
            </h1>
            <p className="fi-hero__sub">
              Connect with our expert education consultants and take the first step
              towards your international academic dreams.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT METHODS ── */}
      <section className="fi-methods">
        <div className="fi-container">
          <div className="fi-methods__grid">
            {contactMethods.map((m, i) => {
              const Icon = m.icon;
              return (
                <div key={i} className={`fi-method-card${m.color ? ` fi-method-card--${m.color}` : ''}`}>
                  <div className="fi-method-card__body">
                    <div className="fi-method-card__icon"><Icon size={32} strokeWidth={1.5} /></div>
                    <div className="fi-method-card__content">
                      <span className="fi-method-card__tag">{m.subtitle}</span>
                      <h3 className="fi-method-card__name">{m.title}</h3>
                      {m.link
                        ? <a href={m.link} className="fi-method-card__link">{m.detail}</a>
                        : <div className="fi-method-card__text">{m.detail}</div>}
                      <p className="fi-method-card__desc">{m.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="fi-why">
        <div className="fi-why__bg"></div>
        <div className="fi-container">
          <div className="fi-why__head">
            <h2 className="fi-why__heading">Why Choose <span>FLYINTAKE?</span></h2>
            <p className="fi-why__sub">Your trusted partner in international education</p>
          </div>
          <div className="fi-why__grid">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="fi-why-card">
                  <div className="fi-why-card__icon"><Icon size={28} strokeWidth={1.5} /></div>
                  <h3 className="fi-why-card__title">{item.title}</h3>
                  <p className="fi-why-card__desc">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FORM SECTION ── */}
      <section className="fi-form-section">
        <div className="fi-container">
          <div className="fi-form-section__head">
            <h2 className="fi-form-section__title">
              Let's Discuss Your <span>Educational Goals</span>
            </h2>
            <p className="fi-form-section__sub">
              Fill out the form below and our expert counselors will respond within 24 hours
            </p>
          </div>

          <div className="fi-form-layout">
            {/* ── FORM ── */}
            <div className="fi-form-card">
              <form onSubmit={handleSubmit} className="fi-form">

                <div className="fi-form__row">
                  {/* Name */}
                  <div className="fi-form__group">
                    <label htmlFor="fi-name" className="fi-form__label">
                      Full Name <span className="fi-form__required">*</span>
                    </label>
                    <div className="fi-input-wrap">
                      <User size={18} className="fi-input-wrap__icon" />
                      <input
                        type="text" id="fi-name" name="name"
                        value={formData.name} onChange={handleChange}
                        className="fi-input" placeholder="Enter your full name" required
                      />
                    </div>
                  </div>
                  {/* Email */}
                  <div className="fi-form__group">
                    <label htmlFor="fi-email" className="fi-form__label">
                      Email Address <span className="fi-form__required">*</span>
                    </label>
                    <div className="fi-input-wrap">
                      <Mail size={18} className="fi-input-wrap__icon" />
                      <input
                        type="email" id="fi-email" name="email"
                        value={formData.email} onChange={handleChange}
                        className="fi-input" placeholder="your.email@example.com" required
                      />
                    </div>
                  </div>
                </div>

                <div className="fi-form__row">
                  {/* Phone */}
                  <div className="fi-form__group">
                    <label className="fi-form__label">Phone Number</label>
                    <div className="fly-phone__row">

                      {/* FLAG PICKER */}
                      <div className="fly-phone__picker" ref={pickerRef}>
                        <button
                          type="button"
                          className={`fly-phone__trigger${showDropdown ? ' fly-phone__trigger--open' : ''}`}
                          onClick={toggleDropdown}
                          aria-label="Select country code"
                        >
                          <span className={`fi fi-${selected.iso2} fly-flag-img`}></span>
                          <span className="fly-phone__dial">{selected.code}</span>
                          <svg className="fly-phone__chevron" width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>

                        {showDropdown && (
                          <div className="fly-phone__dropdown-wrap">
                            {/* Search */}
                            <div className="fly-phone__search-bar">
                              <svg className="fly-phone__search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                              </svg>
                              <input
                                ref={searchRef}
                                type="text"
                                className="fly-phone__search-input"
                                placeholder="Search country or code..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                              />
                              {searchQuery && (
                                <button
                                  type="button"
                                  className="fly-phone__search-clear"
                                  onClick={() => setSearchQuery('')}
                                  aria-label="Clear search"
                                >×</button>
                              )}
                            </div>

                            {/* List */}
                            <ul className="fly-phone__list" role="listbox">
                              {filtered.length === 0 ? (
                                <li className="fly-phone__no-result">No countries found</li>
                              ) : (
                                filtered.map((c, i) => (
                                  <li key={i} role="option" aria-selected={c.iso2 === selected.iso2}>
                                    <button
                                      type="button"
                                      className={`fly-phone__option${c.iso2 === selected.iso2 ? ' fly-phone__option--selected' : ''}`}
                                      onClick={() => handleSelect(c)}
                                    >
                                      <span className={`fi fi-${c.iso2} fly-flag-img`}></span>
                                      <span className="fly-phone__opt-name">{c.country}</span>
                                      <span className="fly-phone__opt-code">{c.code}</span>
                                    </button>
                                  </li>
                                ))
                              )}
                            </ul>
                          </div>
                        )}
                      </div>
                      {/* /FLAG PICKER */}

                      {/* Number */}
                      <div className="fi-input-wrap fly-phone__number-wrap">
                        <Phone size={18} className="fi-input-wrap__icon" />
                        <input
                          type="tel" id="fi-phone" name="phone"
                          value={formData.phone} onChange={handlePhoneChange}
                          className="fi-input" placeholder="XXXXX XXXXX" inputMode="numeric"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="fi-form__group">
                    <label htmlFor="fi-subject" className="fi-form__label">
                      Service Required <span className="fi-form__required">*</span>
                    </label>
                    <div className="fi-input-wrap">
                      <MessageCircle size={18} className="fi-input-wrap__icon" />
                      <select
                        id="fi-subject" name="subject"
                        value={formData.subject} onChange={handleChange}
                        className="fi-input fi-select" required
                      >
                        <option value="">Select a service</option>
                        <option value="general">General Inquiry</option>
                        <option value="admission">University Admission</option>
                        <option value="visa">Visa Consultation</option>
                        <option value="counseling">Career Counseling</option>
                        <option value="scholarship">Scholarship Guidance</option>
                        <option value="test-prep">Test Preparation</option>
                        <option value="other">Other Services</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="fi-form__group fi-form__group--full">
                  <label htmlFor="fi-message" className="fi-form__label">
                    Your Message <span className="fi-form__required">*</span>
                  </label>
                  <textarea
                    id="fi-message" name="message"
                    value={formData.message} onChange={handleChange}
                    className="fi-textarea"
                    placeholder="Tell us about your educational background, goals, and how we can assist you..."
                    rows="6" required
                  ></textarea>
                </div>

                <button type="submit" className="fi-submit-btn" disabled={isSubmitting}>
                  {isSubmitting
                    ? <><span className="fi-submit-btn__spinner"></span>Sending...</>
                    : <><Send size={20} />Send Message</>}
                </button>

                <p className="fi-form__privacy">
                  <Shield size={14} />
                  Your information is secure and will be used only for consultation purposes
                </p>
              </form>
            </div>

            {/* ── SIDEBAR ── */}
            <div className="fi-sidebar">
              {/* Services */}
              <div className="fi-sidebar-card">
                <div className="fi-sidebar-card__head">
                  <h3 className="fi-sidebar-card__title">Our Services</h3>
                  <p className="fi-sidebar-card__sub">Comprehensive support for your study abroad journey</p>
                </div>
                <ul className="fi-services-list">
                  {services.map((s, i) => (
                    <li key={i} className="fi-services-list__item">
                      <div className="fi-services-list__check"><CheckCircle size={16} /></div>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Urgent */}
              <div className="fi-sidebar-card fi-urgent-card">
                <div className="fi-urgent-card__icon"><Phone size={32} strokeWidth={1.5} /></div>
                <h3 className="fi-urgent-card__title">Need Immediate Help?</h3>
                <p className="fi-urgent-card__text">Speak directly with our counselors for urgent queries</p>
                <a href="tel:+919121767948" className="fi-urgent-card__btn">
                  <Phone size={20} />+91 9121767948
                </a>
                
              </div>

              {/* Promo */}
              <div className="fi-sidebar-card fi-promo-card">
                <div className="fi-promo-card__badge">FREE</div>
                <h3 className="fi-promo-card__title">Initial Consultation</h3>
                <p className="fi-promo-card__desc">
                  Book a complimentary 30-minute session with our expert counselors
                </p>
                <Link to="/pages/white-link/Avail" className="fi-promo-card__btn">Book Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="fi-map">
        <div className="fi-map__header">
          <div className="fi-container">
            <h2 className="fi-map__title">Visit Our Office</h2>
            <p className="fi-map__sub">
              <MapPin size={20} />Located in Hyderabad, India - Serving students globally
            </p>
          </div>
        </div>
        <iframe
          className="fi-map__embed"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160118309!2d78.24323190976914!3d17.412608636550996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
          allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="FLYINTAKE Office - Hyderabad"
        ></iframe>
      </section>

      <div className="fi-footer-bar"></div>
    </div>
  );
} 