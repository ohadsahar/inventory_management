/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

export const useDock = () => {
  const [currentLayout, setCurrentLayout] = useState<string>('1');
  const dockItems = [
    {
      label: 'App Store',
      command: () => {
        setCurrentLayout('1');
      },
      icon: () => (
        <img
          alt="App Store"
          src="https://cdn.iconscout.com/icon/premium/png-256-thumb/web-dashboard-2276455-1897230.png"
          width="100%"
        />
      ),
    },
    {
      label: 'Finder',
      command: () => {
        setCurrentLayout('2');
      },
      icon: () => (
        <img
          alt="Finder"
          src="https://cdn.iconscout.com/icon/premium/png-256-thumb/food-1728333-1469700.png"
          width="100%"
        />
      ),
    },
  ];

  return {
    dockItems,
    currentLayout,
    setCurrentLayout,
  };
};
