import { DashboardModel } from 'models/dashboard.model';
import { useMemo } from 'react';

export const useDashboard = () => {
  const dashboardCardsColor = useMemo(() => {
    return {
      itemsColor: '#a4dfcd',
      totalInventoryColor: '#623cea',
      weeklyUpdateColor: '#a4dbfe',
      warningsColor: '#ff9f0b',
    };
  }, []);
  const dashboardData: DashboardModel = {
    itemsCount: 10,
    totalInventoryCount: 132,
    updatesWeeklyCount: 50,
    warningCount: 10,
    isIncrease: true,
    itemsCountPercentage: 0.75,
    totalInventoryPercentage: 0.5,
    updatesWeeklyPercentage: 0.25,
    warningCountPercentage: 0.8,
  };

  return { dashboardData, dashboardCardsColor };
};
