import React, {Component} from "react";
import {Carousel, Col, Row} from "react-bootstrap";
import CakeCard from "../../containers/CakeCard";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cardlist: [
                {
                    url: "pastel-de-fresas",
                    name: "Pastel de fresas",
                    image: null,
                    description: "Contiene fresas, leche, para 10 personas.",
                    price: "$250 mxn"
                },
                {
                    url: "pastel-de-3-leches",
                    name: "Pastel de 3 leches",
                    image: null,
                    description: "Contiene leche, para 10 personas.",
                    price: "$250 mxn"
                },
                {
                    url: "pastel-de-calabaza",
                    name: "Pastel de calabaza",
                    image: null,
                    description: "Contiene calabaza, para 10 personas.",
                    price: "$250 mxn"
                },
                {
                    url: "pastel-de-pera",
                    name: "Pastel de pera",
                    image: null,
                    description: "Contiene pera, para 10 personas.",
                    price: "$250 mxn"
                },
                {
                    url: "pastel-de-frambuesa",
                    name: "Pastel de frambuesa",
                    image: null,
                    description: "Contiene frambuesa, para 10 personas.",
                    price: "$250 mxn"
                },
            ]
        }
    }

    render() {
        return <div>
            <Carousel style={{backgroundColor: "grey", height: 300}}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br/>

            <Row xs={1} md={2} lg={4} className="g-4">
                {this.state.cardlist.map((item, key) => {
                    return <Col key={key}><CakeCard data={item}/></Col>
                })}
            </Row>
        </div>
    }
}

export default Home;