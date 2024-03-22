import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Assuming you export the reducer function from cartSlice

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});
