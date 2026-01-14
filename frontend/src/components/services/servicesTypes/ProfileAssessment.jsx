import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileAssessment.css";

const ProfileAssessment = () => {
  const navigate = useNavigate();

  // ================= STATE =================
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    destination: "",
    intake: "",
    studyLevel: "",
    fundingSource: "",
  });

  const [profileStrength, setProfileStrength] = useState(0);
  const [loading, setLoading] = useState(false);

  // ================= HANDLERS =================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updatedData = { ...prev, [name]: value };

      const filledFields = Object.values(updatedData).filter(
        (val) => val !== ""
      ).length;

      const totalFields = Object.keys(updatedData).length;
      setProfileStrength(Math.round((filledFields / totalFields) * 100));

      return updatedData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "http://localhost:5000/api/profile-assessment/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("Profile submitted successfully! Our experts will contact you.");

        setFormData({
          name: "",
          email: "",
          mobile: "",
          destination: "",
          intake: "",
          studyLevel: "",
          fundingSource: "",
        });
        setProfileStrength(0);

        // optional redirect
        // navigate("/thank-you");
      } else {
        alert(data.message || "Submission failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // ================= OPTIONS =================
  const destinations = [
    "Select Destination",
    "Australia",
    "Canada",
    "UK",
    "USA",
    "Germany",
    "Other",
  ];

  const intakes = [
    "Select Intake",
    "Jan 2026",
    "May 2026",
    "Sep 2026",
    "Jan 2027",
    "Other",
  ];

  const studyLevels = [
    "Select Study Level",
    "High School",
    "Undergraduate",
    "Postgraduate",
    "PhD",
    "Vocational",
  ];

  const fundingSources = [
    "Select Funding Source",
    "Self-funded",
    "Education Loan",
    "Scholarship",
    "Family Support",
    "Other",
  ];

  // ================= JSX =================
  return (
    <section className="profile-assessment-page">
      {/* HEADER */}
      <header className="profile-assessment-header">
        <h1>Get Your Personalized Profile Assessment</h1>
        <p>
          Our experts will evaluate your profile and guide you towards the best
          study abroad opportunities.
        </p>
      </header>

      <div className="profile-assessment-content">
        {/* PROFILE STRENGTH */}
        <div className="profile-strength-meter">
          <h2>Your Profile Strength: {profileStrength}%</h2>
          <div className="strength-bar-container">
            <div
              className="strength-bar"
              style={{ width: `${profileStrength}%` }}
            />
          </div>
        </div>

        {/* FORM */}
        <div className="assessment-form-container">
          <h2>Tell Us About Yourself</h2>

          <form onSubmit={handleSubmit} className="profile-assessment-form">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Mobile</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="+91xxxxxxxxxx"
                required
              />
            </div>

            <div className="form-group">
              <label>Preferred Destination</label>
              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                required
              >
                {destinations.map((opt) => (
                  <option key={opt} value={opt === "Select Destination" ? "" : opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Preferred Intake</label>
              <select
                name="intake"
                value={formData.intake}
                onChange={handleChange}
                required
              >
                {intakes.map((opt) => (
                  <option key={opt} value={opt === "Select Intake" ? "" : opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Study Level</label>
              <select
                name="studyLevel"
                value={formData.studyLevel}
                onChange={handleChange}
                required
              >
                {studyLevels.map((opt) => (
                  <option key={opt} value={opt === "Select Study Level" ? "" : opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Funding Source</label>
              <select
                name="fundingSource"
                value={formData.fundingSource}
                onChange={handleChange}
                required
              >
                {fundingSources.map((opt) => (
                  <option key={opt} value={opt === "Select Funding Source" ? "" : opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" disabled={loading} className="submit-assessment-btn">
              {loading ? "Submitting..." : "Get My Free Assessment"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProfileAssessment;
