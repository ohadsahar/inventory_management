import SyncAltIcon from '@mui/icons-material/SyncAlt';
import CategoryIcon from '@mui/icons-material/Category';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import DashboardCard from './DashboardCard/DashboardCard';
import { DashboardWrapper } from './Styled';
import { Strings } from '@/config/Strings';
import { useDashboard } from './hooks/useDashboard';

const Dashboard = () => {
  const { dashboardData, dashboardCardsColor } = useDashboard();
  return (
    <DashboardWrapper>
      <DashboardCard
        amount={dashboardData.itemsCount}
        title={Strings.DashboardCardTitleItems}
        icon={<ProductionQuantityLimitsIcon fontSize="large" />}
        isIncrease={dashboardData.isIncrease}
        color={dashboardCardsColor.itemsColor}
        percentage={dashboardData.itemsCountPercentage}
      />
      <DashboardCard
        amount={dashboardData.totalInventoryCount}
        title={Strings.DashboardCardTitleTotalInventory}
        icon={<CategoryIcon fontSize="large" />}
        isIncrease={false}
        color={dashboardCardsColor.totalInventoryColor}
        percentage={dashboardData.totalInventoryPercentage}
      />
      <DashboardCard
        amount={dashboardData.updatesWeeklyCount}
        title={Strings.DashboardCardTitleWeeklyUpdates}
        icon={<SyncAltIcon fontSize="large" />}
        isIncrease={true}
        color={dashboardCardsColor.weeklyUpdateColor}
        percentage={dashboardData.updatesWeeklyPercentage}
      />
      <DashboardCard
        amount={dashboardData.warningCount}
        title={Strings.DashboardCardTitleWarnings}
        icon={<WarningAmberIcon fontSize="large" />}
        isIncrease={false}
        color={dashboardCardsColor.warningsColor}
        percentage={dashboardData.warningCountPercentage}
      />
    </DashboardWrapper>
  );
};

export default Dashboard;
