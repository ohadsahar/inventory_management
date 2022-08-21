import { ItemProps } from "models/item.model";
import { useCallback, useState } from "react";

export const useEditItem = ({
  id,
  name,
  numOfUnits,
  minimumForAlert,
  onFinished,
}: ItemProps) => {
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
        case "name":
          itemToUpdate.name = currentValue;
        default:
          break;
      }
      setCurrentItem(itemToUpdate);
    },
    [currentItem]
  );

  const onSubmit = useCallback(
    (value: boolean) => {
      value === true ? console.log("dispatch") : console.log("dont dispatch");
      if (onFinished) {
        onFinished("");
      }
    },
    [onFinished]
  );

  return {
    currentItem,
    handleAction,
    onSubmit,
  };
};
