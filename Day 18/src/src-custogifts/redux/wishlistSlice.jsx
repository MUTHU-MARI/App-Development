import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'Wishlist',
  initialState: {
    items: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.pid === newItem.pid);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeFromWishlist: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.pid !== itemId);
    },
    
    removeAllFromWishlist: state => {
      state.items = [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, removeAllFromWishlist} = wishlistSlice.actions;

export default wishlistSlice.reducer;
export const selectWishlist =(state)=>state.Wishlist.Wishlist;
