import React, {Component} from "react";
import {
    Button,
    ButtonGroup, Card,
    Container,
    Dropdown,
    DropdownButton,
    FormControl,
    InputGroup,
    Table
} from "react-bootstrap";
import {Outlet} from "react-router-dom"
import withNavigation from "../../routes/withRouter/withNavigation";

import "../../site/css/product-layouts.css"


class Products extends Component {

    onEdit = (productId) => {
        this.props.navigate(`/admin-site/products/${productId}`)
    }

    render() {
        return <Container>
            <div className="jumbotron" style={{marginTop: 20, marginBottom: 20}}>
                <h3>Productos</h3>
            </div>
            <div style={{
                maxWidth: 720,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
            }}>
                <InputGroup>
                    <FormControl
                        placeholder={"Escriba el nombre de producto"}
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                </InputGroup>
                <Button>Nuevo</Button>
            </div>
            <div className="with-right">
                <div style={{width: "90%", marginRight: "20px"}}><Table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Disponibilidad</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        {Array.from({length: 4}).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}

                        <td key={200}>
                            <DropdownButton as={ButtonGroup} title="Acción">
                                <Dropdown.Item onClick={(e) => {
                                    this.onEdit("123")
                                }}>Editar</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item>Eliminar</Dropdown.Item>
                            </DropdownButton>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        {Array.from({length: 4}).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}

                        <td key={201}>
                            <DropdownButton as={ButtonGroup} title="Acción">
                                <Dropdown.Item onClick={(e) => {
                                    this.onEdit("234")
                                }}>Editar</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item>Eliminar</Dropdown.Item>
                            </DropdownButton>
                        </td>
                    </tr>
                    </tbody>
                </Table></div>
                <div>
                    <Outlet/>
                </div>
            </div>

        </Container>
    }
}

export default withNavigation(Products);