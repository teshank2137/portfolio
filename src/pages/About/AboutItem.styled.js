import styled from "styled-components";
import { blue, typeScale } from "../../utils";

export const AboutItemWrapper = styled.div`
  overflow: hidden;
  background-color: ${(props) =>
    props.color ? props.color["60"] : blue["60"]};

  color: ${(props) => (props.color ? props.color["00"] : blue["00"])};
  border: 4px solid ${(props) => (props.color ? props.color["00"] : blue["00"])};
  box-shadow: 6px 6px 0
    ${(props) => (props.color ? props.color["00"] : blue["00"])};
  border-radius: 1rem;
  width: 90px;
  height: 90px;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;

  .logo {
    min-width: 50px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0.75rem;
  }
  .text {
    display: none;
  }

  &.active {
    width: 400px;
    justify-content: start;
    .text {
      min-width: max-content;
      display: block;
      overflow-wrap: break-word;
      min-width: unset;
      line-height: 1;
      h3 {
        font-size: ${typeScale.paragraph};
      }
      p {
        margin-top: 4px;
        font-size: ${typeScale.helperText};
      }
    }
  }
  @media screen and (max-width: 720px) {
    width: 70px;
    height: 70px;
    .logo {
      min-width: 45px;
      width: 45px;
      height: 45px;
    }
    &.active {
      width: 300px;
      .text {
        overflow-wrap: break-word;
        min-width: unset;
        line-height: 0.8rem;
        h3 {
          font-size: ${typeScale.helperText};
        }
        p {
          font-size: ${typeScale.copyrightText};
        }
      }
    }
  }
`;
