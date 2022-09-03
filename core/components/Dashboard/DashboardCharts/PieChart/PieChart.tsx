import React from 'react';
import { PieChartWrapper } from './Styled';
import { Chart } from 'primereact/chart';
import { useCharts } from '@/core/components/Dashboard/DashboardCharts/hooks/useCharts';

const PieChart = () => {
  const { pieChartData, pieLightOptions } = useCharts();

  return (
    <PieChartWrapper>
      <Chart
        type="pie"
        data={pieChartData}
        options={pieLightOptions}
        width="75%"
        height="100%"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      />
    </PieChartWrapper>
  );
};

export default PieChart;
