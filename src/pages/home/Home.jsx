import React, { useContext, useEffect } from "react";
import { Logo, PageHeader } from "../../components/ui";
import { useInView } from "react-intersection-observer";
import {
  AnimatedSpan,
  HomeWrapper,
  Name,
  Position,
  TextContainer,
} from "./Home.styled";
import { NavbarContext } from "../../context";

export const Home = () => {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  const setPage = useContext(NavbarContext);

  useEffect(() => {
    if (inView) {
      setPage("home");
    }
  }, [inView]);

  const produceSpans = (name) => {
    return name.split("").map((letter, index) => (
      <AnimatedSpan index={index} letter={letter} aria-hidden="true">
        {letter}
      </AnimatedSpan>
    ));
  };
  return (
    <HomeWrapper ref={ref} id="home-page">
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
