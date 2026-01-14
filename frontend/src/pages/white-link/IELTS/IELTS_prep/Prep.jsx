// Import React to build the component and the CSS file for styling.
import React from "react";
import { Link } from "react-router-dom";
import "./Prep.css";

// This is the main component for the IELTS Preparation page.
export default function Prep() {
    return (
        // Main container for the entire page.
        <div>
        {/* This section is the main banner of the page. */}
        <div className="prep">
           {/* Breadcrumb navigation link. */}
           <Link to="/"><p className="p1"> INTAKE/Prepare for IELTS</p></Link>
           <br />
           <br />
            {/* Main heading and introductory text. */}
            <h1 className="h1">Prepare for IELTS</h1>
            <p className="p2">INTAKE provides a comprehensive set of resources to facilitate your IELTS preparation, ensuring a smooth journey towards success.</p>

        </div>
        {/* This section contains the detailed content about IELTS preparation. */}
        <div className="prep1">
            <p className="p3">We proudly co-own the IELTS test, delivering it through our extensive network of test centers. Preparing for the English language test is neither difficult nor expensive with IELTS. We offer an array of low-cost and free preparation materials to aid your test study. With IELTS, you can access a broader range of official preparation resources, setting us apart from other English language test providers.</p>
            {/* A subheading with a decorative underline. */}
            <h2><span className="ul">S</span>upport tools for IELTS</h2>
            <p className="line">If you're preparing for the IELTS test, explore our free IELTS preparation pack. This pack contains:</p>
            {/* An unordered list of preparation materials. */}
            <ul className="list">
                <li>Free Self assessment tool to check English level</li>
                <li>70+ IELTS Practice Tests</li>
                <li>Free IELTS Masterclass</li>
                <li>Familiarisation test for IELTS on Computer</li>
                <li>IELTS Preparation Guide</li>
                <li>Section-Wise IELTS test preparation</li>
                <li>A free IELTS mock test by Cambridge.</li>
            </ul>
            {/* Another content section about preparation classes. */}
            <h2><span className="ul">IE</span>LTS preparation classes</h2>
            <p className="line1">Level up your IELTS exam preparation with free and paid online courses covering a wide range of topics.
<br/>1. Cambridge Prep Programme
<br/>2. Macquarie's 15-day online course</p>
            {/* Content section about official books. */}
            <h2><span className="ul">O</span>fficial preparation books</h2>
            <p className="line1">IELTS offers official practice materials to familiarize you with question types and the test format. Two volumes are available, each containing samples of Reading, Listening, Writing, and Speaking modules with answers and examiner’s comments. Volume 1's CD includes Listening test samples, while Volume 2's DVD showcases candidates taking the Speaking test.</p>
            {/* Content section about the community. */}
            <h2><span className="ul">P</span>articipate in our community</h2>
            <p className="line1">Connect with us on Facebook for daily updates, advice, and insights on test format and tips. You'll also engage with fellow test takers and get answers to common questions like preparation material sources and language preferences.Stay Supported: While preparing for the IELTS test might seem challenging, with effective strategies, expert advice, and consistent practice, you can gain confidence in all four skills. Embrace the challenge, stay focused, and best of luck on your IELTS journey!</p>


        </div>
        </div>


        );
        }