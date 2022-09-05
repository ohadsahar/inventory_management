import Layout from '@/core/components/Layout/Layout';
import AppNavbar from '@/core/components/Navbar/AppNavbar';
import { Dock } from 'primereact/dock';
import { useDock } from './hooks/useDock';

import { AppDockSection, AppDockWrapper } from './Styled';
const AppDock = () => {
  const { currentLayout, dockItems } = useDock();
  return (
    <AppDockSection>
      <AppDockWrapper>
        <AppNavbar />
        <Layout currentLayout={currentLayout} />
      </AppDockWrapper>
      <Dock model={dockItems} position="left" />
    </AppDockSection>
  );
};

export default AppDock;
