import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../store/productslice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});