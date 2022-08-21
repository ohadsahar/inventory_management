import React from "react";
import { ItemActionsWrapper, IconWrapper } from "./Styled";
import { FaPlus, FaMinus } from "react-icons/fa";

interface ActionProps {
  fieldName: string;
  currentValue: number;
  onAction: (fieldName: string, currentValue: number) => void;
}

const ItemActions = ({ fieldName, currentValue, onAction }: ActionProps) => {
  return (
    <ItemActionsWrapper>
      <IconWrapper onClick={() => onAction(fieldName, currentValue - 1)}>
        <FaMinus />
      </IconWrapper>
      {currentValue}
      <IconWrapper onClick={() => onAction(fieldName, currentValue + 1)}>
        <FaPlus />
      </IconWrapper>
    </ItemActionsWrapper>
  );
};

export default ItemActions;
