import { TextType } from '@/config/Enums/TextType';
import { Strings } from '@/config/Strings';
import Typography from '@/shared/Typography/Typography';
import { InputText } from 'primereact/inputtext';
import React from 'react';
import { useProductTable } from '@/hooks/useProductTable';
import { TableHeader } from './Styled';

const ProductTableHeader = ({ productsLength }: { productsLength: number }) => {
  const { onSearch } = useProductTable();
  return (
    <TableHeader>
      <Typography
        type={TextType.REGULAR}
        text={`${Strings.ProductTableTotalRecords} ${productsLength}`}
      />
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => onSearch(e.currentTarget.value)}
          placeholder={Strings.ProductTableSearch}
        />
      </span>
    </TableHeader>
  );
};

export default ProductTableHeader;
