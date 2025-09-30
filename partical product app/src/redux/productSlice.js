import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('http://localhost:3001/products');
  return response.data;
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [
      { id: 1, image: 'https://via.placeholder.com/40', name: 'Postmates - Fleet - Backpack...', sku: '11.862 Ready', status: '653', currentQty: '653', incoming: '653', usage: '653', outOfStock: 'Sep 14, 2022', by: 'Sep 14, 2022', remaining: '43', leadTime: '103' },
      { id: 2, image: 'https://via.placeholder.com/40', name: 'Postmates - Fleet - Backpack...', sku: '11.862 Ready', status: '653', currentQty: '653', incoming: '653', usage: '653', outOfStock: 'Sep 14, 2022', by: 'Sep 14, 2022', remaining: '43', leadTime: '103' },
      // Add more dummy data as needed
    ],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.status = 'succeeded';
      
    });
  },
});

export default productSlice.reducer;