import React from "react";
import { Cube, Face } from "./ProjectItem.styled";
import { Button } from "../../components/form/";

export const ProjectItem = () => {
  return (
    <Cube>
      <Face className="face-1">
        <img src="https://picsum.photos/500" alt="" />
        <div className="content">
          <h3 className="text-h">This is the title of the project</h3>
          <p className="text-p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            ipsum
          </p>
          <div className="buttons">
            <Button sm>Github</Button>
            <Button sm>Visit</Button>
          </div>
        </div>
      </Face>
      <Face className="face-2">
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto ipsum
        </div>
      </Face>
      <Face className="face-3">
        <div className="text">This is the title of the project</div>
      </Face>
    </Cube>
  );
};
