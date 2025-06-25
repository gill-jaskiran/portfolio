import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/WorkExperience.css'; 

const WorkExperience = () => {
    return (
        <div className="work-experience">
            <h2>Academic Work Experience</h2>
            <ul className="work-list">
                <li>
                    <Link to="/capstone-project">Friendship Plus</Link>
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
                <li>
                    <a 
                        href="https://github.com/gill-jaskiran/portfolio" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        This Portfolio's Source Code
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default WorkExperience;
