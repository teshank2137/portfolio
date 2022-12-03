import styled from "styled-components";
import { blue, typeScale } from "../../utils";

export const Button = styled.button`
  all: unset;
  background-color: ${(props) => (props.bg ? props.bg["60"] : blue["60"])};
  font-size: ${(props) =>
    props.sm ? typeScale.helperText : typeScale.paragraph};
  font-weight: bold;
  padding: ${(props) => (props.sm ? "0.1rem 1.2rem" : "0.15rem 1.8rem")};

  min-width: 50px;
  min-height: 40px;
  border: 3px solid ${(props) => (props.bg ? props.bg["00"] : blue["00"])};
  border-radius: 0.5rem;
  color: ${(props) => (props.bg ? props.bg["00"] : blue["00"])};
  box-shadow: 8px 8px 0 ${(props) => (props.bg ? props.bg["00"] : blue["00"])};
  cursor: pointer;
  transition: all 0.1s ease-in;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${(props) => (props.bg ? props.bg["70"] : blue["70"])};
    box-shadow: 10px 10px 0
      ${(props) => (props.bg ? props.bg["00"] : blue["00"])};
  }

  &:active,
  &:focus {
    background-color: ${(props) => (props.bg ? props.bg["80"] : blue["80"])};
    box-shadow: 4px 4px 0 ${(props) => (props.bg ? props.bg["00"] : blue["00"])};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    box-shadow: 2px 2px 0 ${(props) => (props.bg ? props.bg["00"] : blue["00"])};
  }
`;

export const MenuButton = styled.button`
  all: unset;
  cursor: pointer;
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  padding: 0.5rem;
  transition: 0.2s ease-in-out;
  transform: translateX(-150%);
  &.active {
    transform: translateX(0%);
  }
  @media screen and (min-width: 720px) {
    display: none;
  }
`;
