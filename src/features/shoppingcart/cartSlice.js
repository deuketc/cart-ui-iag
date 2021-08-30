import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  status: 'idle',
};

const setRequestOptions = (payload) => {
  return {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  };
};

export const submitOrder = createAsyncThunk('ShoppingCart', async (payload) => {
  const response = await fetch(
    'http://localhost:5000/api/orders/',
    setRequestOptions(payload)
  );
  const data = await response.json();
  return data;
});

export const cartSlice = createSlice({
  name: 'ShoppingCart',
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      const item = state.cartItems.find((item) => item.id === payload.id);
      if (item) {
        item.quantity ? item.quantity++ : (item.quantity = 1);
      } else {
        const newItem = { ...payload, quantity: 1 };
        state.cartItems.push(newItem);
      }
    },

    removeProduct: (state, { payload }) => {
      state.cartItems.splice(
        state.cartItems.findIndex((item) => item.id === payload.id),
        1
      );
    },

    increaseQuantity: (state, { payload }) => {
      const item = state.cartItems.find((item) => item.id === payload.id);
      item.quantity++;
    },

    decreaseQuantity: (state, { payload }) => {
      const item = state.cartItems.find((item) => item.id === payload.id);
      if (item.quantity > 1) {
        item.quantity--;
      }
    },
  },
  extraReducers: {
    [submitOrder.pending]: (state, action) => {
      state.status = 'loading';
    },
    [submitOrder.fulfilled]: (state, action) => {
      state.cartItems = [];
      state.status = 'success';
    },
    [submitOrder.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export const { decreaseQuantity, increaseQuantity, addProduct, removeProduct } =
  cartSlice.actions;

export const selectCount = (state) => state.cart.value;

export const selectCart = (state) => state.cart.cartItems;

export default cartSlice.reducer;
