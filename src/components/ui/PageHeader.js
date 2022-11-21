import styled from "styled-components";
import { blue, typeScale } from "../../utils";

export const PageHeader = styled.h2`
  grid-column: 2 / 13;
  font-size: ${typeScale.headline};
  font-weight: bold;
  color: ${blue["110"]};
  padding-block: 1.25rem;
`;
