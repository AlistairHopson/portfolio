import "./Nav.scss";

import { state, useState } from "react";

import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const [openedBurger, setOpenedBurger] = useState(false);

  return (
    <>
      <div className="nav-bar">
        <nav>
          <div className="name-burger">
            <NavLink
              className={(isActive) => "home" + (!isActive ? "unselected" : "")}
              to="/"
            >
              <h1>Alistair Hopson</h1>
              <div className="animated-line"></div>
            </NavLink>
            <div
              className={"burger"}
              onClick={() => {
                openedBurger ? setOpenedBurger(false) : setOpenedBurger(true);
              }}
            >
              {" "}
              <FontAwesomeIcon icon={openedBurger ? faChevronDown : faBars} />
            </div>
          </div>
          <div
            className={openedBurger ? "nav-options opened" : "nav-options"}
            id="burger-menu"
          >
            <NavLink
              className={({ isActive }) =>
                "about" + (!isActive ? "-unselected" : "")
              }
              to="/"
            >
              <h2>About</h2>
              <div className="animated-line"></div>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                "experience-and-projects" + (!isActive ? "-unselected" : "")
              }
              to="/experience-and-projects"
            >
              <h2>Experience & Projects</h2>
              <div className="animated-line"></div>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                "contact" + (!isActive ? "-unselected" : "")
              }
              to="/contact"
            >
              <h2>Contact</h2>
              <div className="animated-line"></div>
            </NavLink>
          </div>
        </nav>
      </div>
    </>
  );
}
