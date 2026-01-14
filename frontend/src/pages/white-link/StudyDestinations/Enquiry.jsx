import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Enquiry.css';

const Enquiry = () => {
  const { country } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: country || 'Australia',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form data submitted:', formData);
    alert(`Thank you for your enquiry, ${formData.name}! We will be in touch shortly about studying in ${formData.country}.`);
    navigate('/'); // Redirect to homepage after submission
  };

  return (
    <div className="enquiry-container">
      <div className="enquiry-form">
        <h1>Study Abroad Enquiry</h1>
        <p>Fill out the form below and one of our expert counsellors will be in touch with you shortly.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country of Interest</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
            >
              <option value="Australia">Australia</option>
              <option value="Canada">Canada</option>
              <option value="Ireland">Ireland</option>
              <option value="UK">UK</option>
              <option value="USA">USA</option>
              <option value="New Zealand">New Zealand</option>
            </select>
          </div>
          <button type="submit" className="submit-btn">Submit Enquiry</button>
        </form>
      </div>
    </div>
  );
};

export default Enquiry;
