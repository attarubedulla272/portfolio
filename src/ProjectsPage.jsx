import './Skills.css';
// Use the actual StayHub project image from the live site
const stayHubImgUrl = 'https://stayhub-yhpx.onrender.com/_next/image?url=%2Fimages%2Flisting1.jpg&w=384&q=75';
const shopHubImgUrl = 'https://e-commerce-website-6y78.onrender.com/_next/image?url=%2Fuploads%2Fiphone14pro.jpg&w=384&q=75';

function ProjectsPage() {
  return (
    <div className="skills" style={{ minHeight: '80vh', paddingTop: '100px' }}>
      <h1>Projects</h1>
      <div className="cards">
        <a href="https://stayhub-yhpx.onrender.com" target="_blank" rel="noopener noreferrer" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
          {/* Project Image */}
          <div style={{ width: '100%', height: '180px', background: '#e5e7eb', borderRadius: '10px', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <img src={stayHubImgUrl} alt="Stay Hub Screenshot" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h3>
            Stay Hub
            <span style={{ marginLeft: 8, fontSize: '0.9em', color: '#2563eb', textDecoration: 'underline', display: 'inline-flex', alignItems: 'center' }}>
              (Live Demo)
              <span style={{ marginLeft: 4, fontSize: '1em' }}>&#8599;</span>
            </span>
          </h3>
          <ul>
            <li>Hotel booking platform with real-time availability and secure payments.</li>
            <li>Built with React, Node.js, Express, and MongoDB.</li>
          </ul>
        </a>
        <a href="https://e-commerce-website-6y78.onrender.com" target="_blank" rel="noopener noreferrer" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
          {/* Project Image */}
          <div style={{ width: '100%', height: '180px', background: '#e5e7eb', borderRadius: '10px', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            <img src={shopHubImgUrl} alt="ShopHub Screenshot" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h3>
            ShopHub
            <span style={{ marginLeft: 8, fontSize: '0.9em', color: '#2563eb', textDecoration: 'underline', display: 'inline-flex', alignItems: 'center' }}>
              (Live Demo)
              <span style={{ marginLeft: 4, fontSize: '1em' }}>&#8599;</span>
            </span>
          </h3>
          <ul>
            <li>E-commerce web app featuring product search, cart, and order management.</li>
            <li>Developed using React, Redux, and RESTful APIs.</li>
          </ul>
        </a>
      </div>
    </div>
  );
}

export default ProjectsPage; 