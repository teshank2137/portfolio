import styled from "styled-components";

export const StyledExperienceLayout = styled.div`
  grid-column: 2/ 12;
  align-self: start;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  height: 100%;
  @media screen and (max-width: 940px) {
    grid-column: 1 / 7;
    padding-inline: 1rem;
  }
`;
