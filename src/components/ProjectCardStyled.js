import styled from "styled-components";
import { screenSize, type } from "../utils";

const WIDTH = "25rem";
const HEIGHT = "15rem";
const StyledProjectCard = styled.div`
  width: ${WIDTH};
  height: ${HEIGHT};
  margin-bottom: 1.25rem;

  border-radius: 6px;
  background: linear-gradient(145deg, #111111, #141414);
  box-shadow: 8px 8px 15px #0d0d0d, -8px -8px 15px #191919;
  -webkit-box-shadow: 8px 8px 15px #0d0d0d, -8px -8px 15px #191919;
  h3,
  p {
    margin: 0;
    padding: 0;
  }
  .project-card {
    position: relative;
  }
  .project-card-content {
    background: linear-gradient(
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.6) 70%,
      rgba(0, 0, 0, 0.9) 100%
    );
    width: ${WIDTH};
    height: ${HEIGHT};
    position: absolute;
    top: 0px;
  }
  img {
    object-fit: cover;
    width: ${WIDTH};
    height: ${HEIGHT};
  }
  .project-card-content-1 {
    position: absolute;
    bottom: 0px;
    right: 0px;
    padding: 1rem;
    h3 {
      font-size: 1.8rem;
    }
  }
  .project-card-content-2 {
    opacity: 0;
    padding: 1rem;
    transform: translateY(1rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  .project-card-links {
    display: flex;

    font-weight: bold;
  }
  .project-card-link {
    margin-right: 1rem;
    margin-top: 0.45rem;
    border: 1px solid white;
    border-radius: 5px;
    padding: 0.5rem;
    text-align: center;
  }
  .project-card-link:hover {
    /* background: white; */
    color: black;
    border: 1px solid black;
    transition: all 0.3s ease-in-out;

    background: linear-gradient(145deg, #e6e6e6, #ffffff);
    /* box-shadow: 4px 4px 17px #ebebeb, -4px -4px 17px #ffffff; */
  }

  //
  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    .project-card-content {
      transition: all 0.2s ease-in-out;
      background: linear-gradient(
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0.9) 100%
      );
    }
    .project-card-content-1 {
      opacity: 0;
      transition: all 0.2s ease-in-out;
    }
    .project-card-content-2 {
      opacity: 1;
      transform: translateY(0);
      transition: all 0.25s ease-in-out;
    }
  }

  // Media Queries
  @media only screen and (max-width: ${screenSize.tablet}) {
    width: 15rem;
    height: 15rem;
    margin-bottom: 0.75rem;
    img {
      width: 15rem;
      height: 15rem;
    }
    .project-card-content {
      width: 15rem;
      height: 15rem;
    }
  }
  @media only screen and (max-width: ${screenSize.mobile}) {
    width: 10rem;
    height: 10rem;
    margin-bottom: 0.5rem;
    img {
      width: 10rem;
      height: 10rem;
    }
    .project-card-content {
      overflow: hidden;
      width: 10rem;
      height: 10rem;
      p {
        font-size: ${type.cardBodyMobile};
      }
    }
    .project-card-content-1 {
      h3 {
        font-size: ${type.cardTitleMobile};
      }
    }
    &:hover {
      z-index: 9;
      transition: all 0.2s ease-in-out;

      .project-card-content {
        transition: all 0.2s ease-in-out;
        background: linear-gradient(
          rgba(0, 0, 0, 0.6) 0%,
          rgba(0, 0, 0, 0.9) 100%
        );
      }
      .project-card-content-1 {
        opacity: 0;
        transition: all 0.2s ease-in-out;
      }
      .project-card-content-2 {
        opacity: 1;
        transform: translateY(0);
        transition: all 0.25s ease-in-out;
        p {
          display: none;
        }
      }
      .project-card-links {
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export default StyledProjectCard;
