import { useCallback, useEffect, useState } from 'react';
import { deleteItem, getItems } from 'redux/InventorySlice/AsyncFunctions/handleItem';
import { selectAllItems } from 'redux/InventorySlice/inventorySlice';
import { useAppDispatch, useAppSelector } from 'redux/store';

export const useItems = () => {
  const items = useAppSelector(selectAllItems);
  const [editID, setEditID] = useState<string>('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const handleDelete = useCallback(
    (id: string) => {
      dispatch(deleteItem(id));
    },
    [dispatch]
  );

  return {
    items,
    editID,
    setEditID,
    handleDelete,
  };
};
