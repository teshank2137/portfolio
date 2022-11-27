import styled from "styled-components";
import { blue, typeScale } from "../../utils";

export const StyledExperienceItem = styled.div`
  overflow: hidden;
  background-color: ${(props) =>
    props.color ? props.color["60"] : blue["60"]};

  color: ${(props) => (props.color ? props.color["00"] : blue["00"])};
  border: 4px solid ${(props) => (props.color ? props.color["00"] : blue["00"])};
  box-shadow: 0.8rem 0.8rem 0
    ${(props) => (props.color ? props.color["00"] : blue["00"])};
  border-radius: 1rem;
  height: 400px;
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.25rem;
  cursor: pointer;
  .date {
    display: none;
    font-size: ${typeScale.paragraph};
    font-weight: bold;
  }

  .header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    rotate: 90deg;
    transform: translateX(40px);
    transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.2s;
    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 0.5rem;

      .wrapper {
        box-shadow: 0.2rem 0.2rem 0
          ${(props) => (props.color ? props.color["00"] : blue["00"])};
        border: 2px solid
          ${(props) => (props.color ? props.color["00"] : blue["00"])};
        width: 5.6rem;
        height: 5.6rem;
        border-radius: 50%;
        overflow: hidden;
        rotate: -90deg;
        background-color: ${(props) =>
          props.color ? props.color["00"] : blue["00"]};
      }
      img {
        width: 100%;
        object-fit: cover;
      }
    }

    h2 {
      font-size: ${typeScale.title};
      line-height: 2.4rem;
    }
    .position {
      display: none;
    }
  }
  p {
    display: none;
    font-size: ${typeScale.text};
  }

  &.active {
    width: 600px;
    .date {
      display: block;
    }
    p {
      display: block;
    }

    .header {
      justify-content: start;
      align-items: center;
      rotate: 0deg;
      transform: translateX(0%);
      .image {
        .wrapper {
          rotate: 0deg;
        }
      }
      .text {
        .position {
          display: block;
        }
      }
    }
  }
`;

export const ExperienceHeader = styled.div``;
