import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Vaidyasthana",
    description: "AI-powered medical report portal from birth to death. Smart data storage with integrated AI insights.",
    tools: ["AI", "React", "MongoDB", "Express"],
  },
 
];

function Projects() {
  return (
    <div className="projects-container">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-inner">
              <div className="flip-front">
                <h3>{project.title}</h3>
              </div>
              <div className="flip-back">
                <p>{project.description}</p>
                <ul>
                  {project.tools.map((tool, i) => (
                    <li key={i}>{tool}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
