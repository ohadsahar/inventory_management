import Dashboard from '@/core/components/Dashboard/Dashboard';
import Inventory from '@/core/components/Inventory/Inventory';
import { LayoutComponentsWrapper } from './Styled';

interface LayoutProps {
  currentLayout: string;
}

const Layout = ({ currentLayout }: LayoutProps) => {
  return (
    <LayoutComponentsWrapper>
      {currentLayout === '1' && <Dashboard />}
      {currentLayout === '2' && <Inventory />}
    </LayoutComponentsWrapper>
  );
};

export default Layout;
