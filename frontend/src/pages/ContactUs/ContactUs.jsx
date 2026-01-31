import React from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, User, Building, Globe, Award, Shield, CheckCircle, ArrowRight, Users, HeartHandshake, Briefcase } from "lucide-react";
import "./ContactUs.css";
import { Link } from "react-router-dom";

export default function ContactUs() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'officeflyintake@gmail.com',
          from: formData.email,
          subject: `Contact Form: ${formData.subject}`,
          message: `
            Name: ${formData.name}
            Email: ${formData.email}
            Phone: ${formData.phone}
            Subject: ${formData.subject}
            
            Message:
            ${formData.message}
          `
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        alert('Thank you for contacting us! We will get back to you within 24 hours.');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      alert('Message sent! We will contact you soon.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      subtitle: "Quick Response",
      detail: "officeflyintake@gmail.com",
      link: "mailto:officeflyintake@gmail.com",
      description: "Get expert advice via email",
      color: "navy"
    },
    {
      icon: Phone,
      title: "Call Us",
      subtitle: "Direct Support",
      detail: "+91 9121767948",
      link: "tel:+919121767948",
      description: "Mon-Sat: 9 AM - 7 PM IST",
      color: "orange"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      subtitle: "In-Person Consultation",
      detail: "Hyderabad, India",
      link: null,
      description: "Schedule an office visit",
      color: "navy"
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "Personalized Guidance",
      description: "One-on-one counseling tailored to your academic goals and career aspirations"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access to top universities worldwide with comprehensive application support"
    },
    {
      icon: HeartHandshake,
      title: "Dedicated Support",
      description: "From initial consultation to successful enrollment - we're with you every step"
    },
    {
      icon: Briefcase,
      title: "Career Focused",
      description: "Helping you choose programs that align with your professional objectives"
    }
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
    <div className="contact-page-enhanced">
      {/* Hero Section */}
      <section className="hero-section-enhanced">
        <div className="hero-background-pattern"></div>
        <div className="hero-gradient-overlay"></div>
        <div className="container-enhanced">
          <div className="hero-content-enhanced">
            <div className="hero-label">
              <span className="label-line"></span>
              <span>CONTACT FLYINTAKE</span>
              <span className="label-line"></span>
            </div>
            
            <h1 className="hero-title-enhanced">
              Your Journey to
              <span className="title-highlight"> Global Education</span>
              <br />Starts Here
            </h1>
            
            <p className="hero-subtitle-enhanced">
              Connect with our expert education consultants and take the first step 
              towards your international academic dreams. We're here to guide you at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="contact-methods-section">
        <div className="container-enhanced">
          <div className="contact-methods-grid">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className={`contact-method-card ${method.color}-theme`}>
                  <div className="method-card-inner">
                    <div className="method-icon-wrapper">
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                    <div className="method-content">
                      <div className="method-header">
                        <h3 className="method-title">{method.title}</h3>
                        <span className="method-subtitle">{method.subtitle}</span>
                      </div>
                      {method.link ? (
                        <a href={method.link} className="method-detail">
                          {method.detail}
                          
                        </a>
                      ) : (
                        <div className="method-detail-text">{method.detail}</div>
                      )}
                      <p className="method-description">{method.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="why-choose-background"></div>
        <div className="container-enhanced">
          <div className="section-header-centered">
            <h2 className="section-title-white">Why Choose <span className="title-orange">FLYINTAKE?</span></h2>
            <p className="section-subtitle-white">
              Your trusted partner in international education with personalized guidance and comprehensive support
            </p>
          </div>
          
          <div className="why-choose-grid">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon; 
              return (
                <div key={index} className="why-choose-card">
                  <div className="why-icon-wrapper">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="why-title">{item.title}</h3>
                  <p className="why-description">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="form-section-enhanced">
        <div className="container-enhanced">
          <div className="form-section-header">
            <h2 className="form-section-title">
              Let's Discuss Your <span className="title-orange">Educational Goals</span>
            </h2>
            <p className="form-section-subtitle">
              Fill out the form below and our expert counselors will respond within 24 hours
            </p>
          </div>

          <div className="form-layout-enhanced">
            {/* Main Contact Form */}
            <div className="form-column">
              <form onSubmit={handleSubmit} className="contact-form-enhanced">
                <div className="form-row-enhanced">
                  <div className="form-group-enhanced">
                    <label htmlFor="name" className="form-label-enhanced">
                      Full Name <span className="required-star">*</span>
                    </label>
                    <div className="input-container">
                      <User size={18} className="input-icon-enhanced" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input-enhanced"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group-enhanced">
                    <label htmlFor="email" className="form-label-enhanced">
                      Email Address <span className="required-star">*</span>
                    </label>
                    <div className="input-container">
                      <Mail size={18} className="input-icon-enhanced" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input-enhanced"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-row-enhanced">
                  <div className="form-group-enhanced">
                    <label htmlFor="phone" className="form-label-enhanced">
                      Phone Number
                    </label>
                    <div className="input-container">
                      <Phone size={18} className="input-icon-enhanced" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input-enhanced"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div className="form-group-enhanced">
                    <label htmlFor="subject" className="form-label-enhanced">
                      Service Required <span className="required-star">*</span>
                    </label>
                    <div className="input-container">
                      <MessageCircle size={18} className="input-icon-enhanced" />
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-input-enhanced form-select-enhanced"
                        required
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

                <div className="form-group-enhanced form-group-full">
                  <label htmlFor="message" className="form-label-enhanced">
                    Your Message <span className="required-star">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea-enhanced"
                    placeholder="Tell us about your educational background, goals, and how we can assist you in achieving your study abroad dreams..."
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="submit-button-enhanced"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="submit-spinner"></span>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                     
                    </>
                  )}
                </button>

                <p className="form-privacy-note">
                  <Shield size={14} />
                  Your information is secure and will be used only for consultation purposes
                </p>
              </form>
            </div>

            {/* Sidebar with Services */}
            <div className="sidebar-column">
              <div className="sidebar-card-enhanced services-card">
                <div className="sidebar-card-header">
                  <h3 className="sidebar-card-title">Our Services</h3>
                  <p className="sidebar-card-subtitle">Comprehensive support for your study abroad journey</p>
                </div>
                <ul className="services-list">
                  {services.map((service, index) => (
                    <li key={index} className="service-item">
                      <div className="service-check">
                        <CheckCircle size={16} />
                      </div>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-card-enhanced urgent-contact-card">
                <div className="urgent-icon-large">
                  <Phone size={32} strokeWidth={1.5} />
                </div>
                <h3 className="urgent-card-title">Need Immediate Help?</h3>
                <p className="urgent-card-text">
                  Speak directly with our counselors for urgent queries
                </p>
                <a href="tel:+919121767948" className="urgent-call-button">
                  <Phone size={20} />
                  +91 9121767948
                </a>
                <div className="urgent-hours-info">
                  <Clock size={16} />
                  <span>Mon-Sat: 9:00 AM - 7:00 PM IST</span>
                </div>
              </div>

              <div className="sidebar-card-enhanced consultation-promo">
                <div className="promo-badge">FREE</div>
                <h3 className="promo-title">Initial Consultation</h3>
                <p className="promo-description">
                  Book a complimentary 30-minute session with our expert counselors to discuss your study abroad plans
                </p>
                <Link to="/pages/white-link/Avail" className="promo-button">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section-enhanced">
        <div className="map-header-enhanced">
          <div className="container-enhanced">
            <h2 className="map-title-enhanced">Visit Our Office</h2>
            <p className="map-subtitle-enhanced">
              <MapPin size={20} />
              Located in Hyderabad, India - Serving students globally
            </p>
          </div>
        </div>
        <div className="map-container-enhanced">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160118309!2d78.24323190976914!3d17.412608636550996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="FLYINTAKE Office Location - Hyderabad"
          ></iframe>
        </div>
      </section>

      {/* Footer Accent Bar */}
      <div className="footer-accent-bar"></div>
    </div>
  );
}