import React, { useRef } from "react";
import { Page } from "../../components/Page";
import { NextButton } from "./carasoulButton";
import { ProjectItem } from "./ProjectItem";
import { Carasoul, ProjectContainer } from "./Projects.styled";

export const Projects = () => {
  const ref = useRef(null);

  const moveLeft = (e) => {
    ref.current.style.transform = `translateX(-25%)`;
  };
  const moveRight = (e) => {
    ref.current.style.transform = `translateX(0%)`;
  };

  return (
    <Page header="Projects">
      <ProjectContainer ref={ref}>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </ProjectContainer>
      <Carasoul>
        <NextButton flip onClick={moveRight} />
        <NextButton onClick={moveLeft} />
      </Carasoul>
    </Page>
  );
};
