import React, { Component } from "react";
import logo from "../utils/images/logo.svg";
import menu from "../utils/images/menu.png";
import search from "../utils/images/search.png";
import profile from "../utils/images/profile.png";
import Cart from "./Cart";

export default class TopNav extends Component {
    constructor(props) {
        super(props);
        this.menuItems = ["products", "Best seller", "new arrival", "about us", "contact us"];
    }

    render() {
        return (
            <div className="topNav">
                <img src={menu} alt="" />
                <img src={logo} className="h-50 mx-4" alt="" />
                <div className="nav">
                    {this.menuItems.map((item, index) => (
                        <a href="#" key={index} className="navItem">
                            {item}
                        </a>
                    ))}
                </div>
                <div className="rightSection">
                    <div className="navIcon" role="button">
                        <img src={search} alt="" />
                    </div>
                    <Cart cart={this.props.cart} removeFromCart={this.props.removeFromCart} />
                    <div className="navIcon" role="button">
                        <img src={profile} alt="" />
                    </div>
                </div>
            </div>
        );
    }
}
