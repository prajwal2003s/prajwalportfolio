import React from "react";
import { useNavigate } from "react-router-dom";
import "./ResumePage.css";

const ResumePage = () => {
  const navigate = useNavigate();

  return (
    <section className="resume-wrapper">
      <div className="download-buttons">
        <button onClick={() => window.print()} className="print-btn">🖨️ Print</button>
        <button onClick={() => navigate("/")} className="print-btn">🔙 Back</button>
      </div>

      <div id="print-area" className="resume-container">
        {/* Header */}
        <div className="header-section">
          <img src="/Images/my-image.jpg" alt="Prajwal Sathawane" className="profile-photo large" />
          <div className="header-details">
            <h1 className="name-heading">Prajwal Sathawane</h1>
            <h2 className="role-heading">Frontend Developer</h2>
            <p><strong>Email:</strong> prajwalsathawane2003@gmail.com</p>
            <p><strong>Phone:</strong> +91-9284593499</p>
            <p><strong>Location:</strong> Nagpur, Maharashtra, India</p>
            <p><strong>GitHub:</strong> github.com/prajwal-dev</p>
            <p><strong>LinkedIn:</strong> linkedin.com/in/prajwal-sathawane</p>
          </div>
        </div>

        {/* Summary */}
        <div className="section">
          <h3>Professional Summary</h3>
          <p>
            A frontend developer skilled in building responsive, accessible, and interactive web applications using React, Tailwind CSS, and modern JavaScript. Known for clean UI implementation, efficient code structure, and delivering on time in collaborative environments.
          </p>
        </div>

        {/* Projects */}
        <div className="section">
          <h3>Key Projects</h3>
          <div className="project-block">
            <h4>Portfolio Website – React, Tailwind</h4>
            <p>Developed a personal portfolio with custom components, responsive layout, contact form, and downloadable resume.</p>
          </div>
          <div className="project-block">
            <h4>Catering Management App – MERN Stack</h4>
            <p>Built a dashboard for managing event orders, menus, and smart dish suggestions using ML and user preferences.</p>
          </div>
          <div className="project-block">
            <h4>Image Object Recognition – React, APIs</h4>
            <p>Created a browser-based image classifier for live object recognition using pre-trained models.</p>
          </div>
        </div>

        {/* Experience */}
        <div className="section">
          <h3>Internship Experience</h3>
          <h4>Frontend Developer Intern – Novabytes Technology</h4>
          <p>Jan 2025 – May 2025</p>
          <ul>
            <li>Developed UI components in React with Tailwind CSS</li>
            <li>Integrated REST APIs and handled data binding</li>
            <li>Participated in sprint planning and peer code reviews</li>
          </ul>
        </div>

        {/* Education */}
        <div className="section">
          <h3>Education</h3>
          <h4>B.Tech in Information Technology</h4>
          <p>K.D.K. College of Engineering, Nagpur (2021 – 2025)</p>
        </div>

        {/* Skills */}
        <div className="section">
          <h3>Skills</h3>
          <p><strong>Languages:</strong> JavaScript, HTML, CSS</p>
          <p><strong>Frontend:</strong> React.js, Tailwind CSS, Redux Toolkit</p>
          <p><strong>Backend:</strong> Node.js, Express.js</p>
          <p><strong>Databases:</strong> MongoDB, MySQL</p>
          <p><strong>Tools:</strong> Git, Postman, VS Code, Vercel, Netlify</p>
        </div>

        {/* Certifications */}
        <div className="section">
          <h3>Certifications</h3>
          <p>JavaScript for Web Development – Internshala</p>
        </div>

        {/* Languages */}
        <div className="section">
          <h3>Languages</h3>
          <p>English, Hindi, Marathi</p>
        </div>

        {/* Achievements */}
        <div className="section">
          <h3>Achievements</h3>
          <p>• Completed multiple personal React projects</p>
          <p>• Contributed to open-source Tailwind components</p>
        </div>
      </div>
    </section>
  );
};

export default ResumePage;
