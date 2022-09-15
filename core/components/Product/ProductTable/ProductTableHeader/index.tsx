import React from 'react';
import { InputText } from 'primereact/inputtext';
import styled from 'styled-components';
import { TextType } from '@/config/Enums/TextType';
import { Strings } from '@/config/Strings';
import { useProductTable } from '@/hooks/useProductTable';
import { Typography } from '@/shared/Typography';

const TableHeader = styled.div`
  display: flex;
  flex-direction: column;
  grid-row-gap: 2vh;
`;

export const ProductTableHeader = ({ productsLength }: { productsLength: number }) => {
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
          style={{ width: '100%' }}
          type="search"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => onSearch(e.currentTarget.value)}
          placeholder={Strings.ProductTableSearch}
        />
      </span>
    </TableHeader>
  );
};
