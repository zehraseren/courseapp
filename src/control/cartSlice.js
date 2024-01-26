import { createSlice } from "@reduxjs/toolkit";
import courseItems from "../courseItems";

const initialState = {
  cartItems: courseItems,
  quantity: 4,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

// console.log(cartSlice);

export const { clearCart } = cartSlice.actions;

export default cartSlice.reducer;
