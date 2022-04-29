import React, {Component} from "react";
import {Button, Container, Form} from "react-bootstrap";
import "../../site/css/forms.css"
import withNavigation from "../../routes/withRouter/withNavigation";
import {connect} from "react-redux";
import {authAdmin} from "../../store/actions/auth";


class AdminLogin extends Component {

    onLogin = (e) => {
        e.preventDefault()
        const form = e.target
        let sessionData = {
            email: form.elements.formBasicEmail.value,
            password: form.elements.formBasicPassword.value
        }

        this.props.authLogin(sessionData.email, sessionData.password);
        // this.props.navigate("/admin-site/home")

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

const mapStateToProps = (state) => {
    console.log(state)
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        authLogin: (email, password) => {
            dispatch(authAdmin(email, password))
        }
    }
}

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(AdminLogin));