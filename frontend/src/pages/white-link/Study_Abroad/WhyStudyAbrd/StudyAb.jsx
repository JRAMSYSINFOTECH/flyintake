import React, { useEffect, useState } from 'react'
import "./Study.css"
const StudyAb = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100); // slight delay for animation trigger
  }, []);

  return (
    <div className='stdab'>
      <div className={`stdab-left${animate ? ' slide-in-left' : ''}`}>
        <h1> Why Study Abroad</h1>
        <h3>Learn how studying abroad opens a world of opportunities</h3>
        <button className='stdy-btn'> contact Jramsys</button>
      </div>
      <div className={`stdab-right${animate ? ' slide-in-right' : ''}`}>
         <img
          src="https://tse3.mm.bing.net/th/id/OIP.LTkGshUbm5gaBmtjd0zs_AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Girl studying with open book"
          className="stdab-img"
        />
        
        {/* Add your image or content here  */}
      </div>
    </div>
  )
}

export default StudyAb