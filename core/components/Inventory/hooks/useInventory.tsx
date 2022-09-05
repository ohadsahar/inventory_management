import { Strings } from '@/config/Strings';
import { ProductProps } from 'models/product.model';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useState, useRef, useCallback, useMemo, useEffect } from 'react';
import { getProducts } from 'redux/InventorySlice/AsyncFunctions/handleItem';
import { selectAllProducts } from 'redux/InventorySlice/inventorySlice';
import { useAppDispatch, useAppSelector } from 'redux/store';
import { TableRowActionsWrapper } from '../InventoryTable/Styled';

export const useInventory = () => {
  const dispatch = useAppDispatch();
  const products: ProductProps[] = useAppSelector(selectAllProducts);
  const [expandedRows, setExpandedRows] = useState<any>();
  const [deleteProductsDialog, setDeleteProductsDialog] = useState<boolean>(false);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [createProductMode, setCreateProductMode] = useState<boolean>(false);
  const toast = useRef<any>(null);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const paginatorConfig = useMemo(() => {
    return {
      numOfRows: 5,
      rowsPerPageOptions: [5, 10, 25, 50, 100],
      paginatorTemplate:
        'FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown',
    };
  }, []);

  const onSaveProduct = useCallback(() => {
    console.log('Save product');
  }, []);

  const editProduct = useCallback((product: ProductProps) => {
    console.log(product);
  }, []);

  const confirmDeleteProduct = useCallback((product: ProductProps) => {
    console.log(product);
  }, []);

  const confirmDeleteSelected = useCallback(() => {
    setDeleteProductsDialog(true);
  }, []);

  const onSearch = useCallback((value: string) => {
    console.log(value);
  }, []);

  const importCSV = useCallback((e: any) => {}, []);

  const hideDialog = useCallback(() => {
    setCreateProductMode(false);
  }, []);

  /* UI Functions */

  const statusOrderBodyTemplate = useCallback((rowData: any) => {
    return (
      <span className={`status ${rowData?.productStatus?.label.toLowerCase()}`}>
        {rowData.productStatus.labelValue}
      </span>
    );
  }, []);

  const statusCurrentBodyTemplate = useCallback((rowData: any) => {
    return (
      <span className={`status ${rowData?.status?.label.toLowerCase()}`}>
        {rowData.status?.labelValue}
      </span>
    );
  }, []);

  const actionBodyTemplate = useCallback(
    (rowData: any) => {
      return (
        <TableRowActionsWrapper>
          <Button
            icon="pi pi-pencil"
            className="p-button-rounded p-button-success mr-2"
            onClick={() => editProduct(rowData)}
          />
          <Button
            icon="pi pi-trash"
            className="p-button-rounded p-button-warning"
            onClick={() => confirmDeleteProduct(rowData)}
          />
        </TableRowActionsWrapper>
      );
    },
    [confirmDeleteProduct, editProduct]
  );

  const rowExpansionTemplate = useCallback(
    (data: ProductProps) => {
      return (
        <div className="orders-subtable">
          <DataTable value={data.productHistory} responsiveLayout="scroll">
            <Column field="id" header={Strings.GlobalIDTitle} sortable />
            <Column field="name" header={Strings.GlobalProductTitle} sortable />
            <Column field="numOfUnits" header={Strings.GlobalAmountStocktitle} sortable />
            <Column
              field="minimumForAlert"
              header={Strings.GlobalAmountBeforeWarningTitle}
              sortable
            />
            <Column
              field="productStatus"
              header={Strings.GlobalStatusTitle}
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
    products,
    toast,
    expandedRows,
    deleteProductsDialog,
    selectedProducts,
    paginatorConfig,
    createProductMode,
    hideDialog,
    rowExpansionTemplate,
    statusCurrentBodyTemplate,
    setSelectedProducts,
    setExpandedRows,
    importCSV,
    actionBodyTemplate,
    onSearch,
    setCreateProductMode,
    onSaveProduct,
    confirmDeleteSelected,
  };
};
