import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
//redux
import { toggleCartHidden } from "../../redux/cart/cartSlice";
import { selectCartItemsCount } from "../../redux/cart/cartSlice";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReduxState } from "../../types/reduxState";
import { StoreDispatch } from "../../redux/store";

interface Iprops {
  itemCount: number;
  toggleCartDropDown: () => void;
}

const CartIcon: React.FC<Iprops> = ({ itemCount, toggleCartDropDown }) => {
  return (
    <div className="cart-icon" onClick={toggleCartDropDown}>
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

const mapDispatchToProps = (dispatch: StoreDispatch) => ({
  toggleCartDropDown: () => dispatch(toggleCartHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
