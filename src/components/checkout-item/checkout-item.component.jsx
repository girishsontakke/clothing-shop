import "./checkout-item.styles.scss";
import React from "react";
import { connect } from "react-redux";
import {
  addItem,
  clearItem,
  removeItem,
} from "../../redux-toolkit/cart/cartSlice";

const CheckoutItem = ({ item, dispatch }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={item.imageUrl} alt="item" />
    </div>
    <span className="name"> {item.name} </span>
    <span className="quantity">
      <div className="arrow" onClick={() => dispatch(removeItem(item))}>
        &#10094;
      </div>
      <span className="value">{item.quantity}</span>
      <div className="arrow" onClick={() => dispatch(addItem(item))}>
        &#10095;
      </div>
    </span>
    <span className="price"> ${item.price} </span>
    <span className="remove-button" onClick={() => dispatch(clearItem(item))}>
      &#10005;
    </span>
  </div>
);

export default connect()(CheckoutItem);
