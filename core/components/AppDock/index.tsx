import React from 'react';
import { Dock } from 'primereact/dock';
import { Tooltip } from 'primereact/tooltip';
import styled from 'styled-components';
import { Layout } from '@/core/components/Layout';
import { AppNavbar } from '@/core/components/Navbar';
import { useDock } from '@/hooks/useDock';

const AppDockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AppDock = () => {
  const { currentLayout, dockItems } = useDock();
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};
