import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Strings } from '@/config/strings';
import { ProductStatusType } from '@/shared/Enums/ProductStatusType';
import { ProductProps } from 'models';
import { createProduct, deleteProduct, updateProduct } from 'redux/ProductSlice/handleProduct';
import { useAppDispatch } from 'redux/store';

export const useProduct = (hideDialog?: () => void, product?: ProductProps) => {
  const dispatch = useAppDispatch();
  const [isEditMode] = useState<boolean>(product !== undefined ? true : false);
  const defaultValues = {
    id: product?.id,
    name: product?.name ?? '',
    numOfUnits: product?.numOfUnits ?? 1,
    minimumForAlert: product?.minimumForAlert ?? 1,
    productHistory: product?.productHistory ?? [],
  };
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues });

  const validateProductStatus = (minimumForAlert: number, numOfUnits: number) => {
    minimumForAlert = parseInt(minimumForAlert.toString());
    numOfUnits = parseInt(numOfUnits.toString());
    return minimumForAlert < numOfUnits
      ? ProductStatusType.STOCK
      : minimumForAlert > numOfUnits && numOfUnits !== 0
      ? ProductStatusType.LOW_STOCK
      : numOfUnits === 0
      ? ProductStatusType.OUT_OF_STOCK
      : ProductStatusType.STOCK;
  };

  const validateProductLabelView = (productStatus: ProductStatusType) => {
    if (productStatus === ProductStatusType.STOCK) {
      return Strings.Stock;
    } else if (productStatus === ProductStatusType.LOW_STOCK) {
      return Strings.LowStock;
    } else {
      return Strings.OutOfStock;
    }
  };

  const handleCreateProduct = useCallback(
    (handleProduct: ProductProps) => {
      dispatch(createProduct(handleProduct));
    },
    [dispatch],
  );

  const handleEditProduct = useCallback(
    (handleProduct: ProductProps, data: ProductProps, productLabel: ProductStatusType) => {
      handleProduct.productHistory = [];
      const productHistory = {
        product: handleProduct.id,
        updateName: 'אוהד',
        numOfUnits: data.numOfUnits,
        minimumForAlert: handleProduct.minimumForAlert,
        updateTime: new Date(),
        productStatus: productLabel,
      };
      handleProduct.productHistory?.push(productHistory);
      handleProduct = { ...handleProduct, ...productHistory };
      dispatch(updateProduct(handleProduct));
    },
    [dispatch],
  );

  const onDeleteProduct = useCallback(
    (product: ProductProps) => {
      dispatch(deleteProduct(product));
    },
    [dispatch],
  );

  const onSubmit = useCallback(
    (data: any) => {
      const productLabel = validateProductStatus(data.minimumForAlert, data.numOfUnits);
      const handleProduct = {
        ...data,
        productStatus: productLabel,
      };
      if (!isEditMode) {
        handleCreateProduct(handleProduct);
      } else {
        handleEditProduct(handleProduct, data, productLabel);
      }
      if (hideDialog) {
        reset();
        hideDialog();
      }
    },
    [isEditMode, hideDialog, handleCreateProduct, handleEditProduct, reset],
  );

  return { onSubmit, handleSubmit, onDeleteProduct, validateProductLabelView, control, errors };
};
