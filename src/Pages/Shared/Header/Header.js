import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/dsg-logo.jpg'


const Header = () => {
    return (
        <>
            <Navbar bg="light" variant="primary">
                <Container>
                    <Navbar.Brand href="#home"><img className='doctor-logo' src={logo} alt="" /></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Services</Nav.Link>
                        <Nav.Link href="#pricing">Blogs</Nav.Link>
                        <Nav.Link href="#pricing">About</Nav.Link>
                    
                    </Nav>
                </Container>
            </Navbar>
         

         
        </>
    );
};

export default Header;