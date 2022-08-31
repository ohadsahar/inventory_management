import { ItemProps } from "models/item.model";
import { useCallback, useMemo, useState } from "react";
import { createItem } from "redux/InventorySlice/AsyncFunctions/handleItem";
import { useAppDispatch } from "redux/store";

export const useAddItem = () => {
  const initialItem = useMemo(() => {
    return { id: "", name: "", numOfUnits: 1, minimumForAlert: 1 };
  }, []);

  const dispatch = useAppDispatch();
  const [createMode, setCreateMode] = useState<boolean>(false);
  const [itemToAdd, setItemToAdd] = useState<ItemProps>(initialItem);

  const handleAction = useCallback(
    (fieldName: string, currentValue: any) => {
      const itemToUpdate: ItemProps = { ...itemToAdd };
      switch (fieldName) {
        case "numOfUnits":
          itemToUpdate.numOfUnits = currentValue;
          break;
        case "minimumForAlert":
          itemToUpdate.minimumForAlert = currentValue;
          break;
        case "name":
          itemToUpdate.name = currentValue;
          break;
        default:
          break;
      }
      setItemToAdd(itemToUpdate);
    },
    [itemToAdd]
  );

  const onSubmit = useCallback(
    (value: boolean) => {
      if (value) {
        const id = Math.floor(Math.random() * 100 - 1).toString();
        dispatch(createItem({ ...itemToAdd, id }));
        setItemToAdd(initialItem);
      }
      setCreateMode(false);
    },
    [dispatch, itemToAdd, initialItem]
  );

  return {
    createMode,
    itemToAdd,
    handleAction,
    setCreateMode,
    onSubmit,
  };
};
