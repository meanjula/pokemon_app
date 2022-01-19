import "./App.css";
import { Navbar, Container, Card, Row, Spinner } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    //promise.then(call back fun)
    axios.get("https://pokeapi.co/api/v2/pokemon/").then((res) => {
      const fetches = res.data.results.map((p) =>
        axios.get(p.url).then((res) => res.data)
      );
      console.log(fetches);
      Promise.all(fetches).then((fetchedData) => {
        setPokemons(fetchedData);
        setIsLoading(false);
      });
    });
  }, []);

  return (
    <div className="App">
      <>
        <Navbar bg="dark" variant="dark" className="add-padding">
          <Container>
            <Navbar.Brand href="#home" className="m-auto">
              Pokemon App
            </Navbar.Brand>
          </Container>
        </Navbar>
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
                <Card bg="dark" text="light" key={pokemon.name}>
                  <Card.Img
                    variant="top"
                    src={pokemon.sprites.other.dream_world.front_default}
                  />
                  <Card.Body>
                    <Card.Title>{pokemon.name.toUpperCase()}</Card.Title>
                    <Card.Text>Total Moves: {pokemon.moves.length}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
          </Row>
        </Container>
      </>
    </div>
  );
}

export default App;
