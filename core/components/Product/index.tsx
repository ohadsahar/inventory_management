import styled from 'styled-components';
import { ProductTable } from './ProductTable';

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Product = () => (
  <ProductWrapper>
    <ProductTable />
  </ProductWrapper>
);
