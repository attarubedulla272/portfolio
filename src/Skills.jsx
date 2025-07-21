import './Skills.css';
import { FaCode, FaServer, FaDatabase, FaTools, FaBrain, FaLightbulb } from 'react-icons/fa';

function Skills() {
  return (
    <section className="skills">
      <h1>Skills & Technologies</h1>
      <p>A diverse set of skills and technologies I've mastered to deliver exceptional results</p>

      <div className="cards">
        <div className="card">
          <FaCode className="icon" />
          <h3>Frontend</h3>
          <ul>
            <li>HTML5, CSS3, JavaScript</li>
            <li>Bootstrap, Tailwind CSS</li>
            <li>React</li>
          </ul>
        </div>

        <div className="card">
          <FaServer className="icon" />
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>RESTful APIs</li>
          </ul>
        </div>

        <div className="card">
          <FaDatabase className="icon" />
          <h3>Database</h3>
          <ul>
            <li>MongoDB & Mongoose</li>
            <li>SQL Databases</li>
          </ul>
        </div>

        <div className="card">
          <FaBrain className="icon" />
          <h3>Programming & DSA</h3>
          <ul>
            <li>Java Development</li>
            <li>Data Structures & Algorithms</li>
            <li>Problem Solving</li>
          </ul>
        </div>

        <div className="card">
          <FaTools className="icon" />
          <h3>Tools</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>AI Tools</li>
          </ul>
        </div>

        <div className="card">
          <FaLightbulb className="icon" />
          <h3>Soft Skills</h3>
          <ul>
            <li>Team Leadership</li>
            <li>Event Organization</li>
            <li>Mentoring</li>
            <li>Communication</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
