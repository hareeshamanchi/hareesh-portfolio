import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="intro-card">
        <h1 className="glow-name">Hi, I’m <span>Hareesh Amanchi</span></h1>
        <p className="tagline">Aspiring AI & Web Developer | Creative Technologist 🚀</p>
        <p className="summary">
          I’m a passionate Computer Science undergrad from MITS, 
          specialized in Artificial Intelligence. I love building impactful web projects, 
          solving real-world problems, and scripting new ideas!
        </p>
        <a href="/contact" className="cta-button">Let’s Connect</a>
      </div>
    </div>
  );
}

export default Home;
