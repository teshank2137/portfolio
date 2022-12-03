import gsap from "gsap";
import Flip from "gsap/Flip";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavbarContext } from "../context";
import { CloseButton, MenuButton } from "./form";
import { StyledNavbar } from "./Navbar.styled";
import { NavbarItem, Penguin } from "./ui";

export const Navbar = ({ children }) => {
  const activeDot = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentPage, setCurrentPage] = useState(null);
  const [navBarVisible, setNavBarVisible] = useState(false);

  const handelDotMovement = (e) => {
    setIsScrolling(true);
    if (e.scroll !== false) {
      document.getElementById(`${e.target.id}-page`).scrollIntoView();
    }

    const state = Flip.getState(activeDot.current);
    e.target.appendChild(activeDot.current);
    document.querySelectorAll(".navbar-item").forEach((el) => {
      el.classList.remove("active");
    });
    e.target.classList.add("active");
    Flip.from(state, {
      duration: 0.5,
      absolute: true,
      ease: "elastic.out(1,0.8)",
    });
    setIsScrolling(false);
  };

  useEffect(() => {
    if (currentPage && isScrolling === false) {
      handelDotMovement({
        target: document.getElementById(currentPage),
        scroll: false,
      });
    }
  }, [currentPage]);

  useEffect(() => {
    gsap.registerPlugin(Flip);
  }, []);

  return (
    <>
      <MenuButton
        className={navBarVisible ? "" : "active"}
        onClick={() => setNavBarVisible(true)}
      >
        <AiOutlineMenu size="30" />
      </MenuButton>
      <StyledNavbar className={navBarVisible ? "active" : ""}>
        <CloseButton onClick={() => setNavBarVisible(false)}>
          <AiOutlineClose size={30} />
        </CloseButton>
        <ul>
          <li>
            <NavbarItem
              className="navbar-item"
              onClick={handelDotMovement}
              id="projects"
            >
              Projects
            </NavbarItem>
          </li>
          <li>
            <NavbarItem
              className="navbar-item"
              onClick={handelDotMovement}
              id="experience"
            >
              Experiences
            </NavbarItem>
          </li>
          <li className="home_navbar-item">
            <NavbarItem
              className="navbar-item"
              onClick={(e) => {
                handelDotMovement({ target: document.getElementById("home") });
              }}
              id="home"
            >
              <Penguin />
              <div className="dot" ref={activeDot} />
            </NavbarItem>
          </li>
          <li>
            <NavbarItem
              className="navbar-item"
              onClick={handelDotMovement}
              id="about"
            >
              About
            </NavbarItem>
          </li>
          <li>
            <NavbarItem
              className="navbar-item"
              onClick={handelDotMovement}
              id="contact"
            >
              Contact
            </NavbarItem>
          </li>
        </ul>
      </StyledNavbar>
      <NavbarContext.Provider value={setCurrentPage}>
        {children}
      </NavbarContext.Provider>
    </>
  );
};
