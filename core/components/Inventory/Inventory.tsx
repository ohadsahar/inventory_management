import React from 'react';
import AddItemForm from '../Item/AddItemForm/AddItemForm';
import ItemsList from '../Item/ItemsList/ItemsList';
import SearchBar from '../SearchBar/SearchBar';

const Inventory = () => {
  return (
    <>
      <SearchBar />
      <AddItemForm />
      <ItemsList />
    </>
  );
};

export default Inventory;
