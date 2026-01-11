import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += newItem.quantity || 1;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          image: newItem.image,
          quantity: newItem.quantity || 1,
          totalPrice: newItem.price * (newItem.quantity || 1),
        });
      }

      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },

    removeFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);

      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );

      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },

    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        item.quantity = quantity;
        item.totalPrice = item.price * quantity;

        if (quantity <= 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }
      }

      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalAmount = state.items.reduce(
        (total, item) => total + item.totalPrice,
        0
      );

      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state));
      }
    },

    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;

      if (typeof window !== 'undefined') {
        localStorage.removeItem('cart');
      }
    },

    loadCartFromStorage(state) {
      if (typeof window !== 'undefined') {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
          const parsedCart = JSON.parse(savedCart);
          state.items = parsedCart.items || [];
          state.totalQuantity = parsedCart.totalQuantity || 0;
          state.totalAmount = parsedCart.totalAmount || 0;
        }
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  loadCartFromStorage,
} = cartSlice.actions;

export default cartSlice.reducer;