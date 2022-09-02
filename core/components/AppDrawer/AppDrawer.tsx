import HomeIcon from '@mui/icons-material/Home';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import AppListItem from 'redux/AppListItem/AppListItem';
import Layout from '@/core/components/Layout/Layout';
import AppNavbar from '@/core/components/Navbar/AppNavbar';
import { DrawerBox, DrawerTitle, DrawerWrapper } from './Styled';
import { useDrawer } from './hooks/useDrawer';

interface DrawerItemProps {
  id: string;
  text: string;
}

const AppDrawer = () => {
  const { accountName, currentLayout, drawerItems, drawerStyle, setCurrentLayout } = useDrawer();
  return (
    <DrawerBox>
      <CssBaseline />
      <Drawer sx={drawerStyle} variant="permanent" anchor="right">
        <Toolbar style={{ backgroundColor: 'white' }}>
          <DrawerTitle>{accountName}</DrawerTitle>
        </Toolbar>
        <Divider />
        <List>
          {drawerItems.map((item: DrawerItemProps, index: number) => (
            <AppListItem
              key={index}
              id={item.id}
              text={item.text}
              currentLayout={currentLayout}
              setCurrentLayout={setCurrentLayout}
              labelIcon={<HomeIcon />}
            />
          ))}
        </List>
      </Drawer>
      <DrawerWrapper>
        <AppNavbar />
        <Layout currentLayout={currentLayout} />
      </DrawerWrapper>
    </DrawerBox>
  );
};

export default AppDrawer;
