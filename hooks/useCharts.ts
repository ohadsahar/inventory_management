import { useState } from 'react';
import { dashboardCardsColor, dynamicMockDashboard, months } from '@/config/Constants';
import { Strings } from '@/config/Strings';
import { DashboardModel } from 'models/dashboard.model';

export const useCharts = () => {
  const dashboardCardsData: DashboardModel = dynamicMockDashboard;
  const yearlyProducts = [7, 52, 24, 74, 23, 21, 32];
  const yearlyWarnings = [200, 84, 24, 75, 37, 65, 34];

  const [chartData] = useState({
    labels: months,
    datasets: [
      {
        type: 'bar',
        label: Strings.ChartALabel,
        backgroundColor: '#66BB6A',
        data: yearlyWarnings,
        borderColor: 'white',
        borderWidth: 2,
      },
      {
        type: 'bar',
        label: Strings.ChartBLabel,
        backgroundColor: '#FFA726',
        data: yearlyProducts,
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
    labels: [
      Strings.DashboardCardTitleItems,
      Strings.DashboardCardTitleTotalProduct,
      Strings.DashboardCardTitleWeeklyUpdates,
    ],
    datasets: [
      {
        data: [
          dashboardCardsData.itemsCount,
          dashboardCardsData.totalProductCount,
          dashboardCardsData.updatesWeeklyCount,
        ],
        backgroundColor: [
          dashboardCardsColor.itemsColor,
          dashboardCardsColor.totalProductColor,
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
