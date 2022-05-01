import React, {Component} from "react";
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {Link} from "react-router-dom"
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

class SessionHeader extends Component {
    render() {
        return <Navbar bg="light" expand="lg">
            <Container>
                <Link to="" className="navbar-brand">Pastelería Bibys</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                {
                    this.props.logged ? <NavbarCollapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Link to="client-orders" className="nav-link">Pedidos</Link>
                            <Link to="products" className="nav-link">
                                Productos
                            </Link>
                            <Link to="page-configuration" className="nav-link">
                                Presentación
                            </Link>
                            <NavDropdown title="Sesión" id="basic-nav-dropdown">
                                <NavDropdown.Item href="">Seguridad</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="" onClick={this.props.closeSession}>Cerrar
                                    sesión</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </NavbarCollapse> : null
                }
            </Container>
        </Navbar>
    }
}

export default SessionHeader;