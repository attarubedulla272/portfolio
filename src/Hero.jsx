import './Hero.css';
// import profileImg from './assets/profile.jpg'; // replace with your actual image
import profileImg from './assets/ubedullaprofile.jpeg';
import { Link } from 'react-router-dom';
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Welcome to <span className="highlight">Attar Ubedulla Portfolio</span>
        </h1>
        <p>
          Hi there! I create elegant, high-performance web applications that solve real-world problems.
          Specializing in modern JavaScript frameworks and scalable architecture.
        </p>
        <div className="hero-buttons">
          <Link to="/contact" className="btn-primary">Contact Me →</Link>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:youremail@example.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={profileImg} alt="Profile" />
      </div>
    </section>
  );
}

export default Hero;
