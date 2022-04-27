import React, {Component} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import CakeCard from "../../containers/CakeCard";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import '../../site/css/forms.css'
import withParams from "../../routes/withRouter/withParams";

const data = {
    url: "pastel-de-fresas",
    name: "Pastel de fresas",
    image: null,
    description: "Contiene fresas, leche, para 10 personas.",
    price: "$250 mxn"
}

class MakeOrder extends Component {

    constructor(props) {
        super(props);

        this.state = {
            delivery: false,
            form_values: {},
        }

        this.form = React.createRef()
    }

    setDirection = val => {
        let {form_values} = this.state;
        form_values["delivery_type"] = val;
        this.setState({delivery: val === "2", form_values: form_values})
    }

    onFormSubmit = e => {
        e.preventDefault()
        console.log(this.state.form_values)

    }


    render() {
        const setInput = label => {
            return {
                onChange: (event) => {
                    let {form_values} = this.state;
                    form_values[label] = event.target.value
                    this.setState({
                        form_values: form_values,
                    })
                }
            }
        }
        return <div className="form-order-div">
            <div style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 20,
            }}>
                <CakeCard
                    data={data}
                    style={{width: '18rem'}}
                    noprice
                />
            </div>
            <Form className="form-order"
                  onSubmit={this.onFormSubmit}
                  name="fill-order"
                  ref={this.form}

            >
                <Form.Group as={Row} className="mb-3" controlId="formBasicDate">
                    <Form.Label column sm={2}>Fecha de entrega</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            {...setInput("delivery_date")}
                            required
                            type="date"
                            placeholder="Seleccione una fecha de entrega"/>
                        <Form.Text className="text-muted">
                            Pedidos en el mismo día tiene un costo extra.
                        </Form.Text>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formBasicText">
                    <Form.Label column sm={2}>Nombre completo</Form.Label>
                    <Col sm={10}>
                        <Form.Control required {...setInput("client_name")} type="text"
                                      placeholder="Escriba su nombre completo"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label column sm={2}>Mensaje</Form.Label>
                    <Col sm={10}>
                        <Form.Control {...setInput("custom_message")} type="text"
                                      placeholder="Mensaje que será escrito en el pastel"/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                    <Form.Label column sm={2}>Correo</Form.Label>
                    <Col sm={10}>
                        <Form.Control required {...setInput("email")} type="email"
                                      placeholder="Escriba su correo electrónico"/>
                        <Form.Text className="text-muted">
                            Se le enviará una copía de su recibo a su dirección de correo electrónico.
                        </Form.Text>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label column sm={2}>No. Celular</Form.Label>
                    <Col sm={10}>
                        <PhoneInput
                            required
                            defaultCountry={"MX"}
                            country="MX"
                            placeholder="Escriba su número de teléfono"
                            value={null}
                            onChange={(val) => {
                                let {form_values} = this.state;
                                form_values['phone'] = val;
                                this.setState({form_values: form_values})
                            }}/>
                        <Form.Text className="text-muted">
                            Una vez recibida su orden, se le llamará para confirmar.
                        </Form.Text>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formBasicSelect">
                    <Form.Label column sm={2}>Tipo de entrega</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            required
                            aria-label="Seleccione el tipo de entrega"
                            as="select"
                            onChange={(e) => {
                                this.setDirection(e.target.value)
                            }}>
                            <option hidden value=""> -- Seleccione una opción -- </option>
                            <option value="1">En sucursal</option>
                            <option value="2">A domicilio</option>
                        </Form.Control>
                        <Form.Text className="text-muted">
                            Una vez recibida su orden, se le llamará para confirmar.
                        </Form.Text>
                    </Col>
                </Form.Group>
                {
                    this.state.delivery ?
                        <Form.Group as={Row} className="mb-3" controlId="formBasicText">
                            <Form.Label column sm={2}>Domicilio</Form.Label>
                            <Col sm={10}>
                                <Form.Control {...setInput("address")} type="email"
                                              placeholder="Escriba el lugar de entrega" required/>
                            </Col>
                        </Form.Group>
                        : null
                }
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}/>
                    <Col sm={10}>
                        <Button variant="primary" type="submit">
                            Comprar
                        </Button>
                    </Col>
                </Form.Group>
            </Form>


        </div>
    }
}

export default withParams(MakeOrder);