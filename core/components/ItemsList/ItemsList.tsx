import Item from '@/core/components/Item/Item';
import ItemForm from '@/core/components/ItemForm/ItemForm';
import { useItems } from '@/core/hooks/useItems';
import { ItemProps } from 'models/item.model';
import { ItemsListWrapper } from './Styled';

const ItemsList = () => {
  const { items, editID, setEditID, handleDelete } = useItems();
  return (
    <ItemsListWrapper>
      {items?.map((item: ItemProps) =>
        editID === item.id ? (
          <EditItemForm key={item.id} {...item} onFinished={setEditID} />
        ) : (
          <Item key={item.id} {...item} onEdit={setEditID} onDelete={handleDelete} />
        )
      )}
    </ItemsListWrapper>
  );
};

export default ItemsList;
