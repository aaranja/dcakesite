import React, {Component} from "react";
import {Alert, Button, Container, Form, Spinner} from "react-bootstrap";
import "../../site/css/forms.css"
import withNavigation from "../../routes/withRouter/withNavigation";
import {connect} from "react-redux";
import {authAdmin} from "../../store/actions/auth";
import SessionHeader from "../../components/SessionHeader";


class AdminLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loging: false,
            error: false,
            msg_error: {},
        }
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
        const {loging} = this.state;
        if (loging) {
            const {auth_status, auth_error} = this.props;

            if (auth_status === "success") {
                this.props.navigate("/admin-site")
            } else {
                if (auth_status === "fail") {

                    this.setState({
                        loging: false,
                        error: true,
                        msg_error: auth_error,
                    })
                }
            }
        }

    }

    onLogin = (e) => {
        e.preventDefault()
        const form = e.target
        let sessionData = {
            email: form.elements.formBasicEmail.value,
            password: form.elements.formBasicPassword.value
        }

        this.props.authLogin(sessionData.email, sessionData.password);
        this.setState({
            loging: true,
        })


    }

    render() {
        return <>
            <SessionHeader logged={false} closeSession={null}/>
            <Container>

            <div className="form-order-div">
                <Form className="login-form" onSubmit={this.onLogin}><h4>Cake admin site
                </h4>
                    {
                        this.state.error ? <Alert variant="danger">
                            {this.state.msg_error["non_field_errors"]}
                        </Alert> : null
                    }
                    <Form.Floating className="mb-3">
                        <Form.Control type="email" placeholder="Enter email" id="formBasicEmail"/>
                        <label htmlFor="formBasicEmail">Correo electrónico</label>
                    </Form.Floating>
                    <Form.Floating className="mb-3">
                        <Form.Control type="password" placeholder="Password" id="formBasicPassword"/>
                        <label htmlFor="formBasicPassword">Contraseña</label>
                    </Form.Floating>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Guardar sesión"/>
                    </Form.Group>
                    {
                        this.state.loging ? <Button variant="primary" type="submit" disabled>
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            /> {" "}
                            Iniciando sesión
                        </Button> : <Button variant="primary" type="submit">Iniciar sesión</Button>
                    }
                </Form>
            </div>
        </Container> </>
    }
}

const mapStateToProps = (state) => {
    const {auth} = state;
    let status = auth.status;
    let error = auth.error;
    return {
        auth_status: status,
        auth_error: error,
        isLoading: auth.loading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authLogin: (email, password) => {
            dispatch(authAdmin(email, password))
        }
    }
}

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(AdminLogin));