import styled from "styled-components";
import { typeScale } from "../../utils";

export const Paragraph = styled.p`
  font-size: ${typeScale.text};
  grid-column: 2/ 7;
  line-height: 2rem;
`;

export const Educations = styled.section`
  grid-column: 2/7;
  display: flex;
  gap: 0.75rem;
  align-self: start;
`;
