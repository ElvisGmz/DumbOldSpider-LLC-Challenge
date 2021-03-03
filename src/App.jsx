import * as React from "react";
import styled from "styled-components";
import useTheme from "value-theme-return";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";

export default function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  background-color: ${useTheme("#f6f5f5", "#1a1a2e")};
  padding-bottom: 2rem;
`;
