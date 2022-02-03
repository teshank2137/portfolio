import styled from "styled-components";
import { type, screenSize } from "../../utils";
const StyledPortfolio = styled.div`
  h1 {
    margin: 0;
  }
  .title {
    font-size: ${type.webTitle};
    padding: 2.25rem;
    padding-right: 0;
  }
  .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: space-between;
    padding: 0 2.25rem 2.25rem 2.25rem;
  }
  @media only screen and (max-width: ${screenSize.mobile}) {
    .title,
    .projects {
      padding: 1.1rem;
    }
    .projects {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 0.25rem;
      place-items: center;
    }
    .title {
      padding-top: 2rem;
      font-size: ${type.webTitleMobile};
    }
  }
`;

export default StyledPortfolio;
