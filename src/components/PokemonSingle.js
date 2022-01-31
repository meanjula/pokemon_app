import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { Container, Row, Button, Card } from "react-bootstrap";

const PokemonSingle = () => {
  let { pokemonName } = useParams();
  let navigate = useNavigate();

  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => {
        setPokemon(res.data);
        setIsLoading(false);
        console.log(pokemon);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Container>
        <Row
          xs={2}
          md={4}
          lg={5}
          className="bg-card justify-content-center my-5 d-flex gap-3 h-"
        >
          {isLoading && <Loader />}
          {!isLoading && (
            <div>
              <h2>{pokemon.name}</h2>
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
              />
              <p>Height:{pokemon.height}0 cm</p>
              <p>
                <strong>Type</strong>
              </p>
              <ul>
                {pokemon.types.map((item) => (
                  <li key={item.type.name}>{item.type.name}</li>
                ))}
              </ul>

              <p>
                <strong>Abilities</strong>
              </p>
              <ul>
                {pokemon.abilities.map((attribute) => (
                  <li key={attribute.ability.name}>{attribute.ability.name}</li>
                ))}
              </ul>
            </div>
          )}
        </Row>
        <Container className="d-flex justify-content-center align-items-center gap-3">
          <Button variant="dark" size="sm" onClick={() => navigate(-1)}>
            {" "}
            Back to list
          </Button>
        </Container>
      </Container>
    </div>
  );
};

export default PokemonSingle;
