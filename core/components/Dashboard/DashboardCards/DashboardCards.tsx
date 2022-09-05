import { Strings } from '@/config/Strings';
import DashboardCard from '@/core/components/Dashboard/DashboardCards/DashboardCard/DashboardCard';
import ArticleIcon from '@mui/icons-material/Article';
import CategoryIcon from '@mui/icons-material/Category';
import ComputerIcon from '@mui/icons-material/Computer';
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
        percentage={dashboardCardsData.totalInventoryCountPercentage}
      />
      <DashboardCard
        amount={dashboardCardsData.updatesWeeklyCount}
        title={Strings.DashboardCardTitleWeeklyUpdates}
        icon={<SyncAltIcon fontSize="large" />}
        isIncrease={true}
        color={dashboardCardsColor.weeklyUpdateColor}
        percentage={dashboardCardsData.updatesWeeklyCountPercentage}
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
        amount={dashboardCardsData.documentsCount}
        title={Strings.DashboardCardDocuments}
        icon={<ArticleIcon fontSize="large" />}
        isIncrease={false}
        color={dashboardCardsColor.documentColor}
        percentage={dashboardCardsData.warningCountPercentage}
      />
    </DashboardCardsWrapper>
  );
};

export default DashboardCards;
