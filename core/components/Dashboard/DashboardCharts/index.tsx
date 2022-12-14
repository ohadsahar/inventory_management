import React from 'react';
import styled from 'styled-components';
import { ComboChart } from '@/core/components/Dashboard/DashboardCharts/ComboChart';
import { PieChart } from '@/core/components/Dashboard/DashboardCharts/PieChart';

const DashboardChartsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 100%;
  max-height: 300px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 16px;
    align-items: flex-end;
    justify-content: center;
  }
  @media (min-width: 1440px) {
    min-height: 500px;
    align-items: flex-end;
  }
`;

export const DashboardCharts = () => (
  <DashboardChartsWrapper>
    <ComboChart />
    <PieChart />
  </DashboardChartsWrapper>
);
