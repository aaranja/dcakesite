import React, {Component} from "react";
import {Container, Nav, Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom"
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

class Header extends Component {
    render() {
        return <Navbar bg="light" expand="lg">
            <Container>
                <Link to="" className="navbar-brand">Pastelería Bibys</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <NavbarCollapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav >
                        <Link to="order-review" className="nav-link">Ver pedido</Link>
                        <Link to="custom-order" className="nav-link">
                            Pastel personalizado
                        </Link>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    }
}

export default Header;