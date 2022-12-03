import styled from "styled-components";

export const CloseButton = styled.button`
  all: unset;
  padding: 0.5rem;
  position: absolute;
  right: 1rem;
  cursor: pointer;
  @media screen and (min-width: 720px) {
    display: none;
  }
`;
