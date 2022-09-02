import { Strings } from '@/config/Strings';
import DashboardCard from '@/core/components/Dashboard/DashboardCards/DashboardCard/DashboardCard';
import CategoryIcon from '@mui/icons-material/Category';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { useDashboard } from './hooks/useDashboard';
import { DashboardCardsWrapper } from './Styled';

const DashboardCards = () => {
  const { dashboardCardsData, dashboardCardsColor } = useDashboard();

  return (
    <DashboardCardsWrapper>
      <DashboardCard
        amount={dashboardCardsData.itemsCount}
        title={Strings.DashboardCardTitleItems}
        icon={<ProductionQuantityLimitsIcon fontSize="large" />}
        isIncrease={dashboardCardsData.isIncrease}
        color={dashboardCardsColor.itemsColor}
        percentage={dashboardCardsData.itemsCountPercentage}
      />
      <DashboardCard
        amount={dashboardCardsData.totalInventoryCount}
        title={Strings.DashboardCardTitleTotalInventory}
        icon={<CategoryIcon fontSize="large" />}
        isIncrease={false}
        color={dashboardCardsColor.totalInventoryColor}
        percentage={dashboardCardsData.totalInventoryPercentage}
      />
      <DashboardCard
        amount={dashboardCardsData.updatesWeeklyCount}
        title={Strings.DashboardCardTitleWeeklyUpdates}
        icon={<SyncAltIcon fontSize="large" />}
        isIncrease={true}
        color={dashboardCardsColor.weeklyUpdateColor}
        percentage={dashboardCardsData.updatesWeeklyPercentage}
      />
      <DashboardCard
        amount={dashboardCardsData.warningCount}
        title={Strings.DashboardCardTitleWarnings}
        icon={<WarningAmberIcon fontSize="large" />}
        isIncrease={false}
        color={dashboardCardsColor.warningsColor}
        percentage={dashboardCardsData.warningCountPercentage}
      />
      <DashboardCard
        amount={dashboardCardsData.warningCount}
        title="מוצרים חשמליים"
        icon={<WarningAmberIcon fontSize="large" />}
        isIncrease={false}
        color={dashboardCardsColor.warningsColor}
        percentage={dashboardCardsData.warningCountPercentage}
      />
      <DashboardCard
        amount={dashboardCardsData.warningCount}
        title="כמות תקלות במוצרים"
        icon={<WarningAmberIcon fontSize="large" />}
        isIncrease={false}
        color={dashboardCardsColor.warningsColor}
        percentage={dashboardCardsData.warningCountPercentage}
      />
    </DashboardCardsWrapper>
  );
};

export default DashboardCards;
