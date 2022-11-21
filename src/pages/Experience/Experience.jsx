import gsap from "gsap";
import Flip from "gsap/Flip";
import React, { useEffect, useRef } from "react";
import { Page } from "../../components/Page";
import { green, pink, yellow } from "../../utils";
import { ExperienceItem } from "./ExperienceItem";
import { StyledExperienceLayout } from "./ExperienceLayout.styled";

export const Experience = () => {
  const ref = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(Flip);
    let cards = document.querySelectorAll(".experience-item");
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
    <Page header="Experience">
      <StyledExperienceLayout ref={ref}>
        <ExperienceItem />
        <ExperienceItem color={green} />
        <ExperienceItem color={yellow} />
        <ExperienceItem color={pink} />
      </StyledExperienceLayout>
    </Page>
  );
};
