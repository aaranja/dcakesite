import React, {Component} from "react";
import {Button, Card, CloseButton, Col, Form, FormControl, Row} from "react-bootstrap";
import withRouter from "../../routes/withRouter/withRouter";
import cakeholder from "../../site/src/cakeholder.jpg";

class ProductItem extends Component {

    onClose = () => {
        this.props.navigate("/admin-site/products")
    }

    render() {
        return <Card className="product-inv">
            <Card.Header style={{display: "flex", alignItems: "center"}}>
                <CloseButton onClick={this.onClose}/>
                &nbsp;Producto {this.props.params.productId}
                <div style={{marginLeft: "auto"}}>
                    <Button>Guardar</Button>
                </div>
            </Card.Header>
            <Card.Body >
                <Card.Img variant="top" src={cakeholder} alt="cakeHolder" style={{marginBottom: 10}}/>
                <Form className="form-product-item"
                      onSubmit={this.onFormSubmit}
                      name="product-item"
                      ref={this.form}
                >
                    <Form.Floating className="mb-3">
                        <Form.Control type="text" placeholder="Nombre de producto" id="productName"/>
                        <label htmlFor="productName">Nombre</label>
                    </Form.Floating>
                    <Form.Floating className="mb-3">
                        <Form.Control type="text" placeholder="Descripción" id="productDescription"/>
                        <label htmlFor="productDescription">Descripción</label>
                    </Form.Floating>
                    <Form.Floating className="mb-3">
                        <Form.Control type="text" placeholder="Precio" id="productPrice"/>
                        <label htmlFor="productPrice">Precio</label>
                    </Form.Floating>
                    <Form.Check className="mb-3">
                        <input type="checkbox" placeholder="Precio" id="productAvailable"/>
                        <label htmlFor="productAvailable">&nbsp;Disponible</label>
                    </Form.Check>
                </Form>
            </Card.Body>
            <Card.Footer className="text-muted">Último cambio hace: 2 días</Card.Footer>
        </Card>
    }
}

export default withRouter(ProductItem);