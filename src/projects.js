import React from 'react';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="project-list">
        <div className="project-item">
          <h2>Project 1</h2>
          <p>Description of the first project.</p>
        </div>
        <div className="project-item">
          <h2>Project 2</h2>
          <p>Description of the second project.</p>
        </div>
        {/* Add more projects as needed */}
      </div>
    </div>
  );
};

export default Projects;