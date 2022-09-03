import React from 'react';
import AddItemForm from '../Item/AddItemForm/AddItemForm';
import ItemsList from '../Item/ItemsList/ItemsList';
import SearchBar from '../SearchBar/SearchBar';
import { InventoryWrapper } from './Styled';

const Inventory = () => {
  return (
    <InventoryWrapper>
      <SearchBar />
      <AddItemForm />
      <ItemsList />
    </InventoryWrapper>
  );
};

export default Inventory;
