import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      const { id, qty } = action.payload;
      const existingItem = state.find(item => item.id === id);
      
      if (existingItem) {
        existingItem.qty += qty; // Increase quantity if item exists
      } else {
        state.push(action.payload); // Add as new item if not found
      }
    },
    remove(state, action) {
        const itemIdToRemove = action.payload.id;
        return state.filter(item => item.id !== itemIdToRemove);
      },
    
      
      incrementQuantity(state, action) {
        const { id } = action.payload;
        const item = state.find((item) => item.id === id);
        if (item) {
          item.quantity++;
        }
      },
      decrementQuantity(state, action) {
        const { id } = action.payload;
        const item = state.find((item) => item.id === id);
        if (item && item.quantity > 1) {
          item.quantity--;
        }
      },
  }
});

export const { add, remove, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
