import { ItemProps } from 'models/item.model';
import { useCallback, useState } from 'react';

export const useEditItem = ({ id, name, numOfUnits, minimumForAlert, onFinished }: ItemProps) => {
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
        case 'numOfUnits':
          itemToUpdate.numOfUnits = currentValue;
          break;
        case 'minimumForAlert':
          itemToUpdate.minimumForAlert = currentValue;
<<<<<<< HEAD
        case 'name':
=======
          break;
        case "name":
>>>>>>> 19875c1 (added all crud operations local and added add form item)
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
<<<<<<< HEAD
      value === true ? console.log('dispatch') : console.log('dont dispatch');
=======
      if (onFinished && value) {
        dispatch(updateItem(currentItem));
      }
>>>>>>> 19875c1 (added all crud operations local and added add form item)
      if (onFinished) {
        onFinished('');
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
