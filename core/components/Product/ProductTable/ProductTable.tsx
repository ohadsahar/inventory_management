import { Strings } from '@/config/Strings';
import CreateProductDialog from '@/core/components/Dialogs/CreateProductDialog/CreateProductDialog';
import { useProduct } from '@/core/components/Product/hooks/useProduct';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useProductTable } from '../hooks/useProductTable';
import ProductTableHeader from './ProductTableHeader/ProductTableHeader';
import ProductTableToolbar from './ProductTableToolbar/ProductTableToolbar';
import { ProductTableWrapper } from './Styled';
const ProductTable = () => {
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
  } = useProductTable();

  return (
    <ProductTableWrapper>
      <CreateProductDialog createProductMode={createProductMode} hideDialog={hideDialog} />
      <ProductTableToolbar setCreateProductMode={setCreateProductMode} />
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
        header={<ProductTableHeader productsLength={products?.length} />}
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
    </ProductTableWrapper>
  );
};

export default ProductTable;
