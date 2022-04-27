import React, {Component} from "react";
import {Button, Card} from "react-bootstrap";
import cakeholder from "../../site/src/cakeholder.jpg"
import withNavigation from "../../routes/withRouter/withNavigation";


class CakeCard extends Component {
    render() {
        return <Card style={this.props.style}>
            <Card.Img variant="top" src={cakeholder} alt="cakeHolder"/>
            <Card.Body>
                <Card.Title>{this.props.data.name}</Card.Title>
                <Card.Text>
                    {this.props.data.description}
                </Card.Text>
            </Card.Body>
            <Card.Footer
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                Precio: {this.props.data.price}
                {!this.props.noprice ? <Button
                    onClick={() => this.props.navigate(`/order/${this.props.data.url}`)}>{"Ordenar"}</Button> : null}

            </Card.Footer>
        </Card>
    }
}

export default withNavigation(CakeCard);