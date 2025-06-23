import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="certifications"><Certifications /></section>
      <section id="achievements"><Achievements /></section>
      <section id="contact"><Contact /></section>
      <Footer />

      {/* Floating Resume Download Button */}
      <a
        href="/resume.pdf"
        download
        className="resume-download"
        title="Download Resume"
      >
        📄
      </a>
    </div>
  );
}

export default App;
