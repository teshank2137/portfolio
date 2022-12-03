import styled from "styled-components";
import { typeScale } from "../../utils";

export const Input = styled.input`
  padding: 0.75rem 1rem;
  font-size: ${typeScale.paragraph};
  background-color: #eef2;
  width: ${(props) => (props.full ? "100%" : "auto")};
  outline: none;
  border: 3px solid black;
  box-shadow: 8px 8px 0 black;
  border-radius: 0.5rem;
  transition: all 0.1s ease;
  &:focus,
  &:active {
    background-color: #eef3;
    box-shadow: 6px 6px 0 black;
  }
`;
