import React from "react";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import "./App.css"

function App() {
  return (
      <div className="container">
          <Header />
          <About />
          <Projects />
      </div>
  );
}

export default App;