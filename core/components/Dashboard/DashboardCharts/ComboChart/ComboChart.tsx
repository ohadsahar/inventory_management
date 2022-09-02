import React from 'react';
import { ComboChartWrapper } from './Styled';
import { Chart } from 'primereact/chart';
import { useCharts } from '../hooks/useCharts';

const ComboChart = () => {
  const { chartData, lightOptions } = useCharts();

  return (
    <ComboChartWrapper>
      <Chart width="100%" height="100%" type="bar" data={chartData} options={lightOptions} />
    </ComboChartWrapper>
  );
};

export default ComboChart;
