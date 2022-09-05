import Item from '@/core/components/Item/Item';
import { useItems } from '@/core/components/Item/hooks/useItems';
import { ProductProps } from 'models/product.model';
import { ItemsListWrapper } from './Styled';
import EditItemForm from '@/core/components/Item/EditItemForm/EditItemForm';
const ItemsList = () => {
  const { items, editID, setEditID, handleDelete } = useItems();
  return (
    <ItemsListWrapper>
      {items?.map((item: ProductProps) =>
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
