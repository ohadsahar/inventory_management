import { ProductProps } from 'models/product.model';
import { Button } from 'primereact/button';
import React from 'react';
import { TableRowActionsWrapper } from './Styled';

interface ProductTableActionsProps {
  product: ProductProps;
  onEditProduct: (product: ProductProps) => void;
  onDeleteProduct: (product: ProductProps) => void;
}
const ProductTableActions = ({
  product,
  onEditProduct,
  onDeleteProduct,
}: ProductTableActionsProps) => {
  return (
    <TableRowActionsWrapper>
      <Button
        icon="pi pi-pencil"
        className="p-button-rounded p-button-success mr-2"
        onClick={() => onEditProduct(product)}
      />
      <Button
        icon="pi pi-trash"
        className="p-button-rounded p-button-warning"
        onClick={() => onDeleteProduct(product)}
      />
    </TableRowActionsWrapper>
  );
};

export default ProductTableActions;
