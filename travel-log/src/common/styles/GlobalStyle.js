import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --main: #1DC6D1;
    --bggray: #EEEEEE;
    --bgwhite: #FFFFFF;
  }
  
  * {
    box-sizing: border-box;
    &:focus, &:active {
      outline: none;
    }
  }

  html {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
  }
  


  body {
    margin: 0;
    padding: 0;
  }

  div,
  h1,
  h2,
  span,
  p,
  button,
  img,
  main,
  section {
    margin: 0;
    padding: 0;
    border: 0;
  }

  a:link, a:visited {
    text-decoration: none;
  }
  
  @media screen and (max-width: 375px) {
    html {
      font-size: 55%;
    }
  }
  
  @media screen and (max-width: 335px) {
    html {
      font-size: 45%;
    }
  }
`;

export default GlobalStyle;