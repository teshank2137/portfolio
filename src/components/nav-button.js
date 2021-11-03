import styled from "styled-components";
import { Link } from "react-scroll";
import { type } from "../utils";
import useIsMobile from "../customHooks/useIsMobile";

const StyledNavButton = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  color: #ffffff90;
  font-size: ${type.secondaryHeader};
  svg {
    font-size: ${type.secondaryHeader};
  }
  span {
    padding: 0 0 0 0.8rem;
  }

  @media only screen and (max-width: 720px) {
    width: 100%;
    font-size: ${type.secondaryHeaderMobile};
    svg {
      font-size: ${type.secondaryHeaderMobile};
    }
  }
  &:hover {
    color: aqua;
  }
`;

export const NavButton = ({ value, icon }) => {
  const isMobile = useIsMobile();
  const toggleVisibility = () => {
    const el = document.querySelector(".navbar");
    el.style.display = "none";
    const se = document.querySelector(".menu-icon");
    se.style.display = "block";
  };
  return (
    <button
      onClick={(e) => {
        if (isMobile) {
          toggleVisibility();
        }
        document.getElementById(value).scrollIntoView({ behavior: "smooth" });
      }}
    >
      <StyledNavButton>
        {icon}
        <span>{value}</span>
      </StyledNavButton>
    </button>
  );
};
