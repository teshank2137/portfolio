// react component for displaying a image
import styled from "styled-components";
import { screenSize } from "../utils";

const SIZE = "3.5rem";
const SIZE2 = "3rem";

const SingleLogoStyled = styled.div`
  width: ${SIZE};
  height: ${SIZE};
  object-fit: contain;
  margin: 0 0.65rem;
  img {
    width: ${SIZE};
    height: ${SIZE};
  }
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: ${screenSize.mobile}) {
    width: ${SIZE2};
    height: ${SIZE2};
    img {
      width: ${SIZE2};
      height: ${SIZE2};
    }
  }
`;

const SingleLogo = ({ logo }) => {
  return (
    <SingleLogoStyled>
      <img src={logo} alt="skill" />
    </SingleLogoStyled>
  );
};

export default SingleLogo;
