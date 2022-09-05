import styled from 'styled-components';

export const TableHeader = styled.div`
  display: flex;
  flex-direction: column;
  grid-row-gap: 2vh;
`;

export const InventoryTableWrapper = styled.div`
  padding: 16px;
  > .p-datatable .p-datatable-tbody > tr > td {
    text-align: right;
    > .status {
      width: 75%;
      padding: 12px 0px;
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

export const TableHeaderActions = styled.div`
  display: flex;
  grid-column-gap: 1vw;
`;

export const TableRowActions = styled.div`
  display: flex;
  grid-column-gap: 1vw;
`;
