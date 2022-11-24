import React from "react";
import { PageHeader } from "../../components/ui";
import {
  AnimatedSpan,
  HomeWrapper,
  Name,
  Position,
  TextContainer,
} from "./Home.styled";

export const Home = () => {
  const produceSpans = (name) => {
    return name.split("").map((letter, index) => (
      <AnimatedSpan index={index} letter={letter} aria-hidden="true">
        {letter}
      </AnimatedSpan>
    ));
  };
  return (
    <HomeWrapper>
      <TextContainer>
        <Name>Teshank Raut</Name>
        <Position>
          <div className="text first" aria-label="Full Stack Developer">
            {produceSpans("Full Stack Developer")}
          </div>
          <div className="text second" aria-label="UI/UX Enthusiast">
            {produceSpans("UI/UX Enthusiast")}
          </div>
        </Position>
      </TextContainer>
    </HomeWrapper>
  );
};
