import { ItemProps } from "models/item.model";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

export const useAppForm = (item: ItemProps) => {
  const [currentItem, setCurrentItem] = useState<ItemProps>(item);
  const { register, handleSubmit, getValues } = useForm({
    defaultValues: {
      name: currentItem.name,
      numOfUnits: currentItem.numOfUnits,
      minimumForAlert: currentItem.minimumForAlert,
    },
  });

  const handleAction = useCallback(
    (fieldName: string, currentValue: number) => {
      switch (fieldName) {
        case "numOfUnits":
          setCurrentItem({ ...currentItem, numOfUnits: currentValue });
          break;
        case "minimumForAlert":
          setCurrentItem({ ...currentItem, minimumForAlert: currentValue });
        default:
          break;
      }
    },
    [currentItem]
  );
  const onSubmit = (data: any) => {
    const updateItem = { ...currentItem, name: data.name };
    console.log(updateItem);
  };

  return {
    currentItem,
    register,
    handleSubmit,
    handleAction,
    getValues,
    onSubmit,
  };
};
