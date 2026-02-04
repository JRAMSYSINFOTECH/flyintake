import React from "react";
import "./AfterOfferCnt.css";

function AfterOfferCnt() {
    return (
        <div className="aoc-wrapper">
            <div className="aoc-container">
                
                {/* Header Section */}
                <div className="aoc-header">
                    <h2>What to do after receiving an offer letter?</h2>
                    <p className="aoc-intro">
                        Once you receive an offer letter from a university, the next steps are crucial for a smooth transition to studying abroad. Here's a guide to help you navigate the process.
                    </p>
                </div>

                {/* Steps Section */}
                <div className="aoc-steps">
                    
                    {/* Step 1 */}
                    <div className="aoc-step">
                        <div className="aoc-step-number">1</div>
                        <div className="aoc-step-content">
                            <h3>Review and Accept Your Offer</h3>
                            <p>
                                Carefully read your offer letter. It will contain important details about your course, tuition fees, start date, and any conditions you need to meet. If you're happy with the offer, follow the instructions to formally accept it. This usually involves signing an acceptance form and paying a deposit.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="aoc-step">
                        <div className="aoc-step-number">2</div>
                        <div className="aoc-step-content">
                            <h3>Pay Your Tuition Fees</h3>
                            <p>
                                The offer letter will specify the amount and deadline for your tuition fee deposit. Ensure you make the payment on time to secure your place. INTAKE can assist you with secure and fast international money transfers.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="aoc-step">
                        <div className="aoc-step-number">3</div>
                        <div className="aoc-step-content">
                            <h3>Apply for Your Student Visa</h3>
                            <p>
                                Once you have your Confirmation of Enrolment (CoE) or equivalent document, you can begin your student visa application. This is a critical step, and requirements vary by country. Our counsellors are experts in visa processes and can provide comprehensive assistance to ensure your application is accurate and complete.
                            </p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="aoc-step">
                        <div className="aoc-step-number">4</div>
                        <div className="aoc-step-content">
                            <h3>Arrange Your Accommodation</h3>
                            <p>
                                Start looking for accommodation as soon as you accept your offer. Options can include university dormitories, private rentals, or homestays. We have partnerships with accommodation providers and can help you find a safe and comfortable place to live.
                            </p>
                        </div>
                    </div>

                    {/* Step 5 */}
                    <div className="aoc-step">
                        <div className="aoc-step-number">5</div>
                        <div className="aoc-step-content">
                            <h3>Book Your Flights and Health Insurance</h3>
                            <p>
                                With your visa approved, you can book your flights. It's also mandatory for most countries to have Overseas Student Health Cover (OSHC) or equivalent health insurance for the duration of your stay. We can help you compare and choose the best plan.
                            </p>
                        </div>
                    </div>

                    {/* Step 6 */}
                    <div className="aoc-step">
                        <div className="aoc-step-number">6</div>
                        <div className="aoc-step-content">
                            <h3>Attend a Pre-departure Briefing</h3>
                            <p>
                                INTAKE hosts pre-departure briefings to prepare you for life in your new country. These sessions cover everything from packing and banking to cultural norms and academic expectations. It's a great opportunity to ask questions and connect with other students.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Conclusion Section */}
                <div className="aoc-conclusion">
                    <h3>Conclusion</h3>
                    <p>
                        Receiving an offer is just the beginning of your exciting journey. With careful planning and expert support from INTAKE, you can handle all the post-offer formalities with confidence.
                    </p>
                    <p className="aoc-cta-text">
                        <strong>Contact us today to get help with accepting your offer and preparing for your departure!</strong>
                    </p>
                </div>

            </div>
        </div>
    );
}

export default AfterOfferCnt;