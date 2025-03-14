import React from "react";
import "./styles/AndroidRestaurantGuide.css"; 
import Rest1 from "./styles/assets/rest1.png";
import Rest2 from "./styles/assets/rest2.png";
import Rest3 from "./styles/assets/rest3.png";
import Rest4 from "./styles/assets/rest4.png";
import Rest5 from "./styles/assets/rest5.png";

const AndroidRestaurantGuide = () => {
  return (
    <div className="restaurant-guide-container">
      <h1>Android Restaurant Guide</h1>
      <p>I created a Android application. Similar to yelp, my application allows 
        users to rate and review local resturaunts and also add resturaunts around 
        their local area onto the list.
      </p>
      <div className="project-links">
        <p>
          Source Code for the Application:  <a 
            href="https://github.com/gill-jaskiran/PersonalRestaurantGuide" 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
          >GitHub</a>
        </p>
      </div>



      <div className="restaurant-image-gallery">
        <img src={Rest1} alt="Restaurant 1" className="restaurant-image" />
        <img src={Rest2} alt="Restaurant 2" className="restaurant-image" />
        <img src={Rest3} alt="Restaurant 3" className="restaurant-image" />
        <img src={Rest4} alt="Restaurant 4" className="restaurant-image" />
        <img src={Rest5} alt="Restaurant 5" className="restaurant-image" />
      </div>
    </div>
  );
};

export default AndroidRestaurantGuide;
