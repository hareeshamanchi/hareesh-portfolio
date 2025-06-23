import React from "react";
import "./Achievements.css";

const achievements = [
  {
    title: "Runner-Up - IDEATHON 2023",
    detail: "Presented 'Farm Guardian' at MITS by Mechanical Dept.",
    icon: "🏆",
  },
  {
    title: "Finalist - INNOSPARK 1.0",
    detail: "Cleared two rounds of National Hackathon by CSI + CSE MITS.",
    icon: "🎯",
  },
  {
    title: "Smart India Hackathon",
    detail: "Built AYUSH Health Portal – Oct 2024.",
    icon: "🧠",
  },
  {
    title: "CodeStrom 2k24",
    detail: "36-hour Hackathon participant at NREC Hyderabad.",
    icon: "💻",
  },
  {
    title: "CINECRAFT Winner",
    detail: "1st Prize in Script Writing by FMC, MITS.",
    icon: "🎬",
  },
  {
    title: "2⭐ in C on HackerRank",
    detail: "Also earned Problem Solving badge.",
    icon: "⭐",
  },
  {
    title: "Campus Ambassador – GFG",
    detail: "2023–2024 for GeeksForGeeks at MITS.",
    icon: "🧑‍💼",
  },
];

function Achievements() {
  return (
    <div className="achievements-container">
      <h2 className="section-title">Achievements</h2>
      <div className="achievements-timeline">
        {achievements.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-icon">{item.icon}</div>
            <div className="timeline-content">
              <h4>{item.title}</h4>
              <p>{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
