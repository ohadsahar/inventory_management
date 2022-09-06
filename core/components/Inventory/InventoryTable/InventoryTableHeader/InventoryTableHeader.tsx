import { TextType } from '@/config/Enums/TextType';
import { Strings } from '@/config/Strings';
import Typography from '@/shared/Typography/Typography';
import { InputText } from 'primereact/inputtext';
import React from 'react';
import { useInventory } from '../../hooks/useInventory';
import { TableHeader } from './Styled';

const InventoryTableHeader = ({ productsLength }: { productsLength: number }) => {
  const { onSearch } = useInventory();
  return (
    <TableHeader>
      <Typography
        type={TextType.REGULAR}
        text={`${Strings.InventoryTableTotalRecords} ${productsLength}`}
      />
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => onSearch(e.currentTarget.value)}
          placeholder={Strings.InventoryTableSearch}
        />
      </span>
    </TableHeader>
  );
};

export default InventoryTableHeader;
