import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
//redux
import { useDispatch } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartIcon = () => {
  const dispatch = useDispatch();
  const temp = () => dispatch(toggleCartHidden());
  return (
    <div className="cart-icon" onClick={temp}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
export default CartIcon;
