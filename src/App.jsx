import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Loader = React.lazy(() => import("./components/Loader"));
const Home = React.lazy(() => import("./pages/Home"));

export default class App extends Component {
    constructor() {
        super();
        this.state = { loading: true };
    }

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 2000);
    }

    render() {
        return this.state.loading ? (
            <Loader />
        ) : (
            <div className="App">
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}
