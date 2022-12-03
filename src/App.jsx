import React from "react";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Experience } from "./pages/Experience";
import { Home } from "./pages/home";
import { Projects } from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Home />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </Navbar>
    </div>
  );
}

export default App;
