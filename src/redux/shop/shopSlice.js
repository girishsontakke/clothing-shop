import { createSelector, createSlice } from "@reduxjs/toolkit";
import SHOP_DATA from "../../pages/shop/shop.data";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    collections: SHOP_DATA,
  },
  reducers: {},
});
const selectShop = (state) => state.shop;

export const selectShopCollection = createSelector(
  [selectShop],
  (shop) => shop.collections
);
export default shopSlice.reducer;
