import React from "react";
import { StyledExperienceItem } from "./ExperienceItem.styled";

export const ExperienceItem = (props) => {
  const { data } = props;
  return (
    <StyledExperienceItem className="experience-item" color={data.color}>
      <div className="header">
        <div className="image">
          <div className="wrapper">
            <img src={data.logo} alt="logo" />
          </div>
        </div>
        <div className="text">
          <h2>{data.name}</h2>
          <h3 className="position">{data.title}</h3>
        </div>
      </div>
      <div className="date">
        {data.joined} - {data.end}
      </div>
      <p>{data.bio}</p>
    </StyledExperienceItem>
  );
};
