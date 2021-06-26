import { createSelector, createSlice } from "@reduxjs/toolkit";
import { ReduxState } from "../../types/reduxState";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    collections: null,
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
  (collection) => (collection ? Object.values(collection) : [])
);

export const selectCollection = (collectionUrlParam: any) => {
  return createSelector([selectShopCollection], (shopCollections) =>
    shopCollections ? shopCollections[collectionUrlParam] : null
  );
};
export default shopSlice.reducer;
