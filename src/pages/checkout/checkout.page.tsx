import React from "react";
import "./checkout.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cartSlice";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import { CartItemType } from "../../types/models";
import { ReduxState } from "../../types/reduxState";

interface Iprops {
  cartItems: CartItemType[];
  total: number;
}

const CheckoutPage: React.FC<Iprops> = ({ cartItems, total }) => {
  return (
    <section className="checkout-page">
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
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
      <div className="total"> Total: ${total}</div>
      <div className="test-warning">
        *Please use following test credit card for payment* <br />
        4242 4242 4242 4242 - Exp: 01/2022 - CVV: 123
      </div>
      <StripeCheckoutButton price={total} />
    </section>
  );
};

const mapStateToProps = createStructuredSelector<ReduxState, Iprops>({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
