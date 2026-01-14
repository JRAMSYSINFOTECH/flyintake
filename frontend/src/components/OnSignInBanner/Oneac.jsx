import React from "react";
import { Link } from 'react-router-dom';
import "./Oneac.css";

export default function Oneac() {
    return (
        <div className="oneac-container">
            <h1 className="head1">One account for all your study abroad needs</h1>
            <div className="oneac-mat">
                <p className="oneac-para">
                Create your profile and unlock a wide array of features including personalised recommendations, fast-tracked applications and much more.</p>
                {/* Using Link components for navigation */}
                <Link to="/signup" className="oneac-btn">Sign up</Link>
                <Link to="/login" className="oneac-btn1">Sign in</Link>
       </div>     </div>
    );
}