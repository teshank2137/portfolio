import React from "react";
import styled from "styled-components";
import { typeScale } from "../utils";
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
  }
`;

export const Page = ({ children, header }) => {
  return (
    <StyledLayout>
      <>
        <PageHeader>{header}</PageHeader>
        {children}
      </>
      <div className="bg-text">{header}</div>
    </StyledLayout>
  );
};
