import styled from "styled-components";
import { blue, typeScale } from "../../utils";

export const Textarea = styled.textarea`
  resize: none;
  padding: 0.75rem 1rem;
  font-size: ${typeScale.paragraph};
  background-color: #eef2;
  width: ${(props) => (props.full ? "100%" : "auto")};
  height: ${(props) =>
    props.lines ? `calc(${props.lines}*${typeScale.paragraph})` : "auto"};
  outline: none;
  border: 3px solid ${blue["00"]};
  box-shadow: 8px 8px 0 ${blue["00"]};
  border-radius: 0.5rem;
  transition: all 0.1s ease;
  &:focus,
  &:active {
    background-color: #eef3;
    box-shadow: 6px 6px 0 ${blue["00"]};
  }
`;
