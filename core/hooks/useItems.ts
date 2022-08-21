import { ItemProps } from "models/item.model";
import { useCallback, useState } from "react";

export const useItems = () => {
  const [editID, setEditID] = useState<string>("");
  const [currentItem, setCurrentItem] = useState<ItemProps>();
  const items = [
    {
      id: "1",
      numOfUnits: 1,
      minimumForAlert: 4,
      name: "אבטיח",
    },
    {
      id: "2",
      numOfUnits: 1,
      minimumForAlert: 4,
      name: "במבה",
    },
    {
      id: "3",
      numOfUnits: 1,
      minimumForAlert: 4,
      name: "גזר",
    },
    {
      id: "4",
      numOfUnits: 1,
      minimumForAlert: 4,
      name: "דייסה",
    },
    {
      id: "5",
      numOfUnits: 3,
      minimumForAlert: 4,
      name: "חלב טבעוני",
    },
  ];

  const handleItemEdit = useCallback((item: ItemProps) => {
    setEditID(item.id);
    setCurrentItem(item);
  }, []);

  return { items, currentItem, editID, handleItemEdit };
};
