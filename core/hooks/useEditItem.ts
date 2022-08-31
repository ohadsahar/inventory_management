import { ItemProps } from "models/item.model";
import { useCallback, useState } from "react";
import { updateItem } from "redux/InventorySlice/AsyncFunctions/handleItem";
import { useAppDispatch } from "redux/store";

export const useEditItem = ({ id, name, numOfUnits, minimumForAlert, onFinished }: ItemProps) => {
  const dispatch = useAppDispatch();
  const [currentItem, setCurrentItem] = useState<ItemProps>({
    id,
    name,
    numOfUnits,
    minimumForAlert,
  });

  const handleAction = useCallback(
    (fieldName: string, currentValue: any) => {
      const itemToUpdate: ItemProps = { ...currentItem };
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
      setCurrentItem(itemToUpdate);
    },
    [currentItem]
  );

  const onSubmit = useCallback(
    (value: boolean) => {
      if (onFinished && value) {
        dispatch(updateItem(currentItem));
      }
      if (onFinished) {
        onFinished("");
      }
    },
    [onFinished, dispatch, currentItem]
  );

  return {
    currentItem,
    handleAction,
    onSubmit,
  };
};
