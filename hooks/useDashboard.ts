import { dashboardCardsColor } from 'mock';
import { DashboardModel } from 'models';

export const useDashboard = () => {
  const dashboardCardsData: DashboardModel = {
    itemsCount: 140,
    totalProductCount: 650,
    updatesWeeklyCount: 50,
    warningCount: 10,
    documentsCount: 10,
    isIncrease: true,
    itemsCountPercentage: 0.75,
    totalProductCountPercentage: 0.5,
    updatesWeeklyCountPercentage: 0.25,
    warningCountPercentage: 0.8,
  };

  return { dashboardCardsData, dashboardCardsColor };
};
