import styled from "styled-components";
import { type, screenSize } from "../../utils/typography";

const StyledSkill = styled.div`
  height: 100vh;
  .skill-container {
    display: flex;
    flex-direction: row;
  }
  .skill-text {
    width: 50%;
  }
  .skill-title {
    font-size: ${type.webTitle};
    padding: 2.25rem;
    padding-right: 0;
    margin: 0;
  }
  .skill-contents {
    font-size: ${type.bodyText};
    padding: 2.25rem;
    padding-top: 0.5rem;
  }
  .cards {
    position: relative;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
  }
  .marquee-container {
    margin-top: 1rem;
    height: auto;
    width: 100%;
  }
  @media only screen and (max-width: ${screenSize.tablet}) {
    .skill-contents {
      font-size: calc(${type.bodyTextMobile} * 1.4);
    }
    .skill-title {
      font-size: calc(${type.webTitle} * 0.8);
    }
  }
  @media only screen and (max-width: ${screenSize.mobile}) {
    .marquee-container {
      margin-top: 0.5rem;
    }
    .cards {
      padding: 0;
      padding-bottom: 0.5rem;
      width: 100%;
      height: 16.5rem;
    }
    .skill-container {
      flex-direction: column;
    }
    .skill-text {
      width: 100%;
    }
    .skill-title {
      font-size: ${type.webTitleMobile};
      padding: 1.1rem;
      padding-top: 2rem;
    }
    .skill-contents {
      font-size: ${type.bodyTextMobile};
      padding: 1.1rem;
      padding-top: 0.7rem;
    }
  }
`;

export default StyledSkill;
