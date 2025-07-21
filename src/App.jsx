import './App.css';
import Header from './Header';
import Hero from './Hero';
import Skills from './Skills';
import CodingProfiles from './CodingProfiles';
import Education from './Education';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <CodingProfiles />
      <Education />
      <Footer />
    </>
  );
}

function ShopHubPage() {
  return (
    <div className="skills" style={{ minHeight: '80vh', paddingTop: '100px' }}>
      <h1>ShopHub</h1>
      <p>E-commerce web app featuring product search, cart, and order management.</p>
      <ul>
        <li>Developed using React, Redux, and RESTful APIs.</li>
        <li>Features: Product catalog, shopping cart, order history, user authentication.</li>
      </ul>
      <Link to="/projects" style={{ display: 'inline-block', marginTop: '2rem', color: '#2563eb', textDecoration: 'underline' }}>&larr; Back to Projects</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/shop-hub" element={<ShopHubPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
