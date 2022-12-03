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

  @media screen and (max-width: 940px) {
    gap: 0.25rem;
    .header {
      gap: 0.75rem;
      h2 {
        font-size: ${typeScale.subtitle};
        line-height: 1.75rem;
      }
      .position {
        font-size: ${typeScale.paragraph};
        line-height: 1.5rem;
      }
      .image {
        .wrapper {
          width: 4.8rem;
          height: 4.8rem;
        }
      }
    }
    .data {
      font-size: ${typeScale.helperText};
    }

    p {
      font-size: ${typeScale.paragraph};
    }
  }

  @media screen and (max-width: 720px) {
    height: auto;
    width: 100%;
    grid-column: span 1;
    grid-row: 2;
    .text {
      display: none;
    }

    .header,
    .image,
    .wrapper {
      height: 100%;
      width: 100%;
    }
    .header {
      transform: translateX(0);
      rotate: 0deg;
      .image {
        .wrapper {
          width: 4rem;
          height: 4rem;
          rotate: 0deg;
        }
      }
    }

    &.active {
      width: 100%;
      grid-column: 1/4;
      grid-row: 1;
      .text {
        display: block;
      }
      .header,
      .image,
      .wrapper {
        width: auto;
      }
    }
  }
`;
