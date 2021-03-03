import React, { useState, useEffect } from "react";
import useTheme from "value-theme-return";
import styled from "styled-components";

export default function Home() {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((res) => res.json())
      .then((res) => setCharacters(res.results));
  }, []);
  return (
    <Container>
      {characters.map((element) => (
        <Card status={element.status} key={element.id}>
          <img src={element.image} alt={element.name} />
          <h1>{element.name}</h1>
          <p>{element.species}</p>
          <p id="status">{element.status}</p>
        </Card>
      ))}
    </Container>
  );
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
  padding-top: 98px;
`;

const Card = styled.div`
  margin: 10px;
  background-color: ${useTheme('#1687a7', '#16213e')};
  /* 0f3460 */
  box-shadow: 0px 0px 10px ${useTheme('#80808c', '#11111c')};
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
  flex: 31%;
  min-height: 385.6px;
  min-width: 300px;
  max-width: 350px;

  img {
    object-fit: cover;
    width: 100%;
    max-height: 250px;
  }

  h1 {
    margin: 0.5rem 1rem 0px;
    font-size: 22px;

    &::first-letter {
    font-size: 38px;
    color: ${useTheme('yellow', '#00ffff')};
  }
  }

p {
  margin: 0 1rem 15px;
  color: ${useTheme('#FFF', 'greenyellow')};
  font-weight: 700;
  font-style: italic;
}

p#status {
  margin: 0 1rem 15px;
  color:
   ${({status}) => {
     if (status == 'Alive') {
        return 'yellow';
     }else if (status == 'Dead'){
         return 'pink'
     }else{
         return 'white'
     }
  }};
  font-weight: 700;
  font-style: italic;
  text-align: right;
}
`;
