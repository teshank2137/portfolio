import React from "react";
import { Navbar } from "./components/Navbar";
import { Experience } from "./pages/Experience";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Projects />
      <About />
      <Experience />
    </div>
  );
}

export default App;
