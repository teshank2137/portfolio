import styled from "styled-components";
import { typeScale } from "../../utils";

export const Paragraph = styled.p`
  font-size: ${typeScale.text};
  grid-column: 2/ 7;
  line-height: 2rem;
  padding-block: 2rem;
  @media screen and (max-width: 720px) {
    grid-column: 1 / 7;
    font-size: ${typeScale.paragraph};
    line-height: 1.2rem;
    padding-block: 0rem;
  }
`;

export const Educations = styled.section`
  grid-column: 2/7;
  display: flex;
  gap: 0.75rem;
  align-self: start;
  padding-top: 1rem;
`;

export const Text = styled.aside`
  grid-column: 2/7;
  width: 100%;
  @media screen and (max-width: 720px) {
    grid-column: 1 / 7;
    padding-inline: 1rem;
  }
`;

export const SkillsWrapper = styled.aside`
  grid-column: 7/ 13;
  width: 100%;
  @media screen and (max-width: 720px) {
    grid-column: 1 / 7;
  }
`;
