import { Strings } from '@/config/Strings';
import { TextType } from '@/config/TextType';
import ItemActions from '@/core/components/Item/Actions/EditItemActions/EditItemActions';
import { useAddItem } from '@/core/components/Item/hooks/useAddItem';
import AppInput from '@/shared/AppInput/AppInput';
import Typography from '@/shared/Typography/Typography';
import HandleItemActions from '../Actions/HandleItemEditActions/HandleItemEditActions';
import { AddItemIconWrapper, InputWrapper, ItemFormWrapper } from './Styled';
import { FaPlus } from 'react-icons/fa';
const AddItemForm = () => {
  const { itemToAdd, createMode, handleAction, onSubmit, setCreateMode } = useAddItem();
  return !createMode ? (
    <AddItemIconWrapper onClick={() => setCreateMode(!createMode)}>
      <FaPlus />
    </AddItemIconWrapper>
  ) : (
    <ItemFormWrapper>
      <InputWrapper>
        <Typography type={TextType.LABEL} text={Strings.GlobalProductTitle} />
        <AppInput fieldName="name" onAction={handleAction} />
      </InputWrapper>
      <InputWrapper>
        <Typography type={TextType.LABEL} text={Strings.UnitInInventory} />
        <ItemActions
          currentValue={itemToAdd.numOfUnits}
          onAction={handleAction}
          fieldName={'numOfUnits'}
        />
      </InputWrapper>
      <InputWrapper>
        <Typography type={TextType.LABEL} text={Strings.UnitBeforeWarning} />
        <ItemActions
          currentValue={itemToAdd.minimumForAlert}
          onAction={handleAction}
          fieldName={'minimumForAlert'}
        />
      </InputWrapper>
      <HandleItemActions onSubmit={onSubmit} />
    </ItemFormWrapper>
  );
};

export default AddItemForm;
