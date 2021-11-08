import MenuMobile from "./components/mobile-navigation";
import Home from "./pages/Home";
import { NavBar } from "./sections/navbar";
import { Suspense } from "react";
import Loading from "./pages/Loading";
import About from "./pages/About";
import SkillPage from "./pages/Intro";
import Portfolio from "./pages/Portfolio";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MenuMobile />
      <div className="main">
        <div className="container" id="Home">
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        </div>
        <div className="container" id="About">
          <About />
        </div>
        <div className="container" id="Portfolio">
          <Portfolio />
        </div>
        <div className="container" id="My Skills">
          <SkillPage />
        </div>
        <div className="container" id="Contact">
          <ContactPage />
        </div>
        <footer className="footer container">
          <div>
            Copyright &copy; {new Date().getFullYear()}
            <br />
            Shout out to{" "}
            <a href="https://sketchfab.com/Brynnnnn" className="highlight">
              Brynnnnn
            </a>{" "}
            for amazing 3D model.
            <br />
            icons by <a href="https://icons8.com/">Icons8</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
