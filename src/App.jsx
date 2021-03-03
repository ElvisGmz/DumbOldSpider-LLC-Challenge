import * as React from "react";
import styled from "styled-components";
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

const AppContainer = styled.div``;
