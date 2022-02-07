import React from "react";
import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";
const PokeCard = ({ name, image, pokemonName, fav, favClick }) => {
  return (
    <div>
      <Card bg="dark" text="light" key={name} className="pokecard">
        <Card.Header>
          {name.toUpperCase()}
          {fav ? (
            <HeartFill size="30" color="red" onClick={favClick} />
          ) : (
            <Heart size="30" color="red" onClick={favClick} />
          )}
        </Card.Header>
        <Card.Body>
          <Card.Img variant="top" src={image} />
        </Card.Body>
        <LinkContainer to={`/${pokemonName}`}>
          <Button variant="outline-secondary" size="sm">
            More Info
          </Button>
        </LinkContainer>
      </Card>
    </div>
  );
};

export default PokeCard;
