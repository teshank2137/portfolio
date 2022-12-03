import styled from "styled-components";

export const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem;
  z-index: 100;
  ul {
    display: flex;
    list-style: none;
    gap: 2rem;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 720px) {
    left: 0;
    transform: translateX(-150%);
    width: 70vw;
    height: 100%;
    background-color: #12121233;
    backdrop-filter: blur(5px);
    transition: transform 0.2s ease-in-out;
    ul {
      flex-direction: column;
      align-items: flex-start;

      .home_navbar-item {
        order: -1;
      }
    }

    &.active {
      transform: translateX(0%);
    }
  }
`;
