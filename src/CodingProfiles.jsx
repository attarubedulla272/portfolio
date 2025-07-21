import './CodingProfiles.css';

function CodingProfiles() {
  return (
    <div className="coding-profiles">
      <h1>Coding Profiles</h1>
      <p>Check out my coding journey and problem-solving skills across various platforms</p>

      <div className="profile-cards">
        <div className="profile-card leetcode">
          <h3>LeetCode</h3>
          <p className="username">@yourleetcode</p>
          <p className="highlight">Solved 150+ DSA problems</p>
          <p>Practicing algorithms and data structures regularly.</p>
          <a href="https://leetcode.com/u/lfPbrQWSwF/" target="_blank" rel="noreferrer">View Profile</a>
        </div>

        <div className="profile-card github">
          <h3>GitHub</h3>
          <p className="username">@yourgithub</p>
          <p className="highlight">10+ repositories</p>
          <p>Building projects using modern web technologies and open source.</p>
          <a href="https://github.com/" target="_blank" rel="noreferrer">View Profile</a>
        </div>
      </div>
    </div>
  );
}

export default CodingProfiles;
