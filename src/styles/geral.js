import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    width: 100%;
    max-width: 1024px;
    height: 100%;
    margin: 0 auto;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
  }

  html {
    font-family: "Lato", sans-serif;
    scroll-behavior: smooth;
    max-width: 100%;
    overflow-x: hidden;
  }

  body {
    max-width: 100%;
    overflow-x: hidden;
  }
`;