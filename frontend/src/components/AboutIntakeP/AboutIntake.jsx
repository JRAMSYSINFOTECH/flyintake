
import React from "react";
import "./AboutIntake.css";

// Reusable Card component
const Card = ({ title, content }) => (
    <article className="about-intake-card">
        <h4>{title}</h4>
        {Array.isArray(content) ? (
            <ul className="about-intake-list">
                {content.map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ul>
        ) : (
            <p>{content}</p>
        )}
    </article>
);

const AboutIntake = () => {
    const cardData = [
        {
            title: "Why Students Trust INTAKE",
            content: [
                "<strong>Highest Visa Success Rate:</strong> Our deep expertise in student visas improves your chances of approval.",
                "<strong>Free Services:</strong> We provide all our services at no cost to you.",
                "<strong>Global Presence:</strong> With 200+ offices in 30+ countries, we’re always nearby.",
                "<strong>University Partnerships:</strong> We have strong relationships with 800+ top universities worldwide.",
                "<strong>Personalized Support:</strong> One-on-one guidance tailored to your needs.",
                "<strong>Experienced Counsellors:</strong> Our experts have helped 600,000+ students globally."
            ]
        },
        {
            title: "INTAKE Services – We Handle It All",
            content: [
                "<strong>Application Support:</strong> Complete guidance through the entire process.",
                "<strong>Document Preparation:</strong> Help with gathering and organizing documents.",
                "<strong>Interview Coaching:</strong> Mock interviews and preparation tips.",
                "<strong>Visa Guidance:</strong> Visa information and application assistance.",
                "<strong>Pre-departure Briefings:</strong> Preparation for life abroad.",
                "<strong>Post-arrival Support:</strong> Assistance to settle into your new environment.",
                "<strong>Language Training:</strong> IELTS and language course support."
            ]
        },
        {
            title: "Study in Australia – High Salaries & Great Work Opportunities",
            content: "Australia is home to 9 of the world’s top 100 universities. 88% of international graduates land jobs within four months of finishing their degree. Average graduate salary: AUD 65,000."
        }
    ];

    return (
        <section className="about-intake-section" aria-labelledby="about-intake-heading">
            <div className="about-intake-container">
                {/* Section Header */}
                <header className="about-intake-header">
                    <h1 id="about-intake-heading">
                        <span className="about-intake-color">I</span>NTAKE – Your study abroad partner every step of the way
                    </h1>
                    <p className="about-intake-lead">
                        Finding the right university, securing funding, and navigating visa
                        requirements can feel like a lot to handle — but what if you had an
                        intake study abroad consultant to take care of it with you? That’s where
                        intake steps in. With 55+ years of experience, we’ve helped 113,000+
                        students in 2023 alone get into top universities across the world.
                        From choosing the right universities and courses to securing funding,
                        getting your visa, and settling in — we handle everything, so you can
                        focus on your future. With intake, you don’t have to worry about a thing.
                        Let’s make your study abroad journey smooth, stress-free, and
                        successful.
                    </p>
                </header>

                {/* Content Grid */}
                <div className="about-intake-grid">
                    {cardData.map((card, index) => (
                        <Card key={index} title={card.title} content={card.content} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutIntake;

