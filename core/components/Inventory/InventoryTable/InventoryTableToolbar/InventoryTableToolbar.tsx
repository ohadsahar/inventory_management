import { Strings } from '@/config/Strings';
import { useInventory } from '@/core/components/Inventory/hooks/useInventory';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Toolbar } from 'primereact/toolbar';
import { TableHeaderActions } from './Styled';

const InventoryTableToolbar = ({ setCreateProductMode }: { setCreateProductMode: any }) => {
  const { importCSV } = useInventory();
  return (
    <Toolbar
      className="mb-4"
      left={
        <TableHeaderActions>
          <Button
            onClick={() => setCreateProductMode(true)}
            label={Strings.InventoryTableNewItem}
            icon="pi pi-plus ml-2"
            className="p-button-success"
          />
          <Button
            label={Strings.InventoryTableDeleteSelectedItems}
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
          chooseLabel={Strings.InventoryTableImportExcelFile}
          onUpload={importCSV}
        />
      }
    ></Toolbar>
  );
};

export default InventoryTableToolbar;
