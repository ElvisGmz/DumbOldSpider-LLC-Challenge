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
  background-color: ${useTheme("#d3e0ea", "#1a1a2e")};
  min-height: calc(100vh - 56px);
  padding-bottom: 2rem;
`;
