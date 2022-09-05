import "./About.scss";

import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>UK-based full-stack developer.</h1>
        <p>
          Hi, I'm a recent coding bootcamp graduate looking for a junior
          developer role.
        </p>
        <br />
        <div className="skills">
          <div className="tech-skills">
            <h2>Tech skills: </h2>
            <h3>Languages: JavaScript (& TypeScript), Python</h3>
            <h3>Frontend: React, CSS (& SCSS), HTML</h3>
            <h3>Backend: Node, SQL (& PSQL), Express, Axios, Firebase</h3>
            <h3>Other: Git & GitHub, Azure DevOps</h3>
          </div>
          <br />
          <div className="non-tech-skills">
            <h2>Non-tech skills:</h2>
            <div className="non-tech-skills-list">
              <h3>public-speaking</h3>
              <h3>intercultural communication</h3>
              <h3> self-teaching</h3>
            </div>
          </div>
        </div>
      </div>
      <Link className="next-button" to="experience-and-projects">
        Experience & Projects
      </Link>
    </div>
  );
}
