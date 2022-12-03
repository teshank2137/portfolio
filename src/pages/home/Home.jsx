import { Canvas } from "@react-three/fiber";
import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { NavbarContext } from "../../context";
import Dog from "./Dog";
import {
  AnimatedSpan,
  DogContainer,
  HomeWrapper,
  Name,
  Position,
  TextContainer,
} from "./Home.styled";

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
      <AnimatedSpan
        index={index}
        letter={letter}
        aria-hidden="true"
        key={index}
      >
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
      <DogContainer>
        <Canvas camera={{ position: [0, 2, 5] }}>
          <Dog />
        </Canvas>
      </DogContainer>
    </HomeWrapper>
  );
};
