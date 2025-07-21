import './Education.css';

function Education() {
  return (
    <section className="education-section">
      <h2 className="education-title">Education</h2>

      {/* B.Tech */}
      <div className="education-card">
        <div className="icon">🎓</div>
        <div className="info">
          <div className="top-row">
            <h3>Mohan Babu University, Andhra Pradesh</h3>
            <span className="date">2022 – 2026</span>
          </div>
          <div className="sub-row">
            <span className="school">B.Tech in Computer Science and Engineering</span>
            <span className="gpa">CGPA: 8.2</span>
          </div>
        </div>
      </div>

      {/* Intermediate */}
      <div className="education-card">
        <div className="icon">🏫</div>
        <div className="info">
          <div className="top-row">
            <h3>Sri Chaitanya College, Tirupati</h3>
            <span className="date">2021 – 2022</span>
          </div>
          <div className="sub-row">
            <span className="school">Intermediate (MPC)</span>
            <span className="gpa">Percentage: 76%</span>
          </div>
        </div>
      </div>

      {/* SSC */}
      <div className="education-card">
        <div className="icon">🏫</div>
        <div className="info">
          <div className="top-row">
            <h3>Sri Raju High School, Rayachoty</h3>
            <span className="date">2019 – 2020</span>
          </div>
          <div className="sub-row">
            <span className="school">Secondary School Certificate</span>
            <span className="gpa">Percentage: 100%</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
