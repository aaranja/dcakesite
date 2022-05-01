import React, {Component} from "react";
import {Outlet} from "react-router-dom";
import './App.css';
import Header from "./containers/Header";
import {Container} from "react-bootstrap";

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
        };
    }

    render() {
        return (
            <div>
                <Header/>
                <Container>
                    <Outlet/>
                </Container>
            </div>
        );
    }
}

export default App;
