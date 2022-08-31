import { createAsyncThunk } from "@reduxjs/toolkit";
import { ItemProps } from "models/item.model";
import { items } from "items";

export const getItems = createAsyncThunk("api/getItems", async () => {
  return items;
});

export const createItem = createAsyncThunk("api/createTask", async (item: ItemProps) => {
  return item;
});

export const updateItem = createAsyncThunk("api/updateItem", async (item: ItemProps) => {
  return item;
});

export const deleteItem = createAsyncThunk("api/deleteitem", async (id: string) => {
  return id;
});
