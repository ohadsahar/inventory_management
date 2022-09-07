import { ProductStatusType } from '@/config/Enums/ProductStatusType';
import { Strings } from '@/config/Strings';
import { ProductProps } from 'models/product.model';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from 'redux/ProductSlice/AsyncFunctions/handleProduct';
import { useAppDispatch } from 'redux/store';

export const useProduct = (hideDialog?: () => void, product?: ProductProps) => {
  const dispatch = useAppDispatch();
  const [isEditMode] = useState<boolean>(product !== undefined ? true : false);
  const defaultValues = {
    id: product?.id ?? Math.random().toString(),
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
    return minimumForAlert < numOfUnits
      ? ProductStatusType.STOCK
      : minimumForAlert > numOfUnits
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

  const onSubmit = useCallback(
    (data: any) => {
      const productLabel = validateProductStatus(data.minimumForAlert, data.numOfUnits);
      let handleProduct = {
        ...data,
        productStatus: { label: productLabel, labelValue: validateProductLabelView(productLabel) },
      };
      if (!isEditMode) {
        dispatch(createProduct(handleProduct)).then(() => {
          if (hideDialog) {
            reset();
            hideDialog();
          }
        });
      } else {
        const newProductHistory = [...handleProduct.productHistory];
        newProductHistory.push({
          id: Math.random().toString(),
          updateName: 'אוהד',
          numOfUnits: data.numOfUnits,
          minimumForAlert: handleProduct.minimumForAlert,
          productStatus: {
            label: productLabel,
            labelValue: validateProductLabelView(productLabel),
          },
        });
        handleProduct = { ...handleProduct, productHistory: newProductHistory };
        dispatch(updateProduct(handleProduct)).then(() => {
          if (hideDialog) {
            reset();
            hideDialog();
          }
        });
      }
    },
    [isEditMode, dispatch, hideDialog, reset]
  );

  const onDeleteProduct = useCallback(
    (product: ProductProps) => {
      dispatch(deleteProduct(product.id)).then(() => {});
    },
    [dispatch]
  );

  return { onSubmit, handleSubmit, onDeleteProduct, control, errors };
};
