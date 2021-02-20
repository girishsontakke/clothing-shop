import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
//redux
import { toggleCartHidden } from "../../redux-toolkit/cart/cartSlice";
import { selectCartItemsCount } from "../../redux-toolkit/cart/cartSlice";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ itemCount, toggleCartDropDown }) => {
  return (
    <div className="cart-icon" onClick={toggleCartDropDown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropDown: () => dispatch(toggleCartHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
