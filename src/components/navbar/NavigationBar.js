import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./Navbar.css";

export class NavigationBar extends React.Component {
    render() {
        return (
                <Navbar bg="light" expand="sm">
                    <Navbar.Brand href="/">
                        <img src={require("../../images/favicon.ico")}
                             width="40"
                             height="40"
                             className="d-inline-block align-top"
                             alt="UsterkaLogo"
                        />
                        Usterka
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link className='usterka-option' href="/">Strona główna</Nav.Link>
                            <Nav.Link className='usterka-option' href="/search">Wyszukiwarka</Nav.Link>
                        </Nav>

                        <Nav>
                            <img src={require("../../images/honk.jpg")}
                                 alt="Pepe"
                                 width="60"
                                 height="50"
                                 className="d-inline-block"
                            />

                            <NavDropdown className='user' title="Andrzej Duda">
                                <NavDropdown.Header>Opcje konta</NavDropdown.Header>
                                <NavDropdown.Item href="/login">
                                    Wyloguj się
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        )
    }
}