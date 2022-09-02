import { useMemo, useState } from 'react';

export const useCharts = () => {
  const yearlyInventory = [7, 52, 24, 74, 23, 21, 32];
  const yearlyWarnings = [200, 84, 24, 75, 37, 65, 34];
  const months = useMemo(() => {
    return ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'];
  }, []);
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
  return { chartData, lightOptions };
};
