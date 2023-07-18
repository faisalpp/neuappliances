import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartId: null,
  userId: null,
  deliveryOrders: [],
  pickupOrders: [],
  deliveryLocation:null,
  deliveryDate:null,
  deliveryTime:null,
  expiry: null,
  totalPrice:null,
  cartCount:0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, action) => {
      const { _id,userId,deliveryOrders,deliveryDate,deliveryTime,deliveryLocation,pickupOrders,pickupLocation,expiry } = action.payload;
      state.cartId = _id;
      state.userId = userId;
      state.deliveryOrders = deliveryOrders.length > 0 ? [...deliveryOrders] : [];
      state.deliveryLocation = deliveryLocation || null;
      state.deliveryDate = deliveryDate || null;
      state.deliveryTime = deliveryTime || null;
      state.pickupOrders = pickupOrders.length > 0 ? [...pickupOrders] : [];
      state.pickupLocation = pickupLocation || null;
      state.expiry = expiry;
      state.cartCount = pickupOrders.length + deliveryOrders.length;

      // Calculate total sale price
      const totalDeliverySalePrice = state.deliveryOrders.reduce((total, order) => {
        const salePrice = order.salePrice !== null ? order.salePrice : order.regularPrice;
        return total + salePrice;
      }, 0);

      const totalPickupSalePrice = state.pickupOrders.reduce((total, order) => {
        const salePrice = order.salePrice !== null ? order.salePrice : order.regularPrice;
        return total + salePrice;
      }, 0);

      state.totalPrice = totalDeliverySalePrice + totalPickupSalePrice;
      
    },
  },
});

export const { updateCart } = cartSlice.actions;

export default cartSlice.reducer;