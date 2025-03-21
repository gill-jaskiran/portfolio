import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/WorkExperience.css'; 

const WorkExperience = () => {
    return (
        <div className="work-experience">
            <h2>Academic Work Experience</h2>
            <ul className="work-list">
                <li>
                    <Link to="/capstone-project">Capstone Project</Link>
                </li>
                <li>
                    <Link to="/private-chat-box">Private Chat Box</Link>
                </li>
                <li>
                    <Link to="/travel-booking">Travel Booking</Link>
                </li>
                <li>
                    <Link to="/android-restaurant-guide">Android Restaurant Guide</Link>
                </li>
                <li>
                    <Link to="/connect-four">Connect Four Game</Link>
                </li>
            </ul>
        </div>
    );
};

export default WorkExperience;
