import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>&copy; {new Date().getFullYear()} Hareesh Amanchi</p>
        <p>Madanapalle, Andhra Pradesh</p>
      </div>

      <div className="footer-right">
        {/* === Phone === */}
        <a
          href="tel:+917207097501"      /* ← updated number */
          className="footer-icon"
          title="Call Hareesh"
        >
          <FontAwesomeIcon icon={faPhone} />
        </a>

        {/* === Email === */}
        <a
          href="mailto:hareeshamanchi@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="footer-icon"
          title="Email"
        >
          <FontAwesomeIcon icon={faGoogle} />
        </a>

        {/* === GitHub === */}
        <a
          href="https://github.com/hareeshamanchi"
          target="_blank"
          rel="noreferrer"
          className="footer-icon"
          title="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>

        {/* === LinkedIn === */}
        <a
          href="https://in.linkedin.com/in/hareeshamanchi"
          target="_blank"
          rel="noreferrer"
          className="footer-icon"
          title="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
