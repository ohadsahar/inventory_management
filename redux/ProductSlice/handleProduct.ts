import { createAsyncThunk } from '@reduxjs/toolkit';
import { Strings } from '@/config/strings';
import { ProductService } from '@/core/services';
import { AlertType } from '@/shared/Enums';
import { ProductProps } from 'models';
import { createAlert } from 'redux/AlertSlice';

export const getProducts = createAsyncThunk('api/getProducts', async () => {
  return await ProductService.getProducts();
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
    const data = await ProductService.createProduct(product);
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
    const data = await ProductService.updateProduct(product);
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
    const data = await ProductService.deleteProduct(product);
    thunkAPI.dispatch(
      createAlert({
        message: Strings.MessageDeleteProductSuccessfully,
        type: AlertType.SUCCESS,
      }),
    );
    return data;
  },
);

export const searchProduct = createAsyncThunk('api/searchProduct', async (value: string) => {
  return await ProductService.searchProducts(value);
});
