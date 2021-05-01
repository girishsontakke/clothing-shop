import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cartSlice";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cartSlice";
import { CartItemType } from "../../types/models";
import CartItem from "../cart-item/cart-item.component";
import { ReduxState } from "../../types/reduxState";
import { StoreDispatch } from "../../redux/store";

interface Iprops extends RouteComponentProps<any> {
  cartItems: CartItemType[];
  toggleCartDropDown: () => void;
}

const CartDropDown: React.FC<Iprops> = ({
  cartItems,
  history,
  toggleCartDropDown,
}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem item={cartItem} key={cartItem.id} />
          ))
        ) : (
          <span className="empty-message">Your Cart Is Empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          toggleCartDropDown();
          history.push(`${cartItems.length ? "/checkout" : "/shop"}`);
        }}
      >
        {cartItems.length ? "Go To Checkout" : "Go To Shop"}
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector<
  ReduxState,
  { cartItems: CartItemType[] }
>({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch: StoreDispatch) => ({
  toggleCartDropDown: () => dispatch(toggleCartHidden()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropDown)
);
