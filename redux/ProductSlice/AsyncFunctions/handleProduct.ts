import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProductProps } from 'models/product.model';
import { items } from 'mock';

export const getProducts = createAsyncThunk('api/getProducts', async () => {
  return items;
});

export const createProduct = createAsyncThunk(
  'api/createProduct',
  async (product: ProductProps) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(product as any);
      }, 1000);
    });
  }
);

export const updateProduct = createAsyncThunk(
  'api/updateProduct',
  async (product: ProductProps) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(product as any);
      }, 1000);
    });
  }
);

export const deleteProduct = createAsyncThunk('api/deleteProduct', async (id: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(id as any);
    }, 1000);
  });
});

export const searchProduct = createAsyncThunk('api/searchProduct', async (value: string) => {
  const filteredData = items.filter((product: any) => product.name.includes(value));
  return filteredData;
});