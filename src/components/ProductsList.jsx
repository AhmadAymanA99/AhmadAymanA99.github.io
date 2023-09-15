import React, { Component } from "react";

import stars4 from "../utils/images/stars4.png";
import stars5 from "../utils/images/stars5.png";
import stars3 from "../utils/images/stars3.png";
import heart from "../utils/images/heart.png";
import { Button } from "react-bootstrap";

import pic1 from "../utils/images/pic1.png";
import pic2 from "../utils/images/pic2.png";
import pic3 from "../utils/images/pic3.png";
import pic4 from "../utils/images/pic4.png";
import sm360 from "../utils/images/sm360.png";

export default class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.pics = [
            { pic: pic1, star: stars4, name: "10688", price: 300 },
            { pic: pic2, star: stars3, name: "10688", price: 300 },
            { pic: pic3, star: stars4, name: "10688", price: 300 },
            { pic: pic4, star: stars5, name: "10688", price: 300 },
            { pic: pic4, star: stars5, name: "10688", price: 300 },
            { pic: pic4, star: stars5, name: "10688", price: 300 },
        ];
    }
    render() {
        return (
            <div className="productsList">
                <h1 className="mb-5">You May Also Like</h1>
                <div className="productsListSlider">
                    {this.pics.map(({ pic, star, name, price }, index) => (
                        <div className="listItem" key={index}>
                            <div className="sm360">
                                <img src={sm360} alt="" />
                            </div>
                            <img src={pic} width={191} height={226} alt="" />
                            <p className="align-self-start mx-3 mt-3">{name}</p>
                            <p className="descCard">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nisi faucibus vitae odio. Amet mauris convallis amet, id sed.</p>

                            <img className="align-self-start mx-3" src={star} alt="" />
                            <p className="priceTag align-self-start mx-3 mt-2">{price} egp</p>
                            <div className="d-flex justify-content-between w-100">
                                <Button className="w-100 mx-3" variant="dark" onClick={() => this.props?.addToCart(this.pics[index])}>
                                    ADD TO CART
                                </Button>
                                <div className="heart">
                                    <img src={heart} alt="" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
