import { useItems } from "@/core/hooks/useItems";
import { ItemProps } from "models/item.model";
import React from "react";
import Item from "@/core/components/Item/Item";
import { ItemsListWrapper } from "./Styled";
import ItemForm from "../ItemForm/ItemForm";

const ItemsList = () => {
  const { items, editID, handleItemEdit } = useItems();
  return (
    <ItemsListWrapper>
      {items?.map((item: ItemProps) =>
        editID === item.id ? (
          <ItemForm key={item.id} {...item} />
        ) : (
          <Item key={item.id} {...item} onEdit={handleItemEdit} />
        )
      )}
    </ItemsListWrapper>
  );
};

export default ItemsList;
