import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <span className="footer-name">Attar Ubedulla</span><br />
          <span className="footer-copy">© 2025 All Rights Reserved</span>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-icons">
          <a href="https://www.linkedin.com/in/attar-ubedulla-46207a376/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:ubedullaattar2@gmail.com">
            <FaEnvelope />
          </a>
          <a href="https://github.com/attarubedulla272" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        Made with <span className="heart">❤️</span> by Attar Ubedulla
      </div>
    </footer>
  );
}
