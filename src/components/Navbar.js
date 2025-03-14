import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li><Link to="/bio">Bio</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/cover-letter">Cover Letter</Link></li>
                <li><Link to="/credentials">Credentials</Link></li>
                <li><Link to="/work-experience">Work Samples</Link></li>
                <li><Link to="/summary">Summary</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
