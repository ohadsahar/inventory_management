import { DashboardModel } from 'models/dashboard.model';
import { useMemo } from 'react';

export const useDashboard = () => {
  const dashboardCardsColor = useMemo(() => {
    return {
      itemsColor: '#a4dfcd',
      totalInventoryColor: '#623cea',
      weeklyUpdateColor: '#a4dbfe',
      warningsColor: '#ff9f0b',
      electricalItemColor: '#FFA987',
      documentColor: '#004E89',
    };
  }, []);
  const dashboardCardsData: DashboardModel = {
    itemsCount: 10,
    totalInventoryCount: 132,
    updatesWeeklyCount: 50,
    warningCount: 10,
    electricalItemsCount: 4,
    documentsCount: 10,
    isIncrease: true,
    itemsCountPercentage: 0.75,
    totalInventoryCountPercentage: 0.5,
    updatesWeeklyCountPercentage: 0.25,
    warningCountPercentage: 0.8,
  };

  return { dashboardCardsData, dashboardCardsColor };
};
