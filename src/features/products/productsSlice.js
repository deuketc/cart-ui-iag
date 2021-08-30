import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  productList: [],
  status: null,
};

export const getProducts = createAsyncThunk('products', async () => {
  const response = await fetch('http://localhost:5000/api/products/');
  const data = await response.json();
  return data;
});

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.productList = payload;
      state.status = 'success';
    },
    [getProducts.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

// action creators
export const { fetchProducts } = productsSlice.actions;

export const selectProducts = (state) => state.products.productList;

export default productsSlice.reducer;
