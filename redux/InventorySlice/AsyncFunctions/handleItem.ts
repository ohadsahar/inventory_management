import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProductProps } from 'models/product.model';
import { items } from 'mock';

export const getProducts = createAsyncThunk('api/getItems', async () => {
  return items;
});

export const createItem = createAsyncThunk('api/createTask', async (item: ProductProps) => {
  return item;
});

export const updateItem = createAsyncThunk('api/updateItem', async (item: ProductProps) => {
  return item;
});

export const deleteItem = createAsyncThunk('api/deleteitem', async (id: string) => {
  return id;
});
