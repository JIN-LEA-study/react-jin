import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --orange: #FFA500;
    --gray: #A2A2A2;
    --black: #000000;
  }

  * {
    box-sizing: border-box;
    /* &:focus, &:active {
      outline: none;
    } */
  }

  html {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  div,
  h1,
  span,
  p,
  img,
  main,
  section {
    margin: 0;
    padding: 0;
  }

  a:link, a:visited {
    text-decoration: none;
  }
`;

export default GlobalStyle;
