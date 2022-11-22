import styled from "styled-components";

export const ProjectContainer = styled.section`
  grid-column: 2/ 13;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 200%;
  flex: 1 1 100%;
  transition: transform 1s cubic-bezier(0.46, 0.35, 0, 1.27);
`;

export const Carasoul = styled.div`
  grid-column: 6/9;
  display: flex;
  justify-content: center;
  gap: 1rem;

  button {
    all: unset;
    cursor: pointer;
    padding: 0.5rem;
  }

  svg {
    width: 60px;
  }
`;
