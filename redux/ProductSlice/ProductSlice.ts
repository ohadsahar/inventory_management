import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import {
  createProduct,
  deleteProduct,
  getProducts,
  searchProduct,
  updateProduct,
} from './AsyncFunctions/handleProduct';
import { ProductProps } from 'models/product.model';

interface initialState {
  initialProducts: ProductProps[];
  loading: boolean;
  error: string;
}

const initialState: initialState = {
  initialProducts: [],
  loading: false,
  error: '',
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getProducts.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.initialProducts = action.payload;
    });
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.loading = false;
      state.initialProducts = [];
      state.error = 'Error with loading items';
    });
    builder.addCase(createProduct.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.initialProducts = [...state.initialProducts, action.payload];
    });
    builder.addCase(createProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createProduct.rejected, (state) => {
      state.loading = false;
      state.error = 'Error with adding current item';
    });
    builder.addCase(deleteProduct.fulfilled, (state, action: PayloadAction<any>) => {
      const updatedProducts = [...state.initialProducts];
      const index = updatedProducts.findIndex(
        (product: ProductProps) => product.id === action.payload,
      );
      if (index >= 0) {
        updatedProducts.splice(index, 1);
      }
      state.initialProducts = updatedProducts;
      state.loading = false;
    });
    builder.addCase(deleteProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteProduct.rejected, (state) => {
      state.loading = false;
      state.error = 'Error while trying to delete item';
    });
    builder.addCase(updateProduct.fulfilled, (state, action: PayloadAction<any>) => {
      const itemToUpdateIndex = state.initialProducts.findIndex(
        (item: ProductProps) => item.id === action.payload.id,
      );
      state.initialProducts[itemToUpdateIndex] = action.payload;
      state.loading = false;
    });
    builder.addCase(searchProduct.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.initialProducts = action.payload;
    });
    builder.addCase(searchProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(searchProduct.rejected, (state) => {
      state.loading = false;
      state.error = 'Error while searching';
    });
  },
});

export const selectAllProducts = (state: RootState) => state.product.initialProducts;
export default productSlice.reducer;
