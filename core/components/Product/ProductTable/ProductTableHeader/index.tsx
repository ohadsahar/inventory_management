import React from 'react';
import { InputText } from 'primereact/inputtext';
import styled from 'styled-components';
import { Strings } from '@/config/strings';
import { TextType } from '@/shared/Enums/TextType';
import { Typography } from '@/shared/Typography';

const TableHeader = styled.div`
  display: flex;
  flex-direction: column;
  grid-row-gap: 2vh;
`;

interface TableHeader {
  productsLength: number;
  onSearch: (value: string) => void;
}

export const ProductTableHeader = ({ productsLength, onSearch }: TableHeader) => (
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
