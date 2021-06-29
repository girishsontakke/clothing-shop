import { useContext } from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
//redux
import { selectCartItemsCount } from "../../redux/cart/cartSlice";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReduxState } from "../../types/reduxState";
import { CartContext } from "../../context/cart/cart.context";

interface Iprops {
  itemCount: number;
}

const CartIcon: React.FC<Iprops> = ({ itemCount }) => {
  const { toggleHidden } = useContext(CartContext);
  return (
    <div className="cart-icon" onClick={toggleHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector<
  ReduxState,
  { itemCount: number }
>({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);
