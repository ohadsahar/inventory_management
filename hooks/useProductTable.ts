import { useCallback, useEffect, useState } from 'react';
import _ from 'lodash';
import { paginatorConfig } from '../config';
import { ProductProps } from 'models/product.model';
import { selectAllProducts } from 'redux/ProductSlice';
import { getProducts, searchProduct } from 'redux/ProductSlice/handleProduct';
import { useAppDispatch, useAppSelector } from 'redux/store';

export const useProductTable = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectAllProducts, _.isEqual);
  const [expandedRows, setExpandedRows] = useState<any>();
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [createProductMode, setCreateProductMode] = useState<boolean>(false);
  const [editProductMode, setEditProductMode] = useState<boolean>(false);
  const [productToEdit, setProductToEdit] = useState<ProductProps>();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const onEditProduct = useCallback((product: ProductProps) => {
    setProductToEdit(product);
    setEditProductMode(true);
  }, []);

  const onSearch = useCallback(
    (value: string) => {
      dispatch(searchProduct(value));
    },
    [dispatch],
  );

  const hideDialog = useCallback(() => {
    setCreateProductMode(false);
    setEditProductMode(false);
    setProductToEdit(undefined);
  }, []);

  const importCSV = useCallback((e: any) => {
    console.log(`${e} Should Import CSV`);
  }, []);

  return {
    paginatorConfig,
    products,
    expandedRows,
    selectedProducts,
    createProductMode,
    editProductMode,
    productToEdit,
    onEditProduct,
    setSelectedProducts,
    onSearch,
    importCSV,
    hideDialog,
    setExpandedRows,
    setCreateProductMode,
    setEditProductMode,
  };
};
