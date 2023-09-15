import React, { Component, Fragment } from "react";
import close from "../utils/images/close.png";
import cart from "../utils/images/cart.png";
import bin from "../utils/images/bin.png";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";

export default class Cart extends Component {
    render() {
        return (
            <OverlayTrigger
                trigger="click"
                rootClose
                placement="bottom"
                overlay={
                    <Popover className="Cart">
                        <div className="w-100 my-1 px-3 d-flex align-items-center justify-content-between">
                            <p className="m-0">MY CART ({this.props.cart?.length || 0})</p>
                            <img src={close} alt="" role="button" onClick={() => document.body.click()} />
                        </div>
                        <div className="cartList">
                            {this.props.cart?.map((item, index) => (
                                <Fragment key={index}>
                                    <div className="cartItem">
                                        <img src={item.pic} alt="" width={60} height={60} />
                                        <div className="d-flex flex-column">
                                            <p className="title2">{item.name}</p>
                                            <p className="secondary">size : 2*3 M</p>
                                            <p className="secondary">color : black</p>
                                            <p className="priceTagSm">{item.price} EGP</p>
                                        </div>
                                        <img src={bin} alt="" role="button" onClick={() => this.props?.removeFromCart(index)} />
                                    </div>
                                    <div className="divider" />
                                </Fragment>
                            ))}
                        </div>
                        {this.props.cart?.length > 0 ? (
                            <>
                                <div className="w-100 my-1 px-3 d-flex align-items-center justify-content-between">
                                    <p className="title2">Sub Total</p>
                                    <p className="priceTagSm">{this.props.cart?.reduce((accumulator, currentValue) => accumulator + currentValue?.price || 0, 0)} egp</p>
                                </div>
                                <Button className="mx-4 my-3" variant="dark">
                                    GO TO CART
                                </Button>
                            </>
                        ) : null}
                    </Popover>
                }
            >
                <div className="navIcon" role="button">
                    <img src={cart} alt="" />
                    <div className="cartCounter">{this.props.cart?.length || 0}</div>
                </div>
            </OverlayTrigger>
        );
    }
}
