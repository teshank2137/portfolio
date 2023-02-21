import React, { useRef } from "react";
import { Page } from "../../components/Page";
import { projects } from "../../data";
import { NextButton } from "./carasoulButton";
import { ProjectItem } from "./ProjectItem";
import { Carasoul, ProjectContainer } from "./Projects.styled";

export const Projects = () => {
  const ref = useRef(null);

  const moveLeft = (e) => {
    console.log(ref.current.scrollLeft);
    document.querySelector(".wrapper").scrollLeft += 600;
  };
  const moveRight = (e) => {
    document.querySelector(".wrapper").scrollLeft -= 650;
  };

  return (
    <Page header="Projects">
      <ProjectContainer ref={ref}>
        <div className="wrapper">
          {projects.map((data, index) => (
            <ProjectItem data={data} key={index} index={index} />
          ))}
        </div>
      </ProjectContainer>
      <Carasoul>
        <NextButton flip onClick={moveRight} />
        <NextButton onClick={moveLeft} />
      </Carasoul>
    </Page>
  );
};
