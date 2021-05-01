import React from "react";
import { CartItemType } from "../../types/models";
import "./cart-item.styles.scss";

interface Iprops {
  item: CartItemType;
}

const CartItem: React.FC<Iprops> = ({
  item: { imageUrl, name, price, quantity },
}) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="cart-item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
