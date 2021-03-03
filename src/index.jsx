import * as React from "react";
import ReactDOM from "react-dom";
import { LightTheme, DarkTheme, Fonts } from "./StylesValues/constants";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const GlobalStyles = createGlobalStyle`

html{
  scrollbar-width: none;
}

body{
    margin: 0;
    min-height: 100vh;
    font-family: ${Fonts.default};
    background-color: ${LightTheme.bg};
    color: ${LightTheme.color};
    width: 100vw;
    overflow-x: hidden;

    @media (prefers-color-scheme: dark){
    background-color: ${DarkTheme.bg};
    color: ${DarkTheme.color};
    }
  }
`;

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("app")
);
