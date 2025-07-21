import './ContactPage.css';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="contact-section">
      <div className="contact-center">
        <div className="contact-icon-bg">
          <FaEnvelope size={32} color="var(--color-primary)" />
        </div>
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-desc">
          I'd love to hear from you! Feel free to reach out for project inquiries, collaborations, or just to say hello.
        </p>
        <div className="contact-card">
          <a href="mailto:ubedullaattar2@gmail.com" className="contact-email">
            <FaEnvelope style={{ marginRight: 8 }} /> ubedullaattar2@gmail.com
          </a>
        </div>
        <div className="contact-connect-label">Connect With Me</div>
        <div className="contact-socials">
          <a href="https://www.linkedin.com/in/attar-ubedulla-46207a376/" target="_blank" rel="noopener noreferrer" className="contact-social contact-linkedin">
            <FaLinkedin />
          </a>
          <a href="mailto:ubedullaattar2@gmail.com" className="contact-social contact-emailicon">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
} 