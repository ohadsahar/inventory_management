import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductProps } from 'models/product.model';
import { RootState } from '../store';
import { createProduct, deleteProduct, getProducts, updateItem } from './AsyncFunctions/handleItem';

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

const inventorySlice = createSlice({
  name: 'inventory',
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
    builder.addCase(createProduct.fulfilled, (state, action: PayloadAction<ProductProps>) => {
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
    builder.addCase(deleteProduct.fulfilled, (state, action: PayloadAction<string>) => {
      const updatedItems = [...state.initialProducts];
      const index = updatedItems.findIndex((item: ProductProps) => item.id === action.payload);
      updatedItems.splice(index, 1);
      state.loading = false;
      state.initialProducts = updatedItems;
    });
    builder.addCase(deleteProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteProduct.rejected, (state) => {
      state.loading = false;
      state.error = 'Error while trying to delete item';
    });
    builder.addCase(updateItem.fulfilled, (state, action: PayloadAction<ProductProps>) => {
      const itemToUpdateIndex = state.initialProducts.findIndex(
        (item: ProductProps) => item.id === action.payload.id
      );
      state.initialProducts[itemToUpdateIndex] = action.payload;
      state.loading = false;
    });
  },
});

export const selectAllProducts = (state: RootState) => state.inventory.initialProducts;
export default inventorySlice.reducer;
