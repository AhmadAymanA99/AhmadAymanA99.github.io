import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import logo from "../utils/images/logo.svg";

export default class Loader extends Component {
    constructor() {
        super();
        this.state = { count: 20 };
    }

    componentDidMount() {
        setInterval(() => this.setState({ count: this.state.count + 5 }), 100);
    }

    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <ProgressBar className="w-25 mt-5" animated variant="danger" now={this.state.count} />
            </header>
        );
    }
}
