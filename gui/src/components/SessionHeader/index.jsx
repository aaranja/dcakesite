import React, {Component} from "react";
import {Container, Nav, Navbar} from 'react-bootstrap';
import {Link} from "react-router-dom"
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

class SessionHeader extends Component {
    render() {
        return <Navbar bg="light" expand="lg">
            <Container>
                <Link to="" className="navbar-brand">Pastelería Bibys</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            </Container>
        </Navbar>
    }
}

export default SessionHeader;