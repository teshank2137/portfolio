import gsap from "gsap";
import Flip from "gsap/Flip";
import React, { useEffect } from "react";
import { Page } from "../../components/Page";
import { blue, green, yellow } from "../../utils";
import { Educations, Paragraph } from "./About.styled";
import { AboutItem } from "./AboutItem";

export const About = () => {
  useEffect(() => {
    gsap.registerPlugin(Flip);
    let cards = document.querySelectorAll(".about-item");
    cards.forEach((card, i) => {
      if (i === 0) {
        card.classList.add("active");
      }
      card.addEventListener("mouseenter", (e) => {
        if (card.classList.contains("active")) {
          return;
        }
        const state = Flip.getState(cards);
        cards.forEach((c) => {
          c.classList.remove("active");
        });
        card.classList.add("active");
        Flip.from(state, {
          duration: 0.5,
          ease: "elastic.out(1,0.9)",
          absolute: true,
        });
      });
    });
  }, []);
  return (
    <Page header="About me">
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quo
        voluptas, praesentium harum iste obcaecati voluptatum accusantium
        adipisci tenetur aut. Deserunt assumenda similique sequi velit vero
        laboriosam, saepe repellendus totam? Cupiditate consequatur at explicabo
        ipsum dolor sit amet consectetur adipisicing elit. Vitae quo voluptas,
        praesentium harum iste obcaecati voluptatum accusantium
      </Paragraph>
      <Educations>
        <AboutItem color={blue} active />
        <AboutItem color={green} />
        <AboutItem color={yellow} />
      </Educations>
    </Page>
  );
};
