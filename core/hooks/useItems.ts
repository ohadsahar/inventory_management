import { items } from 'items';
import { useCallback, useState } from 'react';

export const useItems = () => {
  const [editID, setEditID] = useState<string>('');

  const handleDelete = useCallback((id: string) => {}, []);

  return {
    items,
    editID,
    setEditID,
    handleDelete,
  };
};
