import styled from "styled-components";

export const ProjectContainer = styled.section`
  grid-column: 1/ 13;
  width: 100%;
  transition: transform 1s cubic-bezier(0.46, 0.35, 0, 1.27);
  align-self: center;
  .wrapper {
    scroll-behavior: smooth;
    flex-shrink: 0;
    display: flex;
    overflow-x: auto;
    justify-content: start;
    align-items: center;
    overflow-y: hidden;
    padding-inline-end: 2rem;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media screen and (max-width: 720px) {
    grid-column: 1 / 7;
  }
`;

export const Carasoul = styled.div`
  grid-column: 1/13;
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
  @media screen and (max-width: 720px) {
    grid-column: 1 / 7;
  }
`;
