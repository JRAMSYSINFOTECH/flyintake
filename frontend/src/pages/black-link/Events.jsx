import React from "react";
import "./Event.css";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const events = [
    {
      title: "Study Abroad Seminar",
      date: "October 10, 2025",
      location: "Main Auditorium",
      description:
        "Learn about study destinations, scholarships, and application tips."
    },
    {
      title: "English Language Workshop",
      date: "November 5, 2025",
      location: "Room 204",
      description:
        "Improve your English skills with expert trainers."
    },
    {
      title: "Career Guidance Fair",
      date: "December 2, 2025",
      location: "Conference Hall",
      description:
        "Meet career counselors and explore job opportunities."
    }
  ];
  const navigate = useNavigate();

  return (
    <div className="events-container">
      <h1 className="events-title">Upcoming Events</h1>
      <p className="events-intro">
        Stay updated with our latest events, workshops, and seminars designed to
        help you succeed in your academic and professional journey.
      </p>

      <h2 className="events-subtitle">Featured Events</h2>
      <div className="event-list">
        {events.map((event, index) => (
          <div className="event-card" key={event.title}>
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p className="event-desc">{event.description}</p>
            <button
              className="register-btn"
              onClick={() => navigate(`/pages/Events/Register`)}
            >
              Register Now
            </button>
          </div>
        ))}
      </div>

      <p className="events-footer">
        For more details and registration, please contact our support team or
        visit the events section regularly.
      </p>
    </div>
  );
};

export default Events;
