import { Strings } from '@/config/Strings';
import { TextType } from '@/config/TextType';
import Typography from '@/shared/Typography/Typography';
import { ProductProps } from 'models/product.model';
import ItemActions from '@/core/components/Item/Actions/ItemActions/ItemActions';
import { ItemWrapper } from './Styled';

const Item = ({ id, name, numOfUnits, minimumForAlert, onEdit, onDelete }: ProductProps) => {
  return (
    <ItemWrapper>
      <Typography text={name} type={TextType.HINT} />
      <Typography
        text={`${Strings.UnitInInventory} ${numOfUnits.toString()}`}
        type={TextType.HINT}
      />
      <Typography
        text={`${Strings.UnitBeforeWarning} ${minimumForAlert.toString()}`}
        type={TextType.HINT}
      />
      {onEdit && onDelete && <ItemActions id={id} onEdit={onEdit} onDelete={onDelete} />}
    </ItemWrapper>
  );
};

export default Item;
