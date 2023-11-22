import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import cartReducer from "./cartSlice";
import adminReducer from "./adminSlice";
import adminCartReducer from "./adminCart";
import orderReducer from "./orderSlice";
import laundaryReducer from "./laundarySlice";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  user: userReducer,
  cart: cartReducer,
  admin: adminReducer,
  order: orderReducer,
  laundary: laundaryReducer,
  adminCart:adminCartReducer
});

const persistConfig = {
  key: 'root',
  storage,
  devTools:true,
  blacklist: ['adminCart'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export default store;