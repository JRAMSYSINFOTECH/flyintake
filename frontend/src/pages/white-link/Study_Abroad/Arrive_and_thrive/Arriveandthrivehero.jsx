import React, { useEffect, useState } from 'react'
import './Arriveandthrivehero.css'
const Arriveandthrivehero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100); // slight delay for animation trigger
  }, []);

  return (
    <div className='stdab'>
      <div className={`stdab-left${animate ? ' slide-in-left' : ''}`}>
        <h1>Arrive and Thrive</h1>
        <h3>Learn how to make the most of your study abroad experience
Contact INTAKE</h3>
       
        <button className='stdy-btn'> contact INTAKE</button>
      </div>
      <div className={`stdab-right${animate ? ' slide-in-right' : ''}`}>
         <img
          src="https://placehold.co/600x400"
          alt="Students in a classroom"
          className="stdab-img"
        />

        {/* Add your image or content here  */}
      </div>
    </div>
  )
}

export default Arriveandthrivehero;
