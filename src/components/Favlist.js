import React from "react";
import { Container, Row } from "react-bootstrap";
import PokeCard from "./PokeCard";
const Favlist = ({ favourites, favHandler }) => {
  console.log(favourites);
  if (!favourites) {
    return (
      <div>
        <h2>
          You have no favourites yet. Go to Pokédex give some pokémons your
          heart!
        </h2>
      </div>
    );
  } else {
    return (
      <div>
        <Container>
          <Row
            xs={2}
            md={4}
            lg={5}
            className="justify-content-between my-5 d-flex gap-3"
          >
            {favourites.map((pokemon) => (
              <PokeCard
                key={pokemon.name}
                name={pokemon.name}
                image={pokemon.sprites.other.dream_world.front_default}
                pokemonName={pokemon.name}
                fav={favourites.some((item) => item.name === pokemon.name)}
                favClick={() => favHandler(pokemon)}
              />
            ))}
          </Row>
        </Container>
        <div className="d-grid gap-2 justify-content-center"></div>
      </div>
    );
  }
};
export default Favlist;
