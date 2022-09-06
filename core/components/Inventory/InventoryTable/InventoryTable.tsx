import { Strings } from '@/config/Strings';
import CreateProductDialog from '@/core/components/Dialogs/CreateProductDialog/CreateProductDialog';
import { useInventory } from '@/core/components/Inventory/hooks/useInventory';
import InventoryTableHeader from '@/core/components/Inventory/InventoryTable/InventoryTableHeader/InventoryTableHeader';
import InventoryTableToolbar from '@/core/components/Inventory/InventoryTable/InventoryTableToolbar/InventoryTableToolbar';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { InventoryTableWrapper } from './Styled';
const InventoryTable = () => {
  const {
    products,
    toast,
    expandedRows,
    selectedProducts,
    paginatorConfig,
    createProductMode,
    setExpandedRows,
    setSelectedProducts,
    rowExpansionTemplate,
    statusCurrentBodyTemplate,
    actionBodyTemplate,
    setCreateProductMode,
    hideDialog,
  } = useInventory();

  return (
    <InventoryTableWrapper>
      <CreateProductDialog createProductMode={createProductMode} hideDialog={hideDialog} />
      <InventoryTableToolbar setCreateProductMode={setCreateProductMode} />
      <DataTable
        dataKey="id"
        responsiveLayout="scroll"
        value={products}
        selection={selectedProducts}
        expandedRows={expandedRows}
        onSelectionChange={(e) => setSelectedProducts(e.value)}
        onRowToggle={(e) => setExpandedRows(e.data)}
        onRowClick={(e) => setExpandedRows(e.data)}
        rowExpansionTemplate={rowExpansionTemplate}
        paginator
        rows={paginatorConfig.numOfRows}
        rowsPerPageOptions={paginatorConfig.rowsPerPageOptions}
        paginatorTemplate={paginatorConfig.paginatorTemplate}
        currentPageReportTemplate="מציג {first} עד {last} מתוך {totalRecords} מוצרי מזון"
        header={<InventoryTableHeader productsLength={products?.length} />}
      >
        <Column
          selectionMode="multiple"
          headerStyle={{ width: '3rem' }}
          exportable={false}
        ></Column>
        <Column field="id" header={Strings.LabelIDTitle} sortable />
        <Column field="name" header={Strings.LabelProductTitle} sortable />
        <Column field="numOfUnits" header={Strings.LabellAmountStocktitle} sortable />
        <Column field="minimumForAlert" header={Strings.LabelAmountBeforeWarningTitle} sortable />
        <Column
          field="status"
          header={Strings.LabellStatusTitle}
          body={statusCurrentBodyTemplate}
        />
        <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column>
        <Column expander style={{ width: '3em' }} />
      </DataTable>
    </InventoryTableWrapper>
  );
};

export default InventoryTable;
