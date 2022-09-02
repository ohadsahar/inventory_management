import React from 'react';
import ComboChart from './ComboChart/ComboChart';
import { DashboardChartsWrapper } from './Styled';

const DashboardCharts = () => {
  return (
    <DashboardChartsWrapper>
      <ComboChart />
    </DashboardChartsWrapper>
  );
};

export default DashboardCharts;
