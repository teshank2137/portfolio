import React from "react";
import { AboutItemWrapper } from "./AboutItem.styled";

export const AboutItem = ({ color, active }) => {
  return (
    <AboutItemWrapper color={color} active={active} className="about-item">
      <div className="logo">
        <img src="https://picsum.photos/200" alt="title" />
      </div>
      <div className="text">
        <h3>D.Y. Patil college of Engineering, Pune</h3>
        <p>Bachelor's in Computer Engineering (2019- 2023)</p>
      </div>
    </AboutItemWrapper>
  );
};
