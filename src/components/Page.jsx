import React from "react";
import styled from "styled-components";
import { Grid, PageHeader } from "./ui";

const StyledLayout = styled(Grid)`
  height: 100vh;
  padding-top: 120px;
  grid-template-rows: min-content auto;
`;

export const Page = ({ children, header }) => {
  return (
    <StyledLayout>
      <>
        <PageHeader>{header}</PageHeader>
        {children}
      </>
    </StyledLayout>
  );
};
