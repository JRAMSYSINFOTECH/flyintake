import React from 'react';
import { Link } from 'react-router-dom';
import './StdyIrlndcnt.css';
const  StdyIrlndcnt = () => {


    const renderUniversityTable = () => (
        <table>
            <thead>
                <tr>
                    <th>University</th>
                    <th>QS World Rankings 2025</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Trinity College Dublin (TCD)</td><td>87</td></tr>
                <tr><td>University College Dublin (UCD)</td><td>126</td></tr>
                <tr><td>University College Cork</td><td>273</td></tr>
                <tr><td>University of Galway</td><td>273</td></tr>
                <tr><td>Dublin City University</td><td>421</td></tr>
                <tr><td>University of Limerick</td><td>421</td></tr>
                <tr><td>Maynooth University</td><td>801-850</td></tr>
                <tr><td>Technological University Dublin</td><td>851-900</td></tr>
            </tbody>
        </table>
    );

    // Helper function for the table structure (Intakes)
    const renderIntakesTable = () => (
        <table>
            <thead>
                <tr>
                    <th>Intake</th>
                    <th>Deadline</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Semester 1 (September intake)</td><td>February-July</td></tr>
                <tr><td>Semester 2 (January intake)</td><td>September-October</td></tr>
            </tbody>
        </table>
    );

    // Helper function for the table structure (Cost to Study)
    const renderCostStudyTable = () => (
        <table>
            <thead>
                <tr>
                    <th>S.no.</th>
                    <th>Study program</th>
                    <th>Average fees (in Euros*)</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>1</td><td>Undergraduate program</td><td>€10,000 to €29,000 annually</td></tr>
                <tr><td>2</td><td>Postgraduate masters degree</td><td>€9,500 to €34,500 annually</td></tr>
                <tr><td>3</td><td>Doctoral degree</td><td>€9,500 to €34,500 annually</td></tr>
            </tbody>
        </table>
    );

    // Helper function for the table structure (Scholarships)
    const renderScholarshipTable = () => (
        <table>
            <thead>
                <tr>
                    <th>S. No.</th>
                    <th>Name of the scholarship</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>The Government of Ireland International Education Scholarship</td>
                    <td>Under this initiative, 60 scholarships are granted for 1-year study at Bachelors, Masters or PhD levels, if you have been offered to study in Irish higher education institution. Upon securing the scholarship, you will receive: A €10,000 stipend for 1 year of study. Fully funded tuition and other registration costs at the higher education institution opted for (Source: http://eurireland.ie/2020/02/10/government-of-ireland-international-education-scholarships-2020/)</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>University Scholarships</td>
                    <td>University Scholarship that ranges from €2,000-€5,000</td>
                </tr>
            </tbody>
        </table>
    );

    return (
        <div className="study-in-ireland-guide">
            <header>
                <h1>Here’s a comprehensive guide for all Indian students who want to study in Ireland</h1>
                <h2>Top 3% Global Universities | Cutting-Edge Research | Strong Economy | Cultural Richness – Ireland: Your Gateway to Europe and Beyond!</h2>
            </header>

            <section>
                <p>
                    Consistently excelling on global scales, **Ireland is ranked second on the 2024 Global Peace Index**, showcasing its commitment to peace and security. With a Human Development Index score of 0.950, Ireland stands out as one of the top countries for quality of life, education, and economic stability. This makes Ireland an increasingly popular choice among Indian students looking for a blend of academic excellence and a vibrant culture that nurtures entrepreneurial spirit and professional growth. Beyond the classroom, the lessons learned here are enhanced by Ireland's rich cultural tapestry and welcoming community, making your educational investment truly invaluable.
                </p>
            </section>

            <section>
                <h2>Why study in Ireland?</h2>
                <ul>
                    <li><strong>High-Quality Education:</strong> Irish universities are renowned globally, with several institutions ranked in the top 3% worldwide. This is supported by Ireland's strong performance in global education rankings.</li>
                    <li><strong>Research Opportunities:</strong> Ireland is committed to research and development, receiving substantial funding from the European Union. It's recognized particularly for its contributions to the natural sciences, technology, and humanities.</li>
                    <li><strong>Robust Economy:</strong> Ireland's economy is known for its stability and strong growth, making it an attractive place for post-study employment opportunities, especially in the technology, pharmaceutical, and finance sectors.</li>
                    <li><strong>Cultural and Historical Richness:</strong> Ireland offers a unique blend of historical and modern cultures, coupled with breathtaking landscapes and vibrant cities like Dublin and Cork, enhancing the educational experience with a rich cultural immersion.</li>
                    <li><strong>Support for Indian Students:</strong> Ireland is known for its friendly and welcoming nature. There are numerous supports in place for Indian students, ranging from orientation programs to help with language and integration into the community.</li>
                    <li><strong>Strategic Location:</strong> Located on the edge of Europe, Ireland serves as a gateway to both the UK and the European continent, offering students opportunities to explore multiple cultures and business markets.</li>
                    <li><strong>English-Speaking Country:</strong> As an English-speaking country, Ireland offers a seamless transition for students from India and other nations where English is extensively used, eliminating the language barrier that can be a significant challenge elsewhere.</li>
                </ul>
            </section>

            <section>
                <h2>Education system in Ireland</h2>
                <p>The Irish education system is quite similar to that of the UK which in itself explains the quality it provides to its students. Education in Ireland is mainly categorised in four levels.</p>
                <ul>
                    <li>Primary education including pre-primary</li>
                    <li>Post primary education</li>
                    <li>Further education and training</li>
                    <li>Higher education</li>
                </ul>
            </section>

            <section>
                <h2>Top courses in Ireland</h2>
                <p>For the 2025 intakes, Ireland is attracting students from India with popular courses in high-demand fields, including:</p>
                <ul>
                    <li>Data Science and Analytics</li>
                    <li>Computer Science and Software Engineering</li>
                    <li>Business and Management</li>
                    <li>Biotechnology and Pharmaceutical Sciences</li>
                    <li>Environmental Science and Renewable Energy</li>
                    <li>Digital Marketing and Media Communications</li>
                    <li>Engineering</li>
                    <li>Hospitality and Tourism</li>
                </ul>
            </section>

            <section>
                <h2>Top universities in Ireland</h2>
                <p>Ireland is home to several prestigious universities that consistently rank among the top in the world. According to the QS World University Rankings 2025, Irish institutions are celebrated for their commitment to academic excellence, research innovation, and industry-focused education. These universities attract students globally with their renowned programs, diverse campus experiences, and strong industry connections, particularly in fields like technology, business, health sciences, and engineering.</p>
                <h3>Here's a look at the top-ranked universities in Ireland for 2025:</h3>
                {renderUniversityTable()}
            </section>

            <section>
                <h2>Intakes available in the Ireland</h2>
                <p>Here’s an overview of the intakes in Ireland available for different programs in Irish universities and colleges:</p>
                {renderIntakesTable()}
            </section>

            <section>
                <h2>How much will it cost to study in the Ireland?</h2>
                <p>Most commonly, courses in humanities, education, and arts are a little cheaper, while subjects such as medicine, engineering, business, and management are likely to be more expensive. If you wish to study abroad at a postgraduate level, the tuition fee is typically higher, and the costs vary depending on the program.</p>
                {renderCostStudyTable()}
                <p>Calculate how much it will cost to live in Ireland using our <a href="#">cost-calculator tool</a></p>
            </section>

            <section>
                <h2>Scholarships to study in Ireland</h2>
                <p>Here are some popular scholarship programs you can apply to study in Ireland as an Indian student:</p>
                {renderScholarshipTable()}
                <p>*This is an indicative list, speak with our Ireland Education Consultants for more details and get the best available options suited to your profile</p>
            </section>

            <section>
                <h2>Top student cities in Ireland</h2>
                <p>Ireland is renowned for its top-tier education system and welcoming student environment. **Dublin, ranked 32nd in the QS Best Student Cities Rankings 2025**, stands out as Ireland's premier student city, offering a unique blend of academic excellence and vibrant cultural lifestyle</p>
            </section>

            <section>
                <h2>Cost of living in Ireland</h2>
                <p>Ireland offers a comfortable standard of living with varied costs depending on the city. Dublin, as the capital, has slightly higher living costs, while other student cities like Galway, Cork, and Limerick provide more affordable options. Here’s an approximate breakdown of typical monthly expenses for Indian students and young professionals, covering essential areas such as accommodation, utilities, food, transportation, and leisure</p>
                
                <h3>1. Accommodation</h3>
                <ul>
                    <li>Dublin: €1,200 - €2,200 per month (for a single-bedroom apartment)</li>
                    <li>Other Cities (Galway, Cork, Limerick): €900 - €1,500 per month</li>
                    <li>Shared Accommodation: €500 - €900 per person per month</li>
                </ul>
                
                <h3>2. Utilities (Electricity, Heating, Water, Waste)</h3>
                <ul>
                    <li>Around €150 - €200 per month</li>
                </ul>
                
                <h3>3. Internet and Mobile Phone</h3>
                <ul>
                    <li>Internet: €40 - €60 per month</li>
                    <li>Mobile Phone Plan: €15 - €30 per month</li>
                </ul>
                
                <h3>4. Food and Groceries</h3>
                <ul>
                    <li>Monthly Estimate: €250 - €400, depending on dining and grocery habits</li>
                </ul>
                
                <h3>5. Transportation</h3>
                <ul>
                    <li>Public Transport (Dublin): Around €120 - €150 monthly (student rates may apply)</li>
                    <li>Other Cities: €100 - €130 per month</li>
                    <li>Bicycles and walkable areas are common alternatives.</li>
                </ul>
                
                <h3>6. Healthcare and Insurance</h3>
                <ul>
                    <li>Private Health Insurance: €45 - €70 per month</li>
                    <li>Visit to a GP (doctor): €60 - €75 per visit</li>
                </ul>
                
                <h3>7. Leisure and Miscellaneous</h3>
                <ul>
                    <li>Eating Out: €12 - €20 per meal at an average restaurant</li>
                    <li>Gym Membership: €30 - €60 per month</li>
                    <li>Movie Ticket: Around €10 - €15</li>
                </ul>
                
                <h3>Monthly Total Estimate</h3>
                <ul>
                    <li>**Dublin:** €1,800 - €2,800</li>
                    <li>**Other Cities:** €1,300 - €2,000</li>
                </ul>
            </section>

            <section>
                <h2>Employment prospects in Ireland</h2>
                <p>In 2024, Ireland's employment prospects are notably positive, driven by its robust economy and thriving sectors like technology, pharmaceuticals, finance, and green energy. Key trends include:</p>
                <ul>
                    <li>**Tech Industry:** Ireland remains a global tech hub, attracting major companies such as Google, Apple, and Facebook. There’s strong demand for professionals in data science, cybersecurity, software development, and artificial intelligence.</li>
                    <li>**Pharmaceuticals and Life Sciences:** With a concentration of pharmaceutical companies, Ireland offers numerous job opportunities in biotechnology, quality control, regulatory affairs, and pharmaceutical manufacturing.</li>
                    <li>**Financial Services:** Dublin is a major center for finance, offering roles in fintech, banking, risk management, and accounting, especially with companies expanding their European operations post-Brexit.</li>
                    <li>**Engineering and Construction:** A rise in green infrastructure projects and housing developments is driving demand for civil, mechanical, and electrical engineers, along with sustainable construction experts.</li>
                    <li>**Sustainability and Green Jobs:** As Ireland aims to meet its ambitious climate goals, there’s increasing demand for roles in renewable energy, environmental science, and sustainability consulting.</li>
                    <li>**Healthcare:** Ireland’s healthcare sector seeks skilled professionals in nursing, medical research, and public health due to an aging population and a focus on healthcare accessibility.</li>
                    <li>**Business and Management:** Strong growth in international business opportunities has spurred demand for roles in management, marketing, supply chain logistics, and human resources.</li>
                    <li>**Hospitality and Tourism:** Ireland’s vibrant tourism industry is rebounding post-pandemic, with a need for hospitality management, event planning, and customer service professionals.</li>
                </ul>
                <p>Ireland also offers favourable conditions for post-study work through the **Third Level Graduate Scheme**, which allows international graduates to work for up to **24 months**. With high employment rates across these sectors, graduates have a strong outlook for finding rewarding job opportunities in Ireland</p>
            </section>

            <section>
                <h2>Health and support services in Ireland</h2>
                <p>All Indian students are required to present a proof of comprehensive medical insurance when registering with the Garda National Immigration Bureau. Remember, you’ll have to arrange for your health insurance with an Irish health insurance provider during your stay in Ireland.</p>
                <p>Popular health insurance providers in Ireland include:</p>
                <ul>
                    <li>Irish Life Health</li>
                    <li>VHI Healthcare</li>
                    <li>GloHealth Insurance</li>
                    <li>Student Insure</li>
                </ul>
                <p><a href="#">Learn more about Irish health and support services provided to Indian students</a></p>
                <p><a href="#">Student safety guide for International students in Ireland</a></p>
            </section>

            <section>
                <h2>What to do in an emergency?</h2>
                <p>Ireland does not have local police forces. Instead, there is a nationwide force called **The Guardians of the Peace (A Garda Síochána)**, established in 1922 that is led by a commissioner.</p>
                <p>If you happen to face any emergency, call the “blue light" services - Garda Síochána, ambulance, fire and Irish Coast Guard on the toll free numbers - **112 or 999**.</p>
                <ul>
                    <li>You can call 112 from anywhere in Europe.</li>
                    <li>If you need to report a crime that does not require immediate attention, visit your local Garda station.</li>
                </ul>
            </section>

            <section>
                <h2>Frequently Asked Questions</h2>
                
                <h3>1. How much does it cost to study in Ireland?</h3>
                <p>The cost of tuition fees varies depending on the type of qualification and institution you choose. To cover your tuition fees, you should budget approximately **€10,000 to €25,000 per year**. Here is an estimate of the annual tuition fees for different programs:</p>
                <ul>
                    <li>Undergraduate program: €9,850 to €25,500</li>
                    <li>Postgraduate master's degree: €9,500 to €34,500</li>
                    <li>Doctoral degree: €9,500 to €34,500</li>
                </ul>

                <h3>2. What are the best student cities in Ireland?</h3>
                <p>Here are the top student cities in Ireland:</p>
                <ol>
                    <li>Dublin</li>
                    <li>Cork</li>
                    <li>Limerick</li>
                    <li>Galway</li>
                    <li>Maynooth</li>
                </ol>
                
                <h3>3. Is IELTS required to work in Ireland?</h3>
                <p>Minimum **IELTS Score required to study in Ireland is 6.5 overall and no individual band below 6**.</p>
                
                <h3>4. What are the requirements to study in Ireland?</h3>
                <p>Admission requirements in Ireland differ based on the university and chosen major. However, Indian students applying to universities in Ireland usually need to submit the following documents:</p>
                <ul>
                    <li>University course or degree transcripts</li>
                    <li>English language test results, such as IELTS</li>
                    <li>Work experience and samples (if required)</li>
                    <li>GMAT or GRE scores</li>
                    <li>Statement of purpose</li>
                    <li>Recommendation letter</li>
                </ul>
                
                <h3>5. What are the requirements for Ireland student visa?</h3>
                <p>Here are the requirements for a student visa:</p>
                <ul>
                    <li>Fill out the application form.</li>
                    <li>Provide an application letter.</li>
                    <li>Include two passport-sized photographs taken in the last 6 months.</li>
                    <li>Submit your current passport and copies of previous passports.</li>
                    <li>Present evidence of enrolment in the course.</li>
                    <li>Provide an explanation for any gaps in your educational history.</li>
                </ul>
                
                <h3>6. Can I study in Ireland backlog?</h3>
                <p>Irish institutions typically consider applications with a maximum of **four to five backlogs**, although some may accept a maximum of two to three backlogs</p>
                

            </section>

            <section>
                <h2>Explore in Ireland</h2>
                <p>Leinster</p>
                <p>Hover over the city cards to discover more!</p>
            </section>
        </div>
    );
};

export default StdyIrlndcnt;