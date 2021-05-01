import { createSelector, createSlice } from "@reduxjs/toolkit";
import { ReduxState } from "../../types/reduxState";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

const selectUser = (state: ReduxState) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export default userSlice.reducer;
