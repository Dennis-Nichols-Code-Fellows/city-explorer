import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class Header extends React.Component {

  render() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">City Explorer</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="https://github.com/dennis-nichols">
              Our Team
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
}

export default Header;
