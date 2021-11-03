import ProjectCard from "../components/ProjectCard";
import StyledPortfolio from "./styles/StyledPortfolio";

const Portfolio = () => {
  const getSpans = (text) => {
    let spans = [];
    for (let i = 0; i < text.length; i++) {
      spans.push(text[i]);
    }
    return spans;
  };
  const projects = [
    {
      title: "Find Techie",
      description:
        "Incididunt qui cupidatat eiusmod sint ex proident quis velit ipsum. Culpa culpa magna Lorem mollit. Ipsum ad eu laborum cupidatat consequat eu cupidatat excepteur. Cupidatat enim sunt incididunt ipsum velit. Do ut dolor ipsum aliquip. Est et pariatur anim et aliqua.",
      image: "https://source.unsplash.com/random",
      link: "https://www.google.com",
      github: "https://www.github.com",
    },
    {
      title: "Smart Attendance App",
      description:
        "Incididunt qui cupidatat eiusmod sint ex proident quis velit ipsum. Culpa culpa magna Lorem mollit. Ipsum ad eu laborum cupidatat consequat eu cupidatat excepteur. Cupidatat enim sunt incididunt ipsum velit. Do ut dolor ipsum aliquip. Est et pariatur anim et aliqua.",
      image: "https://source.unsplash.com/random",
      // link: "https://www.google.com",
      github: "https://www.github.com",
    },
    {
      title: "Stock Market Prediction API",
      description:
        "Incididunt qui cupidatat eiusmod sint ex proident quis velit ipsum. Culpa culpa magna Lorem mollit. Ipsum ad eu laborum cupidatat consequat eu cupidatat excepteur. Cupidatat enim sunt incididunt ipsum velit. Do ut dolor ipsum aliquip. Est et pariatur anim et aliqua.",
      image: "https://source.unsplash.com/random",
      link: "https://www.google.com",
      // github: "https://www.github.com",
    },
    {
      title: "Algorithm Visualizer",
      description:
        "Incididunt qui cupidatat eiusmod sint ex proident quis velit ipsum. Culpa culpa magna Lorem mollit. Ipsum ad eu laborum cupidatat consequat eu cupidatat excepteur. Cupidatat enim sunt incididunt ipsum velit. Do ut dolor ipsum aliquip. Est et pariatur anim et aliqua.",
      image: "https://source.unsplash.com/random",
      link: "https://www.google.com",
      github: "https://www.github.com",
    },
    {
      title: "My Portfolio",
      description:
        "Incididunt qui cupidatat eiusmod sint ex proident quis velit ipsum. Culpa culpa magna Lorem mollit. Ipsum ad eu laborum cupidatat consequat eu cupidatat excepteur. Cupidatat enim sunt incididunt ipsum velit. Do ut dolor ipsum aliquip. Est et pariatur anim et aliqua.",
      image: "https://source.unsplash.com/random",
      link: "https://www.google.com",
      github: "https://www.github.com",
    },
    {
      title: "Project Automation",
      description:
        "Incididunt qui cupidatat eiusmod sint ex proident quis velit ipsum. Culpa culpa magna Lorem mollit. Ipsum ad eu laborum cupidatat consequat eu cupidatat excepteur. Cupidatat enim sunt incididunt ipsum velit. Do ut dolor ipsum aliquip. Est et pariatur anim et aliqua.",
      image: "https://source.unsplash.com/random",
      link: "https://www.google.com",
      github: "https://www.github.com",
    },
  ];
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
