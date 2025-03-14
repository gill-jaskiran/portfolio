import React from 'react';
import '../styles/Summary.css'; 

const Summary = () => {
    return (
        <div className="summary">
            <h1>Professional Summary</h1>

            <h2>Professional Experience</h2>

            <h3>Sales Trainer & Sales Associate</h3>
            <p><strong>H&M, Mississauga, ON (Nov 2020 - Present)</strong></p>
            <ul>
                <li>Assisting customers and answering inquiries to deliver the highest level of customer experience.</li>
                <li>Working collaboratively in a team to achieve sales goals and meet work deadlines.</li>
                <li>Communicating information clearly to associates and customers.</li>
                <li>Resolving conflicts between clients and employees effectively.</li>
                <li>Coaching and training new employees to improve performance.</li>
                <li>Motivating sales teams to promote a positive and collaborative environment.</li>
                <li>Adapting training methods based on market needs.</li>
                <li>Ensuring quality assurance when processing transactions.</li>
                <li>Examining product quality and ensuring accurate labeling.</li>
                <li>Supporting management in store closing tasks, including register cash counting.</li>
            </ul>

            <h3>Loss Prevention</h3>
            <p><strong>Gate Gourmet, Mississauga, ON (Jan 2018 - Oct 2020)</strong></p>
            <ul>
                <li>Monitoring and reporting theft or damage to goods.</li>
                <li>Accurately documenting and reporting incidents.</li>
                <li>Managing time effectively in a fast-paced environment.</li>
                <li>Collaborating with staff to complete tasks efficiently.</li>
                <li>Tracking inventory accurately to minimize discrepancies.</li>
                <li>Following strict security protocols and compliance measures.</li>
                <li>Managing keyholder responsibilities and overseeing secured areas.</li>
            </ul>
        </div>
    );
};

export default Summary;
