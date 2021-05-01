import { createSelector, createSlice } from "@reduxjs/toolkit";
import SHOP_DATA from "../../pages/shop/shop.data";
import { ReduxState } from "../../types/reduxState";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    collections: SHOP_DATA,
  },
  reducers: {},
});
const selectShop = (state: ReduxState) => state.shop;

export const selectShopCollection = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam: string) => {
  return createSelector([selectShopCollection], (shopCollections) =>
    shopCollections.find(
      (shopCollection) => shopCollection.routeName === collectionUrlParam
    )
  );
};
export default shopSlice.reducer;
