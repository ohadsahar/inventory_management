import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import styled from 'styled-components';
import { Strings } from '@/config/strings';
import { useProduct } from '@/hooks/useProduct';
import { AppInput } from '@/shared/AppInput';
import { FieldType } from '@/shared/Enums';

const ProductDialogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-row-gap: 3vh;
`;

const ProductDialogButtonActions = styled.div`
  padding-top: 1vh;
`;

interface CreateProductDialogProps {
  createProductMode: boolean;
  hideDialog: () => void;
}

const CreateProductDialog = ({ createProductMode, hideDialog }: CreateProductDialogProps) => {
  const { handleSubmit, onSubmit, control, errors } = useProduct(hideDialog);

  const productDialogFooter = (
    <ProductDialogWrapper>
      <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
        <AppInput
          fieldName="name"
          autoFocus={true}
          requiredMsg={Strings.ErrorProductName}
          placeholder={Strings.ProductTitlePlaceholder}
          label={Strings.LabelProductTitle}
          type={FieldType.TEXT}
          control={control}
          errors={errors}
        />
        <AppInput
          fieldName="numOfUnits"
          requiredMsg={Strings.ErrorNumOfUnits}
          type={FieldType.NUMBER}
          placeholder={Strings.ProductNumOfUnitsPlaceholder}
          label={Strings.LabellAmountStocktitle}
          control={control}
          errors={errors}
        />
        <AppInput
          fieldName="minimumForAlert"
          requiredMsg={Strings.ErrorWarningNumOfUnits}
          type={FieldType.NUMBER}
          placeholder={Strings.ProductWarningNumOfUnitsPlaceholder}
          label={Strings.LabelAmountBeforeWarningTitle}
          control={control}
          errors={errors}
        />
        <ProductDialogButtonActions>
          <Button
            label={Strings.DialogCancel}
            icon="pi pi-times"
            className="p-button-text p-button-danger pr-0 m-0"
            onClick={hideDialog}
          />
          <Button
            label={Strings.DialogSave}
            icon="pi pi-check"
            className="p-button-text p-button-success pr-1 m-0"
            type="submit"
          />
        </ProductDialogButtonActions>
      </form>
    </ProductDialogWrapper>
  );

  return (
    <Dialog
      visible={createProductMode}
      style={{ width: '450px' }}
      header={Strings.CreateProductDialogHeader}
      modal
      className="p-fluid"
      footer={productDialogFooter}
      onHide={hideDialog}
    ></Dialog>
  );
};
export default CreateProductDialog;
