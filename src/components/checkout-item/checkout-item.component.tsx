import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import { addItem, clearItem, removeItem } from "../../redux/cart/cartSlice";
import { CartItemType } from "../../types/models";
import { StoreDispatch } from "../../redux/store";

interface Iprops {
  item: CartItemType;
  dispatch: StoreDispatch;
}

const CheckoutItem: React.FC<Iprops> = ({ item, dispatch }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={item.imageUrl} alt="item" />
    </div>
    <span className="name"> {item.name} </span>
    <span className="quantity">
      <button className="arrow" onClick={() => dispatch(removeItem(item))}>
        &#10094;
      </button>
      <span className="value">{item.quantity}</span>
      <button className="arrow" onClick={() => dispatch(addItem(item))}>
        &#10095;
      </button>
    </span>
    <span className="price"> ${item.price} </span>
    <span className="remove-button" onClick={() => dispatch(clearItem(item))}>
      &#10005;
    </span>
  </div>
);

export default connect()(CheckoutItem);
