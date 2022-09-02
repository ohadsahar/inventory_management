import React from 'react';
import { ItemActionsWrapper, IconWrapper } from './Styled';
import { FaCheck, FaWindowClose } from 'react-icons/fa';

interface HandleItemActionProps {
  onSubmit: (value: boolean) => void;
}

const HandleItemActions = ({ onSubmit }: HandleItemActionProps) => {
  return (
    <ItemActionsWrapper>
      <IconWrapper onClick={() => onSubmit(false)}>
        <FaWindowClose />
      </IconWrapper>
      <IconWrapper onClick={() => onSubmit(true)}>
        <FaCheck />
      </IconWrapper>
    </ItemActionsWrapper>
  );
};

export default HandleItemActions;
