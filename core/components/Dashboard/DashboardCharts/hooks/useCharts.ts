import { dashboardCardsColor, dynamicMockDashboard, months } from '@/config/Constants';
import { Strings } from '@/config/Strings';
import { DashboardModel } from 'models/dashboard.model';
import { useState } from 'react';

export const useCharts = () => {
  const dashboardCardsData: DashboardModel = dynamicMockDashboard;
  const yearlyInventory = [7, 52, 24, 74, 23, 21, 32];
  const yearlyWarnings = [200, 84, 24, 75, 37, 65, 34];

  const [chartData] = useState({
    labels: months,
    datasets: [
      {
        type: 'bar',
        label: 'מלאי תקין',
        backgroundColor: '#66BB6A',
        data: yearlyWarnings,
        borderColor: 'white',
        borderWidth: 2,
      },
      {
        type: 'bar',
        label: 'אזהרות',
        backgroundColor: '#FFA726',
        data: yearlyInventory,
      },
    ],
  });

  const [lightOptions] = useState({
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: '#495057',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#495057',
        },
        grid: {
          color: '#ebedef',
        },
      },
      y: {
        ticks: {
          color: '#495057',
        },
        grid: {
          color: '#ebedef',
        },
      },
    },
  });

  const [pieChartData] = useState({
    labels: [Strings.DashboardCardTitleItems, Strings.DashboardCardTitleTotalInventory, Strings.DashboardCardTitleWeeklyUpdates],
    datasets: [
      {
        data: [dashboardCardsData.itemsCount, dashboardCardsData.totalInventoryCount, dashboardCardsData.updatesWeeklyCount],
        backgroundColor: [
          dashboardCardsColor.itemsColor,
          dashboardCardsColor.totalInventoryColor,
          dashboardCardsColor.weeklyUpdateColor,
        ],
        hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D'],
      },
    ],
  });

  const [pieLightOptions] = useState({
    plugins: {
      legend: {
        labels: {
          color: '#495057',
        },
      },
    },
  });

  return { chartData, lightOptions, pieChartData, pieLightOptions };
};
