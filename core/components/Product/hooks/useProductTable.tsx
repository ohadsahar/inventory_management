import { Strings } from '@/config/Strings';
import { ProductProps } from 'models/product.model';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useState, useRef, useCallback, useMemo, useEffect } from 'react';
import { deleteProduct, getProducts } from 'redux/ProductSlice/AsyncFunctions/handleItem';
import { selectAllProducts } from 'redux/ProductSlice/ProductSlice';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { TableRowActionsWrapper } from '../ProductTable/Styled';

export const useProductTable = () => {
  const dispatch = useAppDispatch();
  const products: ProductProps[] = useAppSelector(selectAllProducts);
  const [expandedRows, setExpandedRows] = useState<any>();
  const [deleteProductsDialog, setDeleteProductsDialog] = useState<boolean>(false);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [createProductMode, setCreateProductMode] = useState<boolean>(false);
  const [editProductMode, setEditProductMode] = useState<boolean>(false);
  const toast = useRef<any>(null);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const onEditProduct = useCallback((product: ProductProps) => {
    setEditProductMode(true);
  }, []);

  const onDeleteProduct = useCallback(
    (product: ProductProps) => {
      dispatch(deleteProduct(product.id));
    },
    [dispatch]
  );

  const onSearch = useCallback((value: string) => {
    console.log(value);
  }, []);

  const confirmDeleteSelected = useCallback(() => {
    setDeleteProductsDialog(true);
  }, []);

  const importCSV = useCallback((e: any) => {}, []);

  /* Config Functions */

  const paginatorConfig = useMemo(() => {
    return {
      numOfRows: 5,
      rowsPerPageOptions: [5, 10, 25, 50, 100],
      paginatorTemplate:
        'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown',
    };
  }, []);

  /* End Config Functions */

  /* UI Functions */

  const statusOrderBodyTemplate = useCallback((rowData: any) => {
    return (
      <span className={`status ${rowData?.productStatus?.label.toLowerCase()}`}>
        {rowData.productStatus.labelValue}
      </span>
    );
  }, []);

  const statusCurrentBodyTemplate = useCallback((rowData: any) => {
    console.log(rowData);
    return (
      <span className={`status ${rowData?.productStatus?.label.toLowerCase()}`}>
        {rowData.productStatus?.labelValue}
      </span>
    );
  }, []);

  const hideDialog = useCallback(() => {
    setCreateProductMode(false);
    setEditProductMode(false);
  }, []);

  /* End UI Functions */

  const actionBodyTemplate = useCallback(
    (rowData: any) => {
      return (
        <TableRowActionsWrapper>
          <Button
            icon="pi pi-pencil"
            className="p-button-rounded p-button-success mr-2"
            onClick={() => onEditProduct(rowData)}
          />
          <Button
            icon="pi pi-trash"
            className="p-button-rounded p-button-warning"
            onClick={() => onDeleteProduct(rowData)}
          />
        </TableRowActionsWrapper>
      );
    },
    [onDeleteProduct, onEditProduct]
  );

  const rowExpansionTemplate = useCallback(
    (data: ProductProps) => {
      console.log(data);
      return (
        <div className="orders-subtable">
          <DataTable value={data.productHistory} responsiveLayout="scroll">
            <Column field="id" header={Strings.LabelIDTitle} sortable />
            <Column field="updateName" header={Strings.LabelUpdateName} sortable />
            <Column field="numOfUnits" header={Strings.LabellAmountStocktitle} sortable />
            <Column
              field="minimumForAlert"
              header={Strings.LabelAmountBeforeWarningTitle}
              sortable
            />
            <Column
              field="productStatus"
              header={Strings.LabellStatusTitle}
              body={statusOrderBodyTemplate}
              sortable
            ></Column>
          </DataTable>
        </div>
      );
    },
    [statusOrderBodyTemplate]
  );

  /* End UI Functions */

  return {
    paginatorConfig,
    products,
    toast,
    expandedRows,
    deleteProductsDialog,
    selectedProducts,
    createProductMode,
    editProductMode,
    setSelectedProducts,
    onSearch,
    importCSV,
    hideDialog,
    rowExpansionTemplate,
    statusCurrentBodyTemplate,
    setExpandedRows,
    actionBodyTemplate,
    setCreateProductMode,
    confirmDeleteSelected,
    setEditProductMode,
  };
};
