import { ProductStatusType } from '@/config/Enums/ProductStatusType';
import { Strings } from '@/config/Strings';
import { ProductProps } from 'models/product.model';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { createProduct } from 'redux/InventorySlice/AsyncFunctions/handleItem';
import { useAppDispatch } from 'redux/store';

export const useProduct = (hideDialog: () => void, product?: ProductProps) => {
  const dispatch = useAppDispatch();

  const defaultValues = {
    id: Math.random().toString(),
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
      const newProduct = {
        ...data,
        productStatus: { label: productLabel, labelValue: validateProductLabelView(productLabel) },
      };
      dispatch(createProduct(newProduct)).then(() => {
        hideDialog();
        reset();
      });
    },
    [reset, dispatch, hideDialog]
  );

  return { onSubmit, handleSubmit, control, errors };
};
