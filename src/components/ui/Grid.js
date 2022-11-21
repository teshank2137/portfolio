import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => (props.columns ? props.columns : "12")},
    1fr
  );
  grid-gap: ${(props) => (props.gap ? props.gap : "1rem")};
`;
