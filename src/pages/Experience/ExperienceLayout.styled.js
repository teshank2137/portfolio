import styled from "styled-components";

export const StyledExperienceLayout = styled.div`
  grid-column: 2/ 12;
  align-self: start;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  height: 100%;
  @media screen and (max-width: 720px) {
    grid-column: 1 / 7;
    padding-inline: 1rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 2fr 1fr 1fr;
    align-items: start;
  }
`;
