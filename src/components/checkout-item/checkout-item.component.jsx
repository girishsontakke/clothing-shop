import "./checkout-item.styles.scss";
import React from "react";
import { connect } from "react-redux";
import { removeItem } from "../../redux/cart/cart.action";

const CheckoutItem = ({ item, dispatch }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={item.imageUrl} alt="item" />
    </div>
    <span className="name"> {item.name} </span>
    <span className="quantity"> {item.quantity} </span>
    <span className="price"> ${item.price} </span>
    <span className="remove-button" onClick={() => dispatch(removeItem(item))}>
      &#10005;
    </span>
  </div>
);

export default connect()(CheckoutItem);
