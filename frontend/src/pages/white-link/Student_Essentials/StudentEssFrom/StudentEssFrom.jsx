import React, { useState } from "react";
const contactImg1 = "/assets/form-banner3.webp";
import axios from "axios";
import './StudentEssForm.css'
export default function StudentEssFrom() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    destination: "",
    startTime: "",
    office: "",
    studyLevel: "",
    funding: "",
    agreeToTerms: false,
    agreeToContact: false,
    agreeToUpdates: false,
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      setStatusMessage("You must agree to the Terms and Conditions and Privacy Policy.");
      return;
    }

    setIsSubmitting(true);
    setStatusMessage("Submitting...");

    try {
      const response = await axios.post( // Use relative path to leverage Vite proxy
        "/api/students/student-essentials",
        formData
      );

      setStatusMessage("Thank you! Your form has been submitted successfully.");
      console.log("Server response:", response.data);
      // Reset form on success
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        destination: "",
        startTime: "",
        office: "",
        studyLevel: "",
        funding: "",
        agreeToTerms: false,
        agreeToContact: false,
        agreeToUpdates: false,
      });
    } catch (error) {
      setStatusMessage("An error occurred. Please try again later.");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact1-page">
      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <div className="contact-header">
            <h1>
              <span className="g-accent">G</span>et support with your student essentials
            </h1>
            <p className="contact-subtitle">
              Tell us what you need, and we’ll help you get it sorted
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
                <label>Nearest Jaramsys Office*</label>
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
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                required
              />
            <label htmlFor="agreeToTerms" className="checkbox-label">
  I agree to Jaramsys {" "}
  <a
    href="/terms-of-use"
    target="_blank"
    rel="noopener noreferrer"
    className="link"
  >
    Terms and Conditions
  </a>{" "}
  and{" "}
  <a
    href="/privacy-policy"
    target="_blank"
    rel="noopener noreferrer"
    className="link"
  >
    Privacy Policy
  </a>
  *
</label>
 
            </div>
            <div className="form-checkbox">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agreeToContact"
                  checked={formData.agreeToContact}
                  onChange={handleInputChange}
                />
                Please contact me by phone, email or SMS to assist with my enquiry
              </label>
            </div>
            <div className="form-checkbox">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="agreeToUpdates"
                  checked={formData.agreeToUpdates}
                  onChange={handleInputChange}
                />
                I would like to receive updates and offers from Jaramsys

              </label>
            </div>

            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? "Enquiring..." : "Enquire now"}
            </button>

            {statusMessage && <p className="status-message">{statusMessage}</p>}
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
              src={contactImg1}
              alt="Contact Representative"
              className="contact-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
