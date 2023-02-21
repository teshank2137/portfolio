import React from "react";
import styled from "styled-components";
import { Grid, PageHeader } from "./ui";

const StyledLayout = styled(Grid)`
  min-height: 100vh;
  padding-top: 120px;
  grid-template-rows: min-content auto;
  position: relative;
  overflow: hidden;
  .bg-text {
    position: absolute;
    top: 200px;
    font-size: 8rem;
    opacity: 0.2;
    font-weight: 800;
    right: 0;
    z-index: -10;
    transform: translateX(30%);
    text-transform: uppercase;
    font-family: "Roboto";
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(6, 1fr);
    padding-inline-start: 1rem;
    .bg-text {
      font-size: 5.5rem;
    }
  }
`;

export const Page = ({ children, header }) => {
  return (
    <StyledLayout id={`${header.toLowerCase()}-page`}>
      <>
        <PageHeader>{header.toUpperCase()}</PageHeader>
        {children}
      </>
      <div className="bg-text">{header}</div>
    </StyledLayout>
  );
};
