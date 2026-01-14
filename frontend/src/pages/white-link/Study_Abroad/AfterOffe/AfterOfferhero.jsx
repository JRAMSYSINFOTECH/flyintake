
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './AfterOfferhero.css'
const AfterOfferhero = () => {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => setAnimate(true), 100); // slight delay for animation trigger
  }, []);

  return (
    <div className='stdab'>
      <div className={`stdab-left${animate ? ' slide-in-left' : ''}`}>
        <h1>After receiving an offer</h1>
        <h3>Here are the steps to take from accepting an offer through to planning for your trip to make your study abroad dream a reality</h3>
       
       <button
      className="stdy-btn"
      onClick={() => navigate("/contact")} // Must match the route path
    >
      Contact INTAKE
    </button>
      </div>
      <div className={`stdab-right${animate ? ' slide-in-right' : ''}`}>
         <img
         src="https://tse3.mm.bing.net/th/id/OIP.LTkGshUbm5gaBmtjd0zs_AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
          className="stdab-img"
        />

        {/* Add your image or content here  */}
      </div>
    </div>
  )
}

export default AfterOfferhero;
