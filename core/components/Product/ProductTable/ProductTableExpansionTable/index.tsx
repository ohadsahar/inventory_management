import React from 'react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Strings } from '@/config/Strings';
import { ProductHistoryProps, ProductProps } from 'models/product.model';

interface ProductTableExpansionTableProps {
  product: ProductProps;
  handleStatus: (product: ProductProps) => JSX.Element;
}

export const ProductTableExpansionTable = ({
  product,
  handleStatus,
}: ProductTableExpansionTableProps) => {
  const handleDate = (rowData: ProductHistoryProps) => {
    return <span>{new Date(rowData.updateTime).toLocaleDateString()}</span>;
  };

  return (
    <DataTable value={product.productHistory} responsiveLayout="scroll">
      <Column field="id" header={Strings.LabelIDTitle} sortable />
      <Column field="updateName" header={Strings.LabelUpdateName} sortable />
      <Column field="numOfUnits" header={Strings.LabellAmountStocktitle} sortable />
      <Column field="minimumForAlert" header={Strings.LabelAmountBeforeWarningTitle} sortable />
      <Column field="updateTime" header={Strings.LabelDate} body={handleDate} sortable></Column>
      <Column field="productStatus" header={Strings.LabellStatusTitle} body={handleStatus}></Column>
    </DataTable>
  );
};
