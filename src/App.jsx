import * as React from "react";
import styled from "styled-components";
import useTheme from "value-theme-return";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";

export default function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  background-color: ${useTheme("#f6f5f5", "#1a1a2e")};
  min-height: calc(100vh - 54px);
  padding-bottom: 2rem;
`;
