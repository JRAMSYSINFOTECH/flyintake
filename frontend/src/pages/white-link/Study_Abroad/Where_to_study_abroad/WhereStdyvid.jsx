import React from "react";

function WhereStdyVid() {
  return (
    <div className="stdabvid">
      <div>
It’s great that you're interested in studying abroad, but have you decided on the university or course?

Studying abroad is more than just earning a foreign degree—it’s a life-changing adventure. From learning a new language and adapting to a new culture to navigating a different education system, this experience not only enhances your career but also transforms your life. However, with multiple universities worldwide offering countless programs to choose from, how do you decide where to study abroad and which is the right course?

Your choice depends on your priorities:
<ul>
       <li>
        Which is your dream country?  
       </li> 
      <li>
       What program are you interested in? 
       </li>
       <li>
        Which universities suit you the most?  
       </li>
       <li>
       How much is the tuition, and what’s the academic quality?  
       </li>
</ul>
      </div>


      <div className="vid" >
      <div style={{ margin: "2rem 0" }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/hUV6hHwvJSY"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="vid-txt">
        <h2>One account for all your study abroad needs</h2>
        <h3>Create your profile and unlock a wide array of features including personalised recommendations, fast-tracked applications and much more.</h3>
        
        <button>Signup</button>
        </div>
        

       </div>
    </div>
  );
}

export default WhereStdyVid;