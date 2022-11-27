import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { NavbarContext } from "../context";
import { Grid, PageHeader } from "./ui";

const StyledLayout = styled(Grid)`
  height: 100vh;
  padding-top: 120px;
  grid-template-rows: min-content auto;
  position: relative;
  overflow: hidden;
  .bg-text {
    position: absolute;
    top: 30%;
    font-size: 8rem;
    opacity: 0.2;
    font-weight: 800;
    right: 0;
    z-index: -10;
    transform: translateX(30%);
    text-transform: uppercase;
  }
`;

export const Page = ({ children, header }) => {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  const setPage = useContext(NavbarContext);

  useEffect(() => {
    if (inView) {
      setPage(header.toLowerCase());
    }
  }, [inView]);

  return (
    <StyledLayout id={`${header.toLowerCase()}-page`}>
      <>
        <PageHeader ref={ref}>{header}</PageHeader>
        {children}
      </>
      <div className="bg-text">{header}</div>
    </StyledLayout>
  );
};
