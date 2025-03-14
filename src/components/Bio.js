import React from 'react';
import "../styles/Bio.css";
import myPicture from "../styles/assets/myPicture.png";

const Bio = () => {
  return (
    <div className="Bio">
      <div className="header">
        <h1> About Me</h1>
      </div>
      <div className="content">
        <img src={myPicture} alt="Jaskiran Gill" className="profile-img" />
        <div className="text-content">
          <h2>Hi, I am Jaskiran Gill,</h2>
          <p>
          I graduated in 2022 from Toronto Metropolitan University with a Bachelor 
          of Arts degree in Politics and Governance. The majority of my experience
           is in the political field. Politics will always have my heart and will 
           always be my passion. I enjoy having intellectual conversations and getting 
           exposed to new thoughts and ideologies. However, I decided to pursue a career 
           in computer programming at George Brown College as I sought to increase my 
           knowledge and understanding of programming. I'm constantly embarking on new 
           challenges and seeking opportunities to learn, grow and evolve my skill set. 
          </p>

          <p>
          My philosophy is to bridge the gap by making web applications more accessible
          and accommodating for individuals with accessibility needs.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Bio;

