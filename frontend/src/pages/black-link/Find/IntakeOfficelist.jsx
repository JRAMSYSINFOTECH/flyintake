import React, { useState } from 'react';
import './IntakeOfficeList.css';
const defaultOffices = [
  { name: "INTAKE Ahmedabad", address: "123 CG Road, Ahmedabad 380009", phone: "+91 79 1234 5678", email: "ahmedabad@idp.com" },
  { name: "INTAKE Amritsar", address: "123 Mall Road, Amritsar 143001", phone: "+91 183 234 5678", email: "amritsar@idp.com" },
  { name: "INTAKE Bangalore", address: "123 MG Road, Bangalore 560001", phone: "+91 80 2345 6789", email: "bangalore@idp.com" },
  { name: "INTAKE Bhopal", address: "123 MP Nagar, Bhopal 462011", phone: "+91 755 345 6789", email: "bhopal@idp.com" },
  { name: "INTAKE Bhubaneswar", address: "123 Janpath, Bhubaneswar 751009", phone: "+91 674 456 7890", email: "bhubaneswar@idp.com" },
  { name: "INTAKE Calicut", address: "123 Mavoor Road, Calicut 673001", phone: "+91 495 567 8901", email: "calicut@idp.com" },
  { name: "INTAKE Chandigarh", address: "123 Sector 17, Chandigarh 160017", phone: "+91 172 678 9012", email: "chandigarh@idp.com" },
  { name: "INTAKE Chennai", address: "123 Mount Road, Chennai 600002", phone: "+91 44 789 0123", email: "chennai@idp.com" },
  { name: "INTAKE Coimbatore", address: "123 DB Road, Coimbatore 641018", phone: "+91 422 890 1234", email: "coimbatore@idp.com" },
  { name: "INTAKE Delhi", address: "123 Connaught Place, New Delhi 110001", phone: "+91 11 4567 8901", email: "delhi@idp.com" },
  { name: "INTAKE Gurgaon", address: "123 DLF Cyber City, Gurgaon 122002", phone: "+91 124 901 2345", email: "gurgaon@idp.com" },
  { name: "INTAKE Guwahati", address: "123 GS Road, Guwahati 781005", phone: "+91 361 012 3456", email: "guwahati@idp.com" },
  { name: "INTAKE Hyderabad", address: "123 Banjara Hills, Hyderabad 500034", phone: "+91 40 123 4567", email: "hyderabad@idp.com" },
  { name: "INTAKE Indore", address: "123 MG Road, Indore 452001", phone: "+91 731 234 5678", email: "indore@idp.com" },
  { name: "INTAKE Jaipur", address: "123 MI Road, Jaipur 302001", phone: "+91 141 345 6789", email: "jaipur@idp.com" },
  { name: "INTAKE Jalandhar", address: "123 Model Town, Jalandhar 144003", phone: "+91 181 456 7890", email: "jalandhar@idp.com" },
  { name: "INTAKE Kochi", address: "123 MG Road, Kochi 682016", phone: "+91 484 567 8901", email: "kochi@idp.com" },
  { name: "INTAKE Kolkata", address: "123 Park Street, Kolkata 700016", phone: "+91 33 678 9012", email: "kolkata@idp.com" },
  { name: "INTAKE Lucknow", address: "123 Hazratganj, Lucknow 226001", phone: "+91 522 789 0123", email: "lucknow@idp.com" },
  { name: "INTAKE Ludhiana", address: "123 Ferozepur Road, Ludhiana 141001", phone: "+91 161 890 1234", email: "ludhiana@idp.com" },
  { name: "INTAKE Mangalore", address: "123 KS Rao Road, Mangalore 575001", phone: "+91 824 901 2345", email: "mangalore@idp.com" },
  { name: "INTAKE Mumbai", address: "123 Nariman Point, Mumbai 400021", phone: "+91 22 3456 7890", email: "mumbai@idp.com" },
  { name: "INTAKE Mysore", address: "123 Sayyaji Rao Road, Mysore 570001", phone: "+91 821 012 3456", email: "mysore@idp.com" },
  { name: "INTAKE Nagpur", address: "123 Sitabuldi, Nagpur 440012", phone: "+91 712 123 4567", email: "nagpur@idp.com" },
  { name: "INTAKE Noida", address: "123 Sector 18, Noida 201301", phone: "+91 120 234 5678", email: "noida@idp.com" },
  { name: "INTAKE Patna", address: "123 Frazer Road, Patna 800001", phone: "+91 612 345 6789", email: "patna@idp.com" },
  { name: "INTAKE Pune", address: "123 FC Road, Pune 411004", phone: "+91 20 456 7890", email: "pune@idp.com" },
  { name: "INTAKE Rajkot", address: "123 Kalawad Road, Rajkot 360005", phone: "+91 281 567 8901", email: "rajkot@idp.com" },
  { name: "INTAKE Surat", address: "123 Ring Road, Surat 395002", phone: "+91 261 678 9012", email: "surat@idp.com" },
  { name: "INTAKE Thane", address: "123 Ghodbunder Road, Thane 400607", phone: "+91 22 789 0123", email: "thane@idp.com" },
  { name: "INTAKE Trivandrum", address: "123 MG Road, Trivandrum 695001", phone: "+91 471 890 1234", email: "trivandrum@idp.com" },
  { name: "INTAKE Vadodara", address: "123 Race Course Road, Vadodara 390007", phone: "+91 265 901 2345", email: "vadodara@idp.com" },
  { name: "INTAKE Vijayawada", address: "123 MG Road, Vijayawada 520001", phone: "+91 866 012 3456", email: "vijayawada@idp.com" },
  { name: "INTAKE Vizag", address: "123 Dwarakanagar, Visakhapatnam 530016", phone: "+91 891 123 4567", email: "vizag@idp.com" }
];


const ITEMS_PER_PAGE = 10;

const IntakeOfficelist = ({ offices, countryName = "India" }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOffice, setSelectedOffice] = useState(null);

    // Normalize office list - handle both string and object formats
    const normalizeOffice = (office) => {
        if (typeof office === 'string') {
            return { name: office, address: '', phone: '', email: '' };
        }
        return office;
    };

    const officeList = (offices || defaultOffices).map(normalizeOffice);

    const filteredOffices = officeList.filter(office =>
        office.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (office.address && office.address.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const totalPages = Math.ceil(filteredOffices.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentOffices = filteredOffices.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    const goToNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const goToPreviousPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    return (
        <div className="idp-container">
            <h2 className="office-list-title">Our Offices in {countryName}</h2>
            <p style={{ textAlign: "center", color: "#6b7280", marginBottom: "30px" }}>
                Find your nearest INTAKE office and connect with our expert counsellors
            </p>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search for an office or location..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="office-search-input"
                />
            </div>
            {filteredOffices.length === 0 && (
                <p style={{ textAlign: "center", color: "#6b7280", padding: "40px" }}>
                    No offices found for this location. Please try a different search term.
                </p>
            )}
            <ul className="office-list">
                {currentOffices.map((office, index) => (
                    <li 
                        key={index} 
                        className="office-item"
                        onClick={() => setSelectedOffice(selectedOffice === office ? null : office)}
                    >
                        <div className="office-item-content">
                            <h3 className="office-name">{office.name}</h3>
                            {office.address && <p className="office-address">{office.address}</p>}
                            {selectedOffice === office && (
                                <div className="office-details">
                                    {office.phone && <p className="office-contact">📞 {office.phone}</p>}
                                    {office.email && <p className="office-contact">✉️ {office.email}</p>}
                                </div>
                            )}
                        </div>
                        <span className="arrow">{selectedOffice === office ? '▼' : '→'}</span>
                    </li>
                ))}
            </ul>
            {totalPages > 1 && (
                <div className="nav-buttons">
                    <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button onClick={goToNextPage} disabled={currentPage === totalPages}>
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default IntakeOfficelist;