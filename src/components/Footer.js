import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>&copy; {new Date().getFullYear()} Hareesh Amanchi</p>
        <p>Madanapalle, Andhra Pradesh</p>
      </div>

      <div className="footer-right">
        <a
          href="mailto:hareeshamanchi@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="footer-icon"
          title="Email"
        >
          <FontAwesomeIcon icon={faGoogle} />
        </a>
        <a
          href="https://github.com/hareeshamanchi"
          target="_blank"
          rel="noreferrer"
          className="footer-icon"
          title="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
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
