import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./navbar.jsx";
import MyHero from "./hero.jsx";
import About from "./about.jsx";
import Skills from "./skills.jsx";
import HorizontalBars from "./Chart.jsx";
import GitHubProfile from "./GitHubProfile.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div id="hero">
        <MyHero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <HorizontalBars />
      <div id="projects">
        <GitHubProfile />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}

export default App;
