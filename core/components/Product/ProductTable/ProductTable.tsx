import { Strings } from '@/config/Strings';
import CreateProductDialog from '@/core/components/Dialogs/CreateProductDialog/CreateProductDialog';
import { useProductTable } from 'hooks/useProductTable';
import { ProductProps } from 'models/product.model';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useProduct } from '../../../../hooks/useProduct';
import EditProductDialog from '../../Dialogs/EditProductDialog/EditProductDialog';
import ProductTableHeader from './ProductTableHeader/ProductTableHeader';
import ProductTableToolbar from './ProductTableToolbar/ProductTableToolbar';
import { ProductTableWrapper, TableRowActionsWrapper } from './Styled';

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
        rowExpansionTemplate={(data: ProductProps) => (
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
                body={(data: ProductProps) => (
                  <span className={`status ${data?.productStatus?.label.toLowerCase()}`}>
                    {data.productStatus.labelValue}
                  </span>
                )}
                sortable
              ></Column>
            </DataTable>
          </div>
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
        <Column
          field="status"
          header={Strings.LabellStatusTitle}
          body={(rowData: any) => (
            <span className={`status ${rowData?.productStatus?.label.toLowerCase()}`}>
              {rowData.productStatus?.labelValue}
            </span>
          )}
        />
        <Column
          body={(rowData: ProductProps) => (
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
