import React from 'react';
import { Chart } from 'primereact/chart';
import styled from 'styled-components';
import { useCharts } from 'hooks/useCharts';

const PieChartWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-basis: 30%;
  background-color: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin-right: 2vh;
`;

export const PieChart = () => {
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
