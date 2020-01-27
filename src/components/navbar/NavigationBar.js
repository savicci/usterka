import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import l from '../../assets/img/log.png'
import "./Navbar.css";
import {authenticationService} from "../../auth/services";
import {history} from "../../auth/helpers";

export class NavigationBar extends React.Component {
    logout() {
        authenticationService.logout();
        history.push('/login');
    }

    render() {
        const user = JSON.parse(localStorage.getItem('currentUser'));

        return (
            <Navbar bg="light" expand="sm">
                <Navbar.Brand href="/">
                    <img src={l}
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
                        <img src={require("../../assets/honk.jpg")}
                             alt="Pepe"
                             width="60"
                             height="50"
                             className="d-inline-block"
                        />

                        <NavDropdown alignRight className='user' title={user.firstName + " " + user.lastName}>
                            <NavDropdown.Header>Opcje konta</NavDropdown.Header>
                            <NavDropdown.Item href="/login" onClick={this.logout}>
                                Wyloguj się
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}