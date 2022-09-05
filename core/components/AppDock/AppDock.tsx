/* eslint-disable @next/next/no-img-element */
import Layout from '@/core/components/Layout/Layout';
import AppNavbar from '@/core/components/Navbar/AppNavbar';
import { Dock } from 'primereact/dock';
import { Tooltip } from 'primereact/tooltip';
import { useDrawer } from './hooks/useDrawer';
import { AppDockWrapper } from './Styled';
const AppDock = () => {
  const items = [
    {
      label: 'App Store',
      command: () => {
        setCurrentLayout('1');
      },
      icon: () => (
        <img
          alt="App Store"
          src="https://cdn.iconscout.com/icon/premium/png-256-thumb/web-dashboard-2276455-1897230.png"
          width="100%"
        />
      ),
    },
    {
      label: 'Finder',
      command: () => {
        setCurrentLayout('2');
      },
      icon: () => (
        <img
          alt="Finder"
          src="https://cdn.iconscout.com/icon/premium/png-256-thumb/food-1728333-1469700.png"
          width="100%"
        />
      ),
    },
  ];
  const { currentLayout, setCurrentLayout } = useDrawer();
  return (
    <>
      <AppDockWrapper>
        <AppNavbar />
        <Layout currentLayout={currentLayout} />
      </AppDockWrapper>
      <>
        <Tooltip
          className="dark-tooltip"
          target=".dock-advanced .p-dock-action"
          my="center+15 bottom-15"
          at="center top"
          showDelay={0}
        />
        <Dock model={items} position="left" />
      </>
    </>
  );
};

export default AppDock;
