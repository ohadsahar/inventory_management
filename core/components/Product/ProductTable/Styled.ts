import styled from 'styled-components';

export const ProductTableWrapper = styled.div`
  padding: 16px;
  > .p-datatable .p-datatable-tbody > tr > td {
    text-align: right;
    > .status {
      width: 100%;
      padding: 12px 12px;
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
