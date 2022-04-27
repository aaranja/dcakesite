import React, {Component} from "react";
import {Button, Container, Form} from "react-bootstrap";
import "../../site/css/forms.css"
import withNavigation from "../../routes/withRouter/withNavigation";



class AdminLogin extends Component {

    onLogin = (e) => {
        e.preventDefault()
        const form = e.target
        let sessionData = {
            email: form.elements.formBasicEmail.value,
            password: form.elements.formBasicPassword.value
        }
        this.props.navigate("/admin-site/home")

    }

    render() {
        return <Container>
            <div className="form-order-div ">
                <Form className="login-form" onSubmit={this.onLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Guardar sesión"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Iniciar sesión
                    </Button>
                </Form>
            </div>
        </Container>
    }
}

export default withNavigation(AdminLogin);