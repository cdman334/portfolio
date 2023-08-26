import React from "react";
import Header from "./Header";
import About from "./About";
import ModifiedProjects from "./ModifiedProjects";
import "./App.css"

function App() {
  return (
      <div className="container">
          <Header />
          <About />
          <ModifiedProjects />
      </div>
  );
}

export default App;