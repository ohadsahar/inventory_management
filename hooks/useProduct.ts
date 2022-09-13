import { AlertType } from '@/config/Enums/AlertType';
import { ProductStatusType } from '@/config/Enums/ProductStatusType';
import { Strings } from '@/config/Strings';
import { ProductHistoryProps, ProductProps } from 'models/product.model';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { createAlert } from 'redux/AlertSlice/AlertSlice';
import { createProduct, deleteProduct, updateProduct } from 'redux/ProductSlice/AsyncFunctions/handleProduct';
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
      dispatch(
        createAlert({
          message: Strings.MessageGlobalDetailsCreateInfo,
          type: AlertType.INFO,
        })
      );
      dispatch(createProduct(handleProduct)).then(() => {
        dispatch(
          createAlert({
            message: Strings.MessageCreateProductSuccessfully,
            type: AlertType.SUCCESS,
          })
        );
      });
    },
    [dispatch]
  );

  const handleEditProduct = useCallback(
    (handleProduct: ProductProps, data: ProductProps, productLabel: ProductStatusType) => {
      const newProductHistory: ProductHistoryProps[] = [...(handleProduct.productHistory ?? [])];
      newProductHistory.push({
        id: Math.random().toString(),
        updateName: 'אוהד',
        numOfUnits: data.numOfUnits,
        minimumForAlert: handleProduct.minimumForAlert,
        updateTime: new Date(),
        productStatus: {
          label: productLabel,
          labelValue: validateProductLabelView(productLabel),
        },
      });
      handleProduct = { ...handleProduct, productHistory: newProductHistory };
      dispatch(
        createAlert({
          message: Strings.MessageGlobalDetailsEditInfo,
          type: AlertType.INFO,
        })
      );
      dispatch(updateProduct(handleProduct)).then(() => {
        dispatch(
          createAlert({
            message: Strings.MessageEditProductSuccessfully,
            type: AlertType.SUCCESS,
          })
        );
      });
    },
    [dispatch]
  );

  const onDeleteProduct = useCallback(
    (product: ProductProps) => {
      dispatch(
        createAlert({
          message: `בקשתך למחיקת ${product.name} נשלחה לביצוע`,
          type: AlertType.INFO,
        })
      );
      dispatch(deleteProduct(product.id)).then(() => {
        dispatch(
          createAlert({
            message: Strings.MessageDeleteProductSuccessfully,
            type: AlertType.SUCCESS,
          })
        );
      });
    },
    [dispatch]
  );

  const onSubmit = useCallback(
    (data: any) => {
      const productLabel = validateProductStatus(data.minimumForAlert, data.numOfUnits);
      let handleProduct = {
        ...data,
        productStatus: { label: productLabel, labelValue: validateProductLabelView(productLabel) },
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
    [isEditMode, hideDialog, handleCreateProduct, handleEditProduct, reset]
  );

  return { onSubmit, handleSubmit, onDeleteProduct, control, errors };
};
