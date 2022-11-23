import styled from "styled-components";
import { blue, typeScale } from "../../utils";

export const NavbarItem = styled.a`
  font-size: ${typeScale.text};
  font-weight: semibold;
  color: #fff4;
  transition: all 0.2 ease-out;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  user-select: none;
  text-transform: capitalize;
  .dot {
    width: 8px;
    height: 8px;
    background-color: ${blue["60"]};
    border-radius: 50%;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
  &:hover,
  &:focus {
    color: #fffa;
  }

  &:active,
  .active {
    color: #fffc;
  }
`;
