import StyledProjectCard from "./ProjectCardStyled";

const ProjectCard = ({
  title,
  description,
  image,
  link = null,
  github = null,
}) => {
  return (
    <StyledProjectCard>
      <section className="project-card">
        <div className="project-card-image">
          <img src={image} alt={title} />
        </div>
        <section className="project-card-content">
          <div className="project-card-content-1">
            <h3 className="card-title">{title}</h3>
          </div>
          <div className="project-card-content-2">
            <p>
              {description.map((point, index) => (
                <li className="point" key={index}>
                  {point}
                </li>
              ))}
            </p>
            <div className="project-card-links">
              {link && (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <div className="project-card-link">Visit Here</div>
                </a>
              )}
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <div className="project-card-link">View Code</div>
                </a>
              )}
            </div>
          </div>
        </section>
      </section>
    </StyledProjectCard>
  );
};
export default ProjectCard;
