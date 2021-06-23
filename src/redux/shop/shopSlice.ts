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

export const selectCollection = (collectionUrlParam: any) => {
  return createSelector(
    [selectShopCollection],
    (shopCollections) => shopCollections[collectionUrlParam]
  );
};
export default shopSlice.reducer;
