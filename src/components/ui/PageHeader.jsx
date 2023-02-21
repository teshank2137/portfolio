import { useContext } from "react";
import { useEffect } from "react";
import { useLayoutEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { NavbarContext } from "../../context";
import { blue, typeScale } from "../../utils";

export const PageHeaderStyled = styled.h2`
  grid-column: 2 / 13;
  font-size: ${typeScale.headline};
  font-weight: bold;
  color: ${blue["110"]};
  padding-block: 1.25rem;
  background: white;
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, #ddd 100%);
  line-height: 1;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: fit-content;

  @media screen and (max-width: 720px) {
    grid-column: 1 / 7;
    padding-left: 1rem;
  }
`;
const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const PageHeader = ({ children: text }) => {
  const { ref, inView } = useInView({
    threshold: 1,
  });
  const [header, setHeader] = useState(text);
  const setPage = useContext(NavbarContext);

  function animate() {
    let iteration = 0;
    let interval = setInterval(() => {
      setHeader("");
      let newStr = "";
      text.split("").forEach((element, index) => {
        let char = ALPHABETS[Math.round(Math.random() * 26)] ?? "M";
        if (index < iteration) {
          char = text[index];
        }
        newStr += char;
      });
      setHeader(newStr);
      iteration += 1;
      if (iteration > text.length) {
        clearInterval(interval);
      }
    }, 60);
  }

  useEffect(() => {
    if (inView) {
      setPage(text.toLowerCase());
      animate();
    }
  }, [inView]);

  return (
    <PageHeaderStyled ref={ref} onMouseEnter={animate}>
      {header}
    </PageHeaderStyled>
  );
};
