import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Bio from './components/Bio';
import Resume from './components/Resume';
import CoverLetter from './components/CoverLetter';
import Credentials from './components/Credentials';
import WorkExperience from './components/WorkExperience';
import Summary from './components/Summary';
import CapstoneProject from './components/workSamples/CapstoneProject';
import AndroidRestaurantGuide from './components/workSamples/AndroidRestaurantGuide';
import ConnectFour from './components/workSamples/ConnectFour';
import PrivateChatBox from './components/workSamples/PrivateChatBox';
import TravelBooking from './components/workSamples/TravelBooking';
import './styles.css';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Bio />} />
                <Route path="/bio" element={<Bio />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/cover-letter" element={<CoverLetter />} />
                <Route path="/credentials" element={<Credentials />} />
                <Route path="/work-experience" element={<WorkExperience />} />
                <Route path="/summary" element={<Summary />} />
                <Route path="/capstone-project" element={<CapstoneProject />} />
                <Route path="/android-restaurant-guide" element={<AndroidRestaurantGuide />} />
                <Route path="/connect-four" element={<ConnectFour/>} />
                <Route path="/private-chat-box" element={<PrivateChatBox />} />
                <Route path="/travel-booking" element={<TravelBooking />} />
                
            </Routes>
        </Router>
    );
};

export default App;
