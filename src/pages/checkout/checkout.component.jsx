import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect"; // to pull of stuff from state

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCartTotal } from "../../redux/cart/cart.selectors";

import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total}) => (
    <div className="checkout-page">
        
        <div className="checkout-header"> 
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>

        {
            cartItems.map(cartItem => cartItem.name)
        }

        <div className="total">
            <span>TOTAL: ${total}</span>
        </div>
        
    </div>
)


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems, // those are selectors in cart/cart.selectors
    total: selectCartTotal
}) // with this and the connect method, we have access to "cartItems" and "total" in the props that we can destructure

export default connect(mapStateToProps, null)(CheckoutPage);
