import React from "react";
import { Card } from "react-bootstrap";

const PokeCard = ({ name, image, moves }) => {
  return (
    <div className="pokecard">
      <Card bg="dark" text="light" key={name}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name.toUpperCase()}</Card.Title>
          <Card.Text>Total Moves: {moves.length}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PokeCard;
