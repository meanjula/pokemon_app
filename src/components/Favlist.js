import React from "react";
import { Container, Row } from "react-bootstrap";
import PokeCard from "./PokeCard";
const Favlist = ({ favHandler, favourites }) => {
  return (
    <div>
      <p>Fav will be here</p>
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
              moves={pokemon.moves}
              pokemonName={pokemon.name}
              fav={true} //{favourites.some(item=>item.name === pokemon.name)}
              favClick={() => favHandler(pokemon)}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Favlist;
