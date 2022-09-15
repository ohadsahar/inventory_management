import React from 'react';
import { Chart } from 'primereact/chart';
import styled from 'styled-components';
import { useCharts } from 'hooks/useCharts';

const ComboChartWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-basis: 70%;
  background-color: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const ComboChart = () => {
  const { chartData, lightOptions } = useCharts();

  return (
    <ComboChartWrapper>
      <Chart type="bar" data={chartData} options={lightOptions} width="100%" height="100%" />
    </ComboChartWrapper>
  );
};
