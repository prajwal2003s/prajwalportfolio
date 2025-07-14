import "./Projects.css";
import personaldata from "./personal.json";

const Projects = () => {
  const projectData = personaldata.projects;

  return (
    <section id={projectData.section.id} className="projects">
      <div className="container">
        <div className="section-header">
          <h2>{projectData.section.title}</h2>
          <p>{projectData.section.subtitle}</p>
        </div>

        <div className="projects-grid">
          {projectData.list.map((project, index) => (
            <div key={index} className="project-card card">
              <div className="project-image">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                />
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    <i className="fab fa-github"></i> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default Projects;
