import React from 'react';
import { ComboChartWrapper } from './Styled';
import { Chart } from 'primereact/chart';
import { useCharts } from '@/core/components/Dashboard/DashboardCharts/hooks/useCharts';

const ComboChart = () => {
  const { chartData, lightOptions } = useCharts();

  return (
    <ComboChartWrapper>
      <Chart type="bar" data={chartData} options={lightOptions} width="100%" height="100%" />
    </ComboChartWrapper>
  );
};

export default ComboChart;
