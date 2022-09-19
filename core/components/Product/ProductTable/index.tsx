import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import styled from 'styled-components';
import { ProductTableActions } from './ProductTableActions';
import { ProductTableExpansionTable } from './ProductTableExpansionTable';
import { ProductTableHeader } from './ProductTableHeader';
import { ProductTableToolbar } from './ProductTableToolbar';
import { Strings } from '@/config/Strings';
import CreateProductDialog from '@/core/components/Dialogs/CreateProductDialog';
import EditProductDialog from '@/core/components/Dialogs/EditProductDialog';
import { useProduct } from '@/hooks/useProduct';
import { useProductTable } from 'hooks/useProductTable';
import { ProductProps } from 'models/product.model';

const ProductTableWrapper = styled.div`
  padding: 16px;
  > .p-datatable .p-datatable-tbody > tr > td {
    text-align: right;
    > .status {
      width: 100%;
      padding: 12px 12px;
      font-weight: 400;
      text-align: center;
      display: block;
      border-radius: 8px;
      &.stock {
        background-color: #c8e6c9;
        color: #256029;
      }
      &.lowstock {
        background: #feedaf;
        color: #8a5340;
      }
      &.outofstock {
        background: #ffcdd2;
        color: #c63737;
      }
    }
  }
`;

export const ProductTable = () => {
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

  const { onDeleteProduct, validateProductLabelView } = useProduct();

  const handleStatus = (rowData: ProductProps) => {
    return (
      <span className={`status ${rowData?.productStatus.toLowerCase()}`}>
        {validateProductLabelView(rowData.productStatus)}
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
        paginator
        rows={paginatorConfig.numOfRows}
        rowsPerPageOptions={paginatorConfig.rowsPerPageOptions}
        paginatorTemplate={paginatorConfig.paginatorTemplate}
        currentPageReportTemplate="מציג {first} עד {last} מתוך {totalRecords} מוצרי מזון"
        header={<ProductTableHeader productsLength={products?.length} />}
        onSelectionChange={(e) => setSelectedProducts(e.value)}
        onRowToggle={(e) => setExpandedRows(e.data)}
        onRowClick={(e) => setExpandedRows(e.data)}
        rowExpansionTemplate={(product: ProductProps) => (
          <ProductTableExpansionTable product={product} handleStatus={handleStatus} />
        )}
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
