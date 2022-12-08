import "./About.scss";

import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>UK-based full stack developer.</h1>
        <p>
          Hi, I'm Alistair. This website gives some brief information about my
          background.
        </p>
        <p>
          {" "}
          To see what I've been up to recently, you can visit my{" "}
          <a href="https://github.com/AlistairHopson">GitHub</a> or{" "}
          <a href="https://www.linkedin.com/in/alistair-hopson/">LinkedIn</a>.
        </p>
        <br />
        <div className="skills">
          <div className="tech-skills">
            <h2>Tech skills: </h2>
            <h3>Languages: C#, Python, JavaScript (& TypeScript),</h3>
            <h3>Frontend: React, CSS (& SCSS), HTML</h3>
            <h3>Backend: Node, SQL (& PostgreSQL), Express, Axios, Firebase</h3>
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
