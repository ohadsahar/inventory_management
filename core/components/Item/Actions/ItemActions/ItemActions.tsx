import React from 'react';
import { ItemActionsWrapper, IconWrapper } from './Styled';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface ItemActionsProps {
  id: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const ItemActions = ({ id, onEdit, onDelete }: ItemActionsProps) => {
  return (
    <ItemActionsWrapper>
      <IconWrapper onClick={() => onEdit(id)}>
        <FaEdit />
      </IconWrapper>
      <IconWrapper onClick={() => onDelete(id)}>
        <FaTrash />
      </IconWrapper>
    </ItemActionsWrapper>
  );
};

export default ItemActions;
