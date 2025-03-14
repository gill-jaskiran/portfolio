import React from "react";
import "./styles/TravelBooking.css"; 
import Book1 from "./styles/assets/Book1.png";
import Book2 from "./styles/assets/Book2.png";
import Book3 from "./styles/assets/Book3.png";
import Book4 from "./styles/assets/Book4.png";
import Book5 from "./styles/assets/Book5.png";
import Book6 from "./styles/assets/Book6.png";

const TravelBooking = () => {
  return (
    <div className="travel-booking-container">
      <h1>Travel Booking</h1>
      <p>I Have created a booking webstite that caters to all users booking needs. Users can sign up, and use
        this website to book flights, hotels, and car rentals.
      </p>
      <p>
        The technology used in the development of this application is ASP-NET CORE, C#, HTML, CSS, Java and SQL
      </p>

      <div className="project-links">
        <p>
          Source Code for the Application:  <a 
            href="https://github.com/gill-jaskiran/Assignment1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
          >GitHub</a>
        </p>
      </div>

      <div className="image-gallery">
        <img src={Book1} alt="Booking 1" className="booking-image" />
        <img src={Book2} alt="Booking 2" className="booking-image" />
        <img src={Book3} alt="Booking 3" className="booking-image" />
        <img src={Book4} alt="Booking 4" className="booking-image" />
        <img src={Book5} alt="Booking 5" className="booking-image" />
        <img src={Book6} alt="Booking 6" className="booking-image" />
      </div>
    </div>
  );
};

export default TravelBooking;
