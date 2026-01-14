import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StudyAbroadHero.css';

const StudyAbroadHero = ({ title, subtitle, imageUrl, imageAlt }) => {
    const [animate, setAnimate] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Set animate to false on prop change to re-trigger animation
        setAnimate(false);
        const timer = setTimeout(() => setAnimate(true), 100); // slight delay for animation trigger
        return () => clearTimeout(timer);
    }, [title]); // Re-trigger when title changes

    return (
        <div className='stdab'>
            <div className={`stdab-left${animate ? ' slide-in-left' : ''}`}>
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
               <button
      className="stdy-btn"
      onClick={() => navigate("/contact")} // Must match the route path
    >
      Contact INTAKE
    </button>
            </div>
            <div className={`stdab-right${animate ? ' slide-in-right' : ''}`}>
                <img src={imageUrl} alt={imageAlt} className="stdab-img" />
            </div>
        </div>
    );
};

export default StudyAbroadHero;