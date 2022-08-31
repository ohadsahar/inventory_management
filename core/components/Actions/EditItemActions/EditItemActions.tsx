import React from "react";
import { ItemActionsWrapper, IconWrapper } from "./Styled";
import { FaPlus, FaMinus } from "react-icons/fa";

interface EditActionProps {
  fieldName: string;
  currentValue: number;
  onAction: (fieldName: string, currentValue: number) => void;
}

const EditItemActions = ({ fieldName, currentValue, onAction }: EditActionProps) => {
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

export default EditItemActions;
