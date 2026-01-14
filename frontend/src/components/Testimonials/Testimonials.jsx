import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    quote: "My experience with INTAKE was really great! The guidance provided by Ms. Sujata Thaman really helped me through the application process to various universities in Canada as well as my VISA application!.",
    details: "The staff were really easy to contact and responded very quickly to any problem I had with their experience and knowledge. I would definitely recommend and would be able to study at University of Waterloo in Canada",
    student: "INTAKE Student India, Aashay Singh",
    role: "Student",
    colorClass: "green-quote"
  },
  {
    quote: "The guidance from the INTAKE was more than helpful. I wouldn’t have successfully completed my application process without their kind service.",
    details:"It is 100% safe and secure to connect with them for any needs for anyone’s abroad dream. Thank you to INTAKE Education - Study Abroad Consultants in Kochi for your help in making my goal success!",
    student: "INTAKE Student India, Amin Abdul Lathaf",
    role: "Student",
    colorClass: "blue-quote"
  },
  {
     quote:"INTAKE is Best! They turned my dream of studying abroad into a reality.",
    details: "From selecting the right university to guiding me through the VISA process, support was exceptional. I felt confident and well-prepared at every step. I’m truly grateful for their expert guidance and genuine care.",
    student: "INTAKE Student India, Nakin Barhana",
    role: "Student",
    colorClass: "orange-quote"
  }
];

const Testimonials = () => (
  <section className="testimonials-section">
    <h2>
      <span className="underline-green">W</span>hy students trust INTAKE
    </h2>
    <p className="subtitle">
      Hear from students who chose and trusted INTAKE to guide their study abroad journey.
    </p>
    <div className="testimonials-row">
      {testimonials.map((item, idx) => (
        <div
          className={`testimonial-card ${item.colorClass} ${item.colorClass}-bg white-text`}
          key={idx}
        >
          <span className="color-marker">
            <span className="marker-quote"></span>
          </span>

          <p className="quote">{item.quote}</p>
          <p className="details">{item.details}</p>
          <div className="student-area">
            <span className="student">{item.student}</span>
            <span className="role">{item.role}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
