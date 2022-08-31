import { items } from 'items';
import { useCallback, useState } from 'react';

export const useItems = () => {
  const [editID, setEditID] = useState<string>('');

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
