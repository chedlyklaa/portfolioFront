const Projects = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Project 1</h3>
          <p>Description of your first project</p>
          <div className="project-links">
            <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>Description of your second project</p>
          <div className="project-links">
            <a href="#" target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;