import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  deliveryOrders: [],
  pickupOrders: [],
  expiry: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      const { deliveryOrders, pickupOrders } = action.payload;
      state.deliveryOrders.push(...deliveryOrders);
      state.pickupOrders.push(...pickupOrders);
    },
    RemoveFromCart: (state, action) => {
      const { orderType, orderId } = action.payload;
      if (orderType === "delivery") {
        state.deliveryOrders = state.deliveryOrders.filter((order) => order._id !== orderId);
      } else if (orderType === "pickup") {
        state.pickupOrders = state.pickupOrders.filter((order) => order._id !== orderId);
      }
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setExpiry: (state, action) => {
      state.expiry = action.payload;
    },
  },
});

export const { AddToCart, RemoveFromCart, setUserId, setExpiry } = cartSlice.actions;

export default cartSlice.reducer;