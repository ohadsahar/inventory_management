import { createAsyncThunk } from '@reduxjs/toolkit';
import { AlertType } from '@/config/Enums/AlertType';
import { Strings } from '@/config/Strings';
import { items } from 'mock';
import { ProductProps } from 'models/product.model';
import { createAlert } from 'redux/AlertSlice/AlertSlice';

export const getProducts = createAsyncThunk('api/getProducts', async (_, thunkAPI) => {
  thunkAPI.dispatch(
    createAlert({
      message: Strings.MessageGlobalLoadingProducts,
      type: AlertType.INFO,
    }),
  );
  await new Promise((resolve) => setTimeout(resolve, 500));
  thunkAPI.dispatch(
    createAlert({
      message: Strings.MessageGlobalLoadingDoneProducts,
      type: AlertType.SUCCESS,
    }),
  );
  return items;
});

export const createProduct = createAsyncThunk(
  'api/createProduct',
  async (product: ProductProps, thunkAPI) => {
    thunkAPI.dispatch(
      createAlert({
        message: Strings.MessageGlobalDetailsCreateInfo,
        type: AlertType.INFO,
      }),
    );
    await new Promise((resolve) => setTimeout(resolve, 1000));
    thunkAPI.dispatch(
      createAlert({
        message: Strings.MessageCreateProductSuccessfully,
        type: AlertType.SUCCESS,
      }),
    );
    return product;
  },
);

export const updateProduct = createAsyncThunk(
  'api/updateProduct',
  async (product: ProductProps, thunkAPI) => {
    thunkAPI.dispatch(
      createAlert({
        message: Strings.MessageGlobalDetailsCreateInfo,
        type: AlertType.INFO,
      }),
    );
    await new Promise((resolve) => setTimeout(resolve, 1000));
    thunkAPI.dispatch(
      createAlert({
        message: Strings.MessageEditProductSuccessfully,
        type: AlertType.SUCCESS,
      }),
    );
    return product;
  },
);

export const deleteProduct = createAsyncThunk(
  'api/deleteProduct',
  async (product: ProductProps, thunkAPI) => {
    thunkAPI.dispatch(
      createAlert({
        message: `בקשתך למחיקת ${product.name} נשלחה לביצוע`,
        type: AlertType.INFO,
      }),
    );
    await new Promise((resolve) => setTimeout(resolve, 1000));
    thunkAPI.dispatch(
      createAlert({
        message: Strings.MessageDeleteProductSuccessfully,
        type: AlertType.SUCCESS,
      }),
    );
    return product.id;
  },
);

export const searchProduct = createAsyncThunk('api/searchProduct', async (value: string) => {
  const filteredData = items.filter((product: any) => product.name.includes(value));
  return filteredData;
});
