import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemProps } from "models/item.model";
import { RootState } from "../store";
import { createItem, deleteItem, getItems, updateItem } from "./AsyncFunctions/handleItem";

interface initialState {
  initialItems: ItemProps[];
  loading: boolean;
  error: string;
}

const initialState: initialState = {
  initialItems: [],
  loading: false,
  error: "",
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getItems.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.initialItems = action.payload;
    });
    builder.addCase(getItems.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getItems.rejected, (state) => {
      state.loading = false;
      state.initialItems = [];
      state.error = "Error with loading items";
    });
    builder.addCase(createItem.fulfilled, (state, action: PayloadAction<ItemProps>) => {
      state.loading = false;
      state.initialItems = [...state.initialItems, action.payload];
    });
    builder.addCase(createItem.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createItem.rejected, (state) => {
      state.loading = false;
      state.error = "Error with adding current item";
    });
    builder.addCase(deleteItem.fulfilled, (state, action: PayloadAction<string>) => {
      const updatedItems = [...state.initialItems];
      const index = updatedItems.findIndex((item: ItemProps) => item.id === action.payload);
      updatedItems.splice(index, 1);
      state.loading = false;
      state.initialItems = updatedItems;
    });
    builder.addCase(deleteItem.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteItem.rejected, (state) => {
      state.loading = false;
      state.error = "Error while trying to delete item";
    });
    builder.addCase(updateItem.fulfilled, (state, action: PayloadAction<ItemProps>) => {
      const itemToUpdateIndex = state.initialItems.findIndex((item: ItemProps) => item.id === action.payload.id);
      state.initialItems[itemToUpdateIndex] = action.payload;
      state.loading = false;
    });
  },
});

export const selectAllItems = (state: RootState) => state.inventory.initialItems;
export default inventorySlice.reducer;
