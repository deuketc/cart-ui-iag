import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/shoppingcart/cartSlice';
import productReducer from './features/products/productsSlice';
import orderReducer from './features/orders/ordersSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    orders: orderReducer,
  },
});
