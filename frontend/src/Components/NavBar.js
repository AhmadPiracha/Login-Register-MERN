import React from "react";
import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
export default function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand to="/">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link active" to="/register">Register</Link></li>
                            <li className="nav-item"><Link className="nav-link active" to="/login">Login</Link></li>
                        </Nav>
                        <Nav>
                            <NavDropdown id="navbarScrollingDropdown" title='User'>
                                <NavDropdown.Item>Login</NavDropdown.Item><NavDropdown.Divider />
                                <NavDropdown.Item>SignUp</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}