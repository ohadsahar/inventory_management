import Dashboard from '@/core/components/Dashboard/Dashboard';
import Product from '@/core/components/Product/Product';
import { LayoutComponentsWrapper } from './Styled';

interface LayoutProps {
  currentLayout: string;
}

const Layout = ({ currentLayout }: LayoutProps) => {
  return (
    <LayoutComponentsWrapper>
      {currentLayout === '1' && <Dashboard />}
      {currentLayout === '2' && <Product />}
    </LayoutComponentsWrapper>
  );
};

export default Layout;
