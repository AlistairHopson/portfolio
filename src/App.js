import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";
import ExperienceAndProjects from "./components/ExperienceAndProjects/ExperienceAndProjects";
import Contact from "./components/Contact/Contact";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route
            path="/experience-and-projects"
            element={<ExperienceAndProjects />}
          />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
