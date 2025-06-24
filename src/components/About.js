import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h2 className="section-title">About Me</h2>

      <div className="about-grid">
        <div className="about-left">
          <h3>Personal Info</h3>
          <ul>
            <li><strong>Name:</strong> Hareesh Amanchi</li>
            
            <li><strong>Location:</strong> Madanapalle, Andhra Pradesh</li>
            <li><strong>Languages:</strong> English, Telugu</li>
            <li><strong>Email:</strong> hareeshamanchi@gmail.com</li>
          </ul>

          <h3>Technical Skills</h3>
          <div className="skill">
            <span>C Programming</span>
            <div className="bar"><div className="fill fill-c"></div></div>
          </div>
          <div className="skill">
            <span>Python</span>
            <div className="bar"><div className="fill fill-python"></div></div>
          </div>
          <div className="skill">
            <span>HTML/CSS</span>
            <div className="bar"><div className="fill fill-html"></div></div>
          </div>
          <div className="skill">
            <span>SQL Plus</span>
            <div className="bar"><div className="fill fill-sql"></div></div>
          </div>
          <div className="skill">
            <span>React</span>
            <div className="bar"><div className="fill fill-react"></div></div>
          </div>
        </div>

        <div className="about-right">
          <h3>Education</h3>
          <div className="timeline">
            <div className="timeline-item">
              <span className="year">2023–2027</span>
              <p><strong>B.Tech in CSE (AI)</strong> at MITS, AP<br />CGPA: 8.81</p>
            </div>
            <div className="timeline-item">
              <span className="year">2021–2023</span>
              <p><strong>Intermediate (MPC)</strong> – Sri Siddartha Junior College<br />Percentage: 94%</p>
            </div>
            <div className="timeline-item">
              <span className="year">2020–2021</span>
              <p><strong>Matriculation</strong> – Vivekananda Municipal High School<br />Percentage: 98%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
