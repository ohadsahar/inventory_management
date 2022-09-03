import DashboardCards from '@/core/components/Dashboard/DashboardCards/DashboardCards';
import DashboardCharts from '@/core/components/Dashboard/DashboardCharts/DashboardCharts';
import { DashboardWrapper } from './Styled';

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <DashboardCards />
      <DashboardCharts />
    </DashboardWrapper>
  );
};

export default Dashboard;
