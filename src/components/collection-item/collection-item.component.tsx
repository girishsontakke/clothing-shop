import CustomButton from "../custom-button/custom-button.component";

import "./collection-item.styles.scss";
//redux
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cartSlice";
import { CartItemType } from "../../types/models";

interface Iprops {
  item: CartItemType;
}

const CollectionItem: React.FC<Iprops> = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();
  const addItemToCart = (item: CartItemType) => dispatch(addItem(item));
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price" role="img" aria-label="currency">
          💲{price}
        </span>
      </div>
      <CustomButton inverted onClick={() => addItemToCart(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
