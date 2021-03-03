import React, { useState, useEffect } from "react";
import useTheme from "value-theme-return";
import styled from "styled-components";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((res) => res.json())
      .then((res) => {
        setCharacters(res.results);
        setInfo(res.info);
      });
  }, [page]);

  function nextPage() {
    if (page < info.pages && page >= 1) {
      setPage(page + 1);
      window.scrollTo(0, 0);
    }
  }

  function previousPage() {
    if (page <= info.pages && page > 1) {
      setPage(page - 1);
      window.scrollTo(0, 0);
    }
  }

  return (
    <>
      <Container>
        {characters.map((element) => (
          <Card status={element.status} key={element.id}>
            <img src={element.image} alt={element.name} />
            <h1>{element.name}</h1>
            <p>{element.species}</p>
            <p id="status">
              {element.status == "Alive" && "❤ "}
              {element.status == "Dead" && "💀 "}
              {element.status == "unknown" && "❔ "}
              {element.status}
            </p>
          </Card>
        ))}
      </Container>
      <Pagination page={page} pages={info.pages}>
        <div id="left" onClick={previousPage}>
          {"<"}
        </div>
        <div id="number">
          <p>{page}</p>
        </div>
        <div id="right" onClick={nextPage}>
          {">"}
        </div>
      </Pagination>
    </>
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
  padding-top: 66px;
  min-height: calc(100vh - 3rem);
`;

const Card = styled.div`
  margin: 10px;
  background-color: ${useTheme("#1687a7", "#16213e")};
  /* 0f3460 */
  box-shadow: 0px 0px 5px ${useTheme("#858ea5", "#11111c")};
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
  flex: 31%;
  min-height: 365.6px;
  min-width: 300px;
  max-width: 350px;

  img {
    object-fit: cover;
    width: 100%;
    height: 250px;
  }

  h1 {
    margin: 0.5rem 1rem 0px;
    font-size: 22px;

    &::first-letter {
      font-size: 38px;
      color: ${useTheme("yellow", "#00ffff")};
      text-shadow: -2px 2px crimson;
    }
  }

  p {
    margin: 0 1rem 15px;
    color: ${useTheme("#FFF", "greenyellow")};
    font-weight: 700;
  }

  p#status {
    margin: 0 1rem 15px;
    color: ${({ status }) => {
      if (status == "Alive") {
        return "cyan";
      } else if (status == "Dead") {
        return "crimson";
      } else {
        return "white";
      }
    }};
    font-weight: 700;
    font-style: italic;
    text-align: right;
  }
`;

const Pagination = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: ${useTheme("#1687a7", "#0f3460")};
  max-width: 150px;
  margin: 0rem auto;
  color: #fff;
  border-radius: 5px;

  #left,
  #right {
    text-align: center;
    width: 100%;
    cursor: pointer;
  }

  #right {
    display: ${({ page, pages }) => (page < pages ? "auto" : "none")};
  }

  #left {
    display: ${({ page }) => (page > 1 ? "auto" : "none")};
  }

  div p {
    margin: 0;
    padding: 0.3rem 1rem;
    text-transform: capitalize;
    ${({ page }) =>
      page > 1 && `border-left: 1px solid ${useTheme("#f6f5f5", "#1a1a2e")};`};
    ${({ page, pages }) =>
      page < pages &&
      `border-right: 1px solid ${useTheme("#f6f5f5", "#1a1a2e")};`};
  }
`;
