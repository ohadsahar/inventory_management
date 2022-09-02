import { Strings } from '@/config/Strings';
import { useMemo, useState } from 'react';

export const useDrawer = () => {
  const accountName = 'O & N ניהול מלאי';
  const drawerWidth = 270;
  const [currentLayout, setCurrentLayout] = useState<string>('1');
  const drawerStyle = useMemo(() => {
    return {
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
        backgroundColor: '#0f1b3e',
        color: 'white',
        border: 'none',
      },
    };
  }, [drawerWidth]);
  const drawerItems = useMemo(() => {
    return [
      { id: '1', text: Strings.DrawerItemHome },
      { id: '2', text: Strings.DrawerItemProducts },
    ];
  }, []);

  return { accountName, currentLayout, drawerItems, drawerWidth, drawerStyle, setCurrentLayout };
};
