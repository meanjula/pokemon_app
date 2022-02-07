import React from "react";
// import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="add-padding fs-4" expand="lg">
        <Container className="d-flex justify-content-center align-items-center gap-3">
          <img src="A.svg" alt="my-logo" width="100" height="100" />

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link href="#home">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/pokemons">
                <Nav.Link href="#link">Pokemons</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/favourites">
                <Nav.Link href="#link">Favourites</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
