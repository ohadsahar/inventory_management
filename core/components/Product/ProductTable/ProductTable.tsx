import { Strings } from '@/config/Strings';
import CreateProductDialog from '@/core/components/Dialogs/CreateProductDialog/CreateProductDialog';
import EditProductDialog from '@/core/components/Dialogs/EditProductDialog/EditProductDialog';
import { useProduct } from '@/hooks/useProduct';
import { useProductTable } from 'hooks/useProductTable';
import { ProductProps } from 'models/product.model';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import ProductTableActions from './ProductTableActions/ProductTableActions';
import ProductTableExpansionTable from './ProductTableExpansionTable/ProductTableExpansionTable';
import ProductTableHeader from './ProductTableHeader/ProductTableHeader';
import ProductTableToolbar from './ProductTableToolbar/ProductTableToolbar';
import { ProductTableWrapper } from './Styled';

const ProductTable = () => {
  const {
    products,
    expandedRows,
    selectedProducts,
    paginatorConfig,
    createProductMode,
    editProductMode,
    productToEdit,
    setExpandedRows,
    setSelectedProducts,
    setCreateProductMode,
    hideDialog,
    onEditProduct,
  } = useProductTable();
  const { onDeleteProduct } = useProduct();

  const handleStatus = (rowData: ProductProps) => {
    return (
      <span className={`status ${rowData?.productStatus?.label.toLowerCase()}`}>
        {rowData.productStatus?.labelValue}
      </span>
    );
  };

  return (
    <ProductTableWrapper>
      <CreateProductDialog createProductMode={createProductMode} hideDialog={hideDialog} />
      {productToEdit && (
        <EditProductDialog
          editProductMode={editProductMode}
          hideDialog={hideDialog}
          product={productToEdit}
        />
      )}
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
        rowExpansionTemplate={(product: ProductProps) => (
          <ProductTableExpansionTable product={product} handleStatus={handleStatus} />
        )}
        paginator
        rows={paginatorConfig.numOfRows}
        rowsPerPageOptions={paginatorConfig.rowsPerPageOptions}
        paginatorTemplate={paginatorConfig.paginatorTemplate}
        currentPageReportTemplate="מציג {first} עד {last} מתוך {totalRecords} מוצרי מזון"
        header={<ProductTableHeader productsLength={products?.length} />}
      >
        <Column headerStyle={{ width: '3rem' }} exportable={false}></Column>
        <Column field="id" header={Strings.LabelIDTitle} sortable />
        <Column field="name" header={Strings.LabelProductTitle} sortable />
        <Column field="numOfUnits" header={Strings.LabellAmountStocktitle} sortable />
        <Column field="minimumForAlert" header={Strings.LabelAmountBeforeWarningTitle} sortable />
        <Column field="status" header={Strings.LabellStatusTitle} body={handleStatus} />
        <Column
          body={(rowData: ProductProps) => (
            <ProductTableActions
              product={rowData}
              onDeleteProduct={onDeleteProduct}
              onEditProduct={onEditProduct}
            />
          )}
          exportable={false}
          style={{ minWidth: '8rem' }}
        ></Column>
        <Column expander style={{ width: '3em' }} />
      </DataTable>
    </ProductTableWrapper>
  );
};

export default ProductTable;
