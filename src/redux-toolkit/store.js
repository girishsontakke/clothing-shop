import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import userReducer from "./user/userSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});
