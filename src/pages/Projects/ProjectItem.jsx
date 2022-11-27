import React from "react";
import { Cube, Face } from "./ProjectItem.styled";
import { Button } from "../../components/form/";

export const ProjectItem = ({ data }) => {
  return (
    <Cube>
      <Face className="face-1" image={data.image}>
        <div className="img"></div>
        <div className="content">
          <h3 className="text-h">{data.title}</h3>
          <p className="text-p">{data.description}</p>
          <div className="buttons">
            <Button sm>Github</Button>
            <Button sm>Visit</Button>
          </div>
        </div>
      </Face>
      <Face className="face-2">
        <div className="text">{data.description}</div>
      </Face>
      <Face className="face-3">
        <div className="text">{data.title}</div>
      </Face>
    </Cube>
  );
};
