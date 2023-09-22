
import React from "react";
import ProjectDataComponent from "./ProjectDataComponent.jsx";

// Importing the images
import likes from '../images/likes.avif';
import realEstate from '../images/real-estate.avif';
import stocks from '../images/stocks.avif';

// Getting the project data by calling the component with image props
const projectData = ProjectDataComponent({ likes, realEstate, stocks });

function Projects() {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid-wrapper">
        <div className="projects-grid">
          {projectData.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="project-card">
                <img src={project.imageUrl} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
