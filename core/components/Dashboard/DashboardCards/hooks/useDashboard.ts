import { dashboardCardsColor } from 'mock';
import { DashboardModel } from 'models/dashboard.model';

export const useDashboard = () => {
  const dashboardCardsData: DashboardModel = {
    itemsCount: 140,
    totalProductCount: 650,
    updatesWeeklyCount: 50,
    warningCount: 10,
    electricalItemsCount: 4,
    documentsCount: 10,
    isIncrease: true,
    itemsCountPercentage: 0.75,
    totalProductCountPercentage: 0.5,
    updatesWeeklyCountPercentage: 0.25,
    warningCountPercentage: 0.8,
  };

  return { dashboardCardsData, dashboardCardsColor };
};
