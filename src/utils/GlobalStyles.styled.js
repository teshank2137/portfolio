import { normalize } from "polished";
import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";

export const GlobalStyles = createGlobalStyle`
${normalize()}
:root {
  font-size: 16px;
  line-height: 24px;
  font-family: ${primaryFont};
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #1f1f1f;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

*, *::after, *::before{
  box-sizing: border-box;
  margin: 0;
  padding:0;
  text-decoration: none;
}

body {
  margin: 0;
  min-height: 100vh;
}
`;
