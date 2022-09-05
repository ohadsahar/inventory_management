import { TextType } from '@/config/TextType';
import Typography from '@/shared/Typography/Typography';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { FileUpload } from 'primereact/fileupload';
import { Toast } from 'primereact/toast';
import { Toolbar } from 'primereact/toolbar';
import { useCallback } from 'react';
import { useInventory } from './hooks/useInventory';
import { InventoryTableWrapper, TableHeader, TableHeaderActions, TableRowActions } from './Styled';
import { InputText } from 'primereact/inputtext';
const InventoryTable = () => {
  const {
    products,
    toast,
    expandedRows,
    productHistory,
    deleteProductsDialog,
    selectedProducts,
    setExpandedRows,
    onRowExpand,
    onRowCollapse,
    importCSV,
    setSelectedProducts,
  } = useInventory();

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

  const rowExpansionTemplate = useCallback(
    (data: any) => {
      data.history = productHistory;
      return (
        <div className="orders-subtable">
          <DataTable value={data.history} responsiveLayout="scroll">
            <Column field="id" header="מס׳ זיהוי" sortable></Column>
            <Column field="updateName" header="שם המעדכן" sortable></Column>
            <Column field="numOfUnits" header="כמות במלאי" sortable></Column>
            <Column field="minimumForAlert" header="כמות לפני אזהרה" sortable></Column>
            <Column
              field="productStatus"
              header="סטטוס"
              body={statusOrderBodyTemplate}
              sortable
            ></Column>
          </DataTable>
        </div>
      );
    },
    [productHistory, statusOrderBodyTemplate]
  );

  const actionBodyTemplate = (rowData: any) => {
    return (
      <TableRowActions>
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
      </TableRowActions>
    );
  };

  return (
    <InventoryTableWrapper>
      <Toolbar
        className="mb-4"
        left={
          <TableHeaderActions>
            <Button label="מוצר חדש" icon="pi pi-plus" className="p-button-success" />
            <Button label="מחיקת מוצרים מסומנים" icon="pi pi-trash" className="p-button-danger" />
          </TableHeaderActions>
        }
        right={
          <FileUpload
            mode="basic"
            name="demo[]"
            auto
            url="https://primefaces.org/primereact/showcase/upload.php"
            accept=".csv"
            chooseLabel="יבא קובץ אקסל"
            onUpload={importCSV}
          />
        }
      ></Toolbar>
      <Toast ref={toast} />
      <DataTable
        dataKey="id"
        responsiveLayout="scroll"
        value={products}
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="מציג {first} עד {last} מתוך {totalRecords} מוצרים"
        selection={selectedProducts}
        onSelectionChange={(e) => setSelectedProducts(e.value)}
        expandedRows={expandedRows}
        onRowToggle={(e) => setExpandedRows(e.data)}
        onRowClick={(e) => setExpandedRows(e.data)}
        onRowExpand={onRowExpand}
        onRowCollapse={onRowCollapse}
        rowExpansionTemplate={rowExpansionTemplate}
        paginator
        rows={5}
        rowsPerPageOptions={[5, 10, 25]}
        header={
          <TableHeader>
            <Typography type={TextType.REGULAR} text="כמות מוצרים כללית : 6" />
            <span className="p-input-icon-left">
              <i className="pi pi-search" />
              <InputText type="search" onInput={(e) => console.log(e)} placeholder="חיפוש" />
            </span>
          </TableHeader>
        }
      >
        <Column
          selectionMode="multiple"
          headerStyle={{ width: '3rem' }}
          exportable={false}
        ></Column>
        <Column field="id" header="מס׳ זיהוי" sortable />
        <Column field="name" header="שם המוצר" sortable />
        <Column field="numOfUnits" header="כמות במלאי" sortable />
        <Column field="minimumForAlert" header="כמות לפני אזהרה" sortable />
        <Column field="status" header="סטטוס" body={statusCurrentBodyTemplate} sortable />
        <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column>
        <Column expander style={{ width: '3em' }} />
      </DataTable>
    </InventoryTableWrapper>
  );
};

export default InventoryTable;
