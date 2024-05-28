import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers"; // Adjust the path if needed

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  devTools: process.env.NODE_ENV !== 'production', 
  
});
console.log(store.getState());
export default store;
