import styled from "styled-components";
import { Button } from "../../components/form";

export const ContactWrapper = styled.section`
  grid-column: 2/ 13;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-gap: 1rem;
  .buttons {
    display: flex;
    grid-row: 2;
    grid-column: span 6;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    .socials {
      display: flex;
      gap: 0.5rem;
    }
  }
  @media screen and (max-width: 1024px) {
    grid-column: 2/ 10;
    .buttons {
      grid-column: 1/ 12;
    }
  }
  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(6, 1fr);
    grid-column: 1/7;
    padding-inline: 1rem;
    .buttons {
      grid-column: span 6;
    }
    .socials {
      flex-wrap: wrap;
    }
  }
`;

export const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-self: center;
  grid-column: 1/ 7;
  grid-gap: 1rem;
  grid-template-rows: min-content;
  height: min-content;
  input {
    grid-column: span 1;
  }
  textarea {
    grid-column: span 2;
  }
  @media screen and (max-width: 1024px) {
    grid-column: 1/ 12;
  }
  @media screen and (max-width: 720px) {
    grid-column: 1/ 7;
    input {
      grid-column: span 2;
    }
  }
`;

export const IconButton = styled(Button)`
  padding: 0;
  width: 60px;
  height: 60px;

  @media screen and (max-width: 720px) {
    width: 45px;
    height: 45px;
  }
`;

export const DownloadButton = styled(Button)`
  padding-block: 0;
  display: flex;
  gap: 0.5rem;
  height: 60px;

  @media screen and (max-width: 720px) {
    height: 45px;
  }
`;
