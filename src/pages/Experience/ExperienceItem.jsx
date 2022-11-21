import React from "react";
import { StyledExperienceItem } from "./ExperienceItem.styled";

export const ExperienceItem = (props) => {
  const { color } = props;
  return (
    <StyledExperienceItem className="experience-item" color={color}>
      <div className="header">
        <div className="image">
          <div className="wrapper">
            <img src="https://picsum.photos/200" alt="alt" />
          </div>
        </div>
        <div className="text">
          <h2>Stealth StartUp</h2>
          <h3 className="position">Full Stack developer</h3>
        </div>
      </div>
      <div className="date">22/12 - 23/12</div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim minus
        fugit eum provident nobis sequi illum odio, nesciunt exercitationem,
        aspernatur similique saepe commodi ratione. Omnis repellat quod delectus
        ipsam eveniet?
      </p>
    </StyledExperienceItem>
  );
};
