import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  ordersList: [],
  status: null,
};

export const getOrders = createAsyncThunk('orders', async () => {
  const response = await fetch('http://localhost:5000/api/orders/');
  const data = await response.json();
  return data;
});

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  extraReducers: {
    [getOrders.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getOrders.fulfilled]: (state, { payload }) => {
      state.ordersList = payload;
      state.status = 'success';
    },
    [getOrders.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

// action creators
export const { fetchOrders } = ordersSlice.actions;

export const selectOrders = (state) => state.orders.ordersList;

export default ordersSlice.reducer;
