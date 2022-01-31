import { Container, Row, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import PokeCard from "../components/PokeCard";

const Pokemons = ({ favHandler, favourites }) => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [nextPokemon, setNextPokemon] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200"
  );
  //   const [prevList, setPrevList(function that updates the state)] = useState();
  console.log(pokemons);

  const getPokemons = () => {
    //promise.then(call back fun)
    axios
      .get(nextPokemon)
      .catch((error) => console.log(error))
      .then((res) => {
        const fetches = res.data.results.map((p) =>
          axios.get(p.url).then((res) => res.data)
        );
        //fetch is getting 20 datas so promise for all
        //console.log(fetches);

        setNextPokemon(res.data.next);
        Promise.all(fetches).then((fetchedData) => {
          setPokemons(fetchedData);
          setIsLoading(false);
        });
      });
  };

  useEffect(() => {
    getPokemons();
    // eslint-disable-next-line
  }, []); // empty array for protecting from infinite loop and loading only once

  return (
    <div className="App">
      <>
        <Container>
          <Row
            xs={2}
            md={4}
            lg={5}
            className="justify-content-between my-5 d-flex gap-3"
          >
            {isLoading && <Loader />}

            {!isLoading &&
              pokemons.map((pokemon) => (
                <PokeCard
                  key={pokemon.name}
                  name={pokemon.name}
                  image={pokemon.sprites.other.dream_world.front_default}
                  moves={pokemon.moves}
                  version={pokemon.version_groups}
                  pokemonName={pokemon.name}
                  fav={false} //{favourites.some(item=>item.name === pokemon.name)}
                  favClick={() => favHandler(pokemon)}
                />
              ))}
          </Row>
        </Container>
        <Container className="d-flex justify-content-center align-items-center gap-3">
          <Button
            variant="secondary"
            size="lg"
            onClick={getPokemons}
            className=""
          >
            load previous
          </Button>{" "}
          <Button
            variant="primary"
            size="lg"
            onClick={getPokemons}
            className=""
          >
            load next
          </Button>
        </Container>
      </>
    </div>
  );
};

export default Pokemons;
