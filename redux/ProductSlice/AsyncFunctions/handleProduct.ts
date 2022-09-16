import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '@/config/Config';
import { AlertType } from '@/config/Enums/AlertType';
import { Strings } from '@/config/Strings';
import { ProductProps } from 'models/product.model';
import { createAlert } from 'redux/AlertSlice/AlertSlice';

export const getProducts = createAsyncThunk('api/getProducts', async (_, thunkAPI) => {
  thunkAPI.dispatch(
    createAlert({
      message: Strings.MessageGlobalLoadingProducts,
      type: AlertType.INFO,
    }),
  );
  const { data } = (await axios.get(`${API_URL}/product`)).data;
  thunkAPI.dispatch(
    createAlert({
      message: Strings.MessageGlobalLoadingDoneProducts,
      type: AlertType.SUCCESS,
    }),
  );
  return data;
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
    const { data } = (await axios.post(`${API_URL}/product`, product)).data;
    thunkAPI.dispatch(
      createAlert({
        message: Strings.MessageCreateProductSuccessfully,
        type: AlertType.SUCCESS,
      }),
    );
    return data;
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
    const { data } = (await axios.put(`${API_URL}/product/${product.id}`, product)).data;
    thunkAPI.dispatch(
      createAlert({
        message: Strings.MessageEditProductSuccessfully,
        type: AlertType.SUCCESS,
      }),
    );
    return data;
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
    const { data } = (await axios.delete(`${API_URL}/product/${product.id}`)).data;
    thunkAPI.dispatch(
      createAlert({
        message: Strings.MessageDeleteProductSuccessfully,
        type: AlertType.SUCCESS,
      }),
    );
    return data;
  },
);

export const searchProduct = createAsyncThunk(
  'api/searchProduct',
  async (value: string, thunkAPI) => {
    // const filteredData = items.filter((product: any) => product.name.includes(value));
    // return filteredData;
  },
);
