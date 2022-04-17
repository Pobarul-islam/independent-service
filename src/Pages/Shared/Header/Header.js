import React from 'react';
import './Header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
                    <Navbar.Brand as={Link} to="/">Doctor Service</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to ="/">Home</Nav.Link>
      <Nav.Link as={Link} to ="/#servicePage">Services</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link eventKey={2} as={Link} to="/login">
        Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>



        </>
    );
};

export default Header;