import ProjectCard from "../components/ProjectCard";
import useProjects from "../customHooks/useProjects";
import StyledPortfolio from "./styles/StyledPortfolio";

const Portfolio = () => {
  const getSpans = (text) => {
    let spans = [];
    for (let i = 0; i < text.length; i++) {
      spans.push(text[i]);
    }
    return spans;
  };
  const projects = useProjects();
  return (
    <StyledPortfolio>
      <h1 className="title">
        {getSpans("Portfolio").map((e, i) => (
          <span className="t" key={i}>
            {e}
          </span>
        ))}
      </h1>
      <div className="projects">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            github={project.github}
          />
        ))}
      </div>
    </StyledPortfolio>
  );
};

export default Portfolio;
