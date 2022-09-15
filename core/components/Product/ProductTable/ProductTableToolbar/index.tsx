import { Dispatch, SetStateAction } from 'react';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Toolbar } from 'primereact/toolbar';
import styled from 'styled-components';
import { Strings } from '@/config/Strings';
import { useProductTable } from '@/hooks/useProductTable';

const TableHeaderActions = styled.div`
  display: flex;
  grid-column-gap: 1vw;
`;

export const ProductTableToolbar = ({
  setCreateProductMode,
}: {
  setCreateProductMode: Dispatch<SetStateAction<boolean>>;
}) => {
  const { importCSV } = useProductTable();
  return (
    <Toolbar
      className="mb-4"
      left={
        <TableHeaderActions>
          <Button
            onClick={() => setCreateProductMode(true)}
            label={Strings.ProductTableNewItem}
            icon="pi pi-plus ml-2"
            className="p-button-success"
          />
        </TableHeaderActions>
      }
      right={
        <FileUpload
          mode="basic"
          name="demo[]"
          auto
          url="https://primefaces.org/primereact/showcase/upload.php"
          accept=".csv"
          chooseLabel={Strings.ProductTableImportExcelFile}
          onUpload={importCSV}
        />
      }
    ></Toolbar>
  );
};
