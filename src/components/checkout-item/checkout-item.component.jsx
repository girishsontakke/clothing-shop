import "./checkout-item.styles.scss";
import React from "react";

const CheckoutItem = ({ item }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={item.imageUrl} alt="item" />
    </div>
    <span className="name"> {item.name} </span>
    <span className="quantity"> {item.quantity} </span>
    <span className="price"> ${item.price} </span>
    <span className="remove-button">&#10005;</span>
  </div>
);

export default CheckoutItem;
