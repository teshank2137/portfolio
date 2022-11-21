import React from "react";
import { Navbar } from "./components/Navbar";
import { Experience } from "./pages/Experience";
import { About } from "./pages/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Experience />
    </div>
  );
}

export default App;
