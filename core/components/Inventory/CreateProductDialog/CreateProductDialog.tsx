import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import React from 'react';
import { useInventory } from '../hooks/useInventory';

interface CreateProductDialogProps {
  createProductMode: boolean;
  hideDialog: () => void;
}
const CreateProductDialog = ({ createProductMode, hideDialog }: CreateProductDialogProps) => {
  const { onSaveProduct } = useInventory();

  const productDialogFooter = (
    <React.Fragment>
      <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
      <Button
        label="Save"
        icon="pi pi-check"
        className="p-button-text"
        onClick={() => onSaveProduct()}
      />
    </React.Fragment>
  );

  return (
    <Dialog
      visible={createProductMode}
      style={{ width: '450px' }}
      header="Product Details"
      modal
      className="p-fluid"
      footer={productDialogFooter}
      onHide={hideDialog}
    ></Dialog>
  );
};
export default CreateProductDialog;
