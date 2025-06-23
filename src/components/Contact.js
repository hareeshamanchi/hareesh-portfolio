import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="section-title">Let’s Connect</h2>

      <div className="contact-grid">
        <div className="contact-card fade-in">
          <h3>📧 Email</h3>
          <p><a href="mailto:hareeshamanchi@gmail.com">hareeshamanchi@gmail.com</a></p>
          <p><a href="mailto:amanchihareesh@gmail.com">amanchihareesh@gmail.com</a></p>
        </div>

        <div className="contact-card fade-in delay-1">
          <h3>🔗 Links</h3>
          <p><a href="https://in.linkedin.com/in/hareeshamanchi" target="_blank" rel="noreferrer">LinkedIn</a></p>
          <p><a href="https://github.com/hareeshamanchi" target="_blank" rel="noreferrer">GitHub</a></p>
        </div>

        <div className="contact-card fade-in delay-2">
          <h3>📍 Location</h3>
          <p>Madanapalle, Andhra Pradesh</p>
          <p>517325</p>
        </div>

        <div className="contact-cta fade-in delay-3">
          <h3>🚀 Let's Work Together</h3>
          <a className="cta-button" href="mailto:hareeshamanchi@gmail.com">Send a Message</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
