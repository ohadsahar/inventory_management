import React from 'react';
import ComboChart from '@/core/components/Dashboard/DashboardCharts/ComboChart/ComboChart';
import PieChart from '@/core/components/Dashboard/DashboardCharts/PieChart/PieChart';
import { DashboardChartsWrapper } from './Styled';

const DashboardCharts = () => {
  return (
    <DashboardChartsWrapper>
      <ComboChart />
      <PieChart />
    </DashboardChartsWrapper>
  );
};

export default DashboardCharts;
