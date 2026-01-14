import React, { useState } from "react";
import "./Contact.css";
import contactImg from "/public/assets/prep1.jpg";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    destination: "",
    startTime: "",
    office: "",
    counsellingMode: "",
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setMessage("✅ Counselling request submitted successfully!");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        destination: "",
        startTime: "",
        office: "",
        counsellingMode: "",
        studyLevel: "",
        funding: "",
        agreeTerms: false,
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
        {/* LEFT SIDE */}
        <div className="contact-left">
          <div className="contact-header">
            <h1>
              <span className="g-accent">G</span>et FREE Counselling Today!
            </h1>
            <p className="contact-subtitle">
              Enter your details and our expert will reach out to you to discuss
              your plans. By the way, all our services are free!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            {/* FIRST + LAST NAME */}
            <div className="form-row">
              <div className="form-field">
                <label>First name*</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-field">
                <label>Last name*</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className="form-row">
              <div className="form-field full-width">
                <label>Email address*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* MOBILE */}
            <div className="form-row">
              <div className="form-field full-width">
                <label>Mobile number*</label>
                <div className="mobile-group">
                  <input
                    type="text"
                    className="country-code"
                    value="+91"
                    readOnly
                  />
                  <input
                    type="tel"
                    name="mobile"
                    className="mobile-number"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            {/* DESTINATION + START TIME */}
            <div className="form-row">
              <div className="form-field">
                <label>Your preferred study destination*</label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="usa">United States</option>
                  <option value="newzealand">New Zealand</option>
                  <option value="ireland">Ireland</option>
                </select>
              </div>
              <div className="form-field">
                <label>When would you like to start?*</label>
                <select
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                </select>
              </div>
            </div>

            {/* OFFICE + MODE */}
            <div className="form-row">
              <div className="form-field">
                <label>Nearest INTAKE Office*</label>
                <select
                  name="office"
                  value={formData.office}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="delhi">Delhi</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="chennai">Chennai</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="pune">Pune</option>
                </select>
              </div>
              <div className="form-field">
                <label>Preferred mode of counselling*</label>
                <select
                  name="counsellingMode"
                  value={formData.counsellingMode}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="online">Online</option>
                  <option value="in-person">In-person</option>
                </select>
              </div>
            </div>

            {/* STUDY LEVEL + FUNDING */}
            <div className="form-row">
              <div className="form-field">
                <label>Preferred study level*</label>
                <select
                  name="studyLevel"
                  value={formData.studyLevel}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="bachelor">Bachelor&apos;s</option>
                  <option value="master">Master&apos;s</option>
                  <option value="phd">PhD</option>
                  <option value="diploma">Diploma</option>
                </select>
              </div>
              <div className="form-field">
                <label>How would you fund your education?*</label>
                <select
                  name="funding"
                  value={formData.funding}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="self-funded">Self-funded</option>
                  <option value="scholarship">Scholarship</option>
                  <option value="education-loan">Education Loan</option>
                  <option value="family-support">Family Support</option>
                </select>
              </div>
            </div>

            {/* TERMS */}
            <div className="form-checkbox">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  required
                />
                I agree to Jramsys
                <br />
                <span className="terms-text">Terms & Privacy Policy</span>
              </label>
            </div>


            {message && (
              <p
                className={`message ${message.startsWith("✅") ? "success" : "error"
                  }`}
              >
                {message}
              </p>
            )}

            <button
              type="submit"
              className="submit-button"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Avail FREE Counselling"}
            </button>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <div className="image-container">
            <div className="background-shapes">
              <div className="shape-green"></div>
              <div className="shape-orange"></div>
              <div className="shape-blue"></div>
            </div>
            <img
              src={contactImg}
              alt="Contact Representative"
              className="contact-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
