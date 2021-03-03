import React from 'react';
import styled from 'styled-components';

export default function About() {
    return (
        <Container>
            Construyendo...
        </Container>
    )
}

const Container = styled.main`
  max-width: 1144px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: row wrap;
  box-sizing: border-box;
  padding: 10px;
  padding-top: 70px;
  min-height: calc(100vh - 2rem);
  background-color:red;
`;