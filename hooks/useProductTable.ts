import { ProductProps } from 'models/product.model';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { getProducts, searchProduct } from 'redux/ProductSlice/AsyncFunctions/handleProduct';
import { selectAllProducts } from 'redux/ProductSlice/ProductSlice';
import { useAppDispatch, useAppSelector } from 'redux/store';

export const useProductTable = () => {
  const dispatch = useAppDispatch();
  const products: ProductProps[] = useAppSelector(selectAllProducts);
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
    [dispatch]
  );

  const importCSV = useCallback((e: any) => {}, []);

  const hideDialog = useCallback(() => {
    setCreateProductMode(false);
    setEditProductMode(false);
    setProductToEdit(undefined);
  }, []);

  const paginatorConfig = useMemo(() => {
    return {
      numOfRows: 5,
      rowsPerPageOptions: [5, 10, 25, 50, 100],
      paginatorTemplate:
        'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown',
    };
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
