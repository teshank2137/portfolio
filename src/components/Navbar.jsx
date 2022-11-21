import React, { useEffect, useRef } from "react";
import { StyledNavbar } from "./Navbar.styled";
import { NavbarItem, Penguin } from "./ui";
import gsap from "gsap";
import Flip from "gsap/Flip";

export const Navbar = () => {
  const activeDot = useRef(null);
  const handelDotMovement = (e) => {
    const state = Flip.getState(activeDot.current);
    e.target.appendChild(activeDot.current);
    Flip.from(state, {
      duration: 0.5,
      absolute: true,
      ease: "elastic.out(1,0.8)",
    });
  };

  useEffect(() => {
    gsap.registerPlugin(Flip);
  }, []);

  return (
    <StyledNavbar>
      <ul>
        <li>
          <NavbarItem onClick={handelDotMovement}>Projects</NavbarItem>
        </li>
        <li>
          <NavbarItem onClick={handelDotMovement}>Experiences</NavbarItem>
        </li>
        <li>
          <NavbarItem onClick={handelDotMovement}>
            <Penguin />
            <div className="dot" ref={activeDot} />
          </NavbarItem>
        </li>
        <li>
          <NavbarItem onClick={handelDotMovement}>About</NavbarItem>
        </li>
        <li>
          <NavbarItem onClick={handelDotMovement}>Contact</NavbarItem>
        </li>
      </ul>
    </StyledNavbar>
  );
};
