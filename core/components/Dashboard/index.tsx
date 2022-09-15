import styled from 'styled-components';
import { DashboardCards } from '@/core/components/Dashboard/DashboardCards';
import { DashboardCharts } from '@/core/components/Dashboard/DashboardCharts';

const DashboardWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-row-gap: 2vh;
`;

export const Dashboard = () => (
  <DashboardWrapper>
    <DashboardCards />
    <DashboardCharts />
  </DashboardWrapper>
);
