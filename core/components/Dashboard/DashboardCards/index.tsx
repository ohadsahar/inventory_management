import ArticleIcon from '@mui/icons-material/Article';
import CategoryIcon from '@mui/icons-material/Category';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import styled from 'styled-components';
import { Strings } from '@/config/Strings';
import { DashboardCard } from '@/core/components/Dashboard/DashboardCards/DashboardCard';
import { useDashboard } from '@/hooks/useDashboard';

const DashboardCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-row-gap: 2vh;
  grid-column-gap: 1vw;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: auto;
  @media (max-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
export const DashboardCards = () => {
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
        amount={dashboardCardsData.totalProductCount}
        title={Strings.DashboardCardTitleTotalProduct}
        icon={<CategoryIcon fontSize="large" />}
        isIncrease={false}
        color={dashboardCardsColor.totalProductColor}
        percentage={dashboardCardsData.totalProductCountPercentage}
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
