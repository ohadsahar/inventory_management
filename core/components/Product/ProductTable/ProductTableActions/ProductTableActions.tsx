import { useRowTableActions } from '@/hooks/useRowTableActions';
import { ProductProps } from 'models/product.model';
import { Button } from 'primereact/button';
import { useCallback } from 'react';
import { TableRowActionsWrapper } from './Styled';

interface ProductTableActionsProps {
  product: ProductProps;
  onEditProduct: (product: ProductProps) => void;
  onDeleteProduct: (product: ProductProps) => void;
}
const ProductTableActions = ({ product, onEditProduct, onDeleteProduct }: ProductTableActionsProps) => {
  const { disabled, disableCurrentRow } = useRowTableActions();

  const handleDelete = useCallback(() => {
    disableCurrentRow();
    onDeleteProduct(product);
  }, [disableCurrentRow, onDeleteProduct, product]);

  return (
    <TableRowActionsWrapper disabled={disabled}>
      <Button
        icon="pi pi-pencil"
        className="p-button-rounded p-button-success mr-2"
        onClick={() => onEditProduct(product)}
      />
      <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={handleDelete} />
    </TableRowActionsWrapper>
  );
};

export default ProductTableActions;
