import DashboardCards from './DashboardCards/DashboardCards';
import DashboardCharts from './DashboardCharts/DashboardCharts';
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
