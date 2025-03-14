import React from "react";
import '../styles/Resume.css';

const Resume = () => {
  return (
    <div className="resume">
      <div className="header">
        <h1>Jaskiran Gill</h1>
        <h4>Mississauga, ON | 647-710-7552 | gill.jaskiran1@gmail.com</h4>
      </div>

      <div className="section">
        <h2>HIGHLIGHTS OF QUALIFICATIONS</h2>
        <ul>
          <li>Excellent problem-solving, time management, and multitasking skills.</li>
          <li>Strong oral and written communication abilities.</li>
          <li>Experience in cash handling, customer service, and financial transactions.</li>
          <li>Proficient in Java, C++, Linux, Bash, Python, SQL, React, and Agile Development.</li>
          <li>Experience in database management (SQL, Oracle, MySQL) and web development.</li>
        </ul>
      </div>

      <div className="section">
        <h2>TECHNICAL SKILLS</h2>
        <ul>
          <li><strong>Software:</strong> Microsoft Office Suite, Adobe Creative Suite</li>
          <li><strong>Programming:</strong> Java, C++, Python, Swift</li>
          <li><strong>Database:</strong> SQL, MySQL, GraphQL, Postgres</li>
          <li><strong>Web Dev:</strong> HTML, CSS, JavaScript, React</li>
          <li><strong>Operating Systems:</strong> Windows, Linux, GitHub</li>
          <li><strong>Tools:</strong> VS Code, IntelliJ, WebStorm, PyCharm, Android Studio</li>
        </ul>
      </div>

      <div className="section">
        <h2>EDUCATION</h2>
        <h3>Computer Programming and Analysis, Advanced Diploma (2023-2025)</h3>
        <p>George Brown College, Toronto ON</p>
        <ul>
          <li>Developed and designed web applications using HTML, CSS, JavaScript, and Swift.</li>
          <li>Worked with SQL databases for backend development.</li>
          <li>Created a real-time chat application and travel reservation site.</li>
          <li>Applied Agile Development practices.</li>
        </ul>

        <h3>Politics and Governance, Bachelor of Arts (Honors) (2018-2022)</h3>
        <p>Toronto Metropolitan University, Toronto ON</p>
        <ul>
          <li>Experience in writing, researching, and analyzing data.</li>
          <li>Knowledge of Canadian constitutional law, policy-making, and stakeholder relationships.</li>
          <li>Proficient in conducting qualitative and quantitative research.</li>
        </ul>
      </div>

      <div className="section">
        <h2>PROFESSIONAL EXPERIENCE</h2>

        <h3>Sales Trainer & Sales Associate (Nov 2020 - Present)</h3>
        <p>H&M, Mississauga, ON</p>
        <ul>
          <li>Assisted customers, answered inquiries, and provided excellent service.</li>
          <li>Trained and mentored new team members.</li>
          <li>Handled transactions with high accuracy and attention to detail.</li>
          <li>Supported store management with financial reconciliation tasks.</li>
        </ul>

        <h3>Loss Prevention (Jan 2018 - Oct 2020)</h3>
        <p>Gate Gourmet, Mississauga, ON</p>
        <ul>
          <li>Monitored for theft, documented reports, and maintained inventory integrity.</li>
          <li>Worked in high-security environments following strict compliance rules.</li>
          <li>Keyholder with access control responsibilities.</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
