import { Strings } from '@/config/Strings';
import { useProductTable } from '@/core/components/Product/hooks/useProductTable';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Toolbar } from 'primereact/toolbar';
import { TableHeaderActions } from './Styled';

const ProductTableToolbar = ({ setCreateProductMode }: { setCreateProductMode: any }) => {
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
          <Button
            label={Strings.ProductTableDeleteSelectedItems}
            icon="pi pi-trash ml-2"
            className="p-button-danger"
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

export default ProductTableToolbar;
