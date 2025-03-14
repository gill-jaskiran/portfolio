import React from "react";
import "./styles/CapstoneProject.css";
import cap1 from "./styles/assets/cap1.png";
import cap2 from "./styles/assets/cap2.png";
import cap3 from "./styles/assets/cap3.png";
import cap4 from "./styles/assets/cap4.png";
import cap5 from "./styles/assets/cap5.png";
import cap6 from "./styles/assets/cap6.png";


const CapstoneProject = () => {
  return (
    <div className="capstone-container">
    
      <div className="header">
        <h1>Capstone Project - Friendship Plus</h1>
      </div>

      <div className="project-links">
        <p>
          
          All Sprint Files for project: <a 
            href="https://drive.google.com/drive/u/1/folders/1Wv64mQVXQjewayol18JvHVRO7uy1ZbLe" 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
          >Google drive</a>
        </p>
        <p>
          Source Code for the Application:  <a 
            href="https://github.com/gill-jaskiran/friendship-plus" 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
          >GitHub</a>
        </p>
      </div>

      <section className="capstone-section">
        <h2>Project Summary</h2>
        <p>
        The objective of the project is to create an application where post secondary students
        can use the application as a form of social networking and connect with individuals with
        like minded interests.
        </p>
        <p>
        The corporate goal is to create an application where students can easily sign up and ensure
        user satisfaction and track engagement. We want to create an application that has an easy to
        use yet appealing interface where students are excited to use the application.
        </p>
      </section>

      <section className="capstone-section">
        <h2>Project Vision</h2>
        <p>
        This vision document describes the Friendship Plus application project. Firstly,
        it states the purpose, scope and acronyms. Next, it positions the project by
        detailing business opportunities, the project and the benefit it can provide. It
        also presents strengths, weaknesses, opportunities and threats through SWOT analysis.
        </p>
      </section>

      <section className="capstone-section">
        <h2>Project/Business Requirements</h2>
        <p>
        Students entering post-secondary school find it difficult to establish core
        relationships. Therefore, they can feel lonely, and it can affect their overall
        mental health. If their mental health declines so do their academic success. 
        It also aids with networking opportunities and allows institutions to use the 
        platform to create clubs or as an aid to promote student well being Our project 
        aims at aiding students to connect with one another and create lasting cohorts 
        based on mutual interests.
        </p>
      </section>

      <section className="capstone-section">
        <h2>Project Plan</h2>
        <ul>
          <li><strong>Planned Start Date:</strong> Sept 12th, 2024</li>
          <li><strong>Planned End Date:</strong> March 28th, 2025</li>
        </ul>
        <h3>Scope</h3>
        <table>
          <thead>
            <tr>
              <th>In Scope</th>
              <th>Out of Scope</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Registration/SignUp page</td>
              <td>User profile customization (limited)</td>
            </tr>
            <tr>
              <td>Login Page</td>
              <td>Advanced algorithms</td>
            </tr>
            <tr>
              <td>Profile Creation</td>
              <td>Linking with other social media platforms</td>
            </tr>
            <tr>
              <td>Search Bar</td>
              <td>Video and voice chats</td>
            </tr>
            <tr>
              <td>Post-secondary school accounts</td>
              <td>Available offline</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="capstone-section">
        <h2>Deliverables</h2>
        <table>
          <thead>
            <tr>
              <th>Deliverable</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Registration/SignUp Page</td>
              <td>Secure sign-up with 2FA authentication.</td>
            </tr>
            <tr>
              <td>Login Page</td>
              <td>Secure user authentication.</td>
            </tr>
            <tr>
              <td>Profile Creation</td>
              <td>Users can create profiles, upload pictures, and write a bio.</td>
            </tr>
            <tr>
              <td>Search Bar</td>
              <td>Allows students to search for others and forums.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="capstone-section">
        <h2>Requirements Analysis & Design</h2>

        <h3>Requirement Scope Area</h3>
        <table>
          <thead>
            <tr>
              <th>Requirement</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>User Registration</td>
              <td>Users must register with a valid email and set up 2FA authentication.</td>
            </tr>
            <tr>
              <td>User Login & Verification</td>
              <td>Users must log in using an email address and 2FA authentication.</td>
            </tr>
            <tr>
              <td>Usable on Mobile & PC</td>
              <td>The app must be accessible on mobile and desktop devices.</td>
            </tr>
            <tr>
              <td>Minimum Age Limit</td>
              <td>Users under 16 cannot register.</td>
            </tr>
          </tbody>
        </table>

        <h3>Information Flows</h3>
        <table>
          <thead>
            <tr>
              <th>Flow</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Two-Factor Authentication System</td>
              <td>The system sends a verification code to the user's email for security.</td>
            </tr>
            <tr>
              <td>User Content</td>
              <td>Users can upload, download, store, view, or delete URLs, audio, text, and video.</td>
            </tr>
          </tbody>
        </table>

        <h3>High-Level Requirements (HLR)</h3>
        <table>
          <thead>
            <tr>
              <th>HLR#</th>
              <th>Description</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>User must be able to register using a valid email address</td>
              <td>High</td>
            </tr>
            <tr>
              <td>2</td>
              <td>User must be able to share or upload content</td>
              <td>Medium</td>
            </tr>
            <tr>
              <td>3</td>
              <td>User must provide detailed personal information</td>
              <td>Medium</td>
            </tr>
            <tr>
              <td>HLR04</td>
              <td>Users must be able to edit their profile and uploads</td>
              <td>Medium</td>
            </tr>
            <tr>
              <td>HLR06</td>
              <td>Users must be able to rate their experience (1-10)</td>
              <td>Low</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="capstone-section">
        <h2>Wireframes</h2>
        <div className="wireframes">
          <img src={cap1} alt="Wireframe 1" />
          <img src={cap2} alt="Wireframe 2" />
          <img src={cap3} alt="Wireframe 3" />
          <img src={cap4} alt="Wireframe 4" />
          <img src={cap5} alt="Wireframe 5" />
          <img src={cap6} alt="Wireframe 6" />
        </div>
      </section>



   

      <section className="capstone-section">
        <h2>Status Reports</h2>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Status</th>
              <th>Notes</th>
              <th>Name</th>
              <th>Accomplished?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Navigation Functionality</td>
              <td>Complete</td>
              <td>Functioning navbar</td>
              <td>Jaskiran</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Signup Page - UI</td>
              <td>Complete</td>
              <td>Created signup form</td>
              <td>Kevin</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Database Postgres</td>
              <td>Complete</td>
              <td>Postgres DB integration & API testing</td>
              <td>Neeta</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
      </section>


    </div>
  );
};

export default CapstoneProject;
