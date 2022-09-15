import styled from 'styled-components';
import { Dashboard } from '@/core/components/Dashboard';
import { Product } from '@/core/components/Product';

const LayoutComponentsWrapper = styled.div`
  padding: 16px;
  background-color: ${(props) => props.theme.colors.layout};
  overflow-y: scroll;
  width: calc(100vw - 100px);
  height: calc(100vh - 64px);
`;

interface LayoutProps {
  currentLayout: string;
}

export const Layout = ({ currentLayout }: LayoutProps) => (
  <LayoutComponentsWrapper>
    {currentLayout === '1' && <Dashboard />}
    {currentLayout === '2' && <Product />}
  </LayoutComponentsWrapper>
);
