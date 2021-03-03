import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LightTheme, DarkTheme, Sizes } from "../StylesValues/constants";

export default function NavBar() {
  const [isBarOpen, setIsBarOpen] = useState();

  return (
    <NavContainer>
      <Nav isOpen={isBarOpen ? "0" : "100%"}>
        <div id="logo">
          <h1>DumbOldSpider🕷 LLC</h1>
          <p>Art and Desing Studio</p>
        </div>
        <div id="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <button onClick={() => setIsBarOpen(!isBarOpen)}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </button>
      </Nav>
    </NavContainer>
  );
}

const NavContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: ${LightTheme.navBg};
  color: ${LightTheme.navColor};
  position: fixed;
  width: 100vw;
  

  @media (prefers-color-scheme: dark) {
    background-color: ${DarkTheme.navBg};
    background-image: ${DarkTheme.navImgBg};
    color: ${DarkTheme.navColor};
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${Sizes.maxAppWidth};
  box-sizing: border-box;
  padding: ${Sizes.paddingNav};

  #logo h1 {
    font-size: ${Sizes.logoFontSize};
    letter-spacing: ${Sizes.logoSpacing};
    font-style: italic;
    margin: 0;
  }

  #logo p {
    margin: 0;
    font-style: italic;
  }

  #links {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;

    a {
      color: ${LightTheme.navColor};
      text-decoration: none;
      font-size: ${Sizes.navLinksSize};
      padding: 0.75rem;
      font-weight: 700;
      font-style: italic;

      @media (prefers-color-scheme: dark) {
        color: ${DarkTheme.navColor};
      }

      &:hover {
        text-decoration: underline;
      }
    }

    @media only screen and (max-width: 768px) {
      position: absolute;
      top: 64px;
      left: ${({ isOpen }) => isOpen};
      flex-flow: column nowrap;
      min-height: calc(100vh - 64px);
      background-color: ${LightTheme.bg};

      @media (prefers-color-scheme: dark) {
        background-color: ${DarkTheme.bg};
      }

      a {
        text-align: center;
        width: 100vw;
        box-sizing: border-box;
        color: ${LightTheme.color};

        @media (prefers-color-scheme: dark) {
          color: ${DarkTheme.color};
        }

        &:last-child {
          padding-right: 0.75rem;
        }
      }
    }
  }

  button {
    background-color: transparent;
    border: none;
    aspect-ratio: 1 / 1;
    min-height: 35px;
    width: 40px;
    display: none;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    outline: 0;
    z-index: 1000;
    cursor: pointer;

    @media only screen and (max-width: 768px) {
      display: flex;
    }

    .bar {
      background-color: ${LightTheme.burguerColor};
      width: 100%;
      min-height: 3px;
      aspect-ratio: 7 / 1;
      border-radius: 10px;

      @media (prefers-color-scheme: dark) {
        background-color: ${DarkTheme.burguerColor};
      }
    }
  }
`;
