import { Strings } from '@/config/Strings';
import { TextType } from '@/config/TextType';
import ItemActions from '@/core/components/Item/Actions/EditItemActions/EditItemActions';
import { useEditItem } from '@/core/components/Item/hooks/useEditItem';
import AppInput from '@/shared/AppInput/AppInput';
import Typography from '@/shared/Typography/Typography';
import { ProductProps } from 'models/product.model';
import HandleItemActions from '../Actions/HandleItemEditActions/HandleItemEditActions';
import { InputWrapper, ItemFormWrapper } from './Styled';

const EditItemForm = ({ id, name, numOfUnits, minimumForAlert, onFinished }: ProductProps) => {
  const { handleAction, onSubmit, currentItem } = useEditItem({
    id,
    name,
    numOfUnits,
    minimumForAlert,
    onFinished,
  });

  return (
    <ItemFormWrapper>
      <InputWrapper>
        <Typography type={TextType.LABEL} text={Strings.GlobalProductTitle} />
        <AppInput fieldName="name" defaultValue={currentItem.name} onAction={handleAction} />
      </InputWrapper>
      <InputWrapper>
        <Typography type={TextType.LABEL} text={Strings.UnitInInventory} />
        <ItemActions
          currentValue={currentItem.numOfUnits}
          onAction={handleAction}
          fieldName={'numOfUnits'}
        />
      </InputWrapper>
      <InputWrapper>
        <Typography type={TextType.LABEL} text={Strings.UnitBeforeWarning} />
        <ItemActions
          currentValue={currentItem.minimumForAlert}
          onAction={handleAction}
          fieldName={'minimumForAlert'}
        />
      </InputWrapper>
      <HandleItemActions onSubmit={onSubmit} />
    </ItemFormWrapper>
  );
};

export default EditItemForm;
