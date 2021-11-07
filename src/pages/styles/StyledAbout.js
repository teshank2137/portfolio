import styled from "styled-components";
import { type, screenSize } from "../../utils";

export const StyledAbout = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  height: 100vh;

  .about-text {
    width: 50%;
    height: 100vh;
  }
  .about-3d {
    width: 50%;
    height: 100vh;
  }
  .about-title {
    font-size: ${type.webTitle};
    padding: 2.25rem;
    padding-right: 0;
    margin: 0;
  }
  .about-contents {
    padding: 2.25rem;
    font-size: ${type.bodyText};
    letter-spacing: 0.055rem;
    line-height: 1.3;
  }
  .skills-3d {
    height: 100%;
  }

  @media only screen and (max-width: ${screenSize.tablet}) {
    .about-contents {
      font-size: calc(${type.bodyTextMobile} * 1.4);
    }
    .about-title {
      font-size: calc(${type.webTitle} * 0.8);
    }
    flex-direction: column;
    flex-wrap: wrap;
  }
  @media only screen and (max-width: ${screenSize.tablet}) {
    flex-direction: column;
    flex-wrap: wrap;

    .about-3d {
      height: 50vh;
      width: 100%;
      padding: 0.75rem;
    }
    .about-text {
      width: 100%;
      height: auto;
    }
    .about-title {
      font-size: ${type.webTitleMobile};
      padding: 1.1rem;
      padding-top: 2rem;
    }
    .about-contents {
      font-size: ${type.bodyTextMobile};
      padding: 1.1rem;
      letter-spacing: 0.04rem;
      line-height: 1.1;
    }
  }
`;
