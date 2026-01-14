import React from 'react';
import './Stdyinukcnt.css';
// Main React Component for the UK Study Guide
const Stdyinukcnt = () => {

    // Helper function for the table structure (Top Universities)
    const renderUniversityTable = () => (
        <table className="uk-table">
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Institution</th>
                    <th>QS Ranking 2025 (Globally)</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>1</td><td>University of Oxford</td><td>3</td></tr>
                <tr><td>2</td><td>University of Cambridge</td><td>5</td></tr>
                <tr><td>3</td><td>Imperial College London</td><td>2</td></tr>
                <tr><td>4</td><td>UCL (University College London)</td><td>9</td></tr>
                <tr><td>5</td><td>The University of Edinburgh</td><td>27</td></tr>
                <tr><td>6</td><td>The University of Manchester</td><td>34</td></tr>
                <tr><td>7</td><td>King's College London</td><td>40</td></tr>
                <tr><td>8</td><td>London School of Economics and Political Science (LSE)</td><td>50</td></tr>
                <tr><td>9</td><td>The University of Warwick</td><td>69</td></tr>
                <tr><td>10</td><td>University of Bristol</td><td>54</td></tr>
            </tbody>
        </table>
    );

    // Helper function for the table structure (Intakes)
    const renderIntakesTable = () => (
        <table className="uk-table">
            <thead>
                <tr>
                    <th>Intakes</th>
                    <th>Duration</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Autumn/Fall intake</td><td>September to October</td></tr>
                <tr><td>Spring intake</td><td>January to February</td></tr>
                <tr><td>Summer intake</td><td>May</td></tr>
            </tbody>
        </table>
    );

    // Helper function for the table structure (Cost to Study)
    const renderCostStudyTable = () => (
        <table className="uk-table">
            <thead>
                <tr>
                    <th>UK Study Program</th>
                    <th>Average fee (in Euros*)</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Undergraduate bachelor’s degree</td><td>GBP 10,000 to GBP 20,000 per year</td></tr>
                <tr><td>Postgraduate master's degree</td><td>GBP 10,000 to GBP 20,000 per year</td></tr>
                <tr><td>Doctoral degree</td><td>GBP 15,000 to GBP 24,000 per year</td></tr>
            </tbody>
        </table>
    );

    // Helper function for the table structure (Scholarships)
    const renderScholarshipTable = () => (
        <table className="uk-table">
            <thead>
                <tr>
                    <th>Name of the UK scholarship</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Chevening Scholarship</td>
                    <td>Supports talented professionals who have shown prior leadership skills and exceptional performance in their respective fields. With Chevening, you can apply for a scholarship or fellowship, the selection of which is done by the high commission and British embassies.</td>
                </tr>
                <tr>
                    <td>Commonwealth Scholarship and Fellowship</td>
                    <td>The commonwealth scholarship aims to give international students from commonwealth countries a chance to pursue postgraduate degrees in the UK. Basically, the scholarship scheme caters to students from commonwealth nations to study in the UK.</td>
                </tr>
                <tr>
                    <td>GREAT Scholarship</td>
                    <td>This scholarship is jointly funded by the UK Government’s GREAT Britain Campaign and the British Council under the Study UK campaign. This program includes 99 postgraduate scholarships from 36 UK universities in a variety of subjects. However, for Indian students, 12 of the UK higher education institutions are offering 13 postgraduate scholarships.</td>
                </tr>
                <tr>
                    <td>Charles Wallace India Trust Scholarships (CWIT)</td>
                    <td>Charles Wallace India trust scholarships (CWIT) is the scholarship fund of Charles Wallace India Trust that provides grants to Indian students currently living in India in the early or middle stages of their career and either working or studying in the heritage conservation, arts, or humanities.</td>
                </tr>
                <tr>
                    <td>Scotland Saltire Scholarships</td>
                    <td>Scotland’s Saltire Scholarships is a scholarship program of the Scottish Government in collaboration with Scottish universities offered in the areas of creative industries, technology, science, medical sciences, healthcare, and renewable and clean energy.</td>
                </tr>
            </tbody>
        </table>
    );

    // Helper function for the table structure (Student Visa)
    const renderVisaTable = () => (
        <table className="uk-table">
            <thead>
                <tr>
                    <th>Visa name</th>
                    <th>Who it’s for</th>
                    <th>When to apply</th>
                    <th>Arrival in the UK</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Student Visa UK</td>
                    <td>Students aged 16 or over who have been offered a place in a course at a UK educational institution</td>
                    <td>Three months before the start of your course</td>
                    <td>Up to one week before if your course lasts six months or fewer. Up to one month before if your course lasts more than six months</td>
                </tr>
            </tbody>
        </table>
    );

    // Helper function for the table structure (Top Student Cities)
    const renderCitiesTable = () => (
        <table className="uk-table">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Rank</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>London</td><td>1</td></tr>
                <tr><td>Edinburgh</td><td>13</td></tr>
                <tr><td>Manchester</td><td>27</td></tr>
                <tr><td>Glasgow</td><td>33</td></tr>
                <tr><td>Newcastle Upon Tyne</td><td>39</td></tr>
                <tr><td>Coventry</td><td>43</td></tr>
            </tbody>
        </table>
    );

    // Helper function for the table structure (Cost of Living)
    const renderCostOfLivingTable = () => (
        <table className="uk-table">
            <thead>
                <tr>
                    <th>Expenses</th>
                    <th>Monthly cost</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Bills (electric/ gas/ water)</td><td>£40 - £50</td></tr>
                <tr><td>Food and housekeeping</td><td>£160 - £200</td></tr>
                <tr><td>TV license (mandatory with TV or watching BBC online)</td><td>£12.56 (or £150.50 per year)</td></tr>
                <tr><td>Mobile phone</td><td>£15 - £50</td></tr>
                <tr><td>Clothes and shoes</td><td>£25</td></tr>
                <tr><td>Leisure and sports (calculated on membership for the students’ sports centre)</td><td>£10 - £20</td></tr>
                <tr><td>Books and stationery</td><td>£21</td></tr>
                <tr><td>Socializing</td><td>£120</td></tr>
                <tr><td>Travel and transport (based on the monthly cost of a student bus pass)</td><td>£32</td></tr>
                <tr><td>Childcare (if needed)</td><td>£656</td></tr>
            </tbody>
        </table>
    );

    return (
        <div className="study-in-uk-guide">
            <header>
                <h1>Discover a world-class education in the UK, a renowned global hub for excellence in education and research.</h1>
            </header>

            <section>
                <h2>Top Reasons to Study in UK: Prestigious Universities and Academic Heritage</h2>
                <p>Steeped in centuries of scholarly tradition, the **United Kingdom hosts some of the world's oldest and most prestigious universities**, dating back to the 12th and 13th centuries. This enduring heritage has not only shaped modern academia but also set the gold standard for educational excellence globally. Choosing to **study in the UK** means joining a lineage of scholars and innovators who have left indelible marks on both history and the future.</p>
            </section>

            <section>
                <h2>Why study in the UK?</h2>
                <ul>
                    <li>**World-renowned universities:** The UK houses 4 of the top 10 universities in the world according to the *QS World University Rankings 2025*.</li>
                    <li>**Diverse course offerings:** UK universities offer a wide range of courses with the opportunity to specialise early. Students have access to over 50,000 courses in more than 25 subject areas.</li>
                    <li>**Quality education:** The UK's higher education system ranks as the second-best in the world. Over 82% of research conducted by UK universities is rated as ‘world-leading’ or ‘internationally excellent’ according to the Research Excellence Framework.</li>
                    <li>**Shorter duration of degrees:** Unlike in many countries, UK degrees are shorter, which can lead to significant savings. Most undergraduate programs take three years to complete, while postgraduate programs typically take one year.</li>
                    <li>**Part-time work opportunities:** International students are permitted to work up to 20 hours per week during term time and full-time during holidays.</li>
                </ul>
            </section>

            <section>
                <h2>Top courses to study in the UK</h2>
                <p>With world-class universities, experienced faculties, and multiple opportunities in different fields, the UK is a top choice among international students. Know all the popular **study abroad** courses of UK universities so you can make the best of your career choice:</p>
                <ul>
                    <li>Business management</li>
                    <li>Engineering and technology</li>
                    <li>Medicine</li>
                    <li>Law</li>
                    <li>Social Sciences</li>
                    <li>Media and communication</li>
                </ul>
            </section>

            <section>
                <h2>Top universities to study in the UK</h2>
                <p>When deciding which university to study in the UK at, it is crucial that you also look at the world university rankings. This helps you compare and understand where a university ranks and how your desired institution fares on the global map. Here are the top UK universities according to QS World University Rankings 2025:</p>
                {renderUniversityTable()}
            </section>

            <section>
                <h2>Intakes in the UK</h2>
                <p>Colleges and universities in the UK offer two major intakes, but few of the universities also offer summer intakes.</p>
                {renderIntakesTable()}
                <p>Read more about <a href="#">Intakes in UK</a></p>
            </section>

            <section>
                <h2>Cost of studying in the UK</h2>
                <p>Your expenditure on tuition fees depends on the type of qualification and university or school you opt for. There are many high-ranking universities and colleges in the UK with their own fee structures. Here’s the basic cost of studying.</p>
                {renderCostStudyTable()}
                <p>*Please note that: all figures are indicative, and PhD costs might differ as fully funded options are also available in the UK</p>
                <p>If you want to bring down your educational expenses, it is best to apply to various scholarships available for Indian students.</p>

                <div className="fastlane-cta">
                    <h3>Live life in the FastLane</h3>
                    <p>Want to check if you're eligible to get into your dream university? With INTAKE Fastlane you can get an in-principle offer in seconds!</p>
                    <p>Enter your preferences to find and short list matching courses, provide your academic details and get ready to receive a response from your dream university within seconds!</p>
                </div>
            </section>

            <section>
                <h2>Scholarships to study in UK 2025</h2>
                <p>For **Study in UK**, the amount of money available and the type of award varies between institutions. Certain research programs may provide up to 100% of the tuition fee besides covering a part of your living expenditures.</p>
                <p>Here are some popular government scholarship programs you can apply to study in UK as an Indian student:</p>
                {renderScholarshipTable()}
                <p>*This is an indicative list, speak with our <a href="#">UK Education Consultants</a> for more details and get the best available options suited to your profile</p>
                <p>Read more about <a href="#">Scholarships to study in UK</a></p>
            </section>

            <section>
                <h2>Student visa requirements for the UK</h2>
                {renderVisaTable()}
                <p>*For detailed information, please visit the <a href="https://www.gov.uk">Gov.UK website</a></p>
            </section>

            <section>
                <h2>Top Student Cities in the UK for International Students in 2025</h2>
                <p>The UK is celebrated for its world-class education system and enriching student experiences. Here are some of the top student cities in the UK, as highlighted by the QS Best Student Cities Rankings 2025, each offering a distinct mix of academic excellence and vibrant lifestyle opportunities:</p>
                {renderCitiesTable()}
            </section>

            <section className="cost-of-living">
                <h2>Cost of living in the UK</h2>
                <p>Here’s a list of the minimum monthly amount you should expect for living expenses in the UK:</p>
                {renderCostOfLivingTable()}
                <p>Read more about <a href="#">cost of living</a></p>
                <p>*Please note that all figures are indicative, connect with <a href="#">INTAKE experts</a> for more details.</p>
            </section>

            <section>
                <h2>Job in UK for International Students</h2>
                <p>The UK is a hub of opportunities for International students. According to the data from the World Bank, the UK is the **6th largest economy in the world**, which makes it a perfect place for building a successful career.</p>

                <h3>Top 5 Highest-Paying Degrees in the UK (2025)</h3>
                <p>With a huge job market, UK universities offer some popular degree courses that are in demand in the job market, and professionals in the fields are paid well. Here are the highest-paying degrees in the UK.</p>
                <ul>
                    <li>MBA</li>
                    <li>Executive MBA</li>
                    <li>Masters in finance</li>
                    <li>LLM</li>
                    <li>Doctorate</li>
                </ul>
                <p>Read more: <a href="#">Highest Paying Jobs in UK</a></p>
            </section>
        </div>
    );
};

export default Stdyinukcnt;