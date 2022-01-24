import React from "react";
// import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        className="add-padding d-flex justify-content-center align-items-center"
        expand="lg"
      >
        <Container>
          <img src="A.svg" alt="my-logo" width="110" height="110" />
          <Navbar.Brand href="/home" className="m-auto navbar">
            Pokemon
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link href="#home">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/pokemons">
                <Nav.Link href="#link">Pokemons</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
