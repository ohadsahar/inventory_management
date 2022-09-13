import Layout from '@/core/components/Layout/Layout';
import AppNavbar from '@/core/components/Navbar/AppNavbar';
import { Dock } from 'primereact/dock';
import { useDock } from '@/hooks/useDock';
import { Tooltip } from 'primereact/tooltip';
import { AppDockWrapper } from './Styled';

const AppDock = () => {
  const { currentLayout, dockItems } = useDock();
  return (
    <>
      <AppDockWrapper>
        <AppNavbar />
        <Layout currentLayout={currentLayout} />
      </AppDockWrapper>
      <Tooltip
        className="dark-tooltip"
        target=".dock-advanced .p-dock-action"
        my="center+15 bottom-15"
        at="center top"
        showDelay={150}
      />
      <Dock model={dockItems} position="left" />
    </>
  );
};

export default AppDock;
