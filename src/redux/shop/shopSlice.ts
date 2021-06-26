import { createSelector, createSlice } from "@reduxjs/toolkit";
import { ReduxState } from "../../types/reduxState";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    collections: {},
  },
  reducers: {
    setCollection: (state, action) => {
      state.collections = action.payload;
    },
  },
});

export const { setCollection } = shopSlice.actions;

const selectShop = (state: ReduxState) => state.shop;

export const selectShopCollection = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectShopCollection],
  (collection) => Object.values(collection)
);

export const selectCollection = (collectionUrlParam: any) => {
  return createSelector(
    [selectShopCollection],
    (shopCollections) => shopCollections[collectionUrlParam]
  );
};
export default shopSlice.reducer;
