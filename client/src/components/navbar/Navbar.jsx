import React from "react";
import { Container, Nav } from "react-bootstrap";

const Navbar = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">User List</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#contact">Contact Us</Nav.Link>
                        <Nav.Link href="#log">Log In</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navbar;
