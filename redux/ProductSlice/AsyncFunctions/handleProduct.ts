import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProductProps } from 'models/product.model';
import { items } from 'mock';

export const getProducts = createAsyncThunk('api/getProducts', async () => {
  return items;
});

export const createProduct = createAsyncThunk(
  'api/createProduct',
  async (product: ProductProps) => {
    return product;
  }
);

export const updateProduct = createAsyncThunk(
  'api/updateProduct',
  async (product: ProductProps) => {
    return product;
  }
);

export const deleteProduct = createAsyncThunk('api/deleteProduct', async (id: string) => {
  return id;
});

export const searchProduct = createAsyncThunk('api/searchProduct', async (value: string) => {
  const filteredData = items.filter((product: any) => product.name.includes(value));
  return filteredData;
});
