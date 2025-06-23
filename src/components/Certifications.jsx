import React from "react";
import "./Certifications.css";

function Certifications() {
  const certificates = [
    {
      title: "Artificial Intelligence Primer Certification",
      issuer: "Infosys Springboard",
      date: "June 9, 2025",
      description:
        "Completed a foundational course on AI principles, applications, and real-world impact through Infosys Springboard platform.",
      file: "/certificates/Artificial Intelligence Primer Certification.pdf"
    },
    {
      title: "Effective Writing",
      issuer: "NPTEL - IIT Roorkee",
      date: "Jan–Feb 2024",
      description:
        "Gained expertise in structured writing, grammar, clarity, and professional communication through a government-certified NPTEL course.",
      file: "/certificates/Effective Writing.pdf"
    },
    {
      title: "German - I",
      issuer: "NPTEL",
      date: "Jul–Oct 2024",
      description:
        "Learned basic German language skills including sentence structure, grammar, and vocabulary. Focused on listening and comprehension.",
      file: "/certificates/German - I.pdf"
    },
    {
      title: "Design, Technology and Innovation",
      issuer: "NPTEL",
      date: "Jan–Mar 2025",
      description:
        "Explored design thinking, technology innovation strategies, and real-world product design through this creative and technical NPTEL course.",
      file: "/certificates/Design, Technology and Innovation.pdf"
    },
    {
      title: "Understanding Incubation and Entrepreneurship",
      issuer: "NPTEL",
      date: "Jan–Apr 2025",
      description:
        "Completed a 12-week NPTEL course focused on entrepreneurship fundamentals, startup incubation, funding strategies, and business innovation processes.",
      file: "/certificates/Understanding Incubation and Entrepreneurship.pdf"
    },
    {
      title: "Principles of Generative AI Certification",
      issuer: "Wingspan",
      date: "June 9, 2025",
      description:
        "Successfully completed a certification on Generative AI, covering foundational concepts such as prompt engineering, generative models, diffusion techniques, and ethical AI considerations.",
      file: "/certificates/Principles of Generative AI Certification.pdf"
    }
  ];

  return (
    <div className="certifications-container">
      <h1 className="cert-title">📜 My Certifications</h1>
      <p className="cert-subtitle">
        Below are some of the certifications I've earned. You can also visit my{" "}
        <a
          href="https://www.linkedin.com/in/hareeshamanchi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn Profile
        </a>{" "}
        to explore more of my achievements.
      </p>

      <div className="cert-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="cert-card">
            <h2>{cert.title}</h2>
            <p><strong>Issuer:</strong> {cert.issuer}</p>
            <p><strong>Date:</strong> {cert.date}</p>
            <p className="cert-desc">{cert.description}</p>
            <a
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="view-btn"
            >
              🔍 View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
