import {createGlobalStyle} from "styled-components";

export const GlobalCss = createGlobalStyle`
  :root {
    --backegound: #F0F2f5;
    --red: #E52E4D;
    --blue: #5429CC;
    --blue-ligth: #6933FF;
    --text-title: #363F5F;
    --text-body: #966CB3;
    --shape: #FFFFFF;
    --green: #008000;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  
  body {
    background: var(--backegound);
  }
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  
  h1, h2, h3,h4, h5, h6, strong {
    font-weight: 600;
  }
  
  button {
    cursor: pointer;
  }
  
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  
`