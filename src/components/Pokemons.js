import { Container, Row, Spinner, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import PokeCard from "./PokeCard";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState();
  //   const [prevList, setPrevList] = useState();

  useEffect(() => {
    //promise.then(call back fun)
    axios.get("https://pokeapi.co/api/v2/pokemon/").then((res) => {
      const fetches = res.data.results.map((p) =>
        axios.get(p.url).then((res) => res.data)
      );
      //fetch is getting 20 datas so promise for all
      console.log(fetches);
      Promise.all(fetches).then((fetchedData) => {
        setPokemons(fetchedData);
        setIsLoading(false);
      });
    });
  }, []); // empty array for protecting from infinite loop

  return (
    <div className="App">
      <>
        <Header />
        <Container>
          <Row
            xs={2}
            md={4}
            lg={5}
            className="justify-content-between my-5 d-flex gap-3"
          >
            {isLoading && (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}

            {!isLoading &&
              pokemons.map((pokemon) => (
                <PokeCard
                  key={pokemon.key}
                  name={pokemon.name}
                  image={pokemon.sprites.other.dream_world.front_default}
                  moves={pokemon.moves}
                />
              ))}
          </Row>
        </Container>
        <Button variant="secondary">Secondary</Button>{" "}
      </>
    </div>
  );
};

export default Pokemons;
