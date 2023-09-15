import React, { Component } from "react";

const TopNav = React.lazy(() => import("../components/TopNav"));
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const ProductDetails = React.lazy(() => import("../components/ProductDetails"));
const ProductsList = React.lazy(() => import("../components/ProductsList"));

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            cart: [],
        };
        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
    }
    componentDidMount() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];

        this.setState({
            cart,
        });
    }

    addToCart(item) {
        const cart = this.state?.cart || [];
        cart.push(item);
        this.setState({
            cart,
        });
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    removeFromCart(index) {
        const cart = this.state?.cart || [];
        cart.splice(index, 1);
        this.setState({
            cart,
        });
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    render() {
        return (
            <div>
                <TopNav cart={this.state.cart} removeFromCart={this.removeFromCart} />
                <Breadcrumb />
                <ProductDetails addToCart={this.addToCart} />
                <ProductsList addToCart={this.addToCart} />
            </div>
        );
    }
}
