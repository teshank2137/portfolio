import styled, { keyframes } from "styled-components";
import { PageHeader } from "../../components/ui";
import { blue, pink, typeScale } from "../../utils";

export const HomeWrapper = styled.main`
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1rem;
  @media screen and (max-width: 920px) {
    grid-template-rows: 1fr 1fr;
  }
`;

export const DogContainer = styled.aside`
  grid-column: 8/13;
  @media screen and (max-width: 920px) {
    grid-column: 1/ 13;
  }
`;

export const TextContainer = styled.section`
  grid-column: 2/ 8;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: center;
  @media screen and (max-width: 1204px) {
    gap: 2.5rem;
  }
  @media screen and (max-width: 920px) {
    grid-column: 1/ 13;
    align-self: end;
    padding-inline: 1rem;
    justify-self: center;
    align-self: center;
  }
  @media screen and (max-width: 480px) {
    gap: 1.5rem;
  }
`;

export const Name = styled.h1`
  font-size: ${typeScale.bigDisplay};
  font-weight: bolder;
  margin: 0;
  color: white;
  @media screen and (max-width: 1204px) {
    font-size: ${typeScale.display};
  }

  @media screen and (max-width: 480px) {
    font-size: ${typeScale.headline};
  }
`;

const textRotate1 = keyframes`
0%{
  transform: translate3d(0, 0%, 0) rotateX(0deg)
}
40%{
  transform: translate3d(0, 0%, 0) rotateX(0deg)
}
60%{
  transform: translate3d(0, -100%, 0) rotateX(-90deg);
}
100%{
  transform: translate3d(0, -100%, 0) rotateX(-90deg);
}
`;

const textRotate2 = keyframes`
0%{
  transform: translate3d(0, 100%, 0) rotateX(-90deg);
}
40%{
  transform: translate3d(0, 100%, 0) rotateX(-90deg);
}
60%{
  transform: translate3d(0, 0%, 0) rotateX(0deg);
}
100%{
  transform: translate3d(0, 0%, 0) rotateX(0deg);
}
`;

export const Position = styled(PageHeader)`
  margin-block: 0;
  margin-inline: 0;
  margin: 0;
  padding: 0;
  position: relative;
  color: ${blue["50"]};
  cursor: default;
  .text {
    span {
      display: inline-block;
      will-change: transform;
      transform-style: preserve-3d;
      transform-origin: bottom;
      animation: ${textRotate1} 2.4s infinite alternate;
    }
    &.second {
      color: ${pink["50"]};
      position: absolute;
      top: 2%;
      left: 0;
      span {
        transform-origin: bottom;
        transform: translate3d(0, 100%, 0) rotateX(-90deg);
        animation: ${textRotate2} 2.4s infinite alternate;
      }
    }
  }
  @media screen and (max-width: 1204px) {
    font-size: ${typeScale.title};
  }
  @media screen and (max-width: 480px) {
    font-size: ${typeScale.subtitle};
  }
`;

export const AnimatedSpan = styled.span`
  transition: 0.5s;
  animation-delay: ${(props) => props.index * 0.05}s !important;
  padding: ${(props) => (props.letter === " " ? "0.325rem" : null)};
`;
