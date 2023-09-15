import React, { Component } from "react";

import Rectangle1 from "../utils/images/Rectangle1.png";
import Rectangle2 from "../utils/images/Rectangle2.png";
import Rectangle3 from "../utils/images/Rectangle3.png";
import Rectangle4 from "../utils/images/Rectangle4.png";
import Rectangle5 from "../utils/images/Rectangle5.png";

import stars from "../utils/images/stars.png";
import p360 from "../utils/images/360.png";

import Export from "../utils/images/Export.png";

import Frame1 from "../utils/images/Frame1.png";
import Frame2 from "../utils/images/Frame2.png";
import Frame3 from "../utils/images/Frame3.png";

import color1 from "../utils/images/color1.png";
import color2 from "../utils/images/color2.png";
import color3 from "../utils/images/color3.png";
import color4 from "../utils/images/color4.png";
import { Button } from "react-bootstrap";

export default class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.pics = [Rectangle2, Rectangle3, Rectangle4, Rectangle5];
        this.sizes = [Frame1, Frame2, Frame3];
        this.colors = [color1, color2, color3, color4];
        this.state = {
            counter: 1,
        };

        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        for (let index = 0; index < this.state.counter; index++) {
            this.props?.addToCart({ name: "Name Of Product", price: 3000, pic: Rectangle1 });
        }
        this.setState({
            counter: 1,
        });
    }
    render() {
        return (
            <div className="ProductDetails">
                <div className="imagesSection">
                    <div className="leftPics">
                        {this.pics.map((pic, index) => (
                            <div className="smPic" key={index}>
                                <img src={pic} alt="" />
                            </div>
                        ))}
                    </div>
                    <div className="mainPic">
                        <div className="discount">10% Off</div>
                        <img src={Rectangle1} alt="" />
                    </div>
                </div>
                <div className="details">
                    <div className="title">
                        <h4 className="m-0">Name Of Product</h4>
                        <img src={stars} alt="" />
                    </div>
                    <div className="btn360" role="button">
                        <img src={p360} alt="" />
                    </div>
                    <div className="priceSection">
                        <p className="priceTag">3000 egp</p>
                        <p className="priceTag2">3560 egp</p>
                    </div>
                    <p className="desc">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                    <h5 className="primary">Size</h5>
                    <div className="d-flex">
                        {this.sizes.map((size, index) => (
                            <div className="mx-2" key={index} role="button">
                                <img src={size} alt="" />
                            </div>
                        ))}
                    </div>
                    <h5 className="primary mt-4">Color</h5>
                    <div className="d-flex align-items-center">
                        {this.colors.map((color, index) => (
                            <div className="mx-2" key={index} role="button">
                                <img src={color} alt="" />
                            </div>
                        ))}
                    </div>
                    <div className="d-flex justify-content-between mt-5">
                        <div className="counterBox">
                            <p
                                role="button"
                                className="m-0"
                                onClick={() => {
                                    if (this.state.counter > 1) {
                                        this.setState({
                                            counter: this.state.counter - 1,
                                        });
                                    }
                                }}
                            >
                                -
                            </p>
                            <p className="m-0">{this.state.counter}</p>
                            <p
                                role="button"
                                className="m-0"
                                onClick={() => {
                                    this.setState({
                                        counter: this.state.counter + 1,
                                    });
                                }}
                            >
                                +
                            </p>
                        </div>
                        <Button className="w-100" variant="dark" onClick={this.handleAdd}>
                            BUY NOW
                        </Button>
                    </div>

                    <img className="mt-4" src={Export} alt="" role="button" />
                </div>
            </div>
        );
    }
}
