import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./EventRegistration.css";

const EventRegistration = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const eventFromQuery = params.get("event") || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    event: eventFromQuery,
    comments: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);

    alert("Thank you for registering! We will contact you soon.");

    // reset
    setForm({
      name: "",
      email: "",
      phone: "",
      event: eventFromQuery,
      comments: "",
    });
  };

  return (
    <div className="reg-container">
      <h1 className="reg-title">Event Registration</h1>
      <p className="reg-subtitle">
        Please fill in your details to register for the event.
      </p>

      <form className="reg-form" onSubmit={handleSubmit}>
        <label>
          Full Name
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone Number
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Event
          <input
            type="text"
            name="event"
            value={form.event}
            onChange={handleChange}
            placeholder="Event name"
            required
          />
        </label>

        <label>
          Comments (optional)
          <textarea
            name="comments"
            placeholder="Any questions or preferences?"
            value={form.comments}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className="reg-submit-btn">
          Submit Registration
        </button>
      </form>
    </div>
  );
};

export default EventRegistration;
