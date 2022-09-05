import "./ExperienceAndProjects.scss";

import axiosIcon from "../../assets/images/tech-skills-icons/axios-icon.png";
import cssIcon from "../../assets/images/tech-skills-icons/css-icon.svg";
import expressIcon from "../../assets/images/tech-skills-icons/express-icon.png";
import firebaseIcon from "../../assets/images/tech-skills-icons/firebase-icon.png";
import gitIcon from "../../assets/images/tech-skills-icons/git-icon.png";
import htmlIcon from "../../assets/images/tech-skills-icons/html-icon.png";
import jestIcon from "../../assets/images/tech-skills-icons/jest-icon.png";
import jsIcon from "../../assets/images/tech-skills-icons/js-icon.png";
import nodeIcon from "../../assets/images/tech-skills-icons/node-icon.png";
import psqlIcon from "../../assets/images/tech-skills-icons/PSQL-icon.png";
import reactIcon from "../../assets/images/tech-skills-icons/react-icon.svg.png";
import sassIcon from "../../assets/images/tech-skills-icons/SASS-icon.png";
import tensorflowIcon from "../../assets/images/tech-skills-icons/tensorflow-icon.png";

export default function ExperienceAndProjects() {
  return (
    <div className="container">
      <div className="experience-intro">
        <h1>2022: Northcoders Skills Bootcamp in Coding</h1>
        <br />
        <h2>
          Participated in <a href="https://northcoders.com/">Northcoders</a>'
          13-week industry-led intensive programming course:
        </h2>
      </div>
      <br />

      <div className="course-container">
        <div className="course-section">
          <div className="tile fundamentals">
            <div className="title">
              <h2>Fundamentals </h2>
              <h3>(Weeks 2-4)</h3>
            </div>
            <p>
              Daily coding sprints using programming best practices, pair
              programming, test-driven development (Jest), version control
              (Git), functional & object-oriented programming.{" "}
            </p>
          </div>
          <div className="tile skills fundamentals-skills">
            <div className="skill-icon">
              <img src={jsIcon} />
              <strong>JAVASCRIPT</strong>
            </div>
            <div className="skill-icon">
              <img src={nodeIcon} />
              <strong>NODE</strong>
            </div>
            <div className="skill-icon">
              <img src={gitIcon} />
              <strong>GIT</strong>
            </div>
            <div className="skill-icon">
              <img src={jestIcon} />
              <strong>JEST</strong>
            </div>
          </div>
        </div>
        <hr />
        <div className="course-section">
          <div className="tile backend">
            <div className="title">
              <h2>Backend</h2>
              <h3>(Weeks 5-7)</h3>
            </div>
            <p>
              Deepened understanding of backend development using Node; created
              an API (Newsbloom) for a Reddit-style news website using Express,
              Axios, and PSQL.
            </p>
            <p>
              See Newsbloom-API:{" "}
              <a href="https://github.com/AlistairHopson/newsbloom-api">
                GitHub
              </a>
            </p>
          </div>
          <div className="tile skills">
            <div className="skill-icon">
              <img src={expressIcon} />
              <strong>EXPRESS</strong>
            </div>
            <div className="skill-icon">
              <img src={psqlIcon} />
              <strong>PSQL</strong>
            </div>
            <div className="skill-icon">
              <img src={axiosIcon} />
              <strong>AXIOS</strong>
            </div>
          </div>
        </div>
        <hr />

        <div className="course-section">
          <div className="tile frontend">
            <div className="title">
              <h2>Frontend</h2>
              <h3>(Weeks 8-10)</h3>
            </div>
            <p>
              Explored accessible frontend development with React; created
              Newsbloom, a mobile-first news aggregation application.
            </p>
            <p>
              See Newsbloom:{" "}
              <a href="https://github.com/AlistairHopson/newsbloom">GitHub</a> /{" "}
              <a href="https://newsbloom.netlify.app/">Hosted</a>{" "}
            </p>
          </div>
          <div className="tile skills">
            <div className="skill-icon">
              <img src={reactIcon} />
              <strong>REACT</strong>
            </div>

            <div className="skill-icon">
              <img src={htmlIcon} />
              <strong>HTML</strong>
            </div>
            <div className="skill-icon">
              <img src={cssIcon} />
              <strong>CSS</strong>
            </div>
          </div>
        </div>
        <hr />
        <div className="course-section">
          <div className="tile project-phase">
            <div className="title">
              <h2>Project-phase</h2>
              <h3>(Weeks 11-13)</h3>
            </div>
            <p>
              Collaborated with three other bootcamp participants on a
              group-project using agile-work practices. Emphasis on
              self-teaching technologies not covered during the bootcamp.
            </p>
            <p>
              See Zen Typing:{" "}
              <a href="https://github.com/Northcoders-PAST-team/zen-typing">
                GitHub /{" "}
              </a>
              <a href="https://zentyping.web.app/">Hosted</a> /{" "}
              <a href="https://northcoders.com/projects/aug-2022/zen-typing">
                Presentation
              </a>
            </p>
          </div>
          <div className="tile skills">
            <div className="skill-icon">
              <img src={firebaseIcon} />
              <strong>FIREBASE</strong>
            </div>
            <div className="skill-icon">
              <img src={tensorflowIcon} />
              <strong>
                TENSORFLOW
                <br />
                <a href="https://github.com/justadudewhohacks/face-api.js/">
                  (Face-API.js)
                </a>
              </strong>
            </div>
            <div className="skill-icon">
              <img src={sassIcon} />
              <strong>SASS</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
