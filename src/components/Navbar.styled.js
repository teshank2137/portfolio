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
`;
